 
// Downloads openly licensed photos from Wikimedia Commons for the Pictures page.
// Run from the project root:  node scripts/fetch-gallery-images.mjs
// It saves photos to public/gallery and writes src/data/galleryImages.generated.ts with each
// photo's credit, licence and source link. Review the printed list before you commit.
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const API = 'https://commons.wikimedia.org/w/api.php';
const USER_AGENT = 'PaathsalaGallery/1.0 (educational study site; https://paathsala.vercel.app)';
const ACCEPTED = [/^cc0/i, /^public domain/i, /^pd[ -]/i, /^cc[ -]by[ -](sa[ -])?\d/i];

// id -> search text. Add file: 'File:Exact name.jpg' to pin one photo you prefer.
export const targets = [
  { id: 'dancing-girl', query: 'Dancing Girl Mohenjo-daro bronze' },
  { id: 'harappan-terracotta', query: 'Harappan terracotta figurine' },
  { id: 'priest-king', query: 'Priest King Mohenjo-daro' },
  { id: 'great-bath', query: 'Great Bath Mohenjo-daro' },
  { id: 'lion-capital', query: 'Lion Capital of Ashoka Sarnath' },
  { id: 'sanchi-stupa', query: 'Great Stupa Sanchi' },
  { id: 'ajanta-caves', query: 'Ajanta Caves' },
  { id: 'kailasa-temple', query: 'Kailasa temple Ellora' },
  { id: 'konark-sun-temple', query: 'Konark Sun Temple' },
  { id: 'brihadeeswara-temple', query: 'Brihadisvara Temple Thanjavur' },
  { id: 'qutub-minar', query: 'Qutub Minar' },
  { id: 'taj-mahal', query: 'Taj Mahal' },
  { id: 'chola-nataraja', query: 'Chola bronze Nataraja' },
  { id: 'great-pyramid-giza', query: 'Great Pyramid of Giza' },
  { id: 'petra', query: 'Petra Jordan Treasury' },
  { id: 'machu-picchu', query: 'Machu Picchu' },
];

export function cleanText(html) {
  return String(html ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function isAccepted(licence) {
  const text = cleanText(licence);
  return ACCEPTED.some((re) => re.test(text));
}

// Pick the best usable page: a JPEG, wide enough, openly licensed, not marked non-free.
export function chooseBest(pages) {
  const usable = Object.values(pages ?? {})
    .filter((p) => p.imageinfo && p.imageinfo[0])
    .filter((p) => {
      const info = p.imageinfo[0];
      const meta = info.extmetadata ?? {};
      return (
        info.mime === 'image/jpeg' &&
        (info.width ?? 0) >= 800 &&
        isAccepted(meta.LicenseShortName?.value) &&
        String(meta.NonFree?.value ?? '').toLowerCase() !== 'true'
      );
    })
    .sort((a, b) => (a.index ?? 999) - (b.index ?? 999));
  return usable[0];
}

export function buildEntry(id, page) {
  const info = page.imageinfo[0];
  const meta = info.extmetadata ?? {};
  const artist = cleanText(meta.Artist?.value) || 'Wikimedia Commons contributor';
  return {
    id,
    title: page.title,
    imageUrl: info.thumburl || info.url,
    image: {
      src: `/gallery/${id}.jpg`,
      credit: `${artist.slice(0, 120)} / Wikimedia Commons`,
      licence: cleanText(meta.LicenseShortName?.value),
      sourceUrl: info.descriptionurl,
    },
  };
}

export function renderGenerated(entries) {
  const lines = entries.map(
    (e) =>
      `  '${e.id}': { src: ${JSON.stringify(e.image.src)}, credit: ${JSON.stringify(e.image.credit)}, licence: ${JSON.stringify(e.image.licence)}, sourceUrl: ${JSON.stringify(e.image.sourceUrl)} },`
  );
  return [
    "import type { GalleryImage } from './gallery';",
    '',
    '// Written by scripts/fetch-gallery-images.mjs. Do not edit by hand.',
    'export const generatedImages: Record<string, GalleryImage> = {',
    ...lines,
    '};',
    '',
  ].join('\n');
}

async function getJson(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`;
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`Commons API returned ${res.status}`);
  return res.json();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const INFO_PARAMS = {
  prop: 'imageinfo',
  iiprop: 'url|size|mime|extmetadata',
  iiurlwidth: '1200',
  iiextmetadatafilter: 'LicenseShortName|Artist|NonFree',
};

async function findPage(target) {
  if (target.file) {
    const data = await getJson({ action: 'query', titles: target.file, ...INFO_PARAMS });
    return chooseBest(Object.fromEntries((data.query?.pages ?? []).map((p, i) => [i, p])));
  }
  const ladder = [
    `${target.query} incategory:"Featured pictures on Wikimedia Commons" filemime:image/jpeg`,
    `${target.query} incategory:"Quality images" filemime:image/jpeg`,
    `${target.query} filemime:image/jpeg filew:>1199`,
  ];
  for (const search of ladder) {
    try {
      const data = await getJson({
        action: 'query',
        generator: 'search',
        gsrsearch: search,
        gsrnamespace: '6',
        gsrlimit: '10',
        ...INFO_PARAMS,
      });
      const pages = Object.fromEntries((data.query?.pages ?? []).map((p, i) => [i, p]));
      const best = chooseBest(pages);
      if (best) return best;
    } catch (error) {
      console.log(`  search failed: ${error.message}`);
    }
    await sleep(400);
  }
  return undefined;
}

async function main() {
  await mkdir('public/gallery', { recursive: true });
  const entries = [];
  for (const target of targets) {
    console.log(`\n${target.id}`);
    try {
      const page = await findPage(target);
      if (!page) {
        console.log('  no openly licensed photo found, left as a placeholder');
        continue;
      }
      const entry = buildEntry(target.id, page);
      const res = await fetch(entry.imageUrl, { headers: { 'User-Agent': USER_AGENT } });
      if (!res.ok) throw new Error(`download returned ${res.status}`);
      await writeFile(`public/gallery/${target.id}.jpg`, Buffer.from(await res.arrayBuffer()));
      entries.push(entry);
      console.log(`  ${entry.title}`);
      console.log(`  ${entry.image.licence} | ${entry.image.sourceUrl}`);
    } catch (error) {
      console.log(`  skipped: ${error.message}`);
    }
    await sleep(600);
  }
  await writeFile('src/data/galleryImages.generated.ts', renderGenerated(entries));
  console.log(`\nSaved ${entries.length} photos. Open each source link above and check the photo shows the right subject.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
