'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import AtlasMap from '@/components/AtlasMap';
import type { AtlasSelection } from '@/components/AtlasMap';
import { LAYER_STYLE, REGION_LAYERS } from '@/lib/atlas';
import type { AtlasRegion, MapMode, MarkerLayerId } from '@/lib/atlas';
import { atlasSources } from '@/data/mapResources';

type Choice = { id: string; label: string; region: AtlasRegion; mode: MapMode; layers: MarkerLayerId[]; blurb: string };

const choices: Choice[] = [
  { id: 'india-political', label: 'India: political', region: 'india', mode: 'political', layers: ['capitals'], blurb: 'States and Union Territories with their capitals. Switch on more layers to mark minerals, crops, energy sites and ports.' },
  { id: 'india-physical', label: 'India: physical', region: 'india', mode: 'physical', layers: ['landforms', 'water'], blurb: 'Terrain, rivers, peaks, passes, plateaus, lakes and deltas. Switch on minerals, crops or energy to see where they sit on the land.' },
  { id: 'world-political', label: 'World: political', region: 'world', mode: 'political', layers: ['landforms'], blurb: 'Countries of the world. Zoom in for names and turn on minerals, crops, rivers and straits.' },
  { id: 'world-physical', label: 'World: physical', region: 'world', mode: 'physical', layers: ['landforms', 'water'], blurb: 'Mountains, deserts, plateaus, rivers, lakes, straits and canals on a terrain map.' },
];

const cardStyle: CSSProperties = { border: '1px solid var(--border)', background: 'var(--surface)' };

function chip(active: boolean): CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    padding: '6px 12px',
    fontSize: '13px',
    cursor: 'pointer',
    border: `1px solid ${active ? 'var(--hero-bg)' : 'var(--border)'}`,
    background: active ? 'var(--hero-bg)' : 'var(--surface)',
    color: active ? 'var(--hero-text)' : 'var(--indigo)',
  };
}

function Swatch({ layer }: { layer: MarkerLayerId }) {
  const s = LAYER_STYLE[layer];
  const style: CSSProperties = {
    width: '10px',
    height: '10px',
    display: 'inline-block',
    background: s.shape === 'ring' ? '#fff' : s.color,
    border: s.shape === 'ring' ? `3px solid ${s.color}` : '1px solid #fff',
    borderRadius: s.shape === 'circle' || s.shape === 'ring' ? '50%' : 0,
    transform: s.shape === 'diamond' ? 'rotate(45deg) scale(0.9)' : undefined,
    clipPath: s.shape === 'triangle' ? 'polygon(50% 0, 100% 100%, 0 100%)' : s.shape === 'star' ? 'polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : undefined,
  };
  return <span aria-hidden="true" style={style} />;
}

export default function AtlasPage() {
  const [choiceId, setChoiceId] = useState(choices[0].id);
  const choice = choices.find((c) => c.id === choiceId) ?? choices[0];
  const [layers, setLayers] = useState<MarkerLayerId[]>(choices[0].layers);
  const [showRivers, setShowRivers] = useState(true);
  const [showBorders, setShowBorders] = useState(false);
  const [testMode, setTestMode] = useState(false);
  const [selection, setSelection] = useState<AtlasSelection>(null);

  function pick(c: Choice) {
    setChoiceId(c.id);
    setLayers(c.layers);
    setSelection(null);
  }

  function toggleLayer(id: MarkerLayerId) {
    setLayers((prev) => (prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]));
  }

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '1100px', margin: '0 auto' }}>
      <Link href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--indigo)', textDecoration: 'none', marginBottom: '16px' }}>
        <ArrowLeft size={14} /> Pictures
      </Link>

      <h1 className="font-display text-2xl" style={{ color: 'var(--indigo)', marginBottom: '6px' }}>
        Atlas
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '64ch', lineHeight: 1.6, marginBottom: '18px' }}>
        {choice.blurb}
      </p>

      <div className="flex flex-wrap gap-2" style={{ marginBottom: '14px' }}>
        {choices.map((c) => (
          <button key={c.id} type="button" onClick={() => pick(c)} style={chip(c.id === choice.id)}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2" style={{ marginBottom: '10px' }}>
        {REGION_LAYERS[choice.region].map((id) => (
          <button key={id} type="button" onClick={() => toggleLayer(id)} aria-pressed={layers.includes(id)} style={chip(layers.includes(id))}>
            <Swatch layer={id} />
            {LAYER_STYLE[id].label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap" style={{ gap: '18px', marginBottom: '14px', fontSize: '13px', color: 'var(--ink)' }}>
        {choice.region === 'india' && (
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <input type="checkbox" checked={showRivers} onChange={(e) => setShowRivers(e.target.checked)} /> Rivers
          </label>
        )}
        {choice.mode === 'physical' && (
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <input type="checkbox" checked={showBorders} onChange={(e) => setShowBorders(e.target.checked)} />
            {choice.region === 'india' ? 'State borders' : 'Country borders'}
          </label>
        )}
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
          <input type="checkbox" checked={testMode} onChange={(e) => setTestMode(e.target.checked)} /> Test mode: hide names until I tap
        </label>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div style={{ flex: '2 1 460px', minWidth: 0 }}>
          <AtlasMap
            key={choice.id}
            region={choice.region}
            mode={choice.mode}
            layers={layers}
            showRivers={showRivers}
            showBorders={showBorders}
            testMode={testMode}
            selection={selection}
            onSelect={setSelection}
          />
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.6 }}>
            Drag to move. Use + and − to zoom, or hold Ctrl (or Cmd) and scroll. Tap a marker or a state for details. Names appear as you zoom in.
          </p>
        </div>

        <div style={{ ...cardStyle, flex: '1 1 240px', padding: '16px', minWidth: 0 }}>
          {selection?.kind === 'marker' ? (
            <>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>{LAYER_STYLE[selection.marker.layer].label}</p>
              <h2 className="font-display" style={{ fontSize: '18px', color: 'var(--indigo)', marginBottom: '4px' }}>{selection.marker.name}</h2>
              <p style={{ fontSize: '13px', color: 'var(--indigo)', marginBottom: '8px' }}>{selection.marker.kind}</p>
              <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.6 }}>{selection.marker.note}</p>
            </>
          ) : selection?.kind === 'area' ? (
            <>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>{selection.detail}</p>
              <h2 className="font-display" style={{ fontSize: '18px', color: 'var(--indigo)', marginBottom: '8px' }}>{selection.name}</h2>
              {selection.capitals.length > 0 && (
                <p style={{ fontSize: '14px', color: 'var(--ink)' }}>
                  Capital: <strong>{selection.capitals.join(', ')}</strong>
                </p>
              )}
            </>
          ) : (
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {testMode ? 'Test mode is on. Tap a marker or a state to reveal its name.' : 'Tap a marker or a state to see what it is.'}
            </p>
          )}
        </div>
      </div>

      <section style={{ marginBottom: '24px' }}>
        <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>About these maps</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '75ch' }}>
          Boundaries and terrain come from Natural Earth, which is in the public domain. India is drawn from India&apos;s point of view, so Jammu and Kashmir and Ladakh include the areas India claims. These maps are for study. For official use, or if you are unsure of a boundary, check the Survey of India map. Marker positions are approximate.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>Official maps and atlases</h2>
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
    </main>
  );
}
