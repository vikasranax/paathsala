import type { Question } from './questions';
import type { Flashcard } from './flashcards';
import type { Note } from './notes';
import type { NoteCategory } from './categories';
import type { TopicKey } from './topics';
import {
  getAncientHistoryQuestions,
  getAncientHistoryFlashcards,
  getAncientHistoryNotes,
} from './sharedAncientHistory';
import { polityPack } from './sharedPolity';
import { modernHistoryPack } from './sharedModernHistory';
import { geographyPack } from './sharedGeography';
import { economyPack } from './sharedEconomy';
import { mathsPack1 } from './sharedMaths1';
import { englishPack1 } from './sharedEnglish1';
import { environmentPack } from './sharedEnvironment';
import { scienceTechPack } from './sharedScienceTech';
import { medievalPack } from './sharedMedieval';
import { artCulturePack } from './sharedArtCulture';
import { ancientEarlyPack } from './sharedAncientEarly';
import { worldHistoryPack } from './sharedWorldHistory';

// A pack can carry its own topic tags (ids to topic keys). Older packs are tagged in contentTags.ts.
export type PackTags = {
  questions: Record<string, TopicKey[]>;
  flashcards: Record<string, TopicKey[]>;
  notes: Record<string, TopicKey[]>;
};

export type ContentPack = {
  topicByExam: Record<string, string>;
  questions: Omit<Question, 'topicId'>[];
  flashcards: Flashcard[];
  notes: Omit<Note, 'topicId'>[];
  tags?: PackTags;
};

type RegisteredPack = { category: NoteCategory; pack: ContentPack };

// New batch: create the pack file (with its tags), import it above, add one line here.
const packs: RegisteredPack[] = [
  { category: 'polity', pack: polityPack },
  { category: 'history', pack: modernHistoryPack },
  { category: 'geography', pack: geographyPack },
  { category: 'economy', pack: economyPack },
  { category: 'maths', pack: mathsPack1 },
  { category: 'english', pack: englishPack1 },
  { category: 'environment', pack: environmentPack },
  { category: 'science', pack: scienceTechPack },
  { category: 'history', pack: medievalPack },
  { category: 'history', pack: artCulturePack },
  { category: 'history', pack: ancientEarlyPack },
  { category: 'history', pack: worldHistoryPack },
];

export function getRegisteredPacks(): ContentPack[] {
  return packs.map((p) => p.pack);
}

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
