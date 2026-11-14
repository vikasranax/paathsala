import type { TopicKey } from './topics';

export type GalleryCategory = 'indus' | 'ancient' | 'temples' | 'islamic' | 'sculpture' | 'world';

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'indus', label: 'Indus Valley' },
  { id: 'ancient', label: 'Mauryan and Buddhist' },
  { id: 'temples', label: 'Temples' },
  { id: 'islamic', label: 'Indo-Islamic' },
  { id: 'sculpture', label: 'Sculpture and bronzes' },
  { id: 'world', label: 'World wonders' },
];

// An image may only be hosted with its credit, licence and source recorded (a test enforces this).
export type GalleryImage = { src: string; credit: string; licence: string; sourceUrl: string };

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  period: string;
  place: string;
  summary: string;
  facts: { label: string; value: string }[];
  think: { prompt: string; answer: string }[];
  examAngle: string;
  quiz: { question: string; options: string[]; correctIndex: number };
  topics: TopicKey[];
  image?: GalleryImage;
  viewUrl?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'dancing-girl',
    title: 'Dancing Girl, Mohenjo-daro',
    category: 'indus',
    period: 'c. 2500 BCE',
    place: 'Mohenjo-daro, Sindh (Pakistan)',
    summary: 'A small bronze statue of a young woman standing with one hand on her hip. It is one of the best-known pieces of Indus Valley art and shows that Harappan metalworkers could cast fine figures.',
    facts: [
      { label: 'Material', value: 'Bronze (copper alloy)' },
      { label: 'Technique', value: 'Lost-wax casting' },
      { label: 'Height', value: 'About 10.5 cm' },
      { label: 'Now in', value: 'National Museum, New Delhi' },
    ],
    think: [
      { prompt: 'How is a lost-wax casting made?', answer: 'A wax model is covered in clay. The clay is baked so the wax melts and runs out, and molten metal is poured into the hollow mould. The mould is broken to free the figure.' },
      { prompt: 'What does this statue tell us about the Harappans?', answer: 'They could mix and cast metal, and their craftspeople made detailed figures, not just tools and seals.' },
    ],
    examAngle: 'Asked as evidence of Harappan metallurgy and the lost-wax technique. Pair it with the Priest-King when you revise Indus art.',
    quiz: { question: 'The Dancing Girl of Mohenjo-daro was made by which technique?', options: ['Stone carving', 'Terracotta moulding', 'Lost-wax casting', 'Cold hammering'], correctIndex: 2 },
    topics: ['hist.prehistory-indus', 'cult.art-architecture'],
  },
  {
    id: 'harappan-terracotta',
    title: 'Harappan terracotta figurines and toys',
    category: 'indus',
    period: 'c. 2600-1900 BCE',
    place: 'Mohenjo-daro, Harappa and other Indus sites',
    summary: 'Baked-clay figures are the most common Harappan sculpture. They include women with elaborate headdresses, animals, and toys such as small carts. Some animal toys have heads that move, which hints at children at play.',
    facts: [
      { label: 'Material', value: 'Terracotta (baked clay)' },
      { label: 'Common subjects', value: 'Women with fan-shaped headdresses, animals, toy carts, whistles' },
      { label: 'Where found', value: 'Mohenjo-daro, Harappa and other Indus sites' },
      { label: 'Caution', value: 'The label "mother goddess" is an interpretation, not a proven fact' },
    ],
    think: [
      { prompt: 'Why do historians use "mother goddess" with caution?', answer: 'No written record explains these figures, and the Indus script is undeciphered. Calling them goddesses is a guess based on their form.' },
    ],
    examAngle: 'Know that terracotta was the most common medium for Harappan figures, alongside a few bronze and stone statues.',
    quiz: { question: 'Which material was most commonly used for Harappan figurines?', options: ['Marble', 'Iron', 'Terracotta', 'Ivory'], correctIndex: 2 },
    topics: ['hist.prehistory-indus', 'cult.art-architecture'],
  },
  {
    id: 'priest-king',
    title: 'Priest-King, Mohenjo-daro',
    category: 'indus',
    period: 'c. 2500 BCE',
    place: 'Mohenjo-daro, Sindh (Pakistan)',
    summary: 'A small stone bust of a bearded man in a shawl patterned with trefoils, with a band around his head. The name Priest-King is a modern guess; nobody knows whether he was a priest, a ruler or neither.',
    facts: [
      { label: 'Material', value: 'Steatite (soapstone)' },
      { label: 'Height', value: 'About 17.5 cm' },
      { label: 'Notable detail', value: 'Trefoil-patterned shawl over the left shoulder' },
      { label: 'Now in', value: 'National Museum of Pakistan, Karachi' },
    ],
    think: [
      { prompt: 'Why is the name Priest-King misleading?', answer: 'The Indus script is undeciphered, so there is no text to tell us his role. The label comes from early excavators comparing him with rulers and priests elsewhere.' },
    ],
    examAngle: 'Often paired with the Dancing Girl in questions on Harappan sculpture.',
    quiz: { question: 'Which stone was used for the Priest-King bust?', options: ['Sandstone', 'Steatite', 'Marble', 'Basalt'], correctIndex: 1 },
    topics: ['hist.prehistory-indus', 'cult.art-architecture'],
  },
  {
    id: 'great-bath',
    title: 'The Great Bath, Mohenjo-daro',
    category: 'indus',
    period: 'c. 2500 BCE',
    place: 'Mohenjo-daro, Sindh (Pakistan)',
    summary: 'A large, watertight brick pool on the raised citadel. It is the best-known public structure of the Indus cities and was probably used for ritual bathing.',
    facts: [
      { label: 'Size', value: 'About 12 m long, 7 m wide and 2.4 m deep' },
      { label: 'Built with', value: 'Baked bricks set in gypsum mortar' },
      { label: 'Waterproofing', value: 'A layer of bitumen (natural tar)' },
      { label: 'Setting', value: 'On the citadel, with rooms around it' },
    ],
    think: [
      { prompt: 'What does the Great Bath suggest about Indus cities?', answer: 'Careful planning and engineering: waterproofing, drainage and public works. Its exact purpose is not known, but ritual bathing is the usual explanation.' },
    ],
    examAngle: 'A staple of Indus Valley questions on town planning. Remember baked brick and bitumen.',
    quiz: { question: 'What was used to make the Great Bath watertight?', options: ['Cement', 'Bitumen', 'Teak planks', 'Marble slabs'], correctIndex: 1 },
    topics: ['hist.prehistory-indus', 'cult.art-architecture'],
  },
  {
    id: 'lion-capital',
    title: 'Lion Capital of Ashoka, Sarnath',
    category: 'ancient',
    period: 'c. 3rd century BCE (Mauryan)',
    place: 'Sarnath, Uttar Pradesh',
    summary: "Four lions stand back to back on a round abacus carved with a wheel and four animals. The capital once topped an Ashokan pillar and is the model for India's national emblem.",
    facts: [
      { label: 'Material', value: 'Polished Chunar sandstone' },
      { label: 'Abacus carvings', value: 'Dharmachakra with an elephant, bull, horse and lion' },
      { label: 'National emblem', value: 'Adopted on 26 January 1950' },
      { label: 'Motto', value: 'Satyameva Jayate, from the Mundaka Upanishad' },
      { label: 'Now in', value: 'Sarnath Museum' },
    ],
    think: [
      { prompt: 'Why do only three lions show on the emblem?', answer: 'The capital has four lions back to back, but only three can be seen from the front. The same is true of the animals on the abacus.' },
      { prompt: 'What is the Mauryan polish?', answer: 'A very smooth, shiny finish on stone, a hallmark of Mauryan pillars and the Barabar caves.' },
    ],
    examAngle: 'Know the capital, its location, its stone and the link to the national emblem.',
    quiz: { question: 'The national emblem of India is adapted from the lion capital at:', options: ['Sanchi', 'Sarnath', 'Rampurva', 'Vaishali'], correctIndex: 1 },
    topics: ['hist.mauryan-postmauryan', 'cult.art-architecture'],
  },
  {
    id: 'sanchi-stupa',
    title: 'Great Stupa, Sanchi',
    category: 'ancient',
    period: 'Begun in the 3rd century BCE; gateways about 1st century BCE',
    place: 'Sanchi, Madhya Pradesh',
    summary: "A hemispherical dome of brick and stone surrounded by a railing, with four carved gateways. The carvings tell Jataka tales and scenes from the Buddha's life, using symbols such as the wheel, the tree and footprints instead of showing the Buddha himself.",
    facts: [
      { label: 'Origin', value: 'Associated with Ashoka, with later additions' },
      { label: 'Gateways', value: 'Four toranas, added under Satavahana patronage' },
      { label: 'Carvings show', value: "Jataka stories and scenes from the Buddha's life" },
      { label: 'UNESCO', value: 'World Heritage Site since 1989' },
    ],
    think: [
      { prompt: 'Why is the Buddha shown as a tree or a wheel?', answer: 'Early Buddhist art was aniconic: symbols stood for the Buddha. Human images came later, around the Kushan period at Gandhara and Mathura.' },
    ],
    examAngle: 'Common questions: the stupa of Ashoka, the toranas, and the shift from symbols to images.',
    quiz: { question: 'The gateways of the Great Stupa at Sanchi are called:', options: ['Gopurams', 'Toranas', 'Vimanas', 'Mandapas'], correctIndex: 1 },
    topics: ['hist.mauryan-postmauryan', 'hist.buddhism-jainism', 'cult.art-architecture'],
  },
  {
    id: 'ajanta-caves',
    title: 'Ajanta Caves',
    category: 'ancient',
    period: 'c. 2nd century BCE to c. 5th-6th century CE',
    place: 'Near Aurangabad, Maharashtra',
    summary: 'Thirty rock-cut Buddhist caves in a horseshoe-shaped gorge. They hold monasteries, prayer halls and some of the oldest surviving large Indian wall paintings, mostly on Jataka stories.',
    facts: [
      { label: 'Number of caves', value: '30' },
      { label: 'Types', value: 'Chaityas (prayer halls) and viharas (monasteries)' },
      { label: 'Paintings', value: 'Tempera on dry plaster, with Jataka themes' },
      { label: 'UNESCO', value: 'World Heritage Site since 1983' },
    ],
    think: [
      { prompt: 'What is the difference between a chaitya and a vihara?', answer: 'A chaitya is a prayer hall with a stupa at one end. A vihara is a monastery, with cells around a central hall where monks lived.' },
    ],
    examAngle: 'Know the site, the Buddhist themes and the famous Padmapani Bodhisattva painting.',
    quiz: { question: 'The Ajanta caves are best known for:', options: ['Jain marble temples', 'Hindu monolithic temples', 'Buddhist cave architecture and wall paintings', 'Indo-Islamic tombs'], correctIndex: 2 },
    topics: ['hist.buddhism-jainism', 'hist.gupta-regional', 'cult.art-architecture'],
  },
  {
    id: 'kailasa-temple',
    title: 'Kailasa Temple, Ellora',
    category: 'temples',
    period: '8th century CE (Rashtrakuta)',
    place: 'Ellora, Maharashtra',
    summary: 'A whole temple carved from one hillside, cut from the top down. It is dedicated to Shiva and is one of the largest rock-cut structures in the world.',
    facts: [
      { label: 'Patron', value: 'Rashtrakuta king Krishna I' },
      { label: 'Method', value: 'Carved top-down from a single rock' },
      { label: 'Dedicated to', value: 'Shiva (Cave 16)' },
      { label: 'UNESCO', value: 'Part of the Ellora Caves, a World Heritage Site since 1983' },
    ],
    think: [
      { prompt: 'Why is carving top-down so hard?', answer: 'Stone cannot be added back, so a mistake cannot be fixed. The builders had to plan the whole temple before cutting.' },
    ],
    examAngle: 'Linked to Rashtrakuta art. It is a monolithic rock-cut temple, not a built one.',
    quiz: { question: 'The Kailasa temple at Ellora was built under the:', options: ['Chalukyas', 'Pallavas', 'Rashtrakutas', 'Cholas'], correctIndex: 2 },
    topics: ['hist.early-medieval-south', 'cult.art-architecture'],
  },
  {
    id: 'konark-sun-temple',
    title: 'Sun Temple, Konark',
    category: 'temples',
    period: '13th century CE',
    place: 'Konark, Odisha',
    summary: 'A temple shaped like the chariot of the Sun god, with twelve pairs of carved wheels pulled by seven horses. It is a masterpiece of the Kalinga style.',
    facts: [
      { label: 'Patron', value: 'Narasimhadeva I of the Eastern Ganga dynasty' },
      { label: 'Design', value: 'A stone chariot with 24 wheels and seven horses' },
      { label: 'Style', value: 'Nagara (Kalinga)' },
      { label: 'UNESCO', value: 'World Heritage Site since 1984' },
    ],
    think: [
      { prompt: 'What do the wheels and horses stand for?', answer: 'A popular reading takes the 24 wheels as the hours of the day and the seven horses as the days of the week. The wheels also work as sundials.' },
    ],
    examAngle: 'Know the dynasty, the Sun-chariot design and the Kalinga style.',
    quiz: { question: 'The Konark temple is dedicated to which deity?', options: ['Vishnu', 'Shiva', 'Durga', 'Surya'], correctIndex: 3 },
    topics: ['hist.early-medieval-south', 'cult.art-architecture'],
  },
  {
    id: 'brihadeeswara-temple',
    title: 'Brihadeeswara Temple, Thanjavur',
    category: 'temples',
    period: 'Completed c. 1010 CE (Chola)',
    place: 'Thanjavur, Tamil Nadu',
    summary: 'A granite temple to Shiva built by Rajaraja I, with a tall pyramidal tower (vimana) over the sanctum. It is the best-known example of Chola Dravida architecture.',
    facts: [
      { label: 'Patron', value: 'Rajaraja I' },
      { label: 'Style', value: 'Dravida, with a pyramidal vimana' },
      { label: 'Tower height', value: 'About 66 m' },
      { label: 'UNESCO', value: 'Part of the Great Living Chola Temples, inscribed 1987' },
    ],
    think: [
      { prompt: 'What is the difference between a vimana and a gopuram?', answer: 'The vimana is the tower over the sanctum. The gopuram is the tower over a gateway. In later temples such as Madurai, the gopurams grew taller than the vimana.' },
    ],
    examAngle: 'A favourite for questions on Chola art and the Dravida style.',
    quiz: { question: 'Who built the Brihadeeswara temple at Thanjavur?', options: ['Rajaraja I', 'Rajendra I', 'Vijayalaya', 'Kulottunga I'], correctIndex: 0 },
    topics: ['hist.early-medieval-south', 'cult.art-architecture'],
  },
  {
    id: 'qutub-minar',
    title: 'Qutub Minar, Delhi',
    category: 'islamic',
    period: 'Begun c. 1199-1200; completed in the early 13th century',
    place: 'Mehrauli, Delhi',
    summary: 'A tapering tower of red sandstone and marble, built to mark the start of Muslim rule in Delhi. Its bands of inscriptions and balconies make it an early landmark of Indo-Islamic architecture.',
    facts: [
      { label: 'Begun by', value: 'Qutbuddin Aibak' },
      { label: 'Completed by', value: 'Iltutmish' },
      { label: 'Height', value: 'About 72.5 m' },
      { label: 'UNESCO', value: 'World Heritage Site since 1993' },
    ],
    think: [
      { prompt: 'What makes it Indo-Islamic?', answer: 'It joins Islamic features, such as the minaret form and calligraphy, with local stone and carving by Indian craftsmen.' },
    ],
    examAngle: 'Know who began it, who completed it, and that it stands beside the Quwwat-ul-Islam mosque.',
    quiz: { question: 'Qutub Minar was begun by:', options: ['Iltutmish', 'Qutbuddin Aibak', 'Alauddin Khalji', 'Balban'], correctIndex: 1 },
    topics: ['hist.delhi-sultanate', 'cult.art-architecture'],
  },
  {
    id: 'taj-mahal',
    title: 'Taj Mahal, Agra',
    category: 'islamic',
    period: 'Built c. 1632-1653',
    place: 'Agra, Uttar Pradesh',
    summary: 'A white marble tomb built by Shah Jahan for his wife Mumtaz Mahal. It stands on a platform with four minarets in a charbagh garden and is decorated with pietra dura inlay and calligraphy.',
    facts: [
      { label: 'Patron', value: 'Shah Jahan' },
      { label: 'Material', value: 'White marble with inlaid semi-precious stones' },
      { label: 'Garden', value: 'Charbagh layout' },
      { label: 'UNESCO', value: 'World Heritage Site since 1983' },
    ],
    think: [
      { prompt: 'What is pietra dura?', answer: 'A technique of inlaying cut pieces of semi-precious stone into marble to form flowers and patterns.' },
    ],
    examAngle: "The high point of Mughal architecture. Compare it with the tomb of Humayun, its forerunner.",
    quiz: { question: 'The inlay of semi-precious stones in marble at the Taj Mahal is called:', options: ['Fresco', 'Tempera', 'Pietra dura', 'Repousse'], correctIndex: 2 },
    topics: ['hist.mughals', 'cult.art-architecture'],
  },
  {
    id: 'chola-nataraja',
    title: 'Chola bronze: Nataraja',
    category: 'sculpture',
    period: '10th-12th century CE',
    place: 'Tamil Nadu',
    summary: 'Shiva dancing inside a ring of flames, with one foot on a dwarf that stands for ignorance. Chola artists cast these figures in bronze by the lost-wax method, and the Nataraja became one of the best-known images in Indian art.',
    facts: [
      { label: 'Material', value: 'Bronze (copper alloy)' },
      { label: 'Technique', value: 'Lost-wax casting' },
      { label: 'Subject', value: 'Shiva as Lord of Dance (Nataraja)' },
      { label: 'Tradition today', value: 'Bronze casting continues at Swamimalai, Tamil Nadu' },
    ],
    think: [
      { prompt: 'Why are Chola bronzes important in art history?', answer: 'They mark the high point of South Indian metal sculpture: balanced poses, fine detail and a casting tradition that continues today.' },
    ],
    examAngle: 'Linked to the Cholas, the lost-wax method and temple processional images.',
    quiz: { question: 'Chola bronzes were cast using:', options: ['Sand casting', 'Cold forging', 'Stone inlay', 'Lost-wax casting'], correctIndex: 3 },
    topics: ['hist.early-medieval-south', 'cult.art-architecture'],
  },
  {
    id: 'mewar-female-torso',
    title: 'Female torso, Mewar (V&A, London)',
    category: 'sculpture',
    period: '9th century CE',
    place: 'Mewar, Rajasthan',
    summary: 'A headless and armless female figure carved from black chlorite, a dark, fine-grained stone that carves well. The body leans in a curve that resembles the tribhanga ("three bends") pose of Indian sculpture, and the carver shows rich jewellery: layered necklaces and a heavy girdle. Only the torso survives; the legs are broken above the knees.',
    facts: [
      { label: 'Material', value: 'Black chlorite' },
      { label: 'Origin', value: 'Mewar, Rajasthan, Western India' },
      { label: 'Condition', value: 'Headless and armless; legs lost above the knees' },
      { label: 'Collection', value: 'Victoria and Albert Museum, London (IS.45-1972)' },
    ],
    think: [
      { prompt: 'What does tribhanga mean?', answer: 'Three bends: the head, torso and hips tilt in different directions to make a gentle S-curve. It is common in Indian sculpture and dance.' },
      { prompt: 'Why do so many Indian sculptures survive only as fragments?', answer: 'Temples have been damaged over centuries by weather, neglect and conflict, and pieces were often removed or reused, so many figures reached museums as fragments.' },
    ],
    examAngle: 'Shows early medieval sculpture from western India. Use it to practise describing a sculpture: material, region, period, pose and ornament.',
    quiz: { question: 'In Indian art, tribhanga describes:', options: ['A three-headed deity', 'A pose with three bends of the body', 'A three-storey temple', 'A three-metal alloy'], correctIndex: 1 },
    topics: ['cult.art-architecture'],
    viewUrl: 'https://collections.vam.ac.uk/item/O63600/sculpture-sculpture-unknown',
  },
  {
    id: 'pala-female-torso',
    title: 'Female torso, Pala period (Cleveland)',
    category: 'sculpture',
    period: '11th century CE',
    place: 'Northeastern India (Pala dynasty)',
    summary: 'Another black chlorite torso, from eastern India under the Pala dynasty. A life-size figure like this was probably placed near a doorway or in an outer niche of a Buddhist temple. Compare it with the Mewar torso to see how region and period change the style.',
    facts: [
      { label: 'Material', value: 'Black chlorite' },
      { label: 'Size', value: 'About 89 x 44 x 19 cm' },
      { label: 'Dynasty', value: 'Pala (730-1197)' },
      { label: 'Collection', value: 'The Cleveland Museum of Art (open access, CC0)' },
    ],
    think: [
      { prompt: 'What did the Palas patronise?', answer: 'Buddhism, especially the monasteries of Nalanda, Vikramashila and Somapura, along with a style of black stone sculpture.' },
    ],
    examAngle: 'The Palas are asked about for Buddhist monasteries and their influence abroad.',
    quiz: { question: 'The Pala dynasty is best known for patronising:', options: ['Jainism', 'Buddhism', 'Zoroastrianism', 'Sikhism'], correctIndex: 1 },
    topics: ['hist.early-medieval-south', 'cult.art-architecture'],
    viewUrl: 'https://clevelandart.org/art/2011.146',
    // After saving the CC0 photo as public/gallery/pala-torso.jpg, add this line:
    // image: { src: '/gallery/pala-torso.jpg', credit: 'The Cleveland Museum of Art', licence: 'CC0 1.0 (open access)', sourceUrl: 'https://clevelandart.org/art/2011.146' },
  },
  {
    id: 'great-pyramid-giza',
    title: 'Great Pyramid of Giza',
    category: 'world',
    period: 'c. 2560 BCE',
    place: 'Giza, Egypt',
    summary: 'The oldest of the Seven Wonders of the Ancient World and the only one still standing. It was built as the tomb of the pharaoh Khufu from millions of stone blocks.',
    facts: [
      { label: 'Built for', value: 'Pharaoh Khufu' },
      { label: 'Original height', value: 'About 146 m' },
      { label: 'Culture', value: 'Ancient Egypt (Old Kingdom)' },
      { label: 'Distinction', value: 'The only surviving Wonder of the Ancient World' },
    ],
    think: [
      { prompt: 'Why was it built?', answer: 'As a royal tomb. The Egyptians believed the afterlife of the king needed a protected burial with goods for the journey.' },
    ],
    examAngle: 'Appears in world history and general awareness: the ancient Wonders versus the New Seven Wonders.',
    quiz: { question: 'The Great Pyramid of Giza was built for:', options: ['Ramesses II', 'Tutankhamun', 'Khufu', 'Cleopatra'], correctIndex: 2 },
    topics: ['hist.world-history'],
  },
  {
    id: 'petra',
    title: 'Petra',
    category: 'world',
    period: 'Peak c. 1st century BCE to 1st century CE',
    place: 'Southern Jordan',
    summary: 'A city carved into rose-red sandstone cliffs by the Nabataeans, who grew rich on the caravan trade in incense and spices. Its best-known monument, the Treasury (Al-Khazneh), is cut straight into the rock face.',
    facts: [
      { label: 'Built by', value: 'The Nabataeans' },
      { label: 'Material', value: 'Carved into sandstone cliffs' },
      { label: 'Wealth from', value: 'Caravan trade in incense and spices' },
      { label: 'UNESCO', value: 'World Heritage Site since 1985' },
    ],
    think: [
      { prompt: 'Why was Petra a good trade centre?', answer: 'It sat on caravan routes linking Arabia with the Mediterranean, and its hidden valley had water and was easy to defend.' },
    ],
    examAngle: 'One of the New Seven Wonders (2007), chosen in a public poll by a private foundation, not by UNESCO.',
    quiz: { question: 'Petra was built by the:', options: ['Nabataeans', 'Romans', 'Persians', 'Phoenicians'], correctIndex: 0 },
    topics: ['hist.world-history'],
  },
  {
    id: 'machu-picchu',
    title: 'Machu Picchu',
    category: 'world',
    period: 'Mid-15th century CE (Inca)',
    place: 'Cusco region, Peru',
    summary: 'An Inca mountain citadel high in the Andes, built from tightly fitted stone blocks without mortar. It was probably a royal estate and was abandoned around the time of the Spanish conquest.',
    facts: [
      { label: 'Built by', value: 'The Inca' },
      { label: 'Construction', value: 'Dry-stone walls fitted without mortar' },
      { label: 'Setting', value: 'A ridge high in the Andes' },
      { label: 'UNESCO', value: 'World Heritage Site since 1983' },
    ],
    think: [
      { prompt: 'How can walls fitted without mortar survive earthquakes?', answer: 'Precisely cut stones fit so tightly that they can shift slightly and settle back, so the walls flex instead of cracking.' },
    ],
    examAngle: 'A New Seven Wonders site. The Inca civilisation features in world history questions.',
    quiz: { question: 'Machu Picchu was built by which civilisation?', options: ['Aztec', 'Maya', 'Inca', 'Olmec'], correctIndex: 2 },
    topics: ['hist.world-history'],
  },
];
