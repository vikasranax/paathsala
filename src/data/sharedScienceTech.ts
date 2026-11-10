import type { ContentPack } from './contentPacks';
import { pts } from './packHelpers';

export const scienceTechPack: ContentPack = {
  topicByExam: {
    'upsc-cse': 'science',
    'ssc-cgl': 'ga',
    'rrb-ntpc': 'ga-railway',
    nda: 'gat',
    cds: 'ga-defence',
  },

  questions: [
    // Space and defence
    { id: 'st-1', text: 'ISRO was established in:', options: ['1962', '1969', '1975', '1984'], correctIndex: 1 },
    { id: 'st-2', text: 'The first Indian satellite, launched in 1975, was:', options: ['Aryabhata', 'Bhaskara', 'INSAT-1A', 'Rohini'], correctIndex: 0 },
    { id: 'st-3', text: 'The Mars Orbiter Mission entered the orbit of Mars in:', options: ['2013', '2016', '2019', '2014'], correctIndex: 3 },
    { id: 'st-4', text: 'Chandrayaan-3 soft-landed near the lunar south pole in:', options: ['2008', '2019', '2023', '2025'], correctIndex: 2 },
    { id: 'st-5', text: 'The father of the Indian space programme is:', options: ['Homi J. Bhabha', 'A. P. J. Abdul Kalam', 'C. V. Raman', 'Vikram Sarabhai'], correctIndex: 3 },
    { id: 'st-6', text: 'The Indian regional satellite navigation system is called:', options: ['GPS', 'Galileo', 'NavIC', 'GLONASS'], correctIndex: 2 },
    { id: 'st-7', text: 'The main launch centre of ISRO is at:', options: ['Sriharikota', 'Thumba', 'Balasore', 'Bengaluru'], correctIndex: 0 },
    { id: 'st-8', text: 'Aditya-L1 is the first Indian mission to study the:', options: ['Moon', 'Mars', 'Venus', 'Sun'], correctIndex: 3 },
    { id: 'st-9', text: 'BrahMos is a:', options: ['Ballistic missile for submarines', 'Supersonic cruise missile developed with Russia', 'Light combat aircraft', 'Main battle tank'], correctIndex: 1 },
    { id: 'st-10', text: 'The Integrated Guided Missile Development Programme was led by:', options: ['Vikram Sarabhai', 'Homi Bhabha', 'A. P. J. Abdul Kalam', 'Satish Dhawan'], correctIndex: 2 },

    // Nuclear and energy
    { id: 'st-11', text: 'The first nuclear power station of India, commissioned in 1969, is at:', options: ['Kalpakkam', 'Kudankulam', 'Narora', 'Tarapur'], correctIndex: 3 },
    { id: 'st-12', text: 'Homi J. Bhabha is known as the architect of the:', options: ['Green Revolution', 'Indian nuclear programme', 'White Revolution', 'Telecom revolution'], correctIndex: 1 },
    { id: 'st-13', text: 'The third stage of the Indian nuclear power programme is based on:', options: ['Natural uranium', 'Coal', 'Thorium', 'Heavy water only'], correctIndex: 2 },
    { id: 'st-14', text: 'The first Indian nuclear test, Smiling Buddha, took place in:', options: ['1974', '1964', '1998', '2006'], correctIndex: 0 },

    // Biotechnology and health
    { id: 'st-15', text: 'CRISPR-Cas9 is a technology used for:', options: ['Radio communication', 'Water purification', 'Weather forecasting', 'Genome editing'], correctIndex: 3 },
    { id: 'st-16', text: 'The polymerase chain reaction (PCR) is used to:', options: ['Measure blood pressure', 'Amplify DNA', 'Detect radiation', 'Purify water'], correctIndex: 1 },
    { id: 'st-17', text: 'Deficiency of vitamin C causes:', options: ['Rickets', 'Night blindness', 'Scurvy', 'Beriberi'], correctIndex: 2 },
    { id: 'st-18', text: 'Deficiency of vitamin D causes:', options: ['Scurvy', 'Pellagra', 'Anaemia', 'Rickets'], correctIndex: 3 },
    { id: 'st-19', text: 'Which blood group is called the universal donor for red blood cells?', options: ['AB positive', 'O negative', 'A negative', 'B positive'], correctIndex: 1 },
    { id: 'st-20', text: 'Which of the following diseases is caused by a virus?', options: ['Malaria', 'Tuberculosis', 'Dengue', 'Cholera'], correctIndex: 2 },

    // Information technology
    { id: 'st-21', text: 'The Digital India programme was launched in:', options: ['2015', '2010', '2012', '2018'], correctIndex: 0 },
    { id: 'st-22', text: 'In computing, phishing means:', options: ['Tricking users into revealing sensitive information', 'Speeding up internet connections', 'Backing up files', 'Compressing files'], correctIndex: 0 },
    { id: 'st-23', text: 'Ransomware is malicious software that:', options: ['Speeds up a computer', 'Removes viruses', 'Locks or encrypts data and demands payment', 'Blocks only pop-ups'], correctIndex: 2 },
    { id: 'st-24', text: 'Which technology records transactions in linked, tamper-resistant blocks?', options: ['Bluetooth', 'Blockchain', 'Broadband', 'Bitmap'], correctIndex: 1 },
    { id: 'st-25', text: 'IoT stands for:', options: ['Input of Technology', 'Integration of Telecom', 'Internet of Time', 'Internet of Things'], correctIndex: 3 },

    // Basic science
    { id: 'st-26', text: 'The speed of light in vacuum is approximately:', options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10⁵ m/s', '3 × 10¹⁰ m/s'], correctIndex: 0 },
    { id: 'st-27', text: 'The pH of pure water at room temperature is:', options: ['7', '0', '14', '10'], correctIndex: 0 },
    { id: 'st-28', text: 'Which gas is the most abundant in the atmosphere of the Earth?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'], correctIndex: 1 },
    { id: 'st-29', text: 'Sound cannot travel through:', options: ['Vacuum', 'Water', 'Steel', 'Air'], correctIndex: 0 },
    { id: 'st-30', text: 'Which of these is the hardest natural substance?', options: ['Quartz', 'Graphite', 'Iron', 'Diamond'], correctIndex: 3 },
  ],

  flashcards: [
    { id: 'st-fc-1', front: 'Indian space milestones', back: 'ISRO 1969, Aryabhata 1975, Chandrayaan-1 2008, Mars Orbiter Mission launched 2013 and in Mars orbit 2014, Chandrayaan-3 landing 2023, Aditya-L1 launched 2023.' },
    { id: 'st-fc-2', front: 'Indian launch vehicles', back: 'PSLV: polar and sun-synchronous orbits. GSLV: geosynchronous transfer orbit with a cryogenic upper stage. LVM3: heavier payloads, used for Chandrayaan-3. SSLV: small satellites.' },
    { id: 'st-fc-3', front: 'Types of Indian satellites', back: 'INSAT and GSAT: communication and broadcasting, geostationary. IRS: remote sensing, sun-synchronous polar orbit. NavIC: regional navigation covering India and about 1,500 km beyond its borders.' },
    { id: 'st-fc-4', front: 'Orbits', back: 'Low Earth orbit: up to about 2,000 km. Geostationary orbit: about 36,000 km above the equator, 24-hour period, so the satellite seems fixed in the sky. Sun-synchronous polar orbit: passes over a place at the same local time.' },
    { id: 'st-fc-5', front: 'DRDO and Indian missiles', back: 'DRDO was formed in 1958. Prithvi: short-range ballistic. Agni: ballistic series. Akash: surface-to-air. Nag: anti-tank. BrahMos: supersonic cruise missile with Russia.' },
    { id: 'st-fc-6', front: 'Three-stage nuclear programme', back: 'Stage 1: pressurised heavy water reactors using natural uranium. Stage 2: fast breeder reactors using plutonium. Stage 3: thorium and uranium-233 reactors, because India has large thorium reserves.' },
    { id: 'st-fc-7', front: 'Fission vs fusion', back: 'Fission splits heavy nuclei such as uranium-235 and powers nuclear reactors. Fusion joins light nuclei such as hydrogen isotopes and powers the Sun. A moderator slows neutrons; control rods absorb them.' },
    { id: 'st-fc-8', front: 'Biotechnology tools', back: 'Restriction enzymes cut DNA and ligase joins it. PCR amplifies DNA. CRISPR-Cas9 edits genes. DNA fingerprinting is used in forensics. Bt cotton carries a Bacillus thuringiensis gene against bollworm.' },
    { id: 'st-fc-9', front: 'Vitamins and deficiency diseases', back: 'A: night blindness. B1: beriberi. B3: pellagra. B12: pernicious anaemia. C: scurvy. D: rickets. K: delayed blood clotting.' },
    { id: 'st-fc-10', front: 'Diseases by cause', back: 'Virus: dengue, polio, measles, rabies, hepatitis. Bacteria: tuberculosis, cholera, typhoid, tetanus. Protozoa: malaria, amoebiasis. Fungi: ringworm.' },
    { id: 'st-fc-11', front: 'Digital India and cyber terms', back: 'Digital India 2015. DigiLocker 2015. UPI 2016 (run by NPCI). Phishing tricks users into giving information. Ransomware locks data for payment. A firewall filters network traffic.' },
    { id: 'st-fc-12', front: 'Basic constants and SI units', back: 'Speed of light is about 3 × 10⁸ m/s. pH 7 is neutral. Force: newton. Energy: joule. Power: watt. Pressure: pascal. Frequency: hertz.' },
  ],

  notes: [
    {
      id: 'st-note-space',
      title: 'Space Technology and Defence',
      sections: [
        {
          heading: 'The Indian Space Programme',
          body: pts([
            'INCOSPAR was set up in 1962 under Vikram Sarabhai and became ISRO in 1969. Vikram Sarabhai is called the father of the Indian space programme.',
            'The Thumba Equatorial Rocket Launching Station near Thiruvananthapuram began operations in 1963.',
            'Aryabhata (1975) was the first Indian satellite and was launched from the Soviet Union. Rohini (1980) was the first satellite launched by an Indian rocket, SLV-3.',
            'The INSAT series serves communication, broadcasting and meteorology; the IRS series (from 1988) serves remote sensing.',
            'Chandrayaan-1 (2008) was a lunar orbiter whose instruments helped confirm water molecules on the Moon.',
            'The Mars Orbiter Mission (launched 2013, in orbit 2014) made India the first country to reach Mars orbit on its first attempt.',
            'Chandrayaan-3 (2023) soft-landed near the lunar south pole, making India the fourth country to land on the Moon. Aditya-L1 (2023) studies the Sun from near the L1 point.',
          ]),
        },
        {
          heading: 'Launch Vehicles, Orbits and Satellites',
          body: pts([
            'PSLV places satellites in polar and sun-synchronous orbits; in 2017 one PSLV mission carried 104 satellites.',
            'GSLV carries heavier satellites to geosynchronous transfer orbit using an indigenous cryogenic stage; LVM3 launched Chandrayaan-3; SSLV serves small satellites.',
            'Geostationary satellites orbit about 36,000 km above the equator with a 24-hour period, so they seem fixed over one spot; communication satellites use this orbit.',
            'Sun-synchronous polar orbits suit remote sensing because the satellite passes over a place at the same local time.',
            'NavIC (IRNSS) is the Indian regional navigation system covering India and about 1,500 km around it.',
            'Satish Dhawan Space Centre at Sriharikota is the main launch site of ISRO.',
          ]),
        },
        {
          heading: 'Defence Technology',
          body: pts([
            'DRDO was formed in 1958 to develop defence technology. The Integrated Guided Missile Development Programme (1983) was led by A. P. J. Abdul Kalam.',
            'Prithvi is a short-range surface-to-surface missile; Agni is a series of ballistic missiles; Akash is a surface-to-air missile; Nag is an anti-tank missile.',
            'BrahMos is a supersonic cruise missile developed jointly with Russia.',
            'Tejas is the indigenous light combat aircraft.',
            'INS Vikrant, commissioned in 2022, is the first aircraft carrier built in India.',
          ]),
        },
      ],
    },
    {
      id: 'st-note-nuclear-bio',
      title: 'Nuclear Energy, Biotechnology and Health',
      sections: [
        {
          heading: 'Nuclear Technology',
          body: pts([
            'Homi J. Bhabha is the architect of the Indian nuclear programme. The Atomic Energy Commission was set up in 1948 and the Department of Atomic Energy in 1954.',
            'The three-stage programme moves from natural uranium in heavy water reactors, to plutonium in fast breeder reactors, to thorium and uranium-233, since India has large thorium reserves in monazite sands.',
            'Tarapur (1969) was India first nuclear power station; other sites include Rawatbhata, Kalpakkam, Narora, Kakrapar, Kaiga and Kudankulam (built with Russian cooperation).',
            'The first nuclear test was at Pokhran in 1974 (Smiling Buddha); the second series was in May 1998 (Operation Shakti).',
            'Fission splits heavy nuclei such as uranium-235; fusion joins light nuclei and powers the Sun.',
            'In a reactor, a moderator such as heavy water or graphite slows neutrons and control rods absorb neutrons.',
          ]),
        },
        {
          heading: 'Biotechnology',
          body: pts([
            'Recombinant DNA technology uses restriction enzymes to cut DNA, ligase to join it and vectors such as plasmids to carry it.',
            'PCR amplifies a small amount of DNA and is used in diagnosis and forensics.',
            'DNA fingerprinting was developed by Alec Jeffreys in 1984 and is used in forensic science and paternity tests.',
            'CRISPR-Cas9 uses a guide RNA and the Cas9 enzyme to cut DNA at a chosen site; Emmanuelle Charpentier and Jennifer Doudna received the Nobel Prize in Chemistry in 2020.',
            'Bt cotton carries a gene from Bacillus thuringiensis that protects it from bollworm.',
            'Stem cells are unspecialised cells that can turn into different cell types.',
          ]),
        },
        {
          heading: 'Vitamins, Diseases and Blood Groups',
          body: pts([
            'Vitamin A: night blindness. B1: beriberi. B3: pellagra. B12: pernicious anaemia. C: scurvy. D: rickets. K: delayed clotting of blood.',
            'Iron deficiency causes anaemia, iodine deficiency causes goitre and calcium deficiency weakens bones.',
            'Viral diseases: dengue, polio, measles, rabies and hepatitis. Bacterial: tuberculosis, cholera, typhoid and tetanus. Protozoan: malaria and amoebiasis. Fungal: ringworm.',
            'Vaccines train the immune system; BCG protects against tuberculosis and oral polio vaccine against polio.',
            'O negative is the universal donor for red blood cells and AB positive is the universal recipient.',
          ]),
        },
      ],
    },
    {
      id: 'st-note-it-basic',
      title: 'IT, Digital India and Basic Science',
      sections: [
        {
          heading: 'Information Technology and Emerging Technology',
          body: pts([
            'Artificial intelligence is the ability of machines to perform tasks that normally need human intelligence. Machine learning lets systems learn from data. Deep learning uses layered neural networks.',
            'Generative AI creates new text, images or audio from patterns learned from data.',
            'Blockchain is a shared ledger of linked, tamper-resistant blocks; cryptocurrencies such as Bitcoin use it.',
            'The Internet of Things connects everyday devices to the internet. Cloud computing offers computing services on demand over the internet.',
            '5G offers higher speeds and lower delay than 4G. Quantum computers use qubits. Augmented reality overlays digital content on the real world.',
          ]),
        },
        {
          heading: 'Cyber Security and Digital India',
          body: pts([
            'Phishing tricks users into giving sensitive information. Ransomware locks or encrypts data and demands payment. Malware is any harmful software. A firewall filters network traffic.',
            'Two-factor authentication adds a second proof of identity, and a VPN encrypts a connection.',
            'The Information Technology Act 2000 is the main cyber law of India. CERT-In is the national agency for cyber security incidents. The Digital Personal Data Protection Act was passed in 2023.',
            'Digital India was launched in 2015. DigiLocker (2015) stores documents digitally. UPI (2016) is run by NPCI. Aadhaar is issued by UIDAI, set up in 2009.',
          ]),
        },
        {
          heading: 'Basic Physics and Chemistry Facts',
          body: pts([
            'Speed of light in vacuum is about 3 × 10⁸ m/s. Sound needs a medium and cannot travel through vacuum.',
            'Ohm law: V = IR, where V is voltage, I is current and R is resistance.',
            'Total internal reflection is used in optical fibres; a rainbow is caused by dispersion of light.',
            'SI units: force is the newton, energy the joule, power the watt, pressure the pascal and frequency the hertz.',
            'The pH scale runs from 0 to 14: below 7 is acidic, 7 is neutral and above 7 is basic.',
            'Common names: baking soda is sodium bicarbonate, washing soda is sodium carbonate, bleaching powder is calcium oxychloride, quicklime is calcium oxide and slaked lime is calcium hydroxide.',
            'Diamond and graphite are forms of carbon; diamond is the hardest natural substance. Nitrogen makes up about 78 per cent of air and oxygen about 21 per cent.',
          ]),
        },
      ],
    },
  ],
};
