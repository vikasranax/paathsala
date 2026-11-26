// Shared types and view maths for the atlas maps (India and the world).
// Map coordinates are centidegrees: x = longitude * 100, y = -latitude * 100.

export type AtlasRegion = 'india' | 'world';
export type MapMode = 'political' | 'physical';
export type MarkerLayerId = 'capitals' | 'minerals' | 'energy' | 'crops' | 'landforms' | 'water' | 'ports';

export type AtlasMarker = {
  id: string;
  layer: MarkerLayerId;
  kind: string;
  name: string;
  lon: number;
  lat: number;
  note: string;
  z?: number;
};

export type AtlasLabel = { style: 'sea' | 'ocean' | 'continent'; name: string; lon: number; lat: number; z?: number };
export type RegionMarkers = { markers: AtlasMarker[]; labels: AtlasLabel[] };
export type MarkerFile = { india: RegionMarkers; world: RegionMarkers };

export type AreaShape = {
  name: string;
  d: string;
  label: [number, number] | null;
  area: number;
  colour?: number;
  id?: string;
  kind?: 'state' | 'ut';
  iso?: string;
  continent?: string;
};
export type RiverShape = { name: string; d: string; label: [number, number] };
export type IndiaFile = { bbox: [number, number, number, number]; states: AreaShape[]; outline: string; neighbours: AreaShape[]; rivers: RiverShape[] };
export type WorldFile = { countries: AreaShape[] };

export type ViewBox = { x: number; y: number; w: number; h: number };

export type MarkerShape = 'star' | 'diamond' | 'square' | 'circle' | 'triangle' | 'ring' | 'cross';

export const LAYER_STYLE: Record<MarkerLayerId, { label: string; color: string; shape: MarkerShape }> = {
  capitals: { label: 'Capitals', color: '#111111', shape: 'star' },
  minerals: { label: 'Minerals', color: '#7b2d8e', shape: 'diamond' },
  energy: { label: 'Energy', color: '#e07b00', shape: 'square' },
  crops: { label: 'Crops', color: '#1f8f3a', shape: 'circle' },
  landforms: { label: 'Landforms', color: '#8a4b12', shape: 'triangle' },
  water: { label: 'Lakes, deltas, straits', color: '#0b61c4', shape: 'ring' },
  ports: { label: 'Ports', color: '#c0143c', shape: 'cross' },
};

export const REGION_LAYERS: Record<AtlasRegion, MarkerLayerId[]> = {
  india: ['capitals', 'minerals', 'energy', 'crops', 'landforms', 'water', 'ports'],
  world: ['landforms', 'water', 'minerals', 'crops'],
};

// The view shown at zoom 1, and the full extent of the map (for panning limits).
export const BASE_VIEW: Record<AtlasRegion, ViewBox> = {
  india: { x: 6600, y: -3800, w: 3300, h: 3300 },
  world: { x: -18000, y: -8500, w: 36000, h: 14500 },
};
export const EXTENT: Record<AtlasRegion, ViewBox> = {
  india: { x: 6600, y: -3800, w: 3300, h: 3300 },
  world: { x: -18000, y: -9000, w: 36000, h: 18000 },
};
export const MAX_ZOOM: Record<AtlasRegion, number> = { india: 14, world: 12 };

export function zoomOf(region: AtlasRegion, view: ViewBox): number {
  return BASE_VIEW[region].w / view.w;
}

export function clampView(region: AtlasRegion, view: ViewBox): ViewBox {
  const base = BASE_VIEW[region];
  const ext = EXTENT[region];
  const w = Math.min(base.w, Math.max(base.w / MAX_ZOOM[region], view.w));
  const h = (w * base.h) / base.w;
  const x = Math.min(ext.x + ext.w - w, Math.max(ext.x, view.x));
  const y = Math.min(ext.y + ext.h - h, Math.max(ext.y, view.y));
  return { x, y, w, h };
}

// Zoom by `factor` (above 1 zooms in) keeping the map point (cx, cy) under the same screen position.
export function zoomAt(region: AtlasRegion, view: ViewBox, factor: number, cx: number, cy: number): ViewBox {
  const base = BASE_VIEW[region];
  const w = Math.min(base.w, Math.max(base.w / MAX_ZOOM[region], view.w / factor));
  const k = w / view.w;
  return clampView(region, { x: cx - (cx - view.x) * k, y: cy - (cy - view.y) * k, w, h: (w * base.h) / base.w });
}

export function panBy(region: AtlasRegion, view: ViewBox, dx: number, dy: number): ViewBox {
  return clampView(region, { ...view, x: view.x + dx, y: view.y + dy });
}

export function markerPoint(m: { lon: number; lat: number }): [number, number] {
  return [m.lon * 100, -m.lat * 100];
}

// A name is drawn when the shape is large enough on screen at this zoom.
export function labelFits(areaSqDeg: number, zoom: number, threshold: number): boolean {
  return areaSqDeg * zoom * zoom >= threshold;
}
