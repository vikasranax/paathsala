'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { getNotes } from '@/data/notes';
import { categoryLabels, categoryOrder, gsCategories, type NoteCategory } from '@/data/categories';
import { useLanguage } from '@/lib/LanguageContext';

type FilterId = 'all' | 'gs' | NoteCategory;

export default function NotesPage() {
  const params = useParams<{ examId: string }>();
  const { t } = useLanguage();
  const notes = useMemo(() => getNotes(params.examId), [params.examId]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterId>('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const result: Partial<Record<NoteCategory, number>> = {};
    for (const note of notes) {
      const category = note.category ?? 'gk';
      result[category] = (result[category] ?? 0) + 1;
    }
    return result;
  }, [notes]);

  if (notes.length === 0) {
    return <main style={{ padding: '48px' }}>{t('notesNone')}</main>;
  }

  const gsCount = gsCategories.reduce((sum, c) => sum + (counts[c] ?? 0), 0);
  const chips: { id: FilterId; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: notes.length },
    ...(gsCount > 0 ? [{ id: 'gs' as const, label: 'GS', count: gsCount }] : []),
    ...categoryOrder
      .filter((c) => (counts[c] ?? 0) > 0)
      .map((c) => ({ id: c, label: categoryLabels[c], count: counts[c] ?? 0 })),
  ];

  const q = query.trim().toLowerCase();
  const visible = notes.filter((note) => {
    const category = note.category ?? 'gk';
    const inFilter =
      filter === 'all' || (filter === 'gs' ? gsCategories.includes(category) : category === filter);
    return inFilter && (q === '' || note.title.toLowerCase().includes(q));
  });

  const groups = categoryOrder
    .map((category) => ({ category, items: visible.filter((n) => (n.category ?? 'gk') === category) }))
    .filter((g) => g.items.length > 0);

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '760px' }}>
      <h1 className="font-display text-2xl mb-4" style={{ color: 'var(--indigo)' }}>
        {t('notesTitle')}
      </h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search notes by title..."
        style={{
          width: '100%',
          padding: '10px 12px',
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          color: 'var(--ink)',
          marginBottom: '14px',
        }}
      />

      <div className="flex flex-wrap gap-2" style={{ marginBottom: '24px' }}>
        {chips.map((chip) => {
          const active = filter === chip.id;
          return (
            <button
              key={chip.id}
              onClick={() => setFilter(chip.id)}
              style={{
                padding: '6px 12px',
                fontSize: '13px',
                cursor: 'pointer',
                border: `1px solid ${active ? 'var(--hero-bg)' : 'var(--border)'}`,
                background: active ? 'var(--hero-bg)' : 'var(--surface)',
                color: active ? 'var(--hero-text)' : 'var(--indigo)',
              }}
            >
              {chip.label} ({chip.count})
            </button>
          );
        })}
      </div>

      {groups.length === 0 && (
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>No notes match your search.</p>
      )}

      {groups.map(({ category, items }) => (
        <section key={category} style={{ marginBottom: '28px' }}>
          <h2 className="font-display" style={{ fontSize: '16px', color: 'var(--marigold)', marginBottom: '10px' }}>
            {categoryLabels[category]} ({items.length})
          </h2>
          <div className="flex flex-col gap-2">
            {items.map((note) => {
              const isOpen = openId === note.id;
              const sections = note.sections;
              return (
                <div key={note.id} style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : note.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 16px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--indigo)',
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '15px',
                    }}
                  >
                    {note.title}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 16px 16px' }}>
                      {sections ? (
                        sections.map((section, i) => (
                          <div key={i} style={{ marginBottom: i < sections.length - 1 ? '18px' : 0 }}>
                            <p className="font-display" style={{ fontSize: '14px', color: 'var(--indigo)', marginBottom: '6px' }}>
                              {section.heading}
                            </p>
                            <p style={{ color: 'var(--ink)', fontSize: '14.5px', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                              {section.body}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p style={{ color: 'var(--ink)', fontSize: '14.5px', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                          {note.body}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
