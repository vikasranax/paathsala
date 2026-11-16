import { describe, it, expect } from 'vitest';
import { exams } from '../exams';
import { getQuestions } from '../questions';
import { getFlashcards } from '../flashcards';
import { getNotes } from '../notes';
import { hiContent } from '../translations/hi';
import type { TranslationBundle } from '../translations/types';

const bundles: Record<string, TranslationBundle> = { hi: hiContent };

const questions = new Map(exams.flatMap((e) => getQuestions(e.id)).map((q) => [q.id, q] as const));
const flashcards = new Map(exams.flatMap((e) => getFlashcards(e.id)).map((f) => [f.id, f] as const));
const notes = new Map(exams.flatMap((e) => getNotes(e.id)).map((n) => [n.id, n] as const));

describe('translations', () => {
  for (const [locale, bundle] of Object.entries(bundles)) {
    it(`${locale}: translated questions match the English structure`, () => {
      for (const [id, tr] of Object.entries(bundle.questions)) {
        const original = questions.get(id);
        expect(original, `${locale}: unknown question ${id}`).toBeDefined();
        expect(tr.text.trim().length, `${id} has no text`).toBeGreaterThan(0);
        expect(tr.options.length, `${id} option count differs from English`).toBe(original?.options.length);
        expect(tr.options.every((o) => o.trim().length > 0), `${id} has an empty option`).toBe(true);
        expect(new Set(tr.options.map((o) => o.trim().toLowerCase())).size, `${id} has duplicate options`).toBe(tr.options.length);
      }
    });

    it(`${locale}: translated flashcards and notes match the English structure`, () => {
      for (const [id, tr] of Object.entries(bundle.flashcards)) {
        expect(flashcards.has(id), `${locale}: unknown flashcard ${id}`).toBe(true);
        expect(tr.front.trim().length, `${id} front is empty`).toBeGreaterThan(0);
        expect(tr.back.trim().length, `${id} back is empty`).toBeGreaterThan(0);
      }
      for (const [id, tr] of Object.entries(bundle.notes)) {
        const original = notes.get(id);
        expect(original, `${locale}: unknown note ${id}`).toBeDefined();
        expect(tr.title.trim().length, `${id} title is empty`).toBeGreaterThan(0);
        if (original?.sections) {
          expect(tr.sections?.length, `${id} section count differs from English`).toBe(original.sections.length);
        }
        for (const s of tr.sections ?? []) {
          expect(s.heading.trim().length, `${id} has an empty heading`).toBeGreaterThan(0);
          expect(s.body.trim().length, `${id} has an empty section`).toBeGreaterThan(0);
        }
      }
    });
  }
});
