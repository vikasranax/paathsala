import type { TopicKey } from './topics';

export type SyllabusItem = { id: string; name: string; topics: TopicKey[] };
export type SyllabusSubject = { id: string; name: string; items: SyllabusItem[] };
export type SyllabusStage = { id: string; name: string; pattern?: string; subjects: SyllabusSubject[] };
export type ExamSyllabus = { note: string; stages: SyllabusStage[] };

// An item is a plain name, or [name, ...topic keys] to link it to shared study material.
export type ItemInput = string | readonly [string, ...TopicKey[]];

function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

// Item ids come from the subject id plus the item name, so ticks survive reordering.
export function subject(id: string, name: string, items: ItemInput[]): SyllabusSubject {
  const seen: Record<string, number> = {};
  return {
    id,
    name,
    items: items.map((input) => {
      const itemName = typeof input === 'string' ? input : input[0];
      const topics: TopicKey[] = typeof input === 'string' ? [] : (input.slice(1) as TopicKey[]);
      const base = `${id}-${slug(itemName)}`;
      seen[base] = (seen[base] ?? 0) + 1;
      return { id: seen[base] === 1 ? base : `${base}-${seen[base]}`, name: itemName, topics };
    }),
  };
}

export function stage(id: string, name: string, pattern: string, subjects: SyllabusSubject[]): SyllabusStage {
  return { id, name, pattern, subjects };
}
