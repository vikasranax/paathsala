export type TranslatedNote = {
  title: string;
  body?: string;
  sections?: { heading: string; body: string }[];
};
export type TranslatedQuestion = { text: string; options: string[] };
export type TranslatedFlashcard = { front: string; back: string };

export type TranslationBundle = {
  notes: Record<string, TranslatedNote>;
  questions: Record<string, TranslatedQuestion>;
  flashcards: Record<string, TranslatedFlashcard>;
};
