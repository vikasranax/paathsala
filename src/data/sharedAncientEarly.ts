import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const ancientEarlyPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'history',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // Prehistory and the Indus Valley
    { id: 'aa-1', text: 'Which Harappan site is known for its dockyard?', options: ['Lothal', 'Kalibangan', 'Dholavira', 'Banawali'], correctIndex: 0 },
    { id: 'aa-2', text: 'Large water reservoirs and an advanced water-conservation system were found at which Harappan site in Kutch?', options: ['Lothal', 'Surkotada', 'Dholavira', 'Rangpur'], correctIndex: 2 },
    { id: 'aa-3', text: 'A ploughed field and fire altars were found at:', options: ['Chanhudaro', 'Harappa', 'Lothal', 'Kalibangan'], correctIndex: 3 },
    { id: 'aa-4', text: 'Rakhigarhi, one of the largest Indus sites in India, lies in:', options: ['Gujarat', 'Haryana', 'Rajasthan', 'Punjab'], correctIndex: 1 },
    { id: 'aa-5', text: 'Most Harappan seals were made of:', options: ['Terracotta', 'Bronze', 'Steatite', 'Ivory'], correctIndex: 2 },
    { id: 'aa-6', text: 'Mehrgarh, an early farming settlement, lies in present-day:', options: ['Balochistan', 'Sindh', 'Gujarat', 'Indian Punjab'], correctIndex: 0 },
    { id: 'aa-7', text: 'The Bhimbetka rock shelters in Madhya Pradesh are famous for:', options: ['Buddhist monasteries', 'Prehistoric rock paintings', 'Iron smelting', 'Harappan seals'], correctIndex: 1 },
    { id: 'aa-8', text: 'Which metal was not used in the mature Harappan phase?', options: ['Copper', 'Bronze', 'Gold', 'Iron'], correctIndex: 3 },

    // Vedic age and Mahajanapadas
    { id: 'aa-9', text: 'The oldest of the four Vedas is the:', options: ['Samaveda', 'Yajurveda', 'Rigveda', 'Atharvaveda'], correctIndex: 2 },
    { id: 'aa-10', text: 'The Battle of Ten Kings (Dasarajna) in the Rigveda was fought on the banks of the:', options: ['Parushni (Ravi)', 'Sarasvati', 'Yamuna', 'Sutudri (Sutlej)'], correctIndex: 0 },
    { id: 'aa-11', text: 'The earliest capital of Magadha was:', options: ['Pataliputra', 'Vaishali', 'Rajagriha', 'Champa'], correctIndex: 2 },
    { id: 'aa-12', text: 'Bimbisara belonged to the:', options: ['Nanda dynasty', 'Haryanka dynasty', 'Shishunaga dynasty', 'Maurya dynasty'], correctIndex: 1 },
    { id: 'aa-13', text: 'Shravasti was the capital of which Mahajanapada?', options: ['Vatsa', 'Avanti', 'Anga', 'Kosala'], correctIndex: 3 },
    { id: 'aa-14', text: 'Alexander defeated Porus at the Battle of the Hydaspes in:', options: ['326 BCE', '323 BCE', '336 BCE', '305 BCE'], correctIndex: 0 },

    // Mauryan and post-Mauryan
    { id: 'aa-15', text: 'Megasthenes, author of Indika, was an envoy of Seleucus at the court of:', options: ['Bindusara', 'Ashoka', 'Chandragupta Maurya', 'Pushyamitra'], correctIndex: 2 },
    { id: 'aa-16', text: "Kautilya's Arthashastra is mainly a work on:", options: ['Grammar', 'Statecraft and administration', 'Astronomy', 'Medicine'], correctIndex: 1 },
    { id: 'aa-17', text: 'The Kalinga War was fought in about:', options: ['321 BCE', '261 BCE', '185 BCE', '78 CE'], correctIndex: 1 },
    { id: 'aa-18', text: "Ashoka's inscriptions in the north-west were written mainly in:", options: ['Brahmi', 'Sanskrit', 'Tamil', 'Kharosthi'], correctIndex: 3 },
    { id: 'aa-19', text: 'The Ashokan Brahmi script was first deciphered by:', options: ['Alexander Cunningham', 'James Prinsep', 'John Marshall', 'R. D. Banerji'], correctIndex: 1 },
    { id: 'aa-20', text: 'The last Mauryan ruler Brihadratha was killed by:', options: ['Pushyamitra Shunga', 'Kharavela', 'Gautamiputra Satakarni', 'Menander'], correctIndex: 0 },
    { id: 'aa-21', text: 'Which Satavahana king is known for defeating the Shakas?', options: ['Simuka', 'Gautamiputra Satakarni', 'Hala', 'Yajna Sri Satakarni'], correctIndex: 1 },
    { id: 'aa-22', text: 'The Junagadh rock inscription, an early long Sanskrit inscription, belongs to:', options: ['Rudradaman I', 'Kanishka', 'Menander', 'Ashoka'], correctIndex: 0 },
    { id: 'aa-23', text: 'The Shaka era of 78 CE is traditionally linked with:', options: ['Rudradaman', 'Gautamiputra Satakarni', 'Kanishka', 'Harsha'], correctIndex: 2 },

    // Early medieval India
    { id: 'aa-24', text: 'Harsha was defeated on the banks of the Narmada by:', options: ['Dantidurga', 'Pulakeshin II', 'Narasimhavarman I', 'Dharmapala'], correctIndex: 1 },
    { id: 'aa-25', text: 'The Aihole inscription was composed by:', options: ['Ravikirti', 'Banabhatta', 'Kalhana', 'Bilhana'], correctIndex: 0 },
    { id: 'aa-26', text: 'The capital of the Pallavas was:', options: ['Madurai', 'Thanjavur', 'Kanchipuram', 'Warangal'], correctIndex: 2 },
    { id: 'aa-27', text: 'Which Chola king sent a naval expedition against the Srivijaya kingdom?', options: ['Rajaraja I', 'Rajendra I', 'Kulottunga I', 'Vijayalaya'], correctIndex: 1 },
    { id: 'aa-28', text: 'Details of village self-government under the Cholas are known from the inscriptions at:', options: ['Uttaramerur', 'Ellora', 'Aihole', 'Sanchi'], correctIndex: 0 },
    { id: 'aa-29', text: 'Muhammad bin Qasim conquered Sindh in:', options: ['632 CE', '711 CE', '1000 CE', '1192 CE'], correctIndex: 1 },
    { id: 'aa-30', text: 'Muhammad Ghori defeated Prithviraj Chauhan at the Second Battle of Tarain in:', options: ['1191', '1175', '1192', '1206'], correctIndex: 2 },
  ],

  flashcards: [
    { id: 'aa-fc-1', front: 'Phases of the Stone Age', back: 'Palaeolithic: hunting and gathering with chipped stone tools (Bhimbetka). Mesolithic: microliths and early herding (Adamgarh, Bagor). Neolithic: farming, polished tools and pottery (Mehrgarh, Burzahom). Chalcolithic: copper plus stone (Ahar, Malwa and Jorwe cultures).' },
    { id: 'aa-fc-2', front: 'Features of the Indus Valley Civilisation', back: 'Mature phase c. 2600-1900 BCE. Grid-pattern towns with a citadel and a lower town, standard baked bricks, covered drains, seals, standard weights, trade with Mesopotamia (Meluhha), copper and bronze but no iron, and an undeciphered script.' },
    { id: 'aa-fc-3', front: 'Indus sites to remember', back: 'Harappa: Ravi. Mohenjo-daro: Indus, Great Bath. Chanhudaro: bead making. Kalibangan: ploughed field and fire altars. Lothal: dockyard. Dholavira: water reservoirs. Rakhigarhi: Haryana.' },
    { id: 'aa-fc-4', front: 'Vedic literature', back: 'Four Vedas: Rig, Sama, Yajur and Atharva. Then the Brahmanas, Aranyakas and Upanishads. The six Vedangas: Shiksha, Chhanda, Vyakarana, Nirukta, Jyotisha and Kalpa.' },
    { id: 'aa-fc-5', front: 'Early vs later Vedic age', back: "Early (c. 1500-1000 BCE): Punjab, cattle-herding tribes, sabha and samiti, Indra as the chief god. Later (c. 1000-600 BCE): Ganga-Yamuna doab, iron and farming, larger kingdoms, rigid varna system, rise of Prajapati, Vishnu and Rudra." },
    { id: 'aa-fc-6', front: 'The sixteen Mahajanapadas', back: 'Anga, Magadha, Kashi, Kosala, Vajji, Malla, Chedi, Vatsa, Kuru, Panchala, Matsya, Surasena, Assaka, Avanti, Gandhara and Kamboja. Vajji and Malla were republics; the rest were monarchies.' },
    { id: 'aa-fc-7', front: 'Rise of Magadha', back: 'Haryanka (Bimbisara, Ajatashatru, Udayin), then Shishunaga, then Nanda (Mahapadma Nanda), then Maurya. Capital moved from Rajagriha to Pataliputra. Iron mines, fertile land and rivers helped its rise.' },
    { id: 'aa-fc-8', front: 'Mauryan administration', back: 'Saptanga theory of the state (Arthashastra). Provinces ruled by princes, with centres at Pataliputra, Taxila, Ujjain, Tosali and Suvarnagiri. Officials: Mahamatras and Rajukas. A spy network and state-run mines and forests.' },
    { id: 'aa-fc-9', front: "Ashoka's edicts", back: 'Fourteen Major Rock Edicts, Minor Rock Edicts and seven Pillar Edicts. Mostly Prakrit in Brahmi script; Kharosthi in the north-west; Greek and Aramaic in Afghanistan. Deciphered by James Prinsep (1837). Dhamma officers (Dhamma Mahamattas) spread his message.' },
    { id: 'aa-fc-10', front: 'Post-Mauryan dynasties', back: 'Shungas and Kanvas (Ganga valley), Satavahanas (Deccan), Indo-Greeks (Menander), Shakas (Rudradaman), Parthians and Kushans (Kanishka). Sources include coins and inscriptions such as the Junagadh and Nasik inscriptions.' },
    { id: 'aa-fc-11', front: 'The Sangam age', back: 'Chera, Chola and Pandya kingdoms (c. 300 BCE-300 CE). Sangam literature: Tolkappiyam, Ettuthokai, Pattuppattu. The epics Silappadikaram (Ilango Adigal) and Manimekalai. Roman trade through ports such as Muziris and Arikamedu.' },
    { id: 'aa-fc-12', front: 'Early medieval dynasties and capitals', back: 'Pallavas: Kanchi. Chalukyas: Badami. Rashtrakutas: Manyakheta. Cholas: Thanjavur. Palas: Bengal and Bihar. Gurjara-Pratiharas: Kannauj. The three-way fight for Kannauj involved the Palas, Pratiharas and Rashtrakutas. Harsha ruled 606-647 CE.' },
  ],

  notes: [
    {
      id: 'aa-note-prehistory-indus',
      title: 'Prehistory and the Indus Valley Civilisation',
      sections: [
        {
          heading: 'Stone Age and Chalcolithic Cultures',
          body: pts([
            'Palaeolithic (Old Stone Age): hunter-gatherers using chipped stone tools. The rock shelters at Bhimbetka (Madhya Pradesh) hold paintings from this and later periods.',
            'Mesolithic: tiny stone tools called microliths and early herding of animals; Adamgarh and Bagor are known sites.',
            'Neolithic: farming, polished stone tools and pottery. Mehrgarh (Balochistan) shows early farming and herding; Burzahom (Kashmir) has pit dwellings.',
            'Chalcolithic: copper used alongside stone. Village cultures include the Ahar-Banas culture (Rajasthan), the Malwa culture and the Jorwe culture (Maharashtra); Inamgaon is a well-excavated Jorwe site.',
            'Iron came into use in the Ganga plains by about 1000 BCE and made clearing forests and farming easier.',
          ]),
        },
        {
          heading: 'Features of the Indus Valley Civilisation',
          body: pts([
            'A Bronze Age urban culture, mature phase c. 2600-1900 BCE, spread over north-western India and Pakistan. Harappa was identified in 1921 (Daya Ram Sahni) and Mohenjo-daro in 1922 (R. D. Banerji).',
            'Town planning: streets in a grid, a raised citadel and a lower town, standard baked bricks (ratio 1:2:4) and covered drains along the streets.',
            'Public works: the Great Bath at Mohenjo-daro and large granaries at Harappa and Mohenjo-daro.',
            'Economy: farming (wheat, barley, cotton), crafts such as bead making at Chanhudaro, standard cubical weights, seals and trade with Mesopotamia, which called the region Meluhha.',
            'Metals: copper, bronze, gold and silver were known; iron was not.',
            'Script: a pictographic script that is still undeciphered. Seals show animals, often the humped bull, and the Pashupati seal.',
            'Religion is not well understood. No confirmed temples; terracotta female figurines are often called mother goddesses, and fire altars are reported at Kalibangan and Lothal.',
          ]),
        },
        {
          heading: 'Major Sites and Decline',
          body: pts([
            'Harappa (Ravi) and Mohenjo-daro (Indus) are in Pakistan. Chanhudaro is known for bead making.',
            'In India: Kalibangan (Rajasthan, ploughed field), Lothal (Gujarat, dockyard), Dholavira (Kutch, water reservoirs and a three-part city) and Rakhigarhi (Haryana).',
            'Decline began about 1900 BCE. Suggested causes include the drying of the Ghaggar-Hakra river, climate change, floods and a fall in trade. No single cause is accepted.',
            'Smaller Late Harappan village cultures continued in many regions.',
          ]),
        },
      ],
    },
    {
      id: 'aa-note-vedic-magadha',
      title: 'The Vedic Age, Mahajanapadas and the Rise of Magadha',
      sections: [
        {
          heading: 'Early Vedic Age (c. 1500-1000 BCE)',
          body: pts([
            'Known mainly from the Rigveda. The people lived in the Sapta Sindhu region (land of seven rivers) in the Punjab.',
            'Society was tribal and pastoral; cattle were the main wealth. The social units ran from the family (kula) to the village (grama), the clan (vis) and the tribe (jana).',
            'The tribal chief (rajan) was helped by assemblies, the sabha and the samiti.',
            'In the Battle of Ten Kings, Sudas of the Bharata tribe defeated a confederation of ten tribes on the Parushni (Ravi).',
            'The main gods were Indra, Agni, Varuna and Soma, and worship centred on offerings and hymns.',
            'Women had some freedom; hymns are attributed to women such as Lopamudra and Ghosha.',
          ]),
        },
        {
          heading: 'Later Vedic Age (c. 1000-600 BCE)',
          body: pts([
            'The centre moved east to the Ganga-Yamuna doab, with the Kuru and Panchala kingdoms. Iron tools helped clear forests and farming became the main occupation.',
            'Texts of this age: the Samaveda, Yajurveda and Atharvaveda, the Brahmanas, the Aranyakas and the Upanishads.',
            'The four varnas (Brahmana, Kshatriya, Vaishya, Shudra) became more rigid and based on birth.',
            'Kingdoms grew larger. Kings performed grand rituals such as the Rajasuya, Ashvamedha and Vajapeya, while the sabha and samiti lost importance.',
            'Prajapati, Vishnu and Rudra rose in importance while Indra and Agni declined.',
            'The six Vedangas support the study of the Vedas: Shiksha, Chhanda, Vyakarana, Nirukta, Jyotisha and Kalpa.',
          ]),
        },
        {
          heading: 'Mahajanapadas and the Rise of Magadha (6th century BCE)',
          body: pts([
            'The Buddhist text Anguttara Nikaya lists sixteen Mahajanapadas: Anga, Magadha, Kashi, Kosala, Vajji, Malla, Chedi, Vatsa, Kuru, Panchala, Matsya, Surasena, Assaka, Avanti, Gandhara and Kamboja.',
            'Most were monarchies; Vajji and Malla were republics (gana-sanghas).',
            'Some capitals: Rajagriha (Magadha), Shravasti (Kosala), Kaushambi (Vatsa), Ujjain (Avanti) and Vaishali (Vajji).',
            'Magadha rose because of iron mines, fertile land, rivers and elephants. The Haryanka dynasty (Bimbisara, Ajatashatru, Udayin) was followed by the Shishunagas and then the Nandas under Mahapadma Nanda. Udayin made Pataliputra the capital.',
            'The Achaemenid king Darius I took part of the north-west around 518 BCE. Alexander invaded in 326 BCE and defeated Porus at the Hydaspes, but his army refused to go further east.',
          ]),
        },
      ],
    },
    {
      id: 'aa-note-mauryan-sangam',
      title: 'The Mauryas, Post-Mauryan Dynasties and the Sangam Age',
      sections: [
        {
          heading: 'The Mauryan Empire (c. 321-185 BCE)',
          body: pts([
            'Chandragupta Maurya, guided by Chanakya (Kautilya), overthrew the Nandas around 321 BCE and defeated Seleucus Nicator around 305 BCE. Megasthenes came as an envoy and wrote the Indika.',
            'Bindusara (c. 297-273 BCE) extended the empire to the south.',
            'Ashoka (c. 268-232 BCE) fought the Kalinga War (c. 261 BCE), then embraced Buddhism and a policy of Dhamma.',
            'The empire stretched from the north-west to Bengal and Karnataka, but not the far south.',
            'The last king Brihadratha was killed by his general Pushyamitra Shunga around 185 BCE.',
          ]),
        },
        {
          heading: "Ashoka's Dhamma and Mauryan Administration",
          body: pts([
            'Ashoka called himself Devanampiya Piyadassi. His edicts are carved on rocks and pillars; the Maski edict names him as Ashoka.',
            'Languages and scripts: Prakrit in Brahmi script for most edicts, Kharosthi in the north-west, and Greek and Aramaic in Afghanistan. James Prinsep deciphered Brahmi in 1837.',
            'Dhamma meant respect for elders, kindness to servants, tolerance of all sects and non-violence. Dhamma Mahamattas were appointed to spread it.',
            'Administration followed the Arthashastra idea of seven elements of the state (saptanga). Provinces were ruled from Pataliputra, Taxila, Ujjain, Tosali and Suvarnagiri. Officials included Mahamatras and Rajukas, and spies kept watch.',
            'The state took a share of the produce as land tax and ran mines and forests.',
            'Art: polished sandstone pillars with animal capitals, the Barabar caves and the enlargement of the Sanchi stupa.',
          ]),
        },
        {
          heading: 'Post-Mauryan Dynasties and the Sangam Age',
          body: pts([
            'Shungas (Pushyamitra, c. 185-149 BCE) ruled the Ganga valley and were followed by the Kanvas.',
            'Satavahanas ruled the Deccan; Simuka founded the dynasty and Gautamiputra Satakarni defeated the Shakas. They used Prakrit and kings took names from their mothers.',
            'Indo-Greeks: Menander appears in the Buddhist text Milinda Panha, where the monk Nagasena answers his questions.',
            'Shakas: Rudradaman I (c. 150 CE) is known from the Junagadh inscription, an early long Sanskrit inscription which records the repair of the Sudarshana lake.',
            'Kushans: Kanishka ruled from Purushapura (Peshawar) and Mathura, and the Shaka era of 78 CE is traditionally linked with him. He supported Mahayana Buddhism, and Gandhara art flourished.',
            'Sangam age (c. 300 BCE-300 CE): the Chera, Chola and Pandya kingdoms. Literature: Tolkappiyam, Ettuthokai, Pattuppattu, and the epics Silappadikaram and Manimekalai. Trade with Rome ran through ports such as Muziris and Arikamedu.',
          ]),
        },
      ],
    },
    {
      id: 'aa-note-early-medieval',
      title: 'Early Medieval India (c. 600-1200 CE)',
      sections: [
        {
          heading: 'Harsha and the Northern Powers',
          body: pts([
            'Harsha Vardhana (606-647 CE) ruled from Kannauj and was defeated by Pulakeshin II on the Narmada. The Chinese pilgrim Xuanzang visited and studied at Nalanda; Banabhatta wrote the Harshacharita, and Harsha himself wrote plays such as Ratnavali and Nagananda.',
            'After Harsha, the Gurjara-Pratiharas, Chauhans, Paramaras, Chandelas and Solankis rose in the north and west.',
            'The tripartite struggle for Kannauj was fought among the Palas (Bengal and Bihar), the Gurjara-Pratiharas and the Rashtrakutas.',
            'The Palas patronised Buddhism. Dharmapala founded Vikramashila, and Pala influence reached Tibet and Southeast Asia.',
            'Arab forces under Muhammad bin Qasim conquered Sindh in 711 CE. Mahmud of Ghazni raided India from 1000 to 1027 CE, including Somnath in 1025. Muhammad Ghori lost at the First Battle of Tarain (1191) and won at the Second (1192).',
          ]),
        },
        {
          heading: 'The Deccan and the South',
          body: pts([
            'Pallavas (Kanchipuram): Mahendravarman I; Narasimhavarman I built the monolithic rathas at Mahabalipuram; the Shore Temple belongs to Narasimhavarman II.',
            'Chalukyas of Badami: Pulakeshin II (c. 610-642) defeated Harsha. The Aihole inscription by Ravikirti records his reign. Temples at Aihole and Pattadakal.',
            'Rashtrakutas (Manyakheta): Dantidurga founded the dynasty; Krishna I built the Kailasa temple at Ellora; Amoghavarsha wrote the Kavirajamarga, an early Kannada work on poetics.',
            'Pandyas ruled from Madurai and the Cheras from the west coast.',
          ]),
        },
        {
          heading: 'The Cholas',
          body: pts([
            'Vijayalaya revived the Cholas at Thanjavur around the middle of the 9th century.',
            'Rajaraja I (985-1014) built the Brihadeeswara temple at Thanjavur; Rajendra I (1014-1044) built Gangaikondacholapuram and sent a naval expedition against the Srivijaya kingdom.',
            'Village assemblies (Ur and Sabha) managed local affairs. The Uttaramerur inscriptions describe how members were chosen by lot.',
            'Temples were centres of worship, learning and the economy, and the Cholas traded overseas with Southeast Asia.',
            'Art: Dravida temples and bronzes such as the Nataraja.',
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([
      ['aa', 1, 8, 'hist.prehistory-indus'],
      ['aa', 9, 14, 'hist.vedic-mahajanapada'],
      ['aa', 15, 23, 'hist.mauryan-postmauryan'],
      ['aa', 24, 30, 'hist.early-medieval-south'],
    ]),
    flashcards: expand([
      ['aa-fc', 1, 3, 'hist.prehistory-indus'],
      ['aa-fc', 4, 7, 'hist.vedic-mahajanapada'],
      ['aa-fc', 8, 11, 'hist.mauryan-postmauryan'],
      ['aa-fc', 12, 12, 'hist.early-medieval-south'],
    ]),
    notes: {
      'aa-note-prehistory-indus': ['hist.prehistory-indus'],
      'aa-note-vedic-magadha': ['hist.vedic-mahajanapada'],
      'aa-note-mauryan-sangam': ['hist.mauryan-postmauryan'],
      'aa-note-early-medieval': ['hist.early-medieval-south'],
    },
  },
};
