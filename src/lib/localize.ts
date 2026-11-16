import type { Locale } from './i18n';
import { hiContent } from '@/data/translations/hi';
import type { TranslationBundle } from '@/data/translations/types';

// Add a language here once its translation file exists, for example ta: taContent.
const bundles: Partial<Record<Locale, TranslationBundle>> = { hi: hiContent };

type NoteLike = { id: string; title: string; body?: string; sections?: { heading: string; body: string }[] };
type QuestionLike = { id: string; text: string; options: string[] };
type CardLike = { id: string; front: string; back: string };

// Each function returns the translated version when one exists, otherwise the English original.
export function localizeNote<T extends NoteLike>(note: T, locale: Locale): T & { translated: boolean } {
  const hit = bundles[locale]?.notes[note.id];
  if (!hit) return { ...note, translated: false };
  return { ...note, title: hit.title, body: hit.body ?? note.body, sections: hit.sections ?? note.sections, translated: true };
}

export function localizeQuestion<T extends QuestionLike>(question: T, locale: Locale): T & { translated: boolean } {
  const hit = bundles[locale]?.questions[question.id];
  if (!hit || hit.options.length !== question.options.length) return { ...question, translated: false };
  return { ...question, text: hit.text, options: hit.options, translated: true };
}

export function localizeFlashcard<T extends CardLike>(card: T, locale: Locale): T & { translated: boolean } {
  const hit = bundles[locale]?.flashcards[card.id];
  if (!hit) return { ...card, translated: false };
  return { ...card, front: hit.front, back: hit.back, translated: true };
}
