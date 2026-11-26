'use client';

import { memo, useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import { BASE_VIEW, EXTENT, LAYER_STYLE, clampView, labelFits, markerPoint, panBy, zoomAt, zoomOf } from '@/lib/atlas';
import type {
  AreaShape,
  AtlasMarker,
  AtlasRegion,
  IndiaFile,
  MapMode,
  MarkerFile,
  MarkerLayerId,
  MarkerShape,
  ViewBox,
  WorldFile,
} from '@/lib/atlas';

export type AtlasSelection =
  | { kind: 'marker'; marker: AtlasMarker }
  | { kind: 'area'; name: string; detail: string; capitals: string[] }
  | null;

const PALETTE = ['#f6dca8', '#cfe5bd', '#f3c9c4', '#cddcf0', '#e9d4ee', '#f8eca6'];
const SHORT_NAMES: Record<string, string> = {
  'Dadra and Nagar Haveli and Daman and Diu': 'DNH and DD',
};

// ---------- data loading (cached for the session) ----------
const cache: { markers?: Promise<MarkerFile>; geo: Partial<Record<AtlasRegion, Promise<IndiaFile | WorldFile>>> } = { geo: {} };

function fetchJson<T>(url: string): Promise<T> {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`Could not load ${url} (${res.status})`);
    return res.json() as Promise<T>;
  });
}
function loadMarkers(): Promise<MarkerFile> {
  if (!cache.markers) {
    cache.markers = fetchJson<MarkerFile>('/maps/markers.json').catch((e: unknown) => {
      cache.markers = undefined;
      throw e;
    });
  }
  return cache.markers;
}
function loadGeo(region: AtlasRegion): Promise<IndiaFile | WorldFile> {
  let p = cache.geo[region];
  if (!p) {
    p = fetchJson<IndiaFile | WorldFile>(`/maps/${region}.json`).catch((e: unknown) => {
      cache.geo[region] = undefined;
      throw e;
    });
    cache.geo[region] = p;
  }
  return p;
}

type Loaded = { region: AtlasRegion; geo?: IndiaFile | WorldFile; markers?: MarkerFile; error?: string };

function useAtlasData(region: AtlasRegion): Loaded | undefined {
  const [state, setState] = useState<Loaded | undefined>(undefined);
  useEffect(() => {
    let cancelled = false;
    Promise.all([loadGeo(region), loadMarkers()])
      .then(([geo, markers]) => {
        if (!cancelled) setState({ region, geo, markers });
      })
      .catch((e: unknown) => {
        if (!cancelled) setState({ region, error: e instanceof Error ? e.message : 'Could not load the map' });
      });
    return () => {
      cancelled = true;
    };
  }, [region]);
  return state && state.region === region ? state : undefined;
}

// ---------- drawing ----------
type BaseProps = {
  region: AtlasRegion;
  mode: MapMode;
  geo: IndiaFile | WorldFile;
  showRivers: boolean;
  showBorders: boolean;
  onArea: (area: AreaShape) => void;
};

// The heavy shapes. Memoised so panning and zooming only change the viewBox.
const Base = memo(function Base({ region, mode, geo, showRivers, showBorders, onArea }: BaseProps) {
  const ext = EXTENT[region];
  const india = region === 'india' ? (geo as IndiaFile) : null;
  const areas: AreaShape[] = india ? india.states : (geo as WorldFile).countries;
  const political = mode === 'political';
  return (
    <>
      {political ? (
        <rect x={ext.x} y={ext.y} width={ext.w} height={ext.h} fill="#cfe4f2" />
      ) : (
        <image href={`/maps/${region}-physical.jpg`} x={ext.x} y={ext.y} width={ext.w} height={ext.h} preserveAspectRatio="none" />
      )}
      {political &&
        india?.neighbours.map((n) => (
          <path key={n.name} d={n.d} fillRule="evenodd" fill="#ebe8e0" stroke="#b5b0a4" strokeWidth={0.6} vectorEffect="non-scaling-stroke" />
        ))}
      {areas.map((a, i) => (
        <path
          key={`${a.name}-${i}`}
          d={a.d}
          fillRule="evenodd"
          fill={political ? PALETTE[a.colour ?? 0] : 'transparent'}
          stroke={political ? '#6f6a5f' : '#5a3a2a'}
          strokeWidth={political ? 0.7 : 0.6}
          strokeDasharray={political ? undefined : '3 2'}
          strokeOpacity={political || showBorders ? 1 : 0}
          vectorEffect="non-scaling-stroke"
          style={{ cursor: 'pointer' }}
          onClick={() => onArea(a)}
        />
      ))}
      {showRivers &&
        india?.rivers.map((r) => (
          <path key={r.name} d={r.d} fill="none" stroke={political ? '#3b82c4' : '#1d5fa8'} strokeWidth={1.1} vectorEffect="non-scaling-stroke" pointerEvents="none" />
        ))}
      {india && (
        <path d={india.outline} fill="none" stroke={political ? '#1b1b1b' : '#7a0f0f'} strokeWidth={political ? 1.6 : 1.3} vectorEffect="non-scaling-stroke" pointerEvents="none" />
      )}
    </>
  );
});

function starPoints(r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r * 1.7 : r * 0.7;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(Math.cos(a) * rad).toFixed(1)},${(Math.sin(a) * rad).toFixed(1)}`);
  }
  return pts.join(' ');
}

function MarkerSymbol({ shape, r, color }: { shape: MarkerShape; r: number; color: string }) {
  const common = { fill: color, stroke: '#ffffff', strokeWidth: r * 0.35 } as const;
  switch (shape) {
    case 'star':
      return <polygon points={starPoints(r)} {...common} />;
    case 'diamond':
      return <polygon points={`0,${-r * 1.4} ${r * 1.4},0 0,${r * 1.4} ${-r * 1.4},0`} {...common} />;
    case 'square':
      return <rect x={-r} y={-r} width={r * 2} height={r * 2} {...common} />;
    case 'triangle':
      return <polygon points={`0,${-r * 1.4} ${r * 1.3},${r} ${-r * 1.3},${r}`} {...common} />;
    case 'ring':
      return <circle r={r} fill="#ffffff" stroke={color} strokeWidth={r * 0.55} />;
    case 'cross':
      return (
        <polygon
          points={`${-r * 0.5},${-r * 1.4} ${r * 0.5},${-r * 1.4} ${r * 0.5},${-r * 0.5} ${r * 1.4},${-r * 0.5} ${r * 1.4},${r * 0.5} ${r * 0.5},${r * 0.5} ${r * 0.5},${r * 1.4} ${-r * 0.5},${r * 1.4} ${-r * 0.5},${r * 0.5} ${-r * 1.4},${r * 0.5} ${-r * 1.4},${-r * 0.5} ${-r * 0.5},${-r * 0.5}`}
          {...common}
        />
      );
    default:
      return <circle r={r} {...common} />;
  }
}

const halo: CSSProperties = { paintOrder: 'stroke', pointerEvents: 'none', userSelect: 'none' };

type Props = {
  region: AtlasRegion;
  mode: MapMode;
  layers: MarkerLayerId[];
  showRivers: boolean;
  showBorders: boolean;
  testMode: boolean;
  selection: AtlasSelection;
  onSelect: (selection: AtlasSelection) => void;
};

export default function AtlasMap({ region, mode, layers, showRivers, showBorders, testMode, selection, onSelect }: Props) {
  const data = useAtlasData(region);
  const [view, setView] = useState<ViewBox>(BASE_VIEW[region]);
  const viewRef = useRef(view);
  const svgRef = useRef<SVGSVGElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const drag = useRef<{ x: number; y: number; moved: boolean; captured: boolean } | null>(null);
  const pinch = useRef<number | null>(null);
  const suppressClick = useRef(false);

  const apply = useCallback((next: ViewBox) => {
    viewRef.current = next;
    setView(next);
  }, []);

  // Ctrl or Cmd + wheel (and trackpad pinch) zooms; a plain wheel still scrolls the page.
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    function onWheel(e: WheelEvent) {
      if (!el || !(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const v = viewRef.current;
      const cx = v.x + ((e.clientX - rect.left) / rect.width) * v.w;
      const cy = v.y + ((e.clientY - rect.top) / rect.height) * v.h;
      apply(zoomAt(region, v, e.deltaY < 0 ? 1.18 : 1 / 1.18, cx, cy));
    }
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [region, apply, data]);

  const geo = data?.geo;
  const markerData = data?.markers?.[region];
  const areas: AreaShape[] = geo ? (region === 'india' ? (geo as IndiaFile).states : (geo as WorldFile).countries) : [];

  const onArea = useCallback(
    (a: AreaShape) => {
      if (suppressClick.current) return;
      const capitals =
        region === 'india' && markerData
          ? markerData.markers.filter((m) => m.layer === 'capitals' && m.note.includes(a.name)).map((m) => m.name)
          : [];
      const detail = region === 'india' ? (a.kind === 'ut' ? 'Union Territory' : 'State') : (a.continent ?? '');
      onSelect({ kind: 'area', name: a.name, detail, capitals });
    },
    [region, markerData, onSelect],
  );

  function toUnits(clientX: number, clientY: number, v: ViewBox) {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return { x: v.x, y: v.y };
    return { x: v.x + ((clientX - rect.left) / rect.width) * v.w, y: v.y + ((clientY - rect.top) / rect.height) * v.h };
  }

  function onPointerDown(e: ReactPointerEvent<SVGSVGElement>) {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    suppressClick.current = false;
    if (pointers.current.size === 1) drag.current = { x: e.clientX, y: e.clientY, moved: false, captured: false };
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = Math.hypot(a.x - b.x, a.y - b.y);
    }
  }

  function onPointerMove(e: ReactPointerEvent<SVGSVGElement>) {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const v = viewRef.current;

    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const centre = toUnits((a.x + b.x) / 2, (a.y + b.y) / 2, v);
      apply(zoomAt(region, v, dist / pinch.current, centre.x, centre.y));
      pinch.current = dist;
      suppressClick.current = true;
      return;
    }

    const d = drag.current;
    if (!d || pointers.current.size !== 1) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (!d.moved && Math.hypot(dx, dy) < 5) return;
    if (!d.captured) {
      svgRef.current?.setPointerCapture(e.pointerId);
      d.captured = true;
    }
    d.moved = true;
    suppressClick.current = true;
    const unitsPerPx = v.w / rect.width;
    apply(panBy(region, v, -dx * unitsPerPx, -dy * unitsPerPx));
    d.x = e.clientX;
    d.y = e.clientY;
  }

  function onPointerEnd(e: ReactPointerEvent<SVGSVGElement>) {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 0) drag.current = null;
  }

  function zoomBy(factor: number) {
    const v = viewRef.current;
    apply(zoomAt(region, v, factor, v.x + v.w / 2, v.y + v.h / 2));
  }

  const base = BASE_VIEW[region];
  const zoom = zoomOf(region, view);
  const fs = view.w * 0.0125;
  const r = view.w * 0.0062;
  const markerZoom = region === 'india' ? 2.4 : 3;
  const areaThreshold = region === 'india' ? 3.5 : 160;
  const selectedArea = selection?.kind === 'area' ? areas.find((a) => a.name === selection.name) : undefined;
  const selectedMarkerId = selection?.kind === 'marker' ? selection.marker.id : null;
  const visibleMarkers = markerData ? markerData.markers.filter((m) => layers.includes(m.layer)) : [];
  const labelStroke = mode === 'physical' ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)';

  const button: CSSProperties = {
    width: '34px',
    height: '34px',
    background: 'var(--surface)',
    color: 'var(--ink)',
    border: '1px solid var(--border)',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: 1,
  };

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: `${base.w} / ${base.h}`, border: '1px solid var(--border)', background: '#cfe4f2', overflow: 'hidden' }}>
      <svg
        ref={svgRef}
        viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
        width="100%"
        height="100%"
        role="img"
        aria-label={`${region === 'india' ? 'India' : 'World'} ${mode} map`}
        style={{ display: 'block', touchAction: zoom > 1.01 ? 'none' : 'pan-y pinch-zoom', cursor: 'grab' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onClick={(e) => {
          if (e.target === e.currentTarget && !suppressClick.current) onSelect(null);
        }}
      >
        {geo && <Base region={region} mode={mode} geo={geo} showRivers={showRivers} showBorders={showBorders} onArea={onArea} />}

        {selectedArea && <path d={selectedArea.d} fillRule="evenodd" fill="rgba(229,161,59,0.28)" stroke="#e5a13b" strokeWidth={2.4} vectorEffect="non-scaling-stroke" pointerEvents="none" />}

        {/* names of states, countries and neighbours */}
        {geo &&
          !testMode &&
          areas
            .filter((a) => a.label && labelFits(a.area, zoom, areaThreshold))
            .map((a, i) => (
              <text key={`al-${a.name}-${i}`} x={(a.label as [number, number])[0] * 100} y={-(a.label as [number, number])[1] * 100} fontSize={fs} textAnchor="middle" fill="#1d1d1d" stroke={labelStroke} strokeWidth={fs * 0.28} style={halo} fontFamily="sans-serif">
                {SHORT_NAMES[a.name] ?? a.name}
              </text>
            ))}
        {geo &&
          region === 'india' &&
          !testMode &&
          (geo as IndiaFile).neighbours
            .filter((n) => n.label && labelFits(n.area, zoom, 6))
            .map((n) => (
              <text key={`nl-${n.name}`} x={(n.label as [number, number])[0] * 100} y={-(n.label as [number, number])[1] * 100} fontSize={fs * 0.95} textAnchor="middle" fill="#5d574a" stroke={labelStroke} strokeWidth={fs * 0.25} style={halo} fontFamily="sans-serif">
                {n.name}
              </text>
            ))}
        {selectedArea && testMode && selectedArea.label && (
          <text x={selectedArea.label[0] * 100} y={-selectedArea.label[1] * 100} fontSize={fs} textAnchor="middle" fill="#1d1d1d" stroke={labelStroke} strokeWidth={fs * 0.28} style={halo} fontFamily="sans-serif">
            {SHORT_NAMES[selectedArea.name] ?? selectedArea.name}
          </text>
        )}

        {/* river names */}
        {geo && region === 'india' && showRivers && !testMode && zoom >= 1.8 &&
          (geo as IndiaFile).rivers.map((rv) => (
            <text key={`rl-${rv.name}`} x={rv.label[0] * 100} y={-rv.label[1] * 100} fontSize={fs * 0.85} fill="#0f4c8a" stroke={labelStroke} strokeWidth={fs * 0.25} fontStyle="italic" style={halo} fontFamily="sans-serif">
              {rv.name}
            </text>
          ))}

        {/* seas, oceans and continents */}
        {markerData &&
          !testMode &&
          markerData.labels
            .filter((l) => (l.z ?? 1) <= zoom)
            .map((l) => (
              <text
                key={`sl-${l.name}`}
                x={l.lon * 100}
                y={-l.lat * 100}
                fontSize={l.style === 'continent' ? fs * 1.5 : l.style === 'ocean' ? fs * 1.45 : fs * 1.05}
                textAnchor="middle"
                fill={l.style === 'continent' ? 'rgba(40,40,40,0.55)' : '#0f4c8a'}
                fontStyle={l.style === 'continent' ? 'normal' : 'italic'}
                letterSpacing={l.style === 'continent' ? fs * 0.25 : 0}
                stroke={l.style === 'continent' ? 'none' : 'rgba(255,255,255,0.55)'}
                strokeWidth={fs * 0.2}
                style={halo}
                fontFamily="sans-serif"
              >
                {l.name}
              </text>
            ))}

        {/* markers */}
        {visibleMarkers.map((m) => {
          const [x, y] = markerPoint(m);
          const style = LAYER_STYLE[m.layer];
          const isSelected = selectedMarkerId === m.id;
          const showName = isSelected || (!testMode && zoom >= (m.z ?? markerZoom));
          return (
            <g
              key={m.id}
              transform={`translate(${x} ${y})`}
              role="button"
              tabIndex={0}
              aria-label={testMode && !isSelected ? 'Hidden marker' : `${m.name}, ${m.kind}`}
              style={{ cursor: 'pointer', outline: 'none' }}
              onClick={() => {
                if (!suppressClick.current) onSelect({ kind: 'marker', marker: m });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect({ kind: 'marker', marker: m });
                }
              }}
            >
              <circle r={r * 2.4} fill="transparent" />
              {isSelected && <circle r={r * 2.6} fill="none" stroke="#e5a13b" strokeWidth={r * 0.7} />}
              <MarkerSymbol shape={style.shape} r={r} color={style.color} />
              {showName && (
                <text x={r * 1.9} y={fs * 0.35} fontSize={fs} fill="#111" stroke={labelStroke} strokeWidth={fs * 0.28} style={halo} fontFamily="sans-serif">
                  {m.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div style={{ position: 'absolute', top: '8px', right: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <button type="button" style={button} onClick={() => zoomBy(1.5)} aria-label="Zoom in">+</button>
        <button type="button" style={button} onClick={() => zoomBy(1 / 1.5)} aria-label="Zoom out">−</button>
        <button type="button" style={{ ...button, fontSize: '11px' }} onClick={() => apply(clampView(region, BASE_VIEW[region]))} aria-label="Reset the view">Reset</button>
      </div>
      <div style={{ position: 'absolute', left: '8px', bottom: '6px', fontSize: '11px', color: '#333', background: 'rgba(255,255,255,0.75)', padding: '2px 6px' }}>
        {zoom.toFixed(1)}x
      </div>

      {!data && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#333', background: 'rgba(207,228,242,0.85)' }}>Loading the map...</div>}
      {data?.error && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', textAlign: 'center', fontSize: '14px', color: '#7a0f0f', background: 'rgba(255,255,255,0.9)' }}>
          {data.error}. Check that the files from public/maps are in your project.
        </div>
      )}
    </div>
  );
}
