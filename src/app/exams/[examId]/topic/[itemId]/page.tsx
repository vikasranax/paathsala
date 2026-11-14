'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { exams } from '@/data/exams';
import { findSyllabusItem, getSharedUsage } from '@/data/syllabus';
import { getTopicContent } from '@/data/contentIndex';
import { resourcesForTopics } from '@/data/officialResources';
import { topicLabel } from '@/data/topics';

const cardStyle = { border: '1px solid var(--border)', background: 'var(--surface)' } as const;

export default function TopicPage() {
  const params = useParams<{ examId: string; itemId: string }>();
  const { examId, itemId } = params;

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const exam = exams.find((e) => e.id === examId);
  const found = findSyllabusItem(examId, itemId);

  if (!exam || !found) {
    return <main style={{ padding: '48px' }}>Topic not found.</main>;
  }

  const { stage, subject, item } = found;
  const content = getTopicContent(item.topics);
  const resources = resourcesForTopics(item.topics);
  const sharedExamIds = Array.from(new Set(getSharedUsage(item.topics, examId).map((s) => s.examId)));
  const hasMaterial = content.notes.length + content.flashcards.length + content.questions.length > 0;
  const visibleQuestions = showAllQuestions ? content.questions : content.questions.slice(0, 10);

  function choose(questionId: string, optionIndex: number) {
    setAnswers((prev) => (prev[questionId] === undefined ? { ...prev, [questionId]: optionIndex } : prev));
  }

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '760px' }}>
      <Link
        href={`/exams/${examId}`}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--indigo)', textDecoration: 'none', marginBottom: '16px' }}
      >
        <ArrowLeft size={14} /> {exam.name} syllabus
      </Link>

      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '4px' }}>
        {stage.name} · {subject.name}
      </p>
      <h1 className="font-display text-2xl" style={{ color: 'var(--indigo)', marginBottom: '12px' }}>
        {item.name}
      </h1>

      <div className="flex flex-wrap gap-2" style={{ marginBottom: '24px' }}>
        {item.topics.map((t) => (
          <span key={t} style={{ fontSize: '12px', padding: '4px 10px', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
            {topicLabel(t)}
          </span>
        ))}
      </div>

      {!hasMaterial && (
        <div style={{ ...cardStyle, padding: '16px', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.6 }}>
            Paathsala does not have notes or questions for this topic yet. We write material in syllabus order, so it is on the list.
            Until then, the official sources below are a good place to start.
          </p>
        </div>
      )}

      {content.notes.length > 0 && (
        <section style={{ marginBottom: '28px' }}>
          <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '10px' }}>
            Notes ({content.notes.length})
          </h2>
          <div className="flex flex-col gap-2">
            {content.notes.map((note) => (
              <details key={note.id} style={cardStyle}>
                <summary style={{ cursor: 'pointer', padding: '12px 14px', color: 'var(--indigo)', fontFamily: 'var(--font-space-grotesk)', fontSize: '15px' }}>
                  {note.title}
                </summary>
                <div style={{ padding: '0 14px 14px' }}>
                  {note.sections ? (
                    note.sections.map((section, i) => (
                      <div key={i} style={{ marginBottom: '16px' }}>
                        <p className="font-display" style={{ fontSize: '14px', color: 'var(--indigo)', marginBottom: '6px' }}>
                          {section.heading}
                        </p>
                        <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--ink)', whiteSpace: 'pre-line' }}>{section.body}</p>
                      </div>
                    ))
                  ) : (
                    <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--ink)', whiteSpace: 'pre-line' }}>{note.body}</p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {content.questions.length > 0 && (
        <section style={{ marginBottom: '28px' }}>
          <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '10px' }}>
            Practice ({content.questions.length})
          </h2>
          {visibleQuestions.map((q, qi) => {
            const picked = answers[q.id];
            return (
              <div key={q.id} style={{ ...cardStyle, padding: '14px', marginBottom: '10px' }}>
                <p style={{ fontSize: '14.5px', color: 'var(--ink)', marginBottom: '10px' }}>
                  {qi + 1}. {q.text}
                </p>
                <div className="flex flex-col gap-2">
                  {q.options.map((option, oi) => {
                    let background = 'var(--paper)';
                    if (picked !== undefined && oi === q.correctIndex) background = 'var(--feedback-correct-bg)';
                    else if (picked === oi) background = 'var(--feedback-wrong-bg)';
                    return (
                      <button
                        key={oi}
                        onClick={() => choose(q.id, oi)}
                        style={{
                          padding: '10px 12px',
                          textAlign: 'left',
                          border: '1px solid var(--border)',
                          background,
                          color: 'var(--ink)',
                          cursor: picked === undefined ? 'pointer' : 'default',
                          fontSize: '14px',
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {content.questions.length > 10 && !showAllQuestions && (
            <button
              onClick={() => setShowAllQuestions(true)}
              style={{ fontSize: '13px', color: 'var(--indigo)', background: 'none', border: '1px solid var(--border)', padding: '8px 14px', cursor: 'pointer' }}
            >
              Show all {content.questions.length} questions
            </button>
          )}
        </section>
      )}

      {content.flashcards.length > 0 && (
        <section style={{ marginBottom: '28px' }}>
          <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '10px' }}>
            Flashcards ({content.flashcards.length})
          </h2>
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {content.flashcards.map((card) => {
              const isFlipped = flipped[card.id] === true;
              return (
                <button
                  key={card.id}
                  onClick={() => setFlipped((prev) => ({ ...prev, [card.id]: !isFlipped }))}
                  style={{ ...cardStyle, padding: '16px', textAlign: 'left', cursor: 'pointer', minHeight: '110px' }}
                >
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    {isFlipped ? 'Answer' : 'Tap to reveal'}
                  </span>
                  <span style={{ fontSize: '14px', lineHeight: 1.6, color: isFlipped ? 'var(--ink)' : 'var(--indigo)' }}>
                    {isFlipped ? card.back : card.front}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {resources.length > 0 && (
        <section style={{ marginBottom: '28px' }}>
          <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '10px' }}>
            Free official sources
          </h2>
          <div className="flex flex-col gap-2">
            {resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...cardStyle, padding: '12px 14px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'flex-start' }}
              >
                <span>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--indigo)' }}>{r.title}</span>
                  <span style={{ display: 'block', fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '2px' }}>{r.note}</span>
                </span>
                <ExternalLink size={14} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '3px' }} />
              </a>
            ))}
          </div>
        </section>
      )}

      {sharedExamIds.length > 0 && (
        <section>
          <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>
            Also useful for
          </h2>
          <div className="flex flex-wrap gap-2">
            {sharedExamIds.map((id) => (
              <Link
                key={id}
                href={`/exams/${id}`}
                style={{ fontSize: '13px', padding: '6px 12px', border: '1px solid var(--border)', color: 'var(--indigo)', textDecoration: 'none' }}
              >
                {exams.find((e) => e.id === id)?.name ?? id}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
