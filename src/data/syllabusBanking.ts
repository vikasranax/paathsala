import { stage, subject } from './syllabusTypes';
import type { ExamSyllabus } from './syllabusTypes';

const prelimsSubjects = (p: string) => [
  subject(`${p}-pre-eng`, 'English Language', [
    'Reading comprehension',
    'Cloze test',
    'Error spotting',
    'Sentence improvement and fillers',
    'Para jumbles',
    'Vocabulary: synonyms, antonyms, idioms',
    'Word swap and phrase replacement',
  ]),
  subject(`${p}-pre-quant`, 'Quantitative Aptitude', [
    'Simplification and approximation',
    'Number series',
    'Quadratic equations',
    'Data interpretation: tables, bar, line, pie',
    'Percentage and ratio',
    'Average, ages and partnership',
    'Profit, loss and interest',
    'Time and work; time, speed and distance',
    'Mixtures and alligation',
    'Mensuration',
    'Permutation, combination and probability',
    'Number system',
  ]),
  subject(`${p}-pre-reason`, 'Reasoning Ability', [
    'Puzzles',
    'Seating arrangement: linear and circular',
    'Syllogism',
    'Inequalities',
    'Coding-decoding',
    'Blood relations',
    'Direction sense',
    'Order and ranking',
    'Alphanumeric series',
    'Data sufficiency',
  ]),
];

const mainsSubjects = (p: string) => [
  subject(`${p}-main-reason`, 'Reasoning and Computer Aptitude', [
    'Advanced puzzles and floor or box puzzles',
    'Complex seating arrangement',
    'Input-output and machine input',
    'Logical reasoning: statements, assumptions, arguments',
    'Data sufficiency',
    'Computer fundamentals',
    'MS Office and shortcut keys',
    'Networking, internet and security',
  ]),
  subject(`${p}-main-ga`, 'General, Economy and Banking Awareness', [
    'Banking awareness: RBI, functions and policy tools',
    'Banking terms and products',
    'Financial awareness: insurance, capital market, SEBI',
    'Payment systems and fintech',
    'Economy basics and Budget',
    'Government schemes',
    'Current affairs: national and international',
    'Static GK: awards, books, summits, headquarters',
    'Important days and sports',
  ]),
  subject(`${p}-main-eng`, 'English Language', [
    'Reading comprehension',
    'Cloze test',
    'Error spotting',
    'Para jumbles and sentence completion',
    'Vocabulary',
    'Sentence improvement',
  ]),
  subject(`${p}-main-di`, 'Data Analysis and Interpretation', [
    'Data interpretation sets: table, bar, line, pie',
    'Caselets, radar and mixed graphs',
    'Data sufficiency',
    'Advanced arithmetic',
    'Quadratic equations and number series',
    'Probability, permutation and combination',
  ]),
  subject(`${p}-main-desc`, 'Descriptive: Letter and Essay', [
    'Letter writing: formal and informal',
    'Essay writing',
    'Banking and economy essay topics',
    'Time management for typed answers',
  ]),
];

export const ibpsPoSyllabus: ExamSyllabus = {
  note: 'Follows the IBPS PO stages: Prelims screens, and only Mains and Interview count for merit. Confirm section marks and timings against the current IBPS notification.',
  stages: [
    stage('ibps-pre', 'Prelims', '100 questions · 100 marks · 60 minutes in total with separate timing for each section · quarter mark deducted per wrong answer · qualifying only', prelimsSubjects('ibps')),
    stage('ibps-main', 'Mains', 'Objective sections are timed separately · 225 marks in total including the descriptive test · quarter mark deducted per wrong objective answer', mainsSubjects('ibps')),
    stage('ibps-int', 'Interview', 'Final merit uses Mains and Interview marks', [
      subject('ibps-int-core', 'Interview preparation', [
        'Detailed application and profile preparation',
        'Banking and current affairs for the interview',
        'Communication and confidence',
      ]),
    ]),
  ],
};

export const sbiPoSyllabus: ExamSyllabus = {
  note: 'Follows the SBI PO phases: Prelims screens, and Mains plus Phase III decide merit. Confirm details against the current SBI notification.',
  stages: [
    stage('sbi-pre', 'Phase I: Prelims', 'English 30 · Quant 35 · Reasoning 35 questions · 100 marks · 20 minutes per section · 0.25 marks deducted per wrong answer · qualifying only', prelimsSubjects('sbi')),
    stage('sbi-main', 'Phase II: Mains', 'Objective test 200 marks (3 hours, sectional timing) plus descriptive test 50 marks (letter and essay, 30 minutes) · 0.25 deducted per wrong objective answer', mainsSubjects('sbi')),
    stage('sbi-p3', 'Phase III: Group Exercise and Interview', '50 marks · Mains and Phase III scores decide final merit', [
      subject('sbi-p3-core', 'Phase III preparation', [
        'Psychometric test practice',
        'Group exercise preparation',
        'Interview preparation and DAF',
        'Banking and current affairs for the interview',
        'Communication and body language',
      ]),
    ]),
  ],
};
