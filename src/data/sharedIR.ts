import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const irPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'ir',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // India and its neighbourhood
    { id: 'ir-1', text: 'The Indus Waters Treaty (1960) between India and Pakistan was brokered with the help of the:', options: ['United Nations', 'World Bank', 'Commonwealth', 'Asian Development Bank'], correctIndex: 1 },
    { id: 'ir-2', text: 'Under the Indus Waters Treaty, the three eastern rivers allotted to India are:', options: ['Indus, Jhelum and Chenab', 'Ravi, Beas and Sutlej', 'Ganga, Yamuna and Ghaghara', 'Narmada, Tapi and Mahi'], correctIndex: 1 },
    { id: 'ir-3', text: 'The Simla Agreement was signed between India and Pakistan after the war of:', options: ['1947', '1962', '1965', '1971'], correctIndex: 3 },
    { id: 'ir-4', text: 'The Land Boundary Agreement with Bangladesh was implemented through the Constitution (Amendment) Act of:', options: ['2005', '2010', '2015', '2019'], correctIndex: 2 },
    { id: 'ir-5', text: 'The Ganga Waters Treaty between India and Bangladesh was signed in:', options: ['1972', '1996', '2005', '2015'], correctIndex: 1 },
    { id: 'ir-6', text: 'The Treaty of Peace and Friendship between India and Nepal dates from:', options: ['1950', '1962', '1976', '1990'], correctIndex: 0 },
    { id: 'ir-7', text: 'The Doklam standoff of 2017 involved India, China and:', options: ['Nepal', 'Myanmar', 'Bhutan', 'Bangladesh'], correctIndex: 2 },
    { id: 'ir-8', text: 'The Indo-Lanka Accord of 1987 led to which amendment to the Sri Lankan constitution?', options: ['The Thirteenth Amendment', 'The First Amendment', 'The Nineteenth Amendment', 'The Twentieth Amendment'], correctIndex: 0 },
    { id: 'ir-9', text: 'The Kaladan Multi-Modal Transit Transport Project links India with:', options: ['Bangladesh', 'Myanmar', 'Bhutan', 'Thailand'], correctIndex: 1 },
    { id: 'ir-10', text: 'The Gujral Doctrine emphasised:', options: ['Non-reciprocity and friendly relations with smaller neighbours', 'Military dominance in South Asia', 'An alliance with the USA', 'A boycott of regional forums'], correctIndex: 0 },

    // Regional and global groupings
    { id: 'ir-11', text: 'SAARC was founded in 1985 at a summit in:', options: ['Kathmandu', 'Dhaka', 'Colombo', 'Islamabad'], correctIndex: 1 },
    { id: 'ir-12', text: 'The secretariat of SAARC is located in:', options: ['Dhaka', 'Kathmandu', 'New Delhi', 'Thimphu'], correctIndex: 1 },
    { id: 'ir-13', text: 'Which of these countries is not a member of BIMSTEC?', options: ['Thailand', 'Myanmar', 'Pakistan', 'Sri Lanka'], correctIndex: 2 },
    { id: 'ir-14', text: 'ASEAN was founded in 1967 through a declaration signed at:', options: ['Jakarta', 'Kuala Lumpur', 'Manila', 'Bangkok'], correctIndex: 3 },
    { id: 'ir-15', text: 'The headquarters of ASEAN is at:', options: ['Jakarta', 'Singapore', 'Bangkok', 'Manila'], correctIndex: 0 },
    { id: 'ir-16', text: 'Which country became the 11th member of ASEAN in October 2025?', options: ['Papua New Guinea', 'Sri Lanka', 'Timor-Leste', 'Bangladesh'], correctIndex: 2 },
    { id: 'ir-17', text: 'The Quad consists of India, the USA, Japan and:', options: ['Australia', 'South Korea', 'Indonesia', 'France'], correctIndex: 0 },
    { id: 'ir-18', text: 'South Africa joined the BRIC grouping, turning it into BRICS, in:', options: ['2008', '2010', '2012', '2014'], correctIndex: 1 },
    { id: 'ir-19', text: 'The New Development Bank of the BRICS is headquartered in:', options: ['Beijing', 'New Delhi', 'Shanghai', 'Moscow'], correctIndex: 2 },
    { id: 'ir-20', text: 'The Shanghai Cooperation Organisation was founded in 2001, and India became a full member in:', options: ['2005', '2009', '2017', '2021'], correctIndex: 2 },
    { id: 'ir-21', text: 'The African Union became a permanent member of the G20 at the summit hosted by India in:', options: ['2021', '2022', '2023', '2024'], correctIndex: 2 },
    { id: 'ir-22', text: 'The International Solar Alliance has its headquarters at:', options: ['Paris', 'Gurugram', 'Abu Dhabi', 'New York'], correctIndex: 1 },

    // International institutions and diaspora
    { id: 'ir-23', text: 'The permanent members of the UN Security Council are the USA, UK, France, Russia and:', options: ['India', 'Japan', 'China', 'Germany'], correctIndex: 2 },
    { id: 'ir-24', text: 'The International Court of Justice sits at:', options: ['Geneva', 'New York', 'Paris', 'The Hague'], correctIndex: 3 },
    { id: 'ir-25', text: 'The G4 group seeking permanent seats in the UN Security Council comprises India, Brazil, Japan and:', options: ['Germany', 'Italy', 'South Africa', 'Nigeria'], correctIndex: 0 },
    { id: 'ir-26', text: 'The World Trade Organization is headquartered in:', options: ['Geneva', 'New York', 'Washington DC', 'Paris'], correctIndex: 0 },
    { id: 'ir-27', text: 'Pravasi Bharatiya Divas is observed on:', options: ['26 January', '9 January', '15 August', '2 October'], correctIndex: 1 },
    { id: 'ir-28', text: 'The Overseas Citizenship of India (OCI) scheme was introduced in:', options: ['1990', '1999', '2005', '2014'], correctIndex: 2 },
    { id: 'ir-29', text: 'The evacuation of Indians from Ukraine in 2022 was named:', options: ['Operation Ganga', 'Operation Raahat', 'Operation Kaveri', 'Operation Devi Shakti'], correctIndex: 0 },
    { id: 'ir-30', text: 'The Indian Council for Cultural Relations (ICCR) was founded in 1950 by:', options: ['Jawaharlal Nehru', 'Maulana Abul Kalam Azad', 'Sardar Patel', 'Rajendra Prasad'], correctIndex: 1 },
  ],

  flashcards: [
    { id: 'ir-fc-1', front: 'Ideas behind India foreign policy', back: 'Panchsheel (1954), non-alignment and strategic autonomy, the Gujral Doctrine (non-reciprocity with smaller neighbours), Neighbourhood First, Act East (2014, from Look East of 1991), SAGAR (2015) and MAHASAGAR (announced 2025).' },
    { id: 'ir-fc-2', front: 'Panchsheel', back: 'Five principles of peaceful coexistence in the 1954 India and China agreement on Tibet: mutual respect for territorial integrity and sovereignty, mutual non-aggression, non-interference in internal affairs, equality and mutual benefit, and peaceful coexistence.' },
    { id: 'ir-fc-3', front: 'Key treaties with neighbours', back: 'Indus Waters Treaty 1960 (Pakistan; India put it in abeyance in April 2025, check the current position). Simla Agreement 1972. Treaty of Peace and Friendship 1950 (Nepal). Treaty of Friendship with Bhutan 1949, revised 2007. Ganga Waters Treaty 1996 (Bangladesh). Land Boundary Agreement 2015.' },
    { id: 'ir-fc-4', front: 'Connectivity projects', back: 'Kaladan Multi-Modal Project (Myanmar), India-Myanmar-Thailand Trilateral Highway, Chabahar port (Iran), International North-South Transport Corridor (INSTC), BBIN, and IMEC, announced at the G20 summit in 2023.' },
    { id: 'ir-fc-5', front: 'SAARC and BIMSTEC', back: 'SAARC (1985, Dhaka): eight members, secretariat in Kathmandu, largely stalled since 2016. BIMSTEC (1997): Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka and Thailand; secretariat in Dhaka; charter adopted in 2022.' },
    { id: 'ir-fc-6', front: 'ASEAN and East Asia', back: 'ASEAN (1967, Bangkok), headquarters in Jakarta, ten members until Timor-Leste joined in October 2025 as the 11th. India: dialogue partner, member of the East Asia Summit (2005) and the ASEAN Regional Forum. Act East replaced Look East.' },
    { id: 'ir-fc-7', front: 'BRICS and SCO', back: 'BRICS: Brazil, Russia, India, China, South Africa (2010); Egypt, Ethiopia, Iran and the UAE joined in 2024 and Indonesia in 2025; New Development Bank in Shanghai. SCO: founded 2001; India and Pakistan joined in 2017, Iran in 2023, Belarus in 2024.' },
    { id: 'ir-fc-8', front: 'Quad and the Indo-Pacific', back: 'Quad: India, USA, Japan and Australia; revived 2017; first leaders summit 2021. IPOI (2019) and SAGAR cover the Indian Ocean. IORA (1997) has its secretariat in Mauritius.' },
    { id: 'ir-fc-9', front: 'G20, G7 and other groups', back: 'G20: leaders summits since 2008; India presidency December 2022 to November 2023; African Union admitted as a permanent member in 2023. G7: USA, UK, France, Germany, Italy, Japan, Canada. IBSA (2003), I2U2 (2022) and ISA (2015, Gurugram).' },
    { id: 'ir-fc-10', front: 'The UN system', back: 'UN founded 1945; 193 members; Security Council with five permanent members (USA, UK, France, Russia, China) and ten elected for two years. India has been elected eight times, most recently for 2021-22. G4: India, Brazil, Germany, Japan. ICJ at The Hague.' },
    { id: 'ir-fc-11', front: 'Headquarters of institutions', back: 'WTO, WHO, ILO and WIPO: Geneva. UNESCO: Paris. FAO: Rome. IAEA: Vienna. UNEP: Nairobi. IMF and World Bank: Washington DC. ADB: Manila. AIIB: Beijing. ICJ: The Hague.' },
    { id: 'ir-fc-12', front: 'Diaspora and evacuations', back: 'Pravasi Bharatiya Divas: 9 January. OCI card 2005; the PIO card was merged into OCI in 2015. ICCR 1950. Evacuations: Raahat (Yemen, 2015), Devi Shakti (Afghanistan, 2021), Ganga (Ukraine, 2022), Kaveri (Sudan, 2023), Ajay (Israel, 2023). India is the largest recipient of remittances.' },
  ],

  notes: [
    {
      id: 'ir-note-neighbourhood',
      title: 'India and Its Neighbourhood',
      sections: [
        {
          heading: 'Principles and Policies',
          body: pts([
            'Panchsheel, the five principles of peaceful coexistence, came from the 1954 India and China agreement on Tibet: mutual respect for territorial integrity and sovereignty, mutual non-aggression, non-interference, equality and mutual benefit, and peaceful coexistence.',
            'Non-alignment kept India out of the Cold War blocs. Today the same idea is described as strategic autonomy.',
            'The Gujral Doctrine (1996-97) held that India should not ask for reciprocity from smaller neighbours and should settle disputes peacefully.',
            'Neighbourhood First (stressed from 2014) gives priority to connectivity, trade and people-to-people links with neighbours.',
            'Look East (1991, under P. V. Narasimha Rao) became Act East in 2014, with a stronger focus on ASEAN and East Asia.',
            'SAGAR (2015) and MAHASAGAR (announced in 2025) set out the Indian vision of security and growth in the Indian Ocean.',
          ]),
        },
        {
          heading: 'Pakistan and China',
          body: pts([
            'Pakistan: wars in 1947-48, 1965 and 1971, and the Kargil conflict of 1999. Agreements include Tashkent (1966), Simla (1972) and the Lahore Declaration (1999).',
            'The Indus Waters Treaty (1960, mediated by the World Bank) gives India the eastern rivers (Ravi, Beas, Sutlej) and Pakistan the western rivers (Indus, Jhelum, Chenab). In April 2025 India announced that it was holding the treaty in abeyance after the Pahalgam attack. Check the current position.',
            'China: Panchsheel in 1954, the war of 1962, the Line of Actual Control (LAC), the Doklam standoff of 2017 and the Galwan clash of June 2020. In October 2024 the two sides announced a patrolling arrangement at the LAC.',
            'China built the China-Pakistan Economic Corridor (CPEC) through Pakistan-occupied Kashmir, and India has not joined the Belt and Road Initiative.',
            'Trade with China is large, and India runs a large trade deficit with it.',
          ]),
        },
        {
          heading: 'Other Neighbours',
          body: pts([
            'Nepal: Treaty of Peace and Friendship (1950), an open border, Gorkha recruitment into the Indian Army, and a boundary dispute over Kalapani, Lipulekh and Limpiyadhura.',
            'Bhutan: Treaty of Friendship (1949, revised 2007), hydropower projects such as Chukha and Tala, and the 2017 Doklam standoff near the Bhutan, China and India tri-junction.',
            'Bangladesh: India helped in the 1971 liberation war. The Land Boundary Agreement (2015, 100th Amendment) exchanged enclaves. The Ganga Waters Treaty (1996) runs for 30 years and is due for renewal. Teesta water sharing is unresolved. Relations have changed since the 2024 political transition, so follow current affairs.',
            'Sri Lanka: the Indo-Lanka Accord (1987) and the Thirteenth Amendment; the Katchatheevu agreement (1974) and fishermen disputes in the Palk Strait; large Indian help during the 2022 economic crisis.',
            'Maldives: Operation Cactus (1988) and a close security and economic link.',
            'Myanmar: the Kaladan project, the India-Myanmar-Thailand Trilateral Highway and a long shared border, where the Free Movement Regime has been under review since 2024.',
            'Afghanistan: the Salma Dam and the Zaranj-Delaram highway built with Indian aid, and the Strategic Partnership Agreement of 2011.',
          ]),
        },
      ],
    },
    {
      id: 'ir-note-groupings',
      title: 'Regional and Global Groupings',
      sections: [
        {
          heading: 'South Asia and Southeast Asia',
          body: pts([
            'SAARC (1985, Dhaka) has eight members: Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan and Sri Lanka. Its secretariat is in Kathmandu. It has been largely stalled since the 2016 summit was called off.',
            'BIMSTEC (1997) links Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka and Thailand. Its secretariat is in Dhaka and its charter was adopted in 2022.',
            'ASEAN (1967, Bangkok Declaration) began with Indonesia, Malaysia, the Philippines, Singapore and Thailand. Its headquarters are in Jakarta. Timor-Leste joined in October 2025 as the 11th member.',
            'India became a sectoral dialogue partner of ASEAN in 1992, a full dialogue partner in 1996 and a summit-level partner in 2002. It is also a member of the East Asia Summit (2005) and the ASEAN Regional Forum.',
            'Mekong-Ganga Cooperation (2000) links India with Cambodia, Laos, Myanmar, Thailand and Vietnam.',
          ]),
        },
        {
          heading: 'Strategic and Economic Groupings',
          body: pts([
            'Quad: India, the USA, Japan and Australia. The first meeting was in 2007, it was revived in 2017, and the first leaders summit (held online) took place in March 2021.',
            'BRICS: the term BRIC was coined in 2001, the first summit was in 2009 and South Africa joined in 2010. The New Development Bank is in Shanghai. Egypt, Ethiopia, Iran and the UAE joined in January 2024 and Indonesia in January 2025. Check the current member and partner lists.',
            'SCO: founded in 2001. India and Pakistan became full members in 2017, Iran in 2023 and Belarus in 2024. Its secretariat is in Beijing.',
            'G20: leaders summits began in 2008 after the financial crisis. India held the presidency from December 2022 to November 2023, and the African Union became a permanent member at the New Delhi summit.',
            'G7: the USA, UK, France, Germany, Italy, Japan and Canada, with the European Union taking part.',
            'IBSA (2003) links India, Brazil and South Africa. I2U2 (2022) links India, Israel, the UAE and the USA. IMEC, the India-Middle East-Europe Economic Corridor, was announced at the G20 summit in 2023.',
          ]),
        },
        {
          heading: 'Other Forums',
          body: pts([
            'Indian Ocean Rim Association, IORA (1997): India is a founder member and the secretariat is in Mauritius.',
            'International Solar Alliance (2015): launched by India and France at the Paris climate conference, with its headquarters in Gurugram.',
            'Coalition for Disaster Resilient Infrastructure, CDRI (2019): an Indian initiative on infrastructure that can withstand disasters.',
            'Non-Aligned Movement (1961, Belgrade): founded by Nehru, Nasser, Tito, Sukarno and Nkrumah.',
            'RCEP: India withdrew from the negotiations in November 2019.',
          ]),
        },
      ],
    },
    {
      id: 'ir-note-institutions',
      title: 'International Institutions, Diaspora and Soft Power',
      sections: [
        {
          heading: 'The United Nations',
          body: pts([
            'The UN was founded in 1945 and has 193 members. Its main organs are the General Assembly, the Security Council, the Economic and Social Council, the International Court of Justice and the Secretariat. The Trusteeship Council suspended its work in 1994.',
            'The Security Council has five permanent members with a veto (the USA, UK, France, Russia and China) and ten elected members who serve for two years. India has been elected eight times, most recently for 2021-22.',
            'Reform: the G4 (India, Brazil, Germany and Japan) seek permanent seats, while the Uniting for Consensus group opposes new permanent seats.',
            'The International Court of Justice sits at The Hague, with 15 judges serving nine-year terms. In the Kulbhushan Jadhav case (2019) it held that Pakistan must review the conviction and sentence.',
            'Specialised agencies: WHO, ILO and WIPO in Geneva, UNESCO in Paris, FAO in Rome, the IAEA in Vienna, UNEP in Nairobi.',
          ]),
        },
        {
          heading: 'Economic Institutions',
          body: pts([
            'The Bretton Woods conference (1944) created the IMF and the World Bank, both based in Washington DC.',
            'The WTO began in 1995, replacing the GATT of 1948, and is based in Geneva.',
            'The New Development Bank (BRICS, Shanghai) and the Asian Infrastructure Investment Bank (2016, Beijing) are newer lenders. The Asian Development Bank is in Manila.',
            'India works through these bodies to press for fairer trade rules, a larger voice for developing countries and climate finance.',
          ]),
        },
        {
          heading: 'Diaspora and Soft Power',
          body: pts([
            'Pravasi Bharatiya Divas is observed on 9 January, the day Gandhi returned from South Africa in 1915. It has been held since 2003.',
            'The Overseas Citizenship of India scheme began in 2005, and the PIO card was merged into it in 2015. India is the largest recipient of remittances in the world.',
            'Evacuations: Operation Raahat (Yemen, 2015), the Vande Bharat Mission (COVID-19, 2020), Operation Devi Shakti (Afghanistan, 2021), Operation Ganga (Ukraine, 2022), Operation Kaveri (Sudan, 2023) and Operation Ajay (Israel, 2023).',
            'Soft power: the Indian Council for Cultural Relations (1950, founded by Maulana Azad), the ITEC programme (1964), the International Day of Yoga (21 June, first held in 2015) and Vaccine Maitri (2021).',
            'Ethical issues in international relations include aid with conditions, the arms trade, climate responsibility and human rights set against strategic interests.',
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([
      ['ir', 1, 10, 'ir.neighbourhood'],
      ['ir', 11, 22, 'ir.groupings'],
      ['ir', 23, 30, 'ir.institutions-diaspora'],
    ]),
    flashcards: expand([
      ['ir-fc', 1, 4, 'ir.neighbourhood'],
      ['ir-fc', 5, 9, 'ir.groupings'],
      ['ir-fc', 10, 12, 'ir.institutions-diaspora'],
    ]),
    notes: {
      'ir-note-neighbourhood': ['ir.neighbourhood'],
      'ir-note-groupings': ['ir.groupings'],
      'ir-note-institutions': ['ir.institutions-diaspora'],
    },
  },
};
