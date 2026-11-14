'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Landmark } from 'lucide-react';
import { galleryCategories, galleryItems } from '@/data/gallery';
import type { GalleryCategory } from '@/data/gallery';

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory | 'all'>('all');
  const visible = galleryItems.filter((item) => filter === 'all' || item.category === filter);
  const chips = [{ id: 'all' as const, label: 'All' }, ...galleryCategories];

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '1040px', margin: '0 auto' }}>
      <h1 className="font-display text-2xl" style={{ color: 'var(--indigo)', marginBottom: '6px' }}>
        Pictures
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '60ch', lineHeight: 1.6, marginBottom: '20px' }}>
        Heritage sites, sculptures and wonders of the world. Open one to read about it, think first, test yourself and see which syllabus topics it belongs to.
      </p>

            <Link
        href="/gallery/maps"
        style={{ display: 'block', border: '1px solid var(--marigold)', background: 'var(--surface)', padding: '14px 16px', marginBottom: '20px', textDecoration: 'none' }}
      >
        <span className="font-display" style={{ display: 'block', fontSize: '16px', color: 'var(--indigo)' }}>
          State maps
        </span>
        <span style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
          Crops, minerals, parks, dances and capitals on a map of India, with a test mode and atlas links.
        </span>
      </Link>

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
              {chip.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
        {visible.map((item) => (
          <Link
            key={item.id}
            href={`/gallery/${item.id}`}
            style={{ border: '1px solid var(--border)', background: 'var(--surface)', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ position: 'relative', height: '160px', background: 'var(--hero-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.image ? (
                <Image src={item.image.src} alt={item.title} fill sizes="(max-width: 700px) 100vw, 260px" style={{ objectFit: 'cover' }} />
              ) : (
                <Landmark size={40} color="var(--marigold)" />
              )}
            </div>
            <div style={{ padding: '14px' }}>
              <h2 className="font-display" style={{ fontSize: '16px', color: 'var(--indigo)', marginBottom: '2px' }}>
                {item.title}
              </h2>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                {item.period} · {item.place}
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--ink)',
                  lineHeight: 1.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {item.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
