'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, Landmark, X } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/data/gallery';
import { getExamSyllabus } from '@/data/syllabus';
import { topicLabel } from '@/data/topics';
import type { TopicKey } from '@/data/topics';

const cardStyle = { border: '1px solid var(--border)', background: 'var(--surface)' } as const;

// The first UPSC syllabus item that uses a topic, so a picture can link to the study page.
function upscItemFor(topic: TopicKey) {
  const syllabus = getExamSyllabus('upsc-cse');
  for (const stage of syllabus?.stages ?? []) {
    for (const subject of stage.subjects) {
      const item = subject.items.find((i) => i.topics.includes(topic));
      if (item) return item;
    }
  }
  return undefined;
}

export default function GalleryItemPage() {
  const params = useParams<{ id: string }>();
  const [zoomed, setZoomed] = useState(false);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [picked, setPicked] = useState<number | null>(null);

  const item = galleryItems.find((i) => i.id === params.id);
  if (!item) {
    return <main style={{ padding: '48px' }}>Picture not found.</main>;
  }

  const categoryLabel = galleryCategories.find((c) => c.id === item.category)?.label ?? '';

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '760px', margin: '0 auto' }}>
      <Link
        href="/gallery"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--indigo)', textDecoration: 'none', marginBottom: '16px' }}
      >
        <ArrowLeft size={14} /> All pictures
      </Link>

      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '4px' }}>{categoryLabel}</p>
      <h1 className="font-display text-2xl" style={{ color: 'var(--indigo)', marginBottom: '4px' }}>
        {item.title}
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
        {item.period} · {item.place}
      </p>

      {item.image ? (
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setZoomed(true)}
            aria-label="Zoom picture"
            style={{ position: 'relative', display: 'block', width: '100%', height: 'clamp(220px, 45vw, 420px)', border: '1px solid var(--border)', background: 'var(--hero-bg)', cursor: 'zoom-in', padding: 0 }}
          >
            <Image src={item.image.src} alt={item.title} fill sizes="(max-width: 800px) 100vw, 760px" style={{ objectFit: 'cover' }} />
          </button>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
            Image: {item.image.credit} · {item.image.licence} ·{' '}
            <a href={item.image.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--indigo)' }}>
              Source
            </a>
          </p>
        </div>
      ) : (
        <div style={{ ...cardStyle, padding: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', background: 'var(--hero-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Landmark size={24} color="var(--marigold)" />
          </div>
          <div>
            <p style={{ fontSize: '13.5px', color: 'var(--ink)', marginBottom: item.viewUrl ? '4px' : 0 }}>
              We do not host a picture of this yet.
            </p>
            {item.viewUrl && (
              <a href={item.viewUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--indigo)' }}>
                See the object at the museum <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      )}

      <p style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: 1.7, marginBottom: '20px' }}>{item.summary}</p>

      <section style={{ marginBottom: '24px' }}>
        <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>
          Quick facts
        </h2>
        <div style={cardStyle}>
          {item.facts.map((fact, i) => (
            <div
              key={fact.label}
              style={{ display: 'flex', gap: '12px', padding: '10px 14px', borderTop: i === 0 ? 'none' : '1px solid var(--border)', fontSize: '14px' }}
            >
              <span style={{ width: '130px', flexShrink: 0, color: 'var(--text-muted)' }}>{fact.label}</span>
              <span style={{ color: 'var(--ink)' }}>{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>
          Think first
        </h2>
        <div className="flex flex-col gap-2">
          {item.think.map((t, i) => (
            <div key={t.prompt} style={{ ...cardStyle, padding: '14px' }}>
              <p style={{ fontSize: '14px', color: 'var(--indigo)', fontWeight: 600, marginBottom: '8px' }}>{t.prompt}</p>
              {revealed[i] ? (
                <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.6 }}>{t.answer}</p>
              ) : (
                <button
                  onClick={() => setRevealed((prev) => ({ ...prev, [i]: true }))}
                  style={{ fontSize: '13px', color: 'var(--indigo)', background: 'none', border: '1px solid var(--border)', padding: '6px 12px', cursor: 'pointer' }}
                >
                  Reveal the answer
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...cardStyle, padding: '14px', marginBottom: '24px', borderLeft: '3px solid var(--marigold)' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Exam angle</p>
        <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.6 }}>{item.examAngle}</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>
          Test yourself
        </h2>
        <div style={{ ...cardStyle, padding: '14px' }}>
          <p style={{ fontSize: '14.5px', color: 'var(--ink)', marginBottom: '10px' }}>{item.quiz.question}</p>
          <div className="flex flex-col gap-2">
            {item.quiz.options.map((option, oi) => {
              let background = 'var(--paper)';
              if (picked !== null && oi === item.quiz.correctIndex) background = 'var(--feedback-correct-bg)';
              else if (picked === oi) background = 'var(--feedback-wrong-bg)';
              return (
                <button
                  key={option}
                  onClick={() => setPicked((prev) => (prev === null ? oi : prev))}
                  style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid var(--border)', background, color: 'var(--ink)', cursor: picked === null ? 'pointer' : 'default', fontSize: '14px' }}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '10px' }}>
              {picked === item.quiz.correctIndex ? 'Correct.' : 'Not quite. The correct answer is highlighted.'}
            </p>
          )}
        </div>
      </section>

      {item.topics.length > 0 && (
        <section>
          <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>
            Study this topic
          </h2>
          <div className="flex flex-wrap gap-2">
            {item.topics.map((topic) => {
              const upscItem = upscItemFor(topic);
              const chipStyle = { fontSize: '13px', padding: '6px 12px', border: '1px solid var(--border)', color: 'var(--indigo)', textDecoration: 'none' } as const;
              return upscItem ? (
                <Link key={topic} href={`/exams/upsc-cse/topic/${upscItem.id}`} style={chipStyle}>
                  {topicLabel(topic)}
                </Link>
              ) : (
                <span key={topic} style={{ ...chipStyle, color: 'var(--text-muted)' }}>
                  {topicLabel(topic)}
                </span>
              );
            })}
          </div>
        </section>
      )}

      {zoomed && item.image && (
        <div
          onClick={() => setZoomed(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', cursor: 'zoom-out' }}
        >
          <button
            onClick={() => setZoomed(false)}
            aria-label="Close"
            style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            <X size={26} />
          </button>
          <div style={{ position: 'relative', width: 'min(1000px, 94vw)', height: '86vh' }}>
            <Image src={item.image.src} alt={item.title} fill sizes="94vw" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </main>
  );
}
