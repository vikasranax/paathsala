import type { Question } from './questions';
import type { Flashcard } from './flashcards';
import type { Note } from './notes';
import {
  getAncientHistoryQuestions,
  getAncientHistoryFlashcards,
  getAncientHistoryNotes,
} from './sharedAncientHistory';
import { polityPack } from './sharedPolity';

export type ContentPack = {
  topicByExam: Record<string, string>;
  questions: Omit<Question, 'topicId'>[];
  flashcards: Flashcard[];
  notes: Omit<Note, 'topicId'>[];
};

// New batch: create a file that exports a ContentPack, import it above, add it here.
const packs: ContentPack[] = [polityPack];

export function getPackQuestions(examId: string): Question[] {
  const fromPacks = packs.flatMap((pack) => {
    const topicId = pack.topicByExam[examId];
    return topicId ? pack.questions.map((q) => ({ ...q, topicId })) : [];
  });
  return [...getAncientHistoryQuestions(examId), ...fromPacks];
}

export function getPackFlashcards(examId: string): Flashcard[] {
  const fromPacks = packs.flatMap((pack) => (pack.topicByExam[examId] ? pack.flashcards : []));
  return [...getAncientHistoryFlashcards(examId), ...fromPacks];
}

export function getPackNotes(examId: string): Note[] {
  const fromPacks = packs.flatMap((pack) => {
    const topicId = pack.topicByExam[examId];
    return topicId ? pack.notes.map((n) => ({ ...n, topicId })) : [];
  });
  return [...getAncientHistoryNotes(examId), ...fromPacks];
}
