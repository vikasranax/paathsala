import { stage, subject } from './syllabusTypes';
import type { ExamSyllabus } from './syllabusTypes';

const physics = [
  'Units and measurements',
  'Kinematics',
  'Laws of motion',
  'Work, energy and power',
  'Rotational motion',
  'Gravitation',
  'Properties of solids and liquids',
  'Thermodynamics',
  'Kinetic theory of gases',
  'Oscillations and waves',
  'Electrostatics',
  'Current electricity',
  'Magnetic effects of current and magnetism',
  'Electromagnetic induction and AC',
  'Electromagnetic waves',
  'Optics',
  'Dual nature of matter and radiation',
  'Atoms and nuclei',
  'Electronic devices',
];

const chemPhysical = [
  'Some basic concepts of chemistry',
  'Atomic structure',
  'Chemical bonding and molecular structure',
  'States of matter and thermodynamics',
  'Equilibrium',
  'Redox reactions',
  'Solutions',
  'Electrochemistry',
  'Chemical kinetics',
];

const chemInorganic = [
  'Periodic table and periodicity',
  's-block and p-block elements',
  'd- and f-block elements',
  'Coordination compounds',
  'Environmental chemistry',
];

const chemOrganic = [
  'Basic principles of organic chemistry',
  'Hydrocarbons',
  'Haloalkanes and haloarenes',
  'Alcohols, phenols and ethers',
  'Aldehydes, ketones and carboxylic acids',
  'Amines',
  'Biomolecules',
  'Polymers and chemistry in everyday life',
];

const maths = [
  'Sets, relations and functions',
  'Complex numbers and quadratic equations',
  'Matrices and determinants',
  'Permutations and combinations',
  'Binomial theorem',
  'Sequences and series',
  'Limits, continuity and differentiability',
  'Integral calculus',
  'Differential equations',
  'Coordinate geometry: straight lines and conics',
  'Three-dimensional geometry',
  'Vector algebra',
  'Statistics and probability',
  'Trigonometry',
];

export const neetSyllabus: ExamSyllabus = {
  note: 'NEET chapters are notified each year by the NMC and NTA. These are the commonly followed Class 11 and 12 units. Confirm against the current NTA information bulletin.',
  stages: [
    stage('neet-ug', 'NEET UG', '180 compulsory MCQs · 720 marks · 3 hours · +4 / −1 · Physics 45, Chemistry 45, Biology 90', [
      subject('neet-phy', 'Physics', physics),
      subject('neet-chem-p', 'Chemistry: Physical', chemPhysical),
      subject('neet-chem-i', 'Chemistry: Inorganic', chemInorganic),
      subject('neet-chem-o', 'Chemistry: Organic', chemOrganic),
      subject('neet-bot', 'Biology: Botany', [
        'Diversity of living world',
        'Plant kingdom',
        'Morphology of flowering plants',
        'Anatomy of flowering plants',
        'Cell: structure and function',
        'Cell cycle and division',
        'Photosynthesis',
        'Respiration in plants',
        'Plant growth and development',
        'Transport and mineral nutrition',
        'Sexual reproduction in flowering plants',
        'Principles of inheritance',
        'Molecular basis of inheritance',
        'Biotechnology: principles and applications',
        'Organisms and populations',
        'Ecosystem and biodiversity',
      ]),
      subject('neet-zoo', 'Biology: Zoology', [
        'Animal kingdom',
        'Structural organisation in animals',
        'Biomolecules',
        'Digestion and absorption',
        'Breathing and gas exchange',
        'Body fluids and circulation',
        'Excretory products',
        'Locomotion and movement',
        'Neural control and coordination',
        'Chemical coordination',
        'Human reproduction',
        'Reproductive health',
        'Evolution',
        'Human health and disease',
        'Microbes in human welfare',
      ]),
    ]),
  ],
};

export const jeeMainSyllabus: ExamSyllabus = {
  note: 'JEE Main topics follow the NTA syllabus for Class 11 and 12 and can change by session. Confirm against the current NTA bulletin.',
  stages: [
    stage('jeem-p1', 'Paper 1 (B.E./B.Tech.)', '75 questions · 300 marks · 3 hours · 25 per subject (20 MCQs and 5 numerical) · +4 / −1 for MCQs · check the NTA bulletin for the numerical-question rule', [
      subject('jeem-phy', 'Physics', [...physics, 'Experimental skills']),
      subject('jeem-chem-p', 'Chemistry: Physical', chemPhysical),
      subject('jeem-chem-i', 'Chemistry: Inorganic', chemInorganic),
      subject('jeem-chem-o', 'Chemistry: Organic', chemOrganic),
      subject('jeem-math', 'Mathematics', maths),
    ]),
  ],
};

export const jeeAdvancedSyllabus: ExamSyllabus = {
  note: 'The JEE Advanced paper pattern and marking change every year. Use the official brochure from the organising IIT as the final reference.',
  stages: [
    stage('jeea-main', 'Paper 1 and Paper 2', 'Two papers of 3 hours each · question types and marking vary by year', [
      subject('jeea-phy', 'Physics', [
        'Mechanics',
        'Thermal physics',
        'Electricity and magnetism',
        'Optics',
        'Modern physics',
        'Experimental physics',
      ]),
      subject('jeea-chem', 'Chemistry', [
        'Physical chemistry',
        'Inorganic chemistry',
        'Organic chemistry',
      ]),
      subject('jeea-math', 'Mathematics', [
        'Algebra',
        'Trigonometry',
        'Analytical geometry',
        'Differential calculus',
        'Integral calculus',
        'Vectors',
        'Probability and statistics',
      ]),
    ]),
  ],
};
