import { describe, it, expect } from 'vitest';
import { exams } from '../exams';
import { getQuestions } from '../questions';
import { getFlashcards } from '../flashcards';
import { getNotes } from '../notes';
import { allContentIds } from '../contentIndex';
import { getRegisteredPacks } from '../contentPacks';
import { questionTags, flashcardTags, noteTags } from '../contentTags';
import { getExamSyllabus } from '../syllabus';
import { galleryItems } from '../gallery';

describe('questions', () => {
  for (const exam of exams) {
    it(`${exam.id}: every question is well formed`, () => {
      const seen = new Set<string>();
      for (const q of getQuestions(exam.id)) {
        expect(seen.has(q.id), `duplicate question id ${q.id}`).toBe(false);
        seen.add(q.id);
        expect(q.text.trim().length, `${q.id} has no text`).toBeGreaterThan(0);
        expect(q.options.length, `${q.id} should have 4 options`).toBe(4);
        expect(q.correctIndex, `${q.id} correctIndex out of range`).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex, `${q.id} correctIndex out of range`).toBeLessThan(4);
        const normalised = q.options.map((o) => o.trim().toLowerCase());
        expect(new Set(normalised).size, `${q.id} has duplicate options`).toBe(4);
      }
    });
  }
});

describe('flashcards and notes', () => {
  for (const exam of exams) {
    it(`${exam.id}: flashcards and notes are complete`, () => {
      const cardIds = new Set<string>();
      for (const f of getFlashcards(exam.id)) {
        expect(cardIds.has(f.id), `duplicate flashcard id ${f.id}`).toBe(false);
        cardIds.add(f.id);
        expect(f.front.trim().length, `${f.id} front is empty`).toBeGreaterThan(0);
        expect(f.back.trim().length, `${f.id} back is empty`).toBeGreaterThan(0);
      }
      const noteIds = new Set<string>();
      for (const n of getNotes(exam.id)) {
        expect(noteIds.has(n.id), `duplicate note id ${n.id}`).toBe(false);
        noteIds.add(n.id);
        const sections = n.sections ?? [];
        expect(n.body || sections.length > 0, `${n.id} has no content`).toBeTruthy();
        for (const s of sections) {
          expect(s.body.trim().length, `${n.id} has an empty section`).toBeGreaterThan(0);
        }
      }
    });
  }
});

describe('topic tags', () => {
  it('shared tags only point at content ids that exist', () => {
    const ids = allContentIds();
    for (const id of Object.keys(questionTags)) expect(ids.questions.has(id), `unknown question tag ${id}`).toBe(true);
    for (const id of Object.keys(flashcardTags)) expect(ids.flashcards.has(id), `unknown flashcard tag ${id}`).toBe(true);
    for (const id of Object.keys(noteTags)) expect(ids.notes.has(id), `unknown note tag ${id}`).toBe(true);
  });

  it('pack tags only point at ids inside their own pack', () => {
    for (const pack of getRegisteredPacks()) {
      if (!pack.tags) continue;
      const q = new Set(pack.questions.map((x) => x.id));
      const f = new Set(pack.flashcards.map((x) => x.id));
      const n = new Set(pack.notes.map((x) => x.id));
      for (const id of Object.keys(pack.tags.questions)) expect(q.has(id), `unknown question tag ${id}`).toBe(true);
      for (const id of Object.keys(pack.tags.flashcards)) expect(f.has(id), `unknown flashcard tag ${id}`).toBe(true);
      for (const id of Object.keys(pack.tags.notes)) expect(n.has(id), `unknown note tag ${id}`).toBe(true);
    }
  });
});

describe('syllabus', () => {
  for (const exam of exams) {
    it(`${exam.id}: item ids are unique`, () => {
      const syllabus = getExamSyllabus(exam.id);
      expect(syllabus, `${exam.id} has no syllabus`).toBeDefined();
      const seen = new Set<string>();
      for (const stage of syllabus?.stages ?? []) {
        for (const subject of stage.subjects) {
          for (const item of subject.items) {
            expect(seen.has(item.id), `duplicate syllabus item id ${item.id}`).toBe(false);
            seen.add(item.id);
          }
        }
      }
    });
  }
});

describe('gallery', () => {
  it('has well-formed items, and every hosted image records its credit and licence', () => {
    const ids = new Set<string>();
    for (const item of galleryItems) {
      expect(ids.has(item.id), `duplicate gallery id ${item.id}`).toBe(false);
      ids.add(item.id);
      expect(item.summary.trim().length, `${item.id} has no summary`).toBeGreaterThan(0);
      expect(item.facts.length, `${item.id} needs facts`).toBeGreaterThan(0);
      expect(item.quiz.options.length, `${item.id} quiz needs 4 options`).toBe(4);
      expect(item.quiz.correctIndex, `${item.id} quiz index out of range`).toBeGreaterThanOrEqual(0);
      expect(item.quiz.correctIndex, `${item.id} quiz index out of range`).toBeLessThan(4);
      const normalised = item.quiz.options.map((o) => o.trim().toLowerCase());
      expect(new Set(normalised).size, `${item.id} quiz has duplicate options`).toBe(4);
      if (item.image) {
        expect(item.image.src.startsWith('/gallery/'), `${item.id} image must live in public/gallery`).toBe(true);
        expect(item.image.credit.trim().length, `${item.id} image needs a credit`).toBeGreaterThan(0);
        expect(item.image.licence.trim().length, `${item.id} image needs a licence`).toBeGreaterThan(0);
        expect(item.image.sourceUrl.startsWith('https://'), `${item.id} image needs a source link`).toBe(true);
      }
    }
  });
});
