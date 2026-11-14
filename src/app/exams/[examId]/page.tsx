'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { exams } from '@/data/exams';
import { examMeta } from '@/data/examMeta';
import { getExamSyllabus } from '@/data/syllabus';
import type { SyllabusStage } from '@/data/syllabusTypes';
import { countTopicContent } from '@/data/contentIndex';
import { examResources } from '@/data/officialResources';
import { getCompleted, toggleTopic } from '@/lib/syllabusProgress';
import { mockTestsByExam } from '@/data/mockTests';
import { PenLine, Layers, BookOpen, MessageSquare, Link2, BarChart3, TrendingUp, Newspaper, Clock, ExternalLink } from 'lucide-react';

const actionLinks = [
  { key: 'quiz', label: "Today's quiz", icon: PenLine, primary: true },
  { key: 'flashcards', label: 'Flashcards', icon: Layers },
  { key: 'notes', label: 'Notes', icon: BookOpen },
  { key: 'current-affairs', label: 'Current Affairs', icon: Newspaper },
  { key: 'forum', label: 'Forum', icon: MessageSquare },
  { key: 'resources', label: 'Resources', icon: Link2 },
  { key: 'cutoff', label: 'Cutoff Trends', icon: TrendingUp },
  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
];

export default function ExamDashboard() {
  const params = useParams<{ examId: string }>();
  const examId = params.examId;

  const exam = exams.find((e) => e.id === examId);
  const meta = examMeta[examId];
  const Icon = meta?.icon;
  const syllabus = getExamSyllabus(examId);

  const [completed, setCompleted] = useState<string[]>([]);
  const [stageId, setStageId] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCompleted(getCompleted(examId));
  }, [examId]);

  function handleToggle(itemId: string) {
    setCompleted(toggleTopic(examId, itemId));
  }

  if (!exam) {
    return <main style={{ padding: '48px' }}>Exam not found.</main>;
  }

  const stages = syllabus?.stages ?? [];
  const activeStage = stages.find((s) => s.id === stageId) ?? stages[0];
  const allItems = stages.flatMap((s) => s.subjects.flatMap((su) => su.items));
  const doneTotal = allItems.filter((i) => completed.includes(i.id)).length;
  const progress = allItems.length ? Math.round((doneTotal / allItems.length) * 100) : 0;
  const linkedItems = allItems.filter((i) => i.topics.length > 0);
  const coveredItems = linkedItems.filter((i) => {
    const c = countTopicContent(i.topics);
    return c.notes + c.flashcards + c.questions > 0;
  });
  const mockTests = mockTestsByExam[examId] ?? [];
  const officialLinks = examResources[examId] ?? [];

  function stageCounts(stage: SyllabusStage) {
    const ids = stage.subjects.flatMap((su) => su.items.map((i) => i.id));
    return { done: ids.filter((id) => completed.includes(id)).length, total: ids.length };
  }

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '820px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ width: '52px', height: '52px', background: 'var(--hero-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {Icon && <Icon size={26} color="var(--marigold)" />}
        </div>
        <div>
          <h1 className="font-display text-2xl" style={{ color: 'var(--indigo)' }}>
            {exam.name}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{meta?.description}</p>
        </div>
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', margin: '32px 0' }}>
        {actionLinks.map(({ key, label, icon: ActionIcon, primary }) => (
          <Link
            key={key}
            href={`/exams/${examId}/${key}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '18px 16px',
              border: `1px solid ${primary ? 'var(--marigold)' : 'var(--border)'}`,
              background: primary ? 'var(--marigold)' : 'var(--surface)',
              color: primary ? 'var(--ink)' : 'var(--indigo)',
              textDecoration: 'none',
              transition: 'transform 0.1s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <ActionIcon size={20} />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>{label}</span>
          </Link>
        ))}
      </div>

      <h2 className="font-display text-lg mb-2" style={{ color: 'var(--indigo)' }}>
        Mock Tests
      </h2>
      {mockTests.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>No mock tests available yet.</p>
      ) : (
        <div className="flex flex-col gap-2" style={{ marginBottom: '32px' }}>
          {mockTests.map((m) => (
            <Link
              key={m.id}
              href={`/exams/${examId}/mock/${m.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 16px',
                border: '1px solid var(--indigo)',
                color: 'var(--indigo)',
                textDecoration: 'none',
              }}
            >
              <Clock size={16} />
              <span>
                {m.name} — {m.durationMins} min
              </span>
            </Link>
          ))}
        </div>
      )}

      <h2 className="font-display text-lg mb-3" style={{ color: 'var(--indigo)' }}>
        Syllabus
      </h2>

      {!syllabus || !activeStage ? (
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Syllabus for this exam is coming soon.</p>
      ) : (
        <>
          <div style={{ background: 'var(--border)', height: '10px', marginBottom: '8px' }}>
            <div style={{ background: 'var(--marigold)', width: `${progress}%`, height: '100%' }} />
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: linkedItems.length > 0 ? '4px' : '18px' }}>
            {progress}% complete · {doneTotal} of {allItems.length} topics
          </p>
          {linkedItems.length > 0 && (
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
              Study material available for {coveredItems.length} of {linkedItems.length} topics. Open a topic to see it.
            </p>
          )}

          {stages.length > 1 && (
            <div className="flex flex-wrap gap-2" style={{ marginBottom: '16px' }}>
              {stages.map((s) => {
                const active = s.id === activeStage.id;
                const { done, total } = stageCounts(s);
                return (
                  <button
                    key={s.id}
                    onClick={() => setStageId(s.id)}
                    style={{
                      padding: '7px 12px',
                      fontSize: '13px',
                      cursor: 'pointer',
                      border: `1px solid ${active ? 'var(--hero-bg)' : 'var(--border)'}`,
                      background: active ? 'var(--hero-bg)' : 'var(--surface)',
                      color: active ? 'var(--hero-text)' : 'var(--indigo)',
                    }}
                  >
                    {s.name} ({done}/{total})
                  </button>
                );
              })}
            </div>
          )}

          {activeStage.pattern && (
            <p style={{ fontSize: '13px', color: 'var(--ink)', marginBottom: '14px', lineHeight: 1.6 }}>{activeStage.pattern}</p>
          )}

          <div className="flex flex-col gap-2">
            {activeStage.subjects.map((subj) => {
              const done = subj.items.filter((i) => completed.includes(i.id)).length;
              return (
                <details key={subj.id} style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
                  <summary
                    style={{
                      cursor: 'pointer',
                      padding: '12px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      color: 'var(--indigo)',
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '14.5px',
                    }}
                  >
                    <span>{subj.name}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '12.5px', whiteSpace: 'nowrap' }}>
                      {done}/{subj.items.length}
                    </span>
                  </summary>
                  <ul style={{ listStyle: 'none', margin: 0, padding: '4px 14px 14px' }}>
                    {subj.items.map((item) => {
                      if (item.topics.length === 0) {
                        return (
                          <li key={item.id} style={{ marginBottom: '8px' }}>
                            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '14px', color: 'var(--ink)' }}>
                              <input
                                type="checkbox"
                                checked={completed.includes(item.id)}
                                onChange={() => handleToggle(item.id)}
                                style={{ marginTop: '3px' }}
                              />
                              <span>{item.name}</span>
                            </label>
                          </li>
                        );
                      }
                      const counts = countTopicContent(item.topics);
                      const hasMaterial = counts.notes + counts.flashcards + counts.questions > 0;
                      return (
                        <li key={item.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                          <input
                            type="checkbox"
                            checked={completed.includes(item.id)}
                            onChange={() => handleToggle(item.id)}
                            aria-label={`Mark ${item.name} as done`}
                            style={{ marginTop: '3px' }}
                          />
                          <div style={{ minWidth: 0 }}>
                            <Link href={`/exams/${examId}/topic/${item.id}`} style={{ fontSize: '14px', color: 'var(--indigo)', textDecoration: 'underline' }}>
                              {item.name}
                            </Link>
                            <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)' }}>
                              {hasMaterial
                                ? `${counts.notes} notes · ${counts.questions} questions · ${counts.flashcards} flashcards`
                                : 'No material yet'}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              );
            })}
          </div>

          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '18px', lineHeight: 1.6 }}>{syllabus.note}</p>

          {officialLinks.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h3 className="font-display" style={{ fontSize: '15px', color: 'var(--indigo)', marginBottom: '8px' }}>
                Official sources for this exam
              </h3>
              {officialLinks.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', padding: '12px 14px', border: '1px solid var(--border)', background: 'var(--surface)', textDecoration: 'none' }}
                >
                  <span>
                    <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--indigo)' }}>{r.title}</span>
                    <span style={{ display: 'block', fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '2px' }}>{r.note}</span>
                  </span>
                  <ExternalLink size={14} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '3px' }} />
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}
