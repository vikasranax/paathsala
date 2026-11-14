import type { TopicKey } from './topics';

export type OfficialResource = { title: string; url: string; note: string };

const pib: OfficialResource = { title: 'Press Information Bureau (PIB)', url: 'https://pib.gov.in', note: 'Official press releases on schemes, policies and summits.' };
const mea: OfficialResource = { title: 'Ministry of External Affairs', url: 'https://www.mea.gov.in', note: 'Foreign policy statements, treaties and bilateral briefs.' };
const niti: OfficialResource = { title: 'NITI Aayog', url: 'https://www.niti.gov.in', note: 'Policy reports, indices and development data.' };
const indiaBudget: OfficialResource = { title: 'Union Budget and Economic Survey', url: 'https://www.indiabudget.gov.in', note: 'Budget documents and the annual Economic Survey.' };
const rbi: OfficialResource = { title: 'Reserve Bank of India', url: 'https://www.rbi.org.in', note: 'Monetary policy statements and banking publications.' };
const mospi: OfficialResource = { title: 'MoSPI (Statistics)', url: 'https://mospi.gov.in', note: 'National income, inflation and survey data.' };
const indiaCode: OfficialResource = { title: 'India Code', url: 'https://www.indiacode.nic.in', note: 'The Constitution and central laws, free to read.' };
const sansad: OfficialResource = { title: 'Sansad (Parliament of India)', url: 'https://sansad.in', note: 'Bills, debates and committee reports.' };
const eci: OfficialResource = { title: 'Election Commission of India', url: 'https://www.eci.gov.in', note: 'Election process, rules and results.' };
const cag: OfficialResource = { title: 'Comptroller and Auditor General', url: 'https://cag.gov.in', note: 'Audit reports on public spending.' };
const darpg: OfficialResource = { title: 'Administrative Reforms and Public Grievances', url: 'https://darpg.gov.in', note: 'Governance reforms, e-governance and ARC reports.' };
const socialJustice: OfficialResource = { title: 'Ministry of Social Justice', url: 'https://socialjustice.gov.in', note: 'Welfare schemes for vulnerable sections.' };
const indianCulture: OfficialResource = { title: 'Indian Culture portal', url: 'https://indianculture.gov.in', note: 'Ministry of Culture archive of heritage and art.' };
const asi: OfficialResource = { title: 'Archaeological Survey of India', url: 'https://asi.nic.in', note: 'Monuments and excavations.' };
const egyankosh: OfficialResource = { title: 'eGyanKosh (IGNOU)', url: 'https://egyankosh.ac.in', note: 'Free university-level study material.' };
const swayam: OfficialResource = { title: 'SWAYAM', url: 'https://swayam.gov.in', note: 'Free online courses from Indian institutions.' };
// NCERT terms ask for written permission before linking. Keep that permission on file or remove this line.
const ncert: OfficialResource = { title: 'NCERT textbooks', url: 'https://ncert.nic.in', note: 'School textbooks, free to read on the official site.' };
const census: OfficialResource = { title: 'Census of India', url: 'https://censusindia.gov.in', note: 'Population and social data.' };
const surveyOfIndia: OfficialResource = { title: 'Survey of India', url: 'https://surveyofindia.gov.in', note: 'Official maps of India.' };
const imd: OfficialResource = { title: 'India Meteorological Department', url: 'https://mausam.imd.gov.in', note: 'Weather, monsoon and climate data.' };
const gsi: OfficialResource = { title: 'Geological Survey of India', url: 'https://www.gsi.gov.in', note: 'Minerals and geology.' };
const moef: OfficialResource = { title: 'Ministry of Environment, Forest and Climate Change', url: 'https://moef.gov.in', note: 'Environmental laws, reports and notifications.' };
const isro: OfficialResource = { title: 'ISRO', url: 'https://www.isro.gov.in', note: 'Missions and space programme.' };
const drdo: OfficialResource = { title: 'DRDO', url: 'https://www.drdo.gov.in', note: 'Defence technology and systems.' };
const dst: OfficialResource = { title: 'Department of Science and Technology', url: 'https://dst.gov.in', note: 'Science policy and programmes.' };
const mha: OfficialResource = { title: 'Ministry of Home Affairs', url: 'https://www.mha.gov.in', note: 'Internal security and border management.' };
const ndma: OfficialResource = { title: 'National Disaster Management Authority', url: 'https://ndma.gov.in', note: 'Disaster management guidelines.' };
const certIn: OfficialResource = { title: 'CERT-In', url: 'https://www.cert-in.org.in', note: 'National cyber security agency.' };

const byPrefix: Record<string, OfficialResource[]> = {
  ca: [pib, mea, niti],
  hist: [egyankosh, indianCulture, asi, ncert],
  cult: [indianCulture, asi, egyankosh],
  soc: [census, egyankosh, socialJustice],
  geo: [surveyOfIndia, imd, gsi, census, ncert],
  polity: [indiaCode, sansad, eci, cag, ncert],
  gov: [darpg, pib, socialJustice],
  ir: [mea, pib],
  eco: [indiaBudget, rbi, niti, mospi, ncert],
  env: [moef, pib, ncert],
  sci: [isro, drdo, dst, ncert],
  sec: [mha, ndma, certIn],
  eth: [darpg, egyankosh],
  csat: [ncert],
  quant: [ncert, swayam],
};

export function resourcesForTopics(keys: readonly TopicKey[]): OfficialResource[] {
  const seen = new Set<string>();
  const out: OfficialResource[] = [];
  for (const key of keys) {
    const prefix = key.split('.')[0];
    for (const resource of byPrefix[prefix] ?? []) {
      if (seen.has(resource.url)) continue;
      seen.add(resource.url);
      out.push(resource);
    }
  }
  return out;
}

// Exam-level official sources shown on each exam dashboard.
export const examResources: Record<string, OfficialResource[]> = {
  'upsc-cse': [
    {
      title: 'UPSC official website',
      url: 'https://upsc.gov.in',
      note: 'Notifications, syllabus and previous question papers. Open Examinations, then Previous Question Papers.',
    },
  ],
};
