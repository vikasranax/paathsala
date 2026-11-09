export type SyllabusItem = { id: string; name: string };
export type SyllabusSubject = { id: string; name: string; items: SyllabusItem[] };
export type SyllabusStage = { id: string; name: string; pattern?: string; subjects: SyllabusSubject[] };
export type ExamSyllabus = { note: string; stages: SyllabusStage[] };

function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

// Item ids come from the subject id plus the item name, so ticks survive reordering.
export function subject(id: string, name: string, items: string[]): SyllabusSubject {
  const seen: Record<string, number> = {};
  return {
    id,
    name,
    items: items.map((item) => {
      const base = `${id}-${slug(item)}`;
      seen[base] = (seen[base] ?? 0) + 1;
      return { id: seen[base] === 1 ? base : `${base}-${seen[base]}`, name: item };
    }),
  };
}

export function stage(id: string, name: string, pattern: string, subjects: SyllabusSubject[]): SyllabusStage {
  return { id, name, pattern, subjects };
}
