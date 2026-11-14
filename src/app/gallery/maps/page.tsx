'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { stateTiles } from '@/data/stateTiles';
import type { StateId } from '@/data/stateTiles';
import { mapGroups } from '@/data/mapLayers';
import { atlasSources, mapChecklist } from '@/data/mapResources';
import TileMap from '@/components/TileMap';

const CHECK_KEY = 'paathsala_map_checklist';
const cardStyle: CSSProperties = { border: '1px solid var(--border)', background: 'var(--surface)' };

function chipStyle(active: boolean): CSSProperties {
  return {
    padding: '6px 12px',
    fontSize: '13px',
    cursor: 'pointer',
    border: `1px solid ${active ? 'var(--hero-bg)' : 'var(--border)'}`,
    background: active ? 'var(--hero-bg)' : 'var(--surface)',
    color: active ? 'var(--hero-text)' : 'var(--indigo)',
  };
}

export default function MapsPage() {
  const [groupId, setGroupId] = useState(mapGroups[0].id);
  const [itemId, setItemId] = useState<string | null>(null);
  const [selected, setSelected] = useState<StateId | null>(null);
  const [testMode, setTestMode] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CHECK_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setChecked(JSON.parse(raw) as string[]);
    } catch {
      // unreadable storage is ignored
    }
  }, []);

  function toggleCheck(key: string) {
    setChecked((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key];
      try {
        localStorage.setItem(CHECK_KEY, JSON.stringify(next));
      } catch {
        // storage may be unavailable
      }
      return next;
    });
  }

  const group = mapGroups.find((g) => g.id === groupId) ?? mapGroups[0];
  const item = group.items.find((i) => i.id === itemId) ?? null;
  const highlighted = new Set<StateId>(item?.states ?? []);
  const leaders = new Set<StateId>(item?.leaders ?? []);
  const tile = stateTiles.find((t) => t.id === selected) ?? null;
  const itemsHere = tile ? group.items.filter((i) => i.states.includes(tile.id)) : [];
  const statesOfItem = item ? stateTiles.filter((t) => item.states.includes(t.id)) : [];

  function pickGroup(id: string) {
    setGroupId(id);
    setItemId(null);
    setSelected(null);
    setRevealed(false);
  }

  function pickItem(id: string) {
    setItemId(id === itemId ? null : id);
    setSelected(null);
    setRevealed(false);
  }

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '1040px', margin: '0 auto' }}>
      <Link href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--indigo)', textDecoration: 'none', marginBottom: '16px' }}>
        <ArrowLeft size={14} /> Pictures
      </Link>

      <h1 className="font-display text-2xl" style={{ color: 'var(--indigo)', marginBottom: '6px' }}>
        State maps
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '62ch', lineHeight: 1.6, marginBottom: '20px' }}>
        A schematic map: each tile sits roughly where its state sits, but size and borders are not shown. Pick a topic, look at the highlighted states, and switch on test mode to hide the names. Use an atlas for real boundaries.
      </p>

      <div className="flex flex-wrap gap-2" style={{ marginBottom: '12px' }}>
        {mapGroups.map((g) => (
          <button key={g.id} onClick={() => pickGroup(g.id)} style={chipStyle(g.id === groupId)}>
            {g.label}
          </button>
        ))}
      </div>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>{group.blurb}</p>

      <div className="flex flex-wrap gap-2" style={{ marginBottom: '20px' }}>
        {group.items.map((i) => (
          <button key={i.id} onClick={() => pickItem(i.id)} style={chipStyle(i.id === itemId)}>
            {i.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--ink)', marginBottom: '10px', cursor: 'pointer' }}>
            <input type="checkbox" checked={testMode} onChange={(e) => { setTestMode(e.target.checked); setRevealed(false); }} />
            Test mode: hide the state names until I tap them
          </label>
          <TileMap
            highlighted={highlighted}
            leaders={leaders}
            selected={selected}
            hideLabels={testMode}
            onSelect={(id) => setSelected(id)}
          />
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
            Dashed border: Union Territory. * with a red outline: usually the leading state.
          </p>
        </div>

        <div style={{ ...cardStyle, flex: '1 1 260px', padding: '16px', minWidth: 0 }}>
          {tile ? (
            <>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>
                {tile.kind === 'ut' ? 'Union Territory' : 'State'}
              </p>
              <h2 className="font-display" style={{ fontSize: '18px', color: 'var(--indigo)', marginBottom: '8px' }}>
                {tile.name}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--ink)', marginBottom: '4px' }}>
                Capital: <strong>{tile.capital}</strong>
              </p>
              {tile.capitalNote && <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px' }}>{tile.capitalNote}</p>}
              {itemsHere.length > 0 && (
                <>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '10px 0 6px' }}>In this group</p>
                  <div className="flex flex-wrap gap-2">
                    {itemsHere.map((i) => (
                      <span key={i.id} style={{ fontSize: '12.5px', padding: '4px 10px', border: '1px solid var(--border)', color: 'var(--indigo)' }}>
                        {i.label}{i.leaders?.includes(tile.id) ? ' (leads)' : ''}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : item ? (
            <>
              <h2 className="font-display" style={{ fontSize: '18px', color: 'var(--indigo)', marginBottom: '8px' }}>
                {item.label}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.6, marginBottom: '12px' }}>{item.note}</p>
              {testMode && !revealed ? (
                <button onClick={() => setRevealed(true)} style={{ fontSize: '13px', color: 'var(--indigo)', background: 'none', border: '1px solid var(--border)', padding: '6px 12px', cursor: 'pointer' }}>
                  Reveal the {statesOfItem.length} highlighted states
                </button>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {statesOfItem.map((t) => (
                    <span key={t.id} style={{ fontSize: '12.5px', padding: '4px 10px', border: '1px solid var(--border)', color: 'var(--indigo)' }}>
                      {t.name}{item.leaders?.includes(t.id) ? ' (leads)' : ''}
                    </span>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Pick a topic above to highlight states, or tap any tile to see its name and capital.
            </p>
          )}
        </div>
      </div>

      <section style={{ marginBottom: '32px' }}>
        <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '6px' }}>
          Official maps and atlases
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px', lineHeight: 1.6 }}>
          For physical and political maps with correct boundaries, use the government mapping bodies below.
        </p>
        <div className="flex flex-col gap-2">
          {atlasSources.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" style={{ ...cardStyle, padding: '12px 14px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span>
                <span style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--indigo)' }}>{s.title}</span>
                <span style={{ display: 'block', fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.note}</span>
              </span>
              <ExternalLink size={14} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '3px' }} />
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '6px' }}>
          Atlas practice checklist
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.6 }}>
          Open an atlas and find each item. Tick it when you can point to it without looking at the labels. Your ticks are saved on this device.
        </p>
        <div className="flex flex-col gap-2">
          {mapChecklist.map((g) => {
            const done = g.items.filter((i) => checked.includes(`${g.id}:${i}`)).length;
            return (
              <details key={g.id} style={cardStyle}>
                <summary style={{ cursor: 'pointer', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', gap: '12px', color: 'var(--indigo)', fontFamily: 'var(--font-space-grotesk)', fontSize: '14.5px' }}>
                  <span>{g.title}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12.5px' }}>{done}/{g.items.length}</span>
                </summary>
                <ul style={{ listStyle: 'none', margin: 0, padding: '4px 14px 14px' }}>
                  {g.items.map((i) => {
                    const key = `${g.id}:${i}`;
                    return (
                      <li key={key} style={{ marginBottom: '8px' }}>
                        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '14px', color: 'var(--ink)' }}>
                          <input type="checkbox" checked={checked.includes(key)} onChange={() => toggleCheck(key)} style={{ marginTop: '3px' }} />
                          <span>{i}</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
        </div>
      </section>
    </main>
  );
}
