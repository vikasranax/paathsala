export type NoteCategory =
  | 'history'
  | 'polity'
  | 'geography'
  | 'environment'
  | 'economy'
  | 'science'
  | 'maths'
  | 'reasoning'
  | 'english'
  | 'gk'
  | 'maps';

export const categoryOrder: NoteCategory[] = [
  'history',
  'polity',
  'geography',
  'environment',
  'economy',
  'science',
  'maths',
  'reasoning',
  'english',
  'gk',
  'maps',
];

export const categoryLabels: Record<NoteCategory, string> = {
  history: 'History',
  polity: 'Polity',
  geography: 'Geography',
  environment: 'Environment',
  economy: 'Economy',
  science: 'Science',
  maths: 'Maths',
  reasoning: 'Reasoning',
  english: 'English',
  gk: 'GK & Current Affairs',
  maps: 'Maps',
};

// The "GS" chip shows these General Studies subjects together.
export const gsCategories: NoteCategory[] = ['history', 'polity', 'geography', 'environment', 'economy', 'science'];

// Used for the older notes written before categories existed.
export function categoryFromTopic(topicId: string): NoteCategory {
  switch (topicId) {
    case 'history':
      return 'history';
    case 'polity':
      return 'polity';
    case 'geography':
      return 'geography';
    case 'environment':
      return 'environment';
    case 'economy':
    case 'ga-banking':
      return 'economy';
    case 'science':
    case 'physics':
    case 'chemistry':
    case 'botany':
    case 'zoology':
      return 'science';
    case 'maths':
    case 'quant':
      return 'maths';
    case 'reasoning':
      return 'reasoning';
    case 'english':
      return 'english';
    default:
      return 'gk';
  }
}
