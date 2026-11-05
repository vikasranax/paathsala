'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getNotes } from '@/data/notes';
import { useLanguage } from '@/lib/LanguageContext';

export default function NotesPage() {
  const params = useParams<{ examId: string }>();
  const { t } = useLanguage();
  const notes = getNotes(params.examId);
  const [openId, setOpenId] = useState<string | null>(null);

  if (notes.length === 0) {
    return <main style={{ padding: '48px' }}>{t('notesNone')}</main>;
  }

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '760px' }}>
      <h1 className="font-display text-2xl mb-6" style={{ color: 'var(--indigo)' }}>
        {t('notesTitle')}
      </h1>

      <div className="flex flex-col gap-2">
        {notes.map((note) => {
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
    </main>
  );
}
