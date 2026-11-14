import type { Flashcard } from './flashcards';
import type { Note } from './notes';
import type { Question } from './questions';
import type { TopicKey } from './topics';
import { getRegisteredPacks } from './contentPacks';
import {
  getAncientHistoryQuestions,
  getAncientHistoryFlashcards,
  getAncientHistoryNotes,
} from './sharedAncientHistory';
import { reasoningQuestions, reasoningFlashcards, reasoningNotes } from './sharedReasoning';
import { questionTags, flashcardTags, noteTags } from './contentTags';

export type IndexedQuestion = Omit<Question, 'topicId'>;
export type IndexedNote = Omit<Note, 'topicId'>;

export type TopicContent = {
  questions: IndexedQuestion[];
  flashcards: Flashcard[];
  notes: IndexedNote[];
};

const packs = getRegisteredPacks();

const allQuestions: IndexedQuestion[] = [
  ...getAncientHistoryQuestions('upsc-cse'),
  ...reasoningQuestions,
  ...packs.flatMap((p) => p.questions),
];
const allFlashcards: Flashcard[] = [
  ...getAncientHistoryFlashcards('upsc-cse'),
  ...reasoningFlashcards,
  ...packs.flatMap((p) => p.flashcards),
];
const allNotes: IndexedNote[] = [
  ...getAncientHistoryNotes('upsc-cse'),
  ...reasoningNotes,
  ...packs.flatMap((p) => p.notes),
];

const buckets = new Map<TopicKey, TopicContent>();

function bucket(key: TopicKey): TopicContent {
  let b = buckets.get(key);
  if (!b) {
    b = { questions: [], flashcards: [], notes: [] };
    buckets.set(key, b);
  }
  return b;
}

// Tags kept in contentTags.ts (the older packs)
for (const q of allQuestions) for (const t of questionTags[q.id] ?? []) bucket(t).questions.push(q);
for (const f of allFlashcards) for (const t of flashcardTags[f.id] ?? []) bucket(t).flashcards.push(f);
for (const n of allNotes) for (const t of noteTags[n.id] ?? []) bucket(t).notes.push(n);

// Tags carried by the packs themselves (newer packs)
for (const pack of packs) {
  if (!pack.tags) continue;
  for (const q of pack.questions) for (const t of pack.tags.questions[q.id] ?? []) bucket(t).questions.push(q);
  for (const f of pack.flashcards) for (const t of pack.tags.flashcards[f.id] ?? []) bucket(t).flashcards.push(f);
  for (const n of pack.notes) for (const t of pack.tags.notes[n.id] ?? []) bucket(t).notes.push(n);
}

function unique<T extends { id: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

// Everything linked to any of the given topics, from every pack and for every exam.
export function getTopicContent(keys: readonly TopicKey[]): TopicContent {
  const questions: IndexedQuestion[] = [];
  const flashcards: Flashcard[] = [];
  const notes: IndexedNote[] = [];
  for (const key of keys) {
    const b = buckets.get(key);
    if (!b) continue;
    questions.push(...b.questions);
    flashcards.push(...b.flashcards);
    notes.push(...b.notes);
  }
  return { questions: unique(questions), flashcards: unique(flashcards), notes: unique(notes) };
}

export function countTopicContent(keys: readonly TopicKey[]) {
  const c = getTopicContent(keys);
  return { notes: c.notes.length, flashcards: c.flashcards.length, questions: c.questions.length };
}

export function allContentIds() {
  return {
    questions: new Set(allQuestions.map((q) => q.id)),
    flashcards: new Set(allFlashcards.map((f) => f.id)),
    notes: new Set(allNotes.map((n) => n.id)),
  };
}
