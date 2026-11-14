import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const medievalPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'history',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // Delhi Sultanate
    { id: 'me-1', text: 'The Delhi Sultanate was founded in 1206 by:', options: ['Muhammad Ghori', 'Qutbuddin Aibak', 'Iltutmish', 'Balban'], correctIndex: 1 },
    { id: 'me-2', text: 'Who was the first woman ruler of the Delhi Sultanate?', options: ['Razia Sultan', 'Nur Jahan', 'Chand Bibi', 'Gulbadan Begum'], correctIndex: 0 },
    { id: 'me-3', text: "Alauddin Khalji's market control policy was mainly meant to:", options: ['Encourage foreign trade', 'Reduce land revenue', 'Support a large army at low cost', 'Promote temple building'], correctIndex: 2 },
    { id: 'me-4', text: 'Which Sultan shifted the capital to Daulatabad and issued token currency?', options: ['Firoz Shah Tughlaq', 'Ghiyasuddin Tughlaq', 'Alauddin Khalji', 'Muhammad bin Tughlaq'], correctIndex: 3 },
    { id: 'me-5', text: 'The Sultanate system in which officers collected revenue from an assigned area and kept troops was called:', options: ['Zamindari', 'Iqta', 'Jagir', 'Mansab'], correctIndex: 1 },
    { id: 'me-6', text: 'Which is the correct order of the dynasties of the Delhi Sultanate?', options: ['Khalji, Mamluk, Tughlaq, Lodi, Sayyid', 'Mamluk, Tughlaq, Khalji, Sayyid, Lodi', 'Tughlaq, Mamluk, Khalji, Lodi, Sayyid', 'Mamluk, Khalji, Tughlaq, Sayyid, Lodi'], correctIndex: 3 },
    { id: 'me-7', text: 'Which Sultan built canals and founded the city of Firozabad?', options: ['Balban', 'Muhammad bin Tughlaq', 'Firoz Shah Tughlaq', 'Sikandar Lodi'], correctIndex: 2 },
    { id: 'me-8', text: 'The Qutub Minar was completed by:', options: ['Qutbuddin Aibak', 'Iltutmish', 'Alauddin Khalji', 'Firoz Shah Tughlaq'], correctIndex: 1 },
    { id: 'me-9', text: 'Timur invaded India and sacked Delhi in 1398 during the rule of the:', options: ['Tughlaq dynasty', 'Khalji dynasty', 'Sayyid dynasty', 'Lodi dynasty'], correctIndex: 0 },
    { id: 'me-10', text: 'The Delhi Sultanate ended when Ibrahim Lodi was defeated at:', options: ['Khanwa', 'Chausa', 'Talikota', 'the First Battle of Panipat'], correctIndex: 3 },

    // Mughals
    { id: 'me-11', text: 'Babur won the First Battle of Panipat in:', options: ['1527', '1556', '1526', '1539'], correctIndex: 2 },
    { id: 'me-12', text: 'Babur defeated Rana Sanga of Mewar at the Battle of:', options: ['Ghaghra', 'Chanderi', 'Haldighati', 'Khanwa'], correctIndex: 3 },
    { id: 'me-13', text: 'Sher Shah Suri defeated Humayun at Chausa (1539) and again at:', options: ['Panipat', 'Kannauj (Bilgram)', 'Talikota', 'Plassey'], correctIndex: 1 },
    { id: 'me-14', text: 'In the Second Battle of Panipat (1556), the forces of Akbar defeated:', options: ['Ahmad Shah Abdali', 'Rana Pratap', 'Hemu', 'Sher Shah'], correctIndex: 2 },
    { id: 'me-15', text: 'The land revenue system of Akbar associated with Raja Todar Mal was:', options: ['Permanent Settlement', 'Zabt (Dahsala)', 'Ryotwari', 'Mahalwari'], correctIndex: 1 },
    { id: 'me-16', text: 'Akbar announced the Din-i-Ilahi in:', options: ['1556', '1575', '1605', '1582'], correctIndex: 3 },
    { id: 'me-17', text: 'In the Mansabdari system, the "sawar" rank showed the number of:', options: ['Villages he held', 'Years of service', 'Cavalry troopers he had to maintain', 'Elephants in his stable'], correctIndex: 2 },
    { id: 'me-18', text: 'Which Mughal emperor built the Taj Mahal and the Red Fort at Delhi?', options: ['Jahangir', 'Shah Jahan', 'Aurangzeb', 'Akbar'], correctIndex: 1 },
    { id: 'me-19', text: 'The jizya tax was reimposed in 1679 by:', options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'], correctIndex: 3 },
    { id: 'me-20', text: 'The English ambassador Sir Thomas Roe visited the court of:', options: ['Jahangir', 'Akbar', 'Shah Jahan', 'Aurangzeb'], correctIndex: 0 },

    // Regional states
    { id: 'me-21', text: 'The Vijayanagara Empire was founded in 1336 by:', options: ['Krishnadevaraya', 'Harihara and Bukka', 'Devaraya II', 'Narasimha Saluva'], correctIndex: 1 },
    { id: 'me-22', text: 'Krishnadevaraya, the greatest ruler of Vijayanagara, belonged to the:', options: ['Sangama dynasty', 'Saluva dynasty', 'Tuluva dynasty', 'Aravidu dynasty'], correctIndex: 2 },
    { id: 'me-23', text: 'The Battle of Talikota (1565) was fought between Vijayanagara and:', options: ['The Maratha confederacy', 'The Mughals', 'The Cholas', 'The combined Deccan Sultanates'], correctIndex: 3 },
    { id: 'me-24', text: 'The Bahmani Sultanate was founded in 1347 by:', options: ['Alauddin Bahman Shah', 'Mahmud Gawan', 'Yusuf Adil Shah', 'Firoz Shah Bahmani'], correctIndex: 0 },
    { id: 'me-25', text: 'Shivaji was crowned Chhatrapati at Raigad in:', options: ['1664', '1665', '1674', '1680'], correctIndex: 2 },

    // Bhakti and Sufi movements
    { id: 'me-26', text: 'Vishishtadvaita (qualified non-dualism) was propounded by:', options: ['Shankaracharya', 'Madhvacharya', 'Ramanuja', 'Nimbarka'], correctIndex: 2 },
    { id: 'me-27', text: 'Which bhakti saint composed the Bijak and criticised idol worship and caste distinctions?', options: ['Surdas', 'Tulsidas', 'Mirabai', 'Kabir'], correctIndex: 3 },
    { id: 'me-28', text: 'The Chishti Sufi saint whose dargah is at Ajmer is:', options: ['Nizamuddin Auliya', 'Moinuddin Chishti', 'Baba Farid', 'Bahauddin Zakariya'], correctIndex: 1 },
    { id: 'me-29', text: 'The Sufi order that was strongest in Multan and Sindh was the:', options: ['Chishti', 'Naqshbandi', 'Qadiri', 'Suhrawardi'], correctIndex: 3 },
    { id: 'me-30', text: 'Which saint of Maharashtra composed abhangas and is linked with the Varkari tradition?', options: ['Chaitanya', 'Ramananda', 'Tukaram', 'Vallabhacharya'], correctIndex: 2 },
  ],

  flashcards: [
    { id: 'me-fc-1', front: 'Dynasties of the Delhi Sultanate', back: 'Mamluk (Slave) 1206-1290, Khalji 1290-1320, Tughlaq 1320-1414, Sayyid 1414-1451, Lodi 1451-1526. Founded by Qutbuddin Aibak; ended at the First Battle of Panipat.' },
    { id: 'me-fc-2', front: 'Iltutmish (1211-1236)', back: 'Consolidated the Sultanate, received recognition from the Abbasid caliph (1229), introduced the silver tanka and copper jital, organised the iqta system and completed the Qutub Minar. He built a corps of loyal nobles called the Forty (Chahalgani).' },
    { id: 'me-fc-3', front: 'Balban (1266-1287)', back: 'Raised the dignity of the Sultan through strict court ceremony (sijda and paibos), crushed the Forty, reorganised the army department (Diwan-i-Ariz) and built a strong spy network.' },
    { id: 'me-fc-4', front: 'Alauddin Khalji (1296-1316)', back: 'Market controls with fixed prices, a large standing army paid in cash, branding of horses (dagh) and soldier rolls (chehra), land measurement with about half the produce taken as revenue, and southern raids led by Malik Kafur.' },
    { id: 'me-fc-5', front: 'Muhammad bin Tughlaq (1325-1351)', back: 'Five projects: shifting the capital to Daulatabad (1327), token currency, higher Doab taxation in a time of famine, a planned Khorasan expedition and the Karachil expedition. Ibn Battuta served at his court.' },
    { id: 'me-fc-6', front: 'Sultanate administration terms', back: 'Iqta: revenue assignment held by a muqti. Diwan-i-Wizarat: finance. Diwan-i-Ariz: military. Diwan-i-Insha: correspondence. Diwan-i-Risalat: religious matters. Kharaj: land tax. Jizya: tax on non-Muslims. Zakat: Muslim religious tax.' },
    { id: 'me-fc-7', front: 'Mughal rulers and dates', back: 'Babur 1526-1530; Humayun 1530-1540 and 1555-1556; Akbar 1556-1605; Jahangir 1605-1627; Shah Jahan 1628-1658; Aurangzeb 1658-1707. Sher Shah Suri ruled Delhi in between (1540-1545).' },
    { id: 'me-fc-8', front: 'Akbar: key reforms', back: 'Mansabdari (zat and sawar ranks), Zabt or Dahsala revenue system, abolition of the pilgrim tax (1563) and jizya (1564), Ibadat Khana (1575), Sulh-i-kul and Din-i-Ilahi (1582), Fatehpur Sikri.' },
    { id: 'me-fc-9', front: 'Mughal officials', back: 'Centre: Wakil (prime minister), Diwan (finance), Mir Bakhshi (military pay), Sadr-us-Sudur (religious grants). Province (suba): Subadar and Diwan. Below the suba came the sarkar, then the pargana.' },
    { id: 'me-fc-10', front: 'Sher Shah Suri (1540-1545)', back: 'Built the Grand Trunk Road, issued a silver rupiya and a copper dam, built roadside sarais, based revenue on measurement of land and built the Purana Qila. He defeated Humayun at Chausa (1539) and Kannauj (1540).' },
    { id: 'me-fc-11', front: 'Vijayanagara and Bahmani', back: 'Vijayanagara: founded 1336 by Harihara and Bukka; dynasties Sangama, Saluva, Tuluva, Aravidu; Krishnadevaraya (1509-1529) wrote Amuktamalyada; power broken at Talikota (1565). Bahmani: founded 1347 at Gulbarga by Alauddin Bahman Shah; minister Mahmud Gawan; split into five Deccan sultanates.' },
    { id: 'me-fc-12', front: 'Bhakti and Sufi movements', back: 'Bhakti: Ramanuja (Vishishtadvaita), Madhva (Dvaita), Kabir (formless God), Guru Nanak, Chaitanya, Tulsidas, Mirabai, Tukaram. Sufi orders: Chishti (Moinuddin Chishti, Nizamuddin Auliya), Suhrawardi (Multan), Naqshbandi, Qadiri.' },
  ],

  notes: [
    {
      id: 'me-note-sultanate',
      title: 'The Delhi Sultanate (1206-1526)',
      sections: [
        {
          heading: 'Dynasties and Key Rulers',
          body: pts([
            'Muhammad Ghori defeated Prithviraj Chauhan at the Second Battle of Tarain (1192). After his death in 1206, his slave-general Qutbuddin Aibak founded the Delhi Sultanate.',
            'Mamluk (Slave) dynasty, 1206-1290: Iltutmish (1211-1236) consolidated the state and received recognition from the Abbasid caliph in 1229; Razia (1236-1240) was the only woman to rule the Sultanate; Balban (1266-1287) strengthened the monarchy.',
            'Khalji dynasty, 1290-1320: Jalaluddin Khalji founded it; Alauddin Khalji (1296-1316) took Gujarat, Ranthambore (1301) and Chittor (1303), resisted Mongol attacks and sent Malik Kafur on raids to the south.',
            'Tughlaq dynasty, 1320-1414: Ghiyasuddin founded it and built Tughlaqabad; Muhammad bin Tughlaq (1325-1351) tried bold experiments; Firoz Shah Tughlaq (1351-1388) was known for canals and public works.',
            'Timur sacked Delhi in 1398. The Sayyid dynasty (1414-1451) followed, then the Lodis (1451-1526): Bahlul founded the dynasty, Sikandar Lodi founded Agra (1504) and Ibrahim Lodi lost to Babur at Panipat in 1526.',
          ]),
        },
        {
          heading: 'Administration and Economy',
          body: pts([
            'The Sultan headed the state, helped by the wazir (finance) and departments such as Diwan-i-Ariz (army), Diwan-i-Insha (correspondence) and Diwan-i-Risalat (religious matters).',
            'The iqta system assigned the revenue of an area to an officer (muqti), who in return kept troops. Iltutmish organised it and later rulers adjusted it.',
            'Taxes included kharaj (land tax), jizya (on non-Muslims) and zakat. Alauddin measured land and took about half the produce in the Doab.',
            'Iltutmish introduced the silver tanka and the copper jital. Muhammad bin Tughlaq issued token currency, which failed because forged coins were easy to make.',
            'Alauddin controlled markets: fixed prices for grain, cloth, horses and slaves, a market controller (shahna-i-mandi), and rationing in times of scarcity, so that a large army could be paid low salaries.',
            'Muhammad bin Tughlaq moved the capital from Delhi to Daulatabad (1327), raised taxes in the Doab during a famine and planned a Khorasan expedition. Many of these plans failed.',
            'Firoz Shah dug canals, founded Firozabad and Jaunpur and built hospitals and rest houses.',
          ]),
        },
        {
          heading: 'Culture and Architecture',
          body: pts([
            'Indo-Islamic architecture began: the Quwwat-ul-Islam mosque and the Qutub Minar (begun by Aibak, completed by Iltutmish) at Mehrauli, and the Alai Darwaza (Alauddin, 1311), often called the first building in India with a true arch and dome.',
            'Persian was the court language. Important writers: Amir Khusro (poetry in Persian and Hindavi), Ziauddin Barani (Tarikh-i-Firoz Shahi) and Minhaj-us-Siraj (Tabaqat-i-Nasiri).',
            'The Moroccan traveller Ibn Battuta visited in the reign of Muhammad bin Tughlaq and served as a judge; his Rihla describes Indian life.',
            'Sufi orders such as the Chishti and Suhrawardi spread, and the Bhakti movement grew in the same period.',
          ]),
        },
      ],
    },
    {
      id: 'me-note-mughals',
      title: 'The Mughal Empire (1526-1707)',
      sections: [
        {
          heading: 'Rulers and Key Battles',
          body: pts([
            'Babur (1526-1530) defeated Ibrahim Lodi at the First Battle of Panipat (1526), using field artillery and flanking tactics. He beat Rana Sanga at Khanwa (1527) and the Afghans at Ghaghra (1529).',
            'Humayun (1530-1540, 1555-1556) lost to Sher Shah at Chausa (1539) and Kannauj (1540), lived in exile in Persia and regained Delhi in 1555.',
            'Sher Shah Suri (1540-1545) built the Grand Trunk Road, issued the silver rupiya and organised revenue on measurement of land.',
            'Akbar (1556-1605) won the Second Battle of Panipat (1556) against Hemu under the guidance of his regent Bairam Khan, defeated Rana Pratap at Haldighati (1576) and annexed Gujarat, Bengal and Kashmir.',
            'Jahangir (1605-1627) was influenced by Nur Jahan, welcomed Sir Thomas Roe (1615) and encouraged painting. Shah Jahan (1628-1658) built the Taj Mahal (c. 1632-1653), the Red Fort and the Jama Masjid at Delhi.',
            'Aurangzeb (1658-1707) reimposed jizya (1679), fought long wars in the Deccan (Bijapur fell in 1686 and Golconda in 1687) and died at Ahmednagar in 1707.',
          ]),
        },
        {
          heading: 'Akbar and Mughal Administration',
          body: pts([
            'Mansabdari system: each officer held a rank (zat) and had to maintain a number of cavalry troopers (sawar). Ranks ran from 10 to 10,000 and were paid in cash or by assigned revenue (jagir).',
            'Land revenue: Raja Todar Mal developed the Zabt or Dahsala system, which fixed revenue from average yields and prices over ten years and measured land by the bigha.',
            'Central officials: Wakil (prime minister), Diwan (finance), Mir Bakhshi (military pay), Sadr-us-Sudur (religious grants) and Qazi-ul-Quzat (chief judge).',
            'The empire was divided into subas (twelve under Akbar, later fifteen), each governed by a Subadar and a Diwan. A suba was split into sarkars and then parganas.',
            'Religious policy: pilgrim tax abolished (1563) and jizya (1564); Ibadat Khana built (1575); Sulh-i-kul (peace with all) and Din-i-Ilahi (1582) announced.',
            'Fatehpur Sikri (1571-1585) and the Buland Darwaza, built after the conquest of Gujarat, are Akbar landmarks. Abul Fazl wrote the Akbarnama and the Ain-i-Akbari, and Tansen sang at his court.',
          ]),
        },
        {
          heading: 'Economy, Decline and Aftermath',
          body: pts([
            'Agriculture was the base of the economy. Cotton textiles, indigo and saltpetre were exported, and European companies (Portuguese, Dutch, English, French) traded along the coast.',
            'Art flourished: the Hamzanama paintings under Akbar, nature studies under Jahangir and great buildings under Shah Jahan.',
            'Causes of decline include the long Deccan wars of Aurangzeb, a crisis in the jagir system, revolts by Jats, Sikhs, Satnamis and Marathas, and weak later emperors.',
            'Nadir Shah invaded in 1739 and took the Peacock Throne from Delhi. Ahmad Shah Abdali defeated the Marathas at the Third Battle of Panipat (1761).',
            'Regional states such as Awadh, Bengal and Hyderabad became independent in practice, and the British gained ground after Plassey (1757) and Buxar (1764).',
          ]),
        },
      ],
    },
    {
      id: 'me-note-regional-bhakti',
      title: 'Regional Kingdoms, Marathas, Bhakti and Sufi Movements',
      sections: [
        {
          heading: 'Vijayanagara and the Bahmani Sultanate',
          body: pts([
            'Vijayanagara was founded in 1336 by Harihara and Bukka (Sangama dynasty) on the Tungabhadra. Later dynasties: Saluva, Tuluva and Aravidu. The capital is now the ruins at Hampi.',
            'Krishnadevaraya (Tuluva, 1509-1529) took Raichur (1520), wrote the Telugu work Amuktamalyada and patronised scholars. Temples such as Hazara Rama and Vittala were built.',
            'Visitors who described the city: Abdur Razzaq (Persia), Domingo Paes and Fernao Nuniz (Portugal).',
            'The Amara-nayaka system gave military chiefs land in return for troops.',
            'The Battle of Talikota (1565), fought against the combined Deccan Sultanates, broke Vijayanagara power.',
            'The Bahmani Sultanate (1347-1527) was founded at Gulbarga by Alauddin Bahman Shah; the capital later moved to Bidar. Minister Mahmud Gawan reformed administration and built a madrasa at Bidar.',
            'The Bahmani state split into five Deccan sultanates: Ahmadnagar, Bijapur, Golconda, Berar and Bidar.',
          ]),
        },
        {
          heading: 'The Marathas',
          body: pts([
            'Shivaji (1630-1680) built a state around hill forts. He signed the Treaty of Purandar (1665) with Jai Singh, escaped from Agra (1666) and was crowned Chhatrapati at Raigad in 1674.',
            'His council of ministers was called the Ashtapradhan. Revenue came from the land and from chauth (one-fourth of revenue claimed from neighbouring areas) and sardeshmukhi (an extra one-tenth).',
            'After Sambhaji and Rajaram, real power passed to the Peshwas: Balaji Vishwanath (1713-1720), Baji Rao I (1720-1740) and Balaji Baji Rao.',
            'The Marathas lost to Ahmad Shah Abdali at the Third Battle of Panipat (1761).',
          ]),
        },
        {
          heading: 'Bhakti and Sufi Movements',
          body: pts([
            'Early devotion: the Alvars (Vishnu) and Nayanars (Shiva) in the Tamil region, then thinkers such as Shankara (Advaita), Ramanuja (Vishishtadvaita) and Madhva (Dvaita). Basavanna founded the Lingayat tradition in Karnataka.',
            'North India: Ramananda, Kabir (formless God, the Bijak), Guru Nanak (the founder of Sikhism), Tulsidas (Ramcharitmanas), Surdas and Mirabai. Chaitanya taught devotion through kirtan in Bengal; Tukaram, Namdev and Eknath lived in Maharashtra, and Sankaradeva in Assam.',
            'Common features: devotion over ritual, use of regional languages, and criticism of caste distinctions to varying degrees.',
            'Sufi orders: Chishti (Moinuddin Chishti at Ajmer, Nizamuddin Auliya at Delhi, Baba Farid), Suhrawardi (Bahauddin Zakariya at Multan), Naqshbandi and Qadiri.',
            'Sufi ideas and practices: the khanqah (hospice), the silsila (chain of teachers), the pir-murid bond and sama (devotional music).',
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([
      ['me', 1, 10, 'hist.delhi-sultanate'],
      ['me', 11, 20, 'hist.mughals'],
      ['me', 21, 25, 'hist.regional-states'],
      ['me', 26, 30, 'hist.bhakti-sufi'],
    ]),
    flashcards: expand([
      ['me-fc', 1, 6, 'hist.delhi-sultanate'],
      ['me-fc', 7, 10, 'hist.mughals'],
      ['me-fc', 11, 11, 'hist.regional-states'],
      ['me-fc', 12, 12, 'hist.bhakti-sufi'],
    ]),
    notes: {
      'me-note-sultanate': ['hist.delhi-sultanate'],
      'me-note-mughals': ['hist.mughals'],
      'me-note-regional-bhakti': ['hist.regional-states', 'hist.bhakti-sufi'],
    },
  },
};
