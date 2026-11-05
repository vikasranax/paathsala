import type { Question } from './questions';
import type { Flashcard } from './flashcards';
import type { Note } from './notes';
import type { NoteCategory } from './categories';
import {
  getAncientHistoryQuestions,
  getAncientHistoryFlashcards,
  getAncientHistoryNotes,
} from './sharedAncientHistory';
import { polityPack } from './sharedPolity';
import { modernHistoryPack } from './sharedModernHistory';
import { geographyPack } from './sharedGeography';
import { economyPack } from './sharedEconomy';

export type ContentPack = {
  topicByExam: Record<string, string>;
  questions: Omit<Question, 'topicId'>[];
  flashcards: Flashcard[];
  notes: Omit<Note, 'topicId'>[];
};

type RegisteredPack = { category: NoteCategory; pack: ContentPack };

// New batch: create the pack file, import it above, add one line here with its category.
const packs: RegisteredPack[] = [
  { category: 'polity', pack: polityPack },
  { category: 'history', pack: modernHistoryPack },
  { category: 'geography', pack: geographyPack },
  { category: 'economy', pack: economyPack },
];

export function getPackQuestions(examId: string): Question[] {
  const fromPacks = packs.flatMap(({ pack }) => {
    const topicId = pack.topicByExam[examId];
    return topicId ? pack.questions.map((q) => ({ ...q, topicId })) : [];
  });
  return [...getAncientHistoryQuestions(examId), ...fromPacks];
}

export function getPackFlashcards(examId: string): Flashcard[] {
  const fromPacks = packs.flatMap(({ pack }) => (pack.topicByExam[examId] ? pack.flashcards : []));
  return [...getAncientHistoryFlashcards(examId), ...fromPacks];
}

export function getPackNotes(examId: string): Note[] {
  const ancient = getAncientHistoryNotes(examId).map((n) => ({ ...n, category: 'history' as const }));
  const fromPacks = packs.flatMap(({ category, pack }) => {
    const topicId = pack.topicByExam[examId];
    return topicId ? pack.notes.map((n) => ({ ...n, topicId, category })) : [];
  });
  return [...ancient, ...fromPacks];
}
