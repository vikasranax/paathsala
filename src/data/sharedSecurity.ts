import type { ContentPack } from './contentPacks';
import { expand } from './contentTags';
import { pts } from './packHelpers';

export const securityPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'security',
    'ssc-cgl': 'ga',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // Internal security and border management
    { id: 'sd-1', text: 'The National Investigation Agency (NIA) was set up under an Act passed in:', options: ['2002', '2005', '2008', '2012'], correctIndex: 2 },
    { id: 'sd-2', text: 'The National Security Guard (NSG), the elite counter-terror force, was raised in:', options: ['1965', '1984', '1999', '2008'], correctIndex: 1 },
    { id: 'sd-3', text: 'The Border Security Force guards the borders with Pakistan and:', options: ['China', 'Nepal', 'Bangladesh', 'Myanmar'], correctIndex: 2 },
    { id: 'sd-4', text: 'The Indo-Tibetan Border Police was raised in 1962 mainly to guard the border with:', options: ['Pakistan', 'China', 'Nepal', 'Myanmar'], correctIndex: 1 },
    { id: 'sd-5', text: 'The Assam Rifles guards the border with:', options: ['Bhutan', 'Bangladesh', 'Myanmar', 'Nepal'], correctIndex: 2 },
    { id: 'sd-6', text: 'The Armed Forces (Special Powers) Act applies in areas declared:', options: ['Special economic zones', 'Disturbed areas', 'Union Territories', 'Coastal zones'], correctIndex: 1 },
    { id: 'sd-7', text: 'The Naxalite movement began in 1967 at Naxalbari in:', options: ['Bihar', 'Odisha', 'West Bengal', 'Andhra Pradesh'], correctIndex: 2 },
    { id: 'sd-8', text: 'The Unlawful Activities (Prevention) Act was first passed in:', options: ['1950', '1967', '1985', '2002'], correctIndex: 1 },
    { id: 'sd-9', text: 'The Indian Coast Guard functions under the Ministry of:', options: ['Home Affairs', 'Defence', 'Shipping', 'External Affairs'], correctIndex: 1 },
    { id: 'sd-10', text: 'The Vibrant Villages Programme, launched in 2023, is meant for villages along the:', options: ['Coastline', 'Northern border', 'Bangladesh border', 'Sri Lanka border'], correctIndex: 1 },
    { id: 'sd-11', text: 'The Supreme Court declared the Salwa Judum practice unconstitutional in:', options: ['2005', '2008', '2011', '2016'], correctIndex: 2 },
    { id: 'sd-12', text: 'The Indian Penal Code was replaced from 1 July 2024 by the:', options: ['Bharatiya Nyaya Sanhita', 'Bharatiya Nagarik Suraksha Sanhita', 'Bharatiya Sakshya Adhiniyam', 'Bharatiya Dand Vidhan'], correctIndex: 0 },

    // Cyber security and organised crime
    { id: 'sd-13', text: 'The Information Technology Act was passed in:', options: ['1998', '2000', '2005', '2008'], correctIndex: 1 },
    { id: 'sd-14', text: 'Section 66A of the IT Act was struck down by the Supreme Court in the case of:', options: ['Shreya Singhal', 'Maneka Gandhi', 'Kesavananda Bharati', 'Vishaka'], correctIndex: 0 },
    { id: 'sd-15', text: 'CERT-In is the national agency for:', options: ['Census collection', 'Cyber security incident response', 'Election security', 'Border patrol'], correctIndex: 1 },
    { id: 'sd-16', text: 'The NCIIPC is responsible for protecting:', options: ['Personal social media accounts', 'Bank lockers', 'Critical information infrastructure', 'Military barracks'], correctIndex: 2 },
    { id: 'sd-17', text: 'The national helpline for reporting cyber financial fraud is:', options: ['100', '112', '1930', '1098'], correctIndex: 2 },
    { id: 'sd-18', text: 'The Golden Crescent drug-producing region includes Afghanistan, Pakistan and:', options: ['Myanmar', 'Iran', 'Laos', 'Thailand'], correctIndex: 1 },
    { id: 'sd-19', text: 'The Narcotic Drugs and Psychotropic Substances Act was enacted in:', options: ['1985', '1992', '2002', '2012'], correctIndex: 0 },
    { id: 'sd-20', text: 'The Financial Action Task Force, which sets standards against money laundering, is based in:', options: ['Geneva', 'Washington DC', 'Paris', 'London'], correctIndex: 2 },

    // Disaster management
    { id: 'sd-21', text: 'The Disaster Management Act was passed in:', options: ['1999', '2005', '2010', '2013'], correctIndex: 1 },
    { id: 'sd-22', text: 'The National Disaster Management Authority is chaired by the:', options: ['Home Minister', 'Prime Minister', 'President', 'Defence Minister'], correctIndex: 1 },
    { id: 'sd-23', text: 'A State Disaster Management Authority is chaired by the:', options: ['Governor', 'Chief Secretary', 'Chief Minister', 'Chief Justice'], correctIndex: 2 },
    { id: 'sd-24', text: 'A District Disaster Management Authority is chaired by the:', options: ['Superintendent of Police', 'Civil Judge', 'Block Development Officer', 'District Magistrate or Collector'], correctIndex: 3 },
    { id: 'sd-25', text: 'The Sendai Framework for Disaster Risk Reduction covers the period:', options: ['2005 to 2015', '2010 to 2020', '2015 to 2030', '2020 to 2040'], correctIndex: 2 },
    { id: 'sd-26', text: 'The Indian Ocean tsunami that led to the Disaster Management Act struck in:', options: ['2001', '2004', '2008', '2011'], correctIndex: 1 },
    { id: 'sd-27', text: "India's tsunami early warning centre, INCOIS, is located at:", options: ['Chennai', 'Hyderabad', 'Mumbai', 'Kolkata'], correctIndex: 1 },
    { id: 'sd-28', text: 'Which seismic zone of India has the highest earthquake risk?', options: ['Zone II', 'Zone III', 'Zone IV', 'Zone V'], correctIndex: 3 },
    { id: 'sd-29', text: 'The National Disaster Response Force is under the Ministry of:', options: ['Home Affairs', 'Defence', 'Environment', 'Rural Development'], correctIndex: 0 },
    { id: 'sd-30', text: 'The nodal agency for landslide studies in India is the:', options: ['Survey of India', 'Geological Survey of India', 'Indian Meteorological Department', 'Central Water Commission'], correctIndex: 1 },
  ],

  flashcards: [
    { id: 'sd-fc-1', front: 'Forces and the borders they guard', back: 'BSF: Pakistan and Bangladesh borders. ITBP (1962): India-China border. SSB: Nepal and Bhutan borders. Assam Rifles: Myanmar border. CRPF: internal security and counter-insurgency. CISF: industrial units and airports. NSG (1984): counter-terror. Coast Guard: under the Ministry of Defence.' },
    { id: 'sd-fc-2', front: 'Laws on internal security', back: 'UAPA 1967 (amended in 2019 to allow individuals to be designated terrorists). NIA Act 2008. AFSPA 1958 for disturbed areas. National Security Act 1980 (preventive detention). From 1 July 2024 the BNS, BNSS and BSA replaced the IPC, CrPC and Evidence Act.' },
    { id: 'sd-fc-3', front: 'Left Wing Extremism and the North-East', back: 'LWE began at Naxalbari (1967). The response combines security action, development and rights (the SAMADHAN doctrine, 2017). Salwa Judum was declared unconstitutional in 2011. North-East peace accords: Mizo Accord 1986, Bodo Accord 2020, Karbi Anglong Agreement 2021.' },
    { id: 'sd-fc-4', front: 'Border and coastal management', back: 'About 15,000 km of land border and about 7,500 km of coastline including islands. Tools: fencing, floodlighting, Integrated Check Posts (Attari, Petrapole), BADP and the Vibrant Villages Programme (2023). After 26/11: Coastal Security Scheme with the Navy, Coast Guard and marine police.' },
    { id: 'sd-fc-5', front: 'Cyber threats and agencies', back: 'Threats: phishing, ransomware, malware, DDoS, identity theft, online fraud and deepfakes. Agencies: CERT-In (incident response), NCIIPC (critical infrastructure), I4C (MHA, 2018), the National Cybercrime Reporting Portal and helpline 1930, and the Defence Cyber Agency (2019).' },
    { id: 'sd-fc-6', front: 'Cyber law', back: 'IT Act 2000 (amended 2008): hacking, identity theft, cheating by personation, cyber terrorism and obscene content. Section 66A was struck down in Shreya Singhal (2015). Section 69A allows blocking of content. The Digital Personal Data Protection Act 2023 covers personal data.' },
    { id: 'sd-fc-7', front: 'Organised crime, drugs and money laundering', back: 'Golden Crescent: Afghanistan, Iran, Pakistan. Golden Triangle: Myanmar, Laos, Thailand. NDPS Act 1985 and the NCB (1986). PMLA 2002 and the Enforcement Directorate. FIU-IND (2004). FATF (1989, Paris; India a member since 2010).' },
    { id: 'sd-fc-8', front: 'Disaster management institutions', back: 'Disaster Management Act 2005. NDMA (chaired by the Prime Minister), SDMA (Chief Minister), DDMA (District Collector, with an elected local head as co-chair). NDRF (2006, under the MHA). NIDM trains officials. Funds: NDRF and SDRF.' },
    { id: 'sd-fc-9', front: 'Disaster concepts and phases', back: 'Risk rises with hazard and vulnerability and falls with capacity. Phases: mitigation, preparedness, response, and recovery with rehabilitation. Disasters can be natural (earthquake, flood, cyclone) or human-made (industrial accidents, fires).' },
    { id: 'sd-fc-10', front: 'Sendai Framework (2015 to 2030)', back: 'Four priorities: understand disaster risk; strengthen disaster risk governance; invest in resilience; improve preparedness and Build Back Better. It followed the Yokohama Strategy (1994) and the Hyogo Framework (2005 to 2015). India launched CDRI in 2019.' },
    { id: 'sd-fc-11', front: 'Hazards and the agencies that watch them', back: 'IMD: cyclones, heat waves and monsoon. INCOIS (Hyderabad): tsunami and ocean warnings. Central Water Commission: flood forecasts. GSI: landslides. BIS seismic zones: II, III, IV and V, with Zone V the highest risk, covering the Himalaya and the North-East.' },
    { id: 'sd-fc-12', front: 'Notable disasters and lessons', back: 'Bhopal gas tragedy (1984); Odisha super cyclone (1999); Gujarat earthquake (2001); Indian Ocean tsunami (2004); Uttarakhand floods (2013); Cyclone Phailin (2013), where early evacuation kept deaths low; Kerala floods (2018).' },
  ],

  notes: [
    {
      id: 'sd-note-internal',
      title: 'Internal Security and Border Management',
      sections: [
        {
          heading: 'Threats and the Forces That Meet Them',
          body: pts([
            'Main internal security challenges: terrorism, Left Wing Extremism (LWE), insurgency in the North-East, communal and ethnic violence, organised crime and cyber threats.',
            'Police and public order are State subjects, but Article 355 makes it the duty of the Union to protect every state against external aggression and internal disturbance.',
            'Central Armed Police Forces work under the Ministry of Home Affairs: the BSF (1965, Pakistan and Bangladesh borders), ITBP (1962, China border), SSB (Nepal and Bhutan borders), CRPF (internal security), CISF (industrial units and airports) and the Assam Rifles (Myanmar border).',
            'The NSG (1984) is a counter-terror force. The NIA was created under the NIA Act 2008 after the Mumbai attacks of November 2008 to investigate terror cases across states.',
            'The Indian Coast Guard works under the Ministry of Defence. NATGRID links intelligence and other databases for security agencies.',
            'From 1 July 2024 the Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita and Bharatiya Sakshya Adhiniyam replaced the Indian Penal Code, the Code of Criminal Procedure and the Evidence Act.',
          ]),
        },
        {
          heading: 'Laws, Extremism and Insurgency',
          body: pts([
            'The Unlawful Activities (Prevention) Act, 1967 (UAPA) was amended several times, and the 2019 amendment allows the government to designate individuals as terrorists. The National Security Act, 1980 allows preventive detention.',
            'The Armed Forces (Special Powers) Act, 1958 gives the armed forces special powers in areas declared disturbed. Critics point to human rights concerns, and its extent has been reduced over time in some states.',
            'Left Wing Extremism began at Naxalbari in West Bengal in 1967 and later spread through the Red Corridor of central and eastern India. The state response combines security action, development and protection of tribal rights, summed up in the SAMADHAN doctrine (2017).',
            'In 2011 the Supreme Court declared the Salwa Judum practice of arming local youth unconstitutional. The Centre set a target of ending LWE by March 2026, so check the current position.',
            'North-East: insurgencies have been addressed through peace accords such as the Mizo Accord (1986), the Bodo Accord (2020) and the Karbi Anglong Agreement (2021).',
            'Jammu and Kashmir: cross-border terrorism has been a long-standing concern. The Pulwama attack (2019) was followed by the Balakot air strike, and the Pahalgam attack (April 2025) by Operation Sindoor (May 2025). Check the details.',
          ]),
        },
        {
          heading: 'Border and Coastal Management',
          body: pts([
            'India has about 15,000 km of land border and about 7,500 km of coastline including its islands. The Department of Border Management in the Ministry of Home Affairs looks after the land borders.',
            'Land borders: fencing, floodlighting, border outposts, Integrated Check Posts (Attari on the Pakistan border and Petrapole on the Bangladesh border), and technology under the Comprehensive Integrated Border Management System.',
            'The Border Area Development Programme (BADP) funds roads, schools and health care in border areas, and the Vibrant Villages Programme (2023) targets villages along the northern border.',
            'After the 26/11 attack, coastal security was strengthened through the Coastal Security Scheme, with a three-tier structure of the Indian Navy, the Coast Guard and the marine police, and through fishermen identity cards and tracking of vessels.',
            'Challenges: porous borders, smuggling, illegal migration, difficult terrain, fishermen crossing maritime boundaries and the need to coordinate many agencies.',
          ]),
        },
      ],
    },
    {
      id: 'sd-note-cyber',
      title: 'Cyber Security and Organised Crime',
      sections: [
        {
          heading: 'Cyber Threats and Agencies',
          body: pts([
            'Common threats: phishing (tricking users into giving information), ransomware (locking data for payment), malware, denial-of-service attacks, identity theft, online financial fraud, deepfakes and attacks on power grids, banks and other critical systems.',
            'CERT-In is the national agency for responding to cyber security incidents. NCIIPC, under the NTRO, protects critical information infrastructure.',
            'The Indian Cyber Crime Coordination Centre (I4C, 2018) under the Ministry of Home Affairs coordinates action on cybercrime. Citizens can report through the National Cybercrime Reporting Portal or the helpline 1930.',
            'The Defence Cyber Agency (2019) is a tri-service body. The National Security Council Secretariat has a National Cyber Security Coordinator.',
            'Basic protection: strong and unique passwords, two-factor authentication, software updates, caution with links and attachments, and regular backups.',
          ]),
        },
        {
          heading: 'Cyber Law and Policy',
          body: pts([
            'The Information Technology Act, 2000 (amended 2008) covers hacking, identity theft (Section 66C), cheating by personation (66D), cyber terrorism (66F) and obscene content (Section 67).',
            'Section 66A, which punished offensive online messages, was struck down in Shreya Singhal v. Union of India (2015) as a violation of free speech.',
            'Section 69A allows the government to block content in the interest of security, public order and similar grounds. Section 79 gives intermediaries safe harbour if they follow the rules.',
            'The Digital Personal Data Protection Act, 2023 regulates the handling of personal data. The Supreme Court held privacy to be a fundamental right in K. S. Puttaswamy (2017).',
            'The National Cyber Security Policy was issued in 2013. India is not a party to the Budapest Convention on cybercrime.',
          ]),
        },
        {
          heading: 'Organised Crime, Drugs and Money Laundering',
          body: pts([
            'Organised crime means groups that make money through smuggling, extortion, trafficking, contract killing and similar crimes. Links with terror groups, as in narco-terrorism and fake currency, make it a security issue.',
            'Drug routes: the Golden Crescent (Afghanistan, Iran, Pakistan) and the Golden Triangle (Myanmar, Laos, Thailand). The Narcotic Drugs and Psychotropic Substances Act, 1985 is the main law and the Narcotics Control Bureau (1986) is the lead agency.',
            'The Prevention of Money Laundering Act, 2002 is enforced by the Enforcement Directorate. FIU-IND (2004) analyses suspicious transactions. Hawala is an informal way of moving money that is hard to trace.',
            'The Financial Action Task Force (1989, Paris) sets global standards against money laundering and terror financing. India has been a member since 2010.',
            'Human trafficking is dealt with under the Immoral Traffic (Prevention) Act, 1956 and the criminal law. International cooperation works through Interpol and mutual legal assistance treaties.',
          ]),
        },
      ],
    },
    {
      id: 'sd-note-disaster',
      title: 'Disaster Management',
      sections: [
        {
          heading: 'Concepts and Institutions',
          body: pts([
            'A disaster is a serious disruption that a community cannot cope with using its own resources. A hazard becomes a disaster when vulnerability is high and the capacity to cope is low.',
            'Phases of management: mitigation (reducing risk), preparedness, response, and recovery with rehabilitation and reconstruction.',
            'The Disaster Management Act, 2005 followed the Odisha super cyclone (1999), the Gujarat earthquake (2001) and the Indian Ocean tsunami (2004).',
            'Institutions: the National Disaster Management Authority (chaired by the Prime Minister), the National Executive Committee (headed by the Home Secretary), State Authorities (Chief Minister) and District Authorities (the Collector, with an elected local head as co-chair).',
            'The National Disaster Response Force (2006) works under the Ministry of Home Affairs. The National Institute of Disaster Management trains officials. Funds: the National and State Disaster Response Funds, with the Finance Commission advising on the state share.',
            'The National Disaster Management Plan, 2016 was the first national plan and follows the Sendai Framework.',
          ]),
        },
        {
          heading: 'Hazards in India and the Agencies That Watch Them',
          body: pts([
            'Earthquakes: BIS divides India into seismic Zones II to V. Zone V, the highest risk, includes the Himalayan belt, the North-East, Kutch and the Andaman and Nicobar Islands.',
            'Floods: frequent in the Ganga and Brahmaputra basins, as in the Kosi in Bihar. The Central Water Commission issues flood forecasts.',
            'Cyclones: the Bay of Bengal and the east coast are hit more often than the Arabian Sea and the west coast. IMD issues warnings and classifies storms from depression to super cyclonic storm. The National Cyclone Risk Mitigation Project builds shelters and warning systems.',
            'Tsunami: INCOIS in Hyderabad runs the tsunami early warning centre. Landslides: the Geological Survey of India is the nodal agency, and the Himalaya and Western Ghats are most at risk.',
            'Drought and heat waves: IMD gives forecasts, and states prepare Heat Action Plans, the first of which was in Ahmedabad in 2013.',
            'Industrial and chemical disasters: the Bhopal gas tragedy (1984) led to stronger environment and safety laws.',
          ]),
        },
        {
          heading: 'Global Frameworks and Lessons',
          body: pts([
            'Global frameworks: the Yokohama Strategy (1994), the Hyogo Framework (2005 to 2015) and the Sendai Framework (2015 to 2030).',
            'Sendai priorities: understanding disaster risk; strengthening disaster risk governance; investing in resilience; and better preparedness with Build Back Better in recovery. Its seven targets aim to cut deaths, affected people, economic loss and damage to critical infrastructure, and to improve strategies, cooperation and early warning.',
            'India launched the Coalition for Disaster Resilient Infrastructure (CDRI) in 2019. The Aapda Mitra scheme (2016) trains community volunteers.',
            'Lessons: early warning and timely evacuation (Cyclone Phailin, 2013) save lives; building in fragile hill areas needs care (Uttarakhand, 2013); river and reservoir management matters (Kerala floods, 2018).',
            'Community participation, local knowledge, insurance, land-use planning and strict building codes lower risk over time.',
          ]),
        },
      ],
    },
  ],

  tags: {
    questions: expand([
      ['sd', 1, 12, 'sec.internal-security'],
      ['sd', 13, 20, 'sec.cyber-organised-crime'],
      ['sd', 21, 30, 'sec.disaster-management'],
    ]),
    flashcards: expand([
      ['sd-fc', 1, 4, 'sec.internal-security'],
      ['sd-fc', 5, 7, 'sec.cyber-organised-crime'],
      ['sd-fc', 8, 12, 'sec.disaster-management'],
    ]),
    notes: {
      'sd-note-internal': ['sec.internal-security'],
      'sd-note-cyber': ['sec.cyber-organised-crime'],
      'sd-note-disaster': ['sec.disaster-management'],
    },
  },
};
