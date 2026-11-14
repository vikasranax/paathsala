import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const artCulturePack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'history',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // Architecture
    { id: 'ac-1', text: 'Which temple style is marked by a curved tower (shikhara) over the sanctum?', options: ['Dravida', 'Nagara', 'Vesara', 'Hoysala'], correctIndex: 1 },
    { id: 'ac-2', text: 'The Kailasa temple at Ellora was carved from a single rock under the:', options: ['Rashtrakutas', 'Pallavas', 'Chalukyas of Badami', 'Cholas'], correctIndex: 0 },
    { id: 'ac-3', text: 'The Shore Temple at Mahabalipuram was built by the:', options: ['Cholas', 'Pandyas', 'Cheras', 'Pallavas'], correctIndex: 3 },
    { id: 'ac-4', text: 'Which dynasty built the Khajuraho group of temples?', options: ['Paramaras', 'Solankis', 'Chandelas', 'Gahadavalas'], correctIndex: 2 },
    { id: 'ac-5', text: 'The Sun Temple at Modhera in Gujarat was built by the:', options: ['Chandelas', 'Solankis', 'Hoysalas', 'Rashtrakutas'], correctIndex: 1 },
    { id: 'ac-6', text: 'The tower over the sanctum in the Dravida style is called the:', options: ['Shikhara', 'Minaret', 'Stupa', 'Vimana'], correctIndex: 3 },
    { id: 'ac-7', text: 'The Hoysala temples at Belur and Halebidu are noted for:', options: ['Star-shaped platforms and intricate carving', 'Monolithic cave halls', 'Brick stupas', 'Whitewashed domes'], correctIndex: 0 },
    { id: 'ac-8', text: 'The gateways of the Great Stupa at Sanchi are called:', options: ['Gopurams', 'Vimanas', 'Toranas', 'Mandapas'], correctIndex: 2 },
    { id: 'ac-9', text: 'Which structure is often called the first building in India to use a true arch and dome?', options: ["Humayun's Tomb", 'Jama Masjid, Delhi', 'Buland Darwaza', 'Alai Darwaza'], correctIndex: 3 },
    { id: 'ac-10', text: "Humayun's Tomb, a forerunner of the Taj Mahal, is set in a garden of which layout?", options: ['Japanese-style', 'Charbagh (four-part)', 'Terraced hanging', 'Rock garden'], correctIndex: 1 },
    { id: 'ac-11', text: 'The Buland Darwaza at Fatehpur Sikri was built to mark the conquest of:', options: ['Gujarat', 'Bengal', 'Mewar', 'Kashmir'], correctIndex: 0 },
    { id: 'ac-12', text: 'Gol Gumbaz, famous for its whispering gallery, is at:', options: ['Golconda', 'Bidar', 'Bijapur', 'Hampi'], correctIndex: 2 },

    // Sculpture and painting
    { id: 'ac-13', text: 'Which school of art shows Greco-Roman influence on Buddhist sculpture?', options: ['Mathura', 'Gandhara', 'Amaravati', 'Sarnath'], correctIndex: 1 },
    { id: 'ac-14', text: 'Mathura school sculptures were mainly made of:', options: ['Grey schist', 'White marble', 'Black basalt', 'Spotted red sandstone'], correctIndex: 3 },
    { id: 'ac-15', text: 'The Ajanta murals are described as being done in:', options: ['Tempera on dry plaster', 'Oil on canvas', 'Watercolour on paper', 'Ink on cloth'], correctIndex: 0 },
    { id: 'ac-16', text: 'Chola bronzes were made by the:', options: ['Sand casting method', 'Die casting method', 'Lost-wax method', 'Hot forging method'], correctIndex: 2 },
    { id: 'ac-17', text: 'Madhubani painting comes from:', options: ['Odisha', 'Bihar', 'Rajasthan', 'Maharashtra'], correctIndex: 1 },
    { id: 'ac-18', text: 'Warli paintings, drawn in white on mud walls, belong to:', options: ['Gujarat', 'Telangana', 'Assam', 'Maharashtra'], correctIndex: 3 },
    { id: 'ac-19', text: 'Pattachitra, a cloth-based scroll painting, is traditional to:', options: ['Odisha and West Bengal', 'Kerala', 'Punjab', 'Himachal Pradesh'], correctIndex: 0 },
    { id: 'ac-20', text: 'Kalamkari, hand-painted or block-printed cloth, is associated with:', options: ['Rajasthan', 'Kashmir', 'Andhra Pradesh', 'Punjab'], correctIndex: 2 },
    { id: 'ac-21', text: 'The Hamzanama paintings were produced under:', options: ['Jahangir', 'Akbar', 'Shah Jahan', 'Aurangzeb'], correctIndex: 1 },

    // Performing arts and literature
    { id: 'ac-22', text: 'Bharatanatyam originated in:', options: ['Kerala', 'Odisha', 'Andhra Pradesh', 'Tamil Nadu'], correctIndex: 3 },
    { id: 'ac-23', text: 'Kuchipudi is a classical dance form from:', options: ['Andhra Pradesh', 'Karnataka', 'Assam', 'Manipur'], correctIndex: 0 },
    { id: 'ac-24', text: 'Sattriya, recognised as a classical dance in 2000, comes from:', options: ['Manipur', 'Odisha', 'Assam', 'Tripura'], correctIndex: 2 },
    { id: 'ac-25', text: 'Mohiniyattam is a classical dance of:', options: ['Tamil Nadu', 'Odisha', 'Goa', 'Kerala'], correctIndex: 3 },
    { id: 'ac-26', text: 'The Natyashastra, an ancient treatise on drama and dance, is attributed to:', options: ['Kalidasa', 'Bharata Muni', 'Panini', 'Patanjali'], correctIndex: 1 },
    { id: 'ac-27', text: 'Who among these is one of the trinity of Carnatic music?', options: ['Tyagaraja', 'Tansen', 'Amir Khusro', 'Baiju Bawra'], correctIndex: 0 },
    { id: 'ac-28', text: 'The old form of Hindustani music called Dhrupad was patronised by Raja Man Singh Tomar of:', options: ['Jaipur', 'Mewar', 'Gwalior', 'Bikaner'], correctIndex: 2 },
    { id: 'ac-29', text: 'Which of these is an early work of Tamil literature linked with the Sangam age?', options: ['Ramcharitmanas', 'Tolkappiyam', 'Gitagovinda', 'Kadambari'], correctIndex: 1 },
    { id: 'ac-30', text: 'The Gita Govinda, a poem on Radha and Krishna, was composed by:', options: ['Kalidasa', 'Bana', 'Bilhana', 'Jayadeva'], correctIndex: 3 },
  ],

  flashcards: [
    { id: 'ac-fc-1', front: 'Temple styles', back: 'Nagara (north): curved shikhara over the sanctum. Dravida (south): stepped pyramidal vimana, with gateway towers (gopurams) in later temples. Vesara (Deccan): a blend of the two, as in Chalukya and Hoysala temples.' },
    { id: 'ac-fc-2', front: 'Famous temples and dynasties', back: 'Kailasa at Ellora: Rashtrakuta. Shore Temple: Pallava. Brihadeeswara at Thanjavur: Rajaraja I (Chola). Khajuraho: Chandela. Konark: Eastern Ganga. Modhera: Solanki. Belur and Halebidu: Hoysala.' },
    { id: 'ac-fc-3', front: 'Buddhist architecture', back: 'Stupa: relic mound (Sanchi, Bharhut, Amaravati). Chaitya: prayer hall with a stupa. Vihara: monastery. Rock-cut caves at Karle, Ajanta and Ellora; the Barabar caves (Mauryan) began the rock-cut tradition.' },
    { id: 'ac-fc-4', front: 'Mauryan art', back: 'Polished sandstone pillars with animal capitals (Sarnath lion capital), large Yaksha and Yakshi figures and the rock-cut Barabar caves with a mirror-like polish.' },
    { id: 'ac-fc-5', front: 'Schools of sculpture', back: 'Gandhara: Greco-Roman style, grey schist, Kushan period. Mathura: indigenous style, spotted red sandstone. Amaravati: white marble, flowing narrative reliefs, Satavahana period.' },
    { id: 'ac-fc-6', front: 'Indo-Islamic architecture', back: 'True arch, dome, minaret, lime mortar, geometric and calligraphic decoration. Examples: Qutub Minar, Alai Darwaza, Gol Gumbaz, Charminar, Humayun Tomb, Taj Mahal.' },
    { id: 'ac-fc-7', front: 'Painting traditions', back: 'Ajanta murals (Buddhist, tempera). Mughal miniature (Hamzanama under Akbar, nature studies under Jahangir). Rajput schools (Mewar, Bundi, Kishangarh). Pahari (Kangra, Basohli). Deccan (Bijapur, Golconda).' },
    { id: 'ac-fc-8', front: 'Folk paintings and states', back: 'Madhubani: Bihar. Warli: Maharashtra. Pattachitra: Odisha and West Bengal. Kalamkari: Andhra Pradesh. Phad: Rajasthan. Tanjore: Tamil Nadu. Kalighat: Kolkata. Gond: Madhya Pradesh. Cheriyal: Telangana.' },
    { id: 'ac-fc-9', front: 'Eight classical dances', back: 'Bharatanatyam (Tamil Nadu), Kathak (North India), Kathakali (Kerala), Kuchipudi (Andhra Pradesh), Odissi (Odisha), Manipuri (Manipur), Mohiniyattam (Kerala), Sattriya (Assam).' },
    { id: 'ac-fc-10', front: 'Classical music', back: 'Hindustani: Dhrupad, Khayal; Tansen at the court of Akbar. Carnatic: Purandara Dasa; the trinity of Tyagaraja, Muthuswami Dikshitar and Shyama Shastri; the kriti form.' },
    { id: 'ac-fc-11', front: 'Classical texts', back: 'Natyashastra (Bharata Muni): drama, dance and music. Sangam literature and Tolkappiyam: early Tamil. Kalidasa: Sanskrit plays and poems. Gita Govinda (Jayadeva): Radha and Krishna.' },
    { id: 'ac-fc-12', front: 'UNESCO heritage', back: "India's first World Heritage Sites (1983): Agra Fort, Ajanta, Ellora and the Taj Mahal. Intangible heritage examples: Yoga (2016), Kumbh Mela (2017), Durga Puja in Kolkata (2021), Garba of Gujarat (2023)." },
  ],

  notes: [
    {
      id: 'ac-note-architecture',
      title: 'Indian Architecture: Buddhist, Temple and Indo-Islamic',
      sections: [
        {
          heading: 'Early Architecture and Buddhist Art',
          body: pts([
            'Indus Valley cities were planned in baked brick, with grid streets, drains and public works such as the Great Bath. No large temples have been identified.',
            'Mauryan art includes polished sandstone pillars with animal capitals (the Sarnath lion capital) and the rock-cut Barabar caves with a mirror-like finish.',
            'Buddhist architecture has three main forms: the stupa (a dome-shaped relic mound, as at Sanchi, Bharhut and Amaravati), the chaitya (a prayer hall with a stupa at one end) and the vihara (a monastery).',
            'Rock-cut architecture began with the Barabar caves of the Mauryan period (made for the Ajivika sect) and developed into Buddhist caves at Karle, Ajanta and Ellora.',
            'The Gupta period produced some of the earliest structural temples, such as the Dashavatara temple at Deogarh and the brick temple at Bhitargaon, which mark the start of the temple tradition that later split into regional styles.',
            'The Pallavas carved the monolithic rathas and built the Shore Temple at Mahabalipuram, and also built the Kailasanatha temple at Kanchipuram.',
          ]),
        },
        {
          heading: 'Temple Styles',
          body: pts([
            'Nagara style (north India): a curved tower (shikhara) over the sanctum (garbhagriha). Examples: the Khajuraho temples of the Chandelas, the Sun Temple at Konark, the Sun Temple at Modhera (Solankis) and the Lingaraja temple at Bhubaneswar.',
            'Dravida style (south India): a stepped pyramidal tower (vimana) over the sanctum and, in later temples, tall gateway towers (gopurams). Examples: the Brihadeeswara temple at Thanjavur (Rajaraja I), the temple at Gangaikondacholapuram (Rajendra I) and the Meenakshi temple at Madurai.',
            'Vesara style (the Deccan): a blend of Nagara and Dravida features, seen in the Chalukya temples at Aihole and Pattadakal and the Hoysala temples at Belur and Halebidu, which use star-shaped platforms.',
            'The Kailasa temple at Ellora, carved from one rock under the Rashtrakutas, is a rock-cut monolith that follows Dravida forms.',
            'Parts of a temple to remember: garbhagriha (sanctum), mandapa (hall), shikhara or vimana (tower), gopuram (gateway) and the pradakshina path for walking around the sanctum.',
          ]),
        },
        {
          heading: 'Indo-Islamic and Mughal Architecture',
          body: pts([
            'Indo-Islamic buildings use the true arch, the dome, minarets and lime mortar, with decoration in geometric patterns and calligraphy rather than human figures.',
            'Delhi Sultanate: the Quwwat-ul-Islam mosque and the Qutub Minar at Mehrauli, the Alai Darwaza (Alauddin Khalji, 1311) and the fortified city of Tughlaqabad.',
            'Provincial styles: the Jama Masjid at Ahmedabad (Gujarat), Gol Gumbaz at Bijapur (Adil Shahis) and the Charminar at Hyderabad (1591, Muhammad Quli Qutb Shah).',
            'Mughal architecture: the tomb of Humayun at Delhi with its charbagh garden; Fatehpur Sikri and the Buland Darwaza (Akbar); the Taj Mahal, the Red Fort and the Jama Masjid at Delhi (Shah Jahan).',
            'The Taj Mahal (c. 1632-1653) combines a white marble dome, four minarets, pietra dura inlay and a charbagh garden.',
            'Colonial architecture later added the Indo-Saracenic style, which mixed Indian and European forms.',
          ]),
        },
      ],
    },
    {
      id: 'ac-note-sculpture-painting',
      title: 'Sculpture, Bronzes and Painting',
      sections: [
        {
          heading: 'Schools of Sculpture and Bronzes',
          body: pts([
            'Mauryan sculpture includes polished stone pillars and large Yaksha and Yakshi figures.',
            'Gandhara school (Kushan period): Buddha images with Greco-Roman features, wavy hair and heavy drapery, usually in grey schist.',
            'Mathura school: made in the same period with indigenous features, in spotted red sandstone, and produced early images of the Buddha, Jain Tirthankaras and Hindu deities.',
            'Amaravati school (Satavahana period): white marble reliefs with slender, flowing figures and detailed story scenes from the life of the Buddha.',
            'Gupta sculpture is known for its calm, spiritual expression, as in the Buddha images from Sarnath.',
            'Medieval stone sculpture covers the temple walls at Khajuraho and Konark, while the Pala and Sena period of eastern India produced fine black stone and metal images.',
            'Chola bronzes (10th-12th centuries) were cast by the lost-wax method; the dancing Shiva (Nataraja) is the best known, and bronze casting still continues at Swamimalai.',
          ]),
        },
        {
          heading: 'Painting Traditions',
          body: pts([
            'Ajanta murals (c. 2nd century BCE to 6th century CE) show Jataka stories in tempera on dry plaster; the Padmapani Bodhisattva is the most famous figure. Other early paintings are at Bagh (Madhya Pradesh) and Sittanavasal (Tamil Nadu, Jain).',
            'Mughal miniature painting blended Persian and Indian styles: the Hamzanama was illustrated under Akbar, and Jahangir encouraged realistic portraits and nature studies (Ustad Mansur painted birds and animals).',
            'Rajput schools include Mewar, Bundi, Kota and Kishangarh (famous for the Bani Thani portrait); Pahari schools include Basohli and Kangra; Deccan schools flourished at Bijapur, Golconda and Ahmednagar.',
            'Raja Ravi Varma painted mythological scenes in oil; the Bengal School led by Abanindranath Tagore revived Indian styles in the early 20th century.',
          ]),
        },
        {
          heading: 'Folk and Regional Painting',
          body: pts([
            'Madhubani (Mithila, Bihar): bright line drawings of deities, nature and ritual scenes, traditionally on walls and paper.',
            'Warli (Maharashtra): white geometric figures drawn on mud walls.',
            'Pattachitra (Odisha and West Bengal): cloth-based scroll paintings of myth and legend.',
            'Kalamkari (Andhra Pradesh): hand-painted or block-printed cloth, with centres at Srikalahasti and Machilipatnam.',
            'Phad (Rajasthan) is a long cloth scroll telling the story of a local hero; Tanjore (Tamil Nadu) paintings use gold foil; Kalighat paintings come from Kolkata; Gond paintings come from Madhya Pradesh; Cheriyal scrolls come from Telangana.',
          ]),
        },
      ],
    },
    {
      id: 'ac-note-performing',
      title: 'Performing Arts, Music and Literature',
      sections: [
        {
          heading: 'Classical Dance',
          body: pts([
            'The Sangeet Natak Akademi recognises eight classical dance forms.',
            'Bharatanatyam (Tamil Nadu): a temple dance tradition revived in the 20th century, with precise footwork and expressive hand gestures.',
            'Kathak (North India): storytelling through dance, with fast footwork and spins; the Jaipur, Lucknow and Banaras gharanas are well known.',
            'Kathakali (Kerala): a dance-drama with elaborate face make-up and costumes. Mohiniyattam (Kerala): a gentle, swaying style performed mainly by women.',
            'Kuchipudi (Andhra Pradesh): a dance-drama form, known for the tarangam, danced on the rim of a brass plate.',
            'Odissi (Odisha): linked with temples such as the Jagannath temple, and known for the tribhanga posture.',
            'Manipuri (Manipur): soft, flowing movements, often telling the Ras Lila of Radha and Krishna.',
            'Sattriya (Assam): created in the Vaishnava monasteries (sattras) by Sankaradeva, and recognised as a classical dance in 2000.',
          ]),
        },
        {
          heading: 'Music',
          body: pts([
            'Indian classical music has two main traditions: Hindustani (north) and Carnatic (south).',
            'Hindustani music includes the old Dhrupad form, patronised by Raja Man Singh Tomar of Gwalior, and the later Khayal. Tansen sang at the court of Akbar, and Amir Khusro is credited with helping to shape qawwali.',
            'Carnatic music grew around the kriti form. Purandara Dasa is called the father of Carnatic music, and the trinity is Tyagaraja, Muthuswami Dikshitar and Shyama Shastri.',
            'The Natyashastra, attributed to Bharata Muni, is the oldest surviving treatise on drama, dance and music, and discusses the nine rasas.',
          ]),
        },
        {
          heading: 'Literature, Institutions and Heritage Listings',
          body: pts([
            'Early Tamil literature is called Sangam literature; the Tolkappiyam is an early Tamil work on grammar and poetics. Kalidasa wrote Sanskrit plays and poems such as Abhijnanashakuntalam, and Jayadeva wrote the Gita Govinda on Radha and Krishna.',
            'Bhakti poets such as Kabir, Tulsidas, Mirabai and Surdas wrote in regional languages and brought devotion to a wide audience.',
            'Classical language status has been granted to several languages, starting with Tamil in 2004. Check the current list before the exam.',
            'Institutions: Sangeet Natak Akademi (1953), Sahitya Akademi (1954) and Lalit Kala Akademi (1954).',
            "India's first World Heritage Sites were inscribed in 1983: Agra Fort, Ajanta, Ellora and the Taj Mahal. Examples on the intangible heritage list: Yoga (2016), Kumbh Mela (2017), Durga Puja in Kolkata (2021) and Garba of Gujarat (2023).",
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([
      ['ac', 1, 21, 'cult.art-architecture'],
      ['ac', 22, 30, 'cult.performing-arts-literature'],
    ]),
    flashcards: expand([
      ['ac-fc', 1, 8, 'cult.art-architecture'],
      ['ac-fc', 9, 11, 'cult.performing-arts-literature'],
      ['ac-fc', 12, 12, 'cult.art-architecture', 'cult.performing-arts-literature'],
    ]),
    notes: {
      'ac-note-architecture': ['cult.art-architecture'],
      'ac-note-sculpture-painting': ['cult.art-architecture'],
      'ac-note-performing': ['cult.performing-arts-literature'],
    },
  },
};
