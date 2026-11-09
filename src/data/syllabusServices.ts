import { stage, subject } from './syllabusTypes';
import type { ExamSyllabus } from './syllabusTypes';

const rrbSubjects = (p: string) => [
  subject(`${p}-ga`, 'General Awareness', [
    'Current affairs',
    'Indian geography',
    'Indian history and culture',
    'Indian polity and Constitution',
    'Economics and government schemes',
    'General science',
    'Sports, books and authors',
    'Awards and personalities',
    'Computers and applications',
    'Abbreviations and static GK',
    'Transport systems and Indian Railways',
    'Flora, fauna and environment',
  ]),
  subject(`${p}-maths`, 'Mathematics', [
    'Number system and BODMAS',
    'Decimals and fractions',
    'LCM and HCF',
    'Ratio and proportion',
    'Percentage',
    'Mensuration',
    'Time and work',
    'Time and distance',
    'Simple and compound interest',
    'Profit and loss',
    'Elementary algebra',
    'Geometry and trigonometry',
    'Elementary statistics',
  ]),
  subject(`${p}-reason`, 'General Intelligence and Reasoning', [
    'Analogies',
    'Alphabetical and number series',
    'Coding and decoding',
    'Mathematical operations',
    'Relationships and blood relations',
    'Syllogism',
    'Jumbling',
    'Venn diagrams',
    'Data interpretation and sufficiency',
    'Conclusions and decision making',
    'Similarities and differences',
    'Analytical reasoning',
    'Classification',
    'Directions',
    'Statement-arguments and assumptions',
  ]),
];

export const rrbNtpcSyllabus: ExamSyllabus = {
  note: 'Pattern is for the Graduate-level posts. Section topics are common to both stages. Confirm against the current RRB notification for your post.',
  stages: [
    stage('rrb-cbt1', 'CBT 1', '100 questions · 100 marks · 90 minutes · one-third mark deducted per wrong answer · General Awareness 40, Maths 30, Reasoning 30 · screening', rrbSubjects('rrb1')),
    stage('rrb-cbt2', 'CBT 2', '120 questions · 120 marks · 90 minutes · one-third mark deducted per wrong answer · General Awareness 50, Maths 35, Reasoning 35 · merit stage', rrbSubjects('rrb2')),
    stage('rrb-skill', 'Skill tests and verification', 'Typing skill test or aptitude test depending on the post, then document verification and medical examination', [
      subject('rrb-skill-core', 'Post-specific stages', [
        'Typing skill test practice',
        'Computer-based aptitude test practice',
        'Document verification checklist',
        'Medical standards',
      ]),
    ]),
  ],
};

export const ndaSyllabus: ExamSyllabus = {
  note: 'Written exam is Mathematics plus General Ability Test, followed by the SSB interview. Mathematics is at Class 11-12 level. Confirm against the current UPSC notification.',
  stages: [
    stage('nda-math', 'Paper I: Mathematics', '120 questions · 300 marks · 2.5 hours · 0.83 marks deducted per wrong answer', [
      subject('nda-m-alg', 'Algebra', [
        'Sets, relations and functions',
        'Complex numbers',
        'Quadratic equations',
        'Sequences and series',
        'Permutations and combinations',
        'Binomial theorem',
        'Logarithms',
        'Matrices and determinants',
      ]),
      subject('nda-m-trig', 'Trigonometry', [
        'Trigonometric ratios and identities',
        'Heights and distances',
        'Inverse trigonometric functions',
      ]),
      subject('nda-m-geo', 'Analytical geometry and vectors', [
        'Cartesian coordinates and straight lines',
        'Circle, parabola, ellipse, hyperbola',
        'Three-dimensional geometry',
        'Vector algebra',
      ]),
      subject('nda-m-calc', 'Calculus', [
        'Limits and continuity',
        'Differentiation and applications',
        'Integration and applications',
        'Differential equations',
      ]),
      subject('nda-m-stat', 'Statistics and probability', [
        'Frequency distributions and graphs',
        'Measures of central tendency and dispersion',
        'Probability',
      ]),
    ]),
    stage('nda-gat', 'Paper II: General Ability Test', '150 questions · 600 marks · 2.5 hours · 1.33 marks deducted per wrong answer', [
      subject('nda-g-eng', 'Part A: English', [
        'Grammar and usage',
        'Vocabulary',
        'Comprehension and cohesion',
        'Sentence arrangement and correction',
      ]),
      subject('nda-g-phy', 'Part B: Physics', [
        'Properties and states of matter',
        'Mechanics: motion, force, energy',
        'Heat and sound',
        'Light and optics',
        'Electricity and magnetism',
        'Modern physics basics',
      ]),
      subject('nda-g-chem', 'Part B: Chemistry', [
        'Physical and chemical changes',
        'Elements, compounds and mixtures',
        'Atomic structure and periodic table',
        'Acids, bases and salts',
        'Metals, non-metals and carbon compounds',
        'Fuels, fertilisers and everyday materials',
      ]),
      subject('nda-g-bio', 'Part B: General Science (Biology)', [
        'Cell and tissues',
        'Human body and nutrition',
        'Diseases and prevention',
        'Classification of plants and animals',
        'Environment and ecology',
      ]),
      subject('nda-g-hist', 'Part B: History and Freedom Movement', [
        'Ancient, medieval and modern India in outline',
        'Freedom movement',
        'World history basics: renaissance and revolutions',
      ]),
      subject('nda-g-geo', 'Part B: Geography', [
        'Earth, latitudes and longitudes',
        'Atmosphere, weather and climate',
        'Indian physical geography',
        'Resources and agriculture',
        'Maps and world geography',
      ]),
      subject('nda-g-ca', 'Part B: Current Events', [
        'National and international events',
        'Defence and sports in the news',
        'Science and awards',
      ]),
    ]),
    stage('nda-ssb', 'SSB interview', 'Held after the written exam', [
      subject('nda-ssb-core', 'SSB preparation', [
        'Screening test: intelligence and picture perception',
        'Psychology tests',
        'Group tasks',
        'Personal interview',
        'Conference',
      ]),
    ]),
  ],
};

export const cdsSyllabus: ExamSyllabus = {
  note: 'IMA, INA and AFA candidates take all three written papers; OTA candidates take English and General Knowledge only. Confirm against the current UPSC notification.',
  stages: [
    stage('cds-eng', 'Paper I: English', '120 questions · 100 marks · 2 hours · one-third of the question marks deducted per wrong answer', [
      subject('cds-e-gram', 'Grammar and usage', [
        'Error spotting and sentence improvement',
        'Tenses, articles and prepositions',
        'Subject-verb agreement',
        'Active-passive and direct-indirect speech',
        'Ordering of words and sentences',
      ]),
      subject('cds-e-vocab', 'Vocabulary', [
        'Synonyms and antonyms',
        'Idioms and phrases',
        'One-word substitution',
        'Spelling and word usage',
      ]),
      subject('cds-e-comp', 'Comprehension', [
        'Reading comprehension passages',
        'Cloze passages',
      ]),
    ]),
    stage('cds-gk', 'Paper II: General Knowledge', '120 questions · 100 marks · 2 hours · one-third of the question marks deducted per wrong answer', [
      subject('cds-g-hist', 'History and culture', [
        'Ancient and medieval India',
        'Modern India and freedom struggle',
        'Art and culture',
      ]),
      subject('cds-g-geo', 'Geography', [
        'Physical geography',
        'Indian geography',
        'World geography and maps',
      ]),
      subject('cds-g-polity', 'Polity and economy', [
        'Indian Constitution and governance',
        'Indian economy basics',
      ]),
      subject('cds-g-sci', 'General science', [
        'Physics in everyday life',
        'Chemistry in everyday life',
        'Biology and health',
      ]),
      subject('cds-g-ca', 'Current affairs, defence and sports', [
        'National and international events',
        'Defence developments and exercises',
        'Sports and awards',
      ]),
    ]),
    stage('cds-math', 'Paper III: Elementary Mathematics (IMA, INA, AFA)', '100 questions · 100 marks · 2 hours · not for OTA candidates', [
      subject('cds-m-arith', 'Arithmetic', [
        'Number system',
        'Percentage and ratio',
        'Average',
        'Simple and compound interest',
        'Profit and loss',
        'Time and work',
        'Time, speed and distance',
      ]),
      subject('cds-m-alg', 'Algebra', [
        'Polynomials and factorisation',
        'Linear and quadratic equations',
        'Surds and indices',
      ]),
      subject('cds-m-geo', 'Geometry and mensuration', [
        'Lines, angles and triangles',
        'Circles and quadrilaterals',
        'Mensuration of 2D and 3D shapes',
      ]),
      subject('cds-m-trig', 'Trigonometry', [
        'Ratios and identities',
        'Heights and distances',
      ]),
      subject('cds-m-stat', 'Statistics', [
        'Mean, median and mode',
        'Graphs and data representation',
      ]),
    ]),
    stage('cds-ssb', 'SSB interview', '300 marks for IMA, INA and AFA; 200 marks for OTA', [
      subject('cds-ssb-core', 'SSB preparation', [
        'Screening test',
        'Psychology tests',
        'Group tasks',
        'Personal interview',
      ]),
    ]),
  ],
};
