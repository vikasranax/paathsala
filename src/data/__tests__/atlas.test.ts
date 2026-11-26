import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { REGION_LAYERS } from '../../lib/atlas';
import type { IndiaFile, MarkerFile, WorldFile } from '../../lib/atlas';

function read<T>(file: string): T {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public', 'maps', file), 'utf8')) as T;
}

describe('atlas map files', () => {
  it('has the terrain images', () => {
    for (const f of ['india-physical.jpg', 'world-physical.jpg']) {
      expect(fs.existsSync(path.join(process.cwd(), 'public', 'maps', f)), `${f} is missing from public/maps`).toBe(true);
    }
  });

  it('india.json has 28 states and 8 Union Territories with shapes and an outline', () => {
    const india = read<IndiaFile>('india.json');
    expect(india.states.length).toBe(36);
    expect(india.states.filter((s) => s.kind === 'state').length).toBe(28);
    expect(india.states.filter((s) => s.kind === 'ut').length).toBe(8);
    expect(new Set(india.states.map((s) => s.id)).size).toBe(36);
    for (const s of india.states) expect(s.d.length, `${s.name} has no shape`).toBeGreaterThan(10);
    expect(india.outline.length).toBeGreaterThan(1000);
    expect(india.rivers.length).toBeGreaterThan(15);
  });

  it('every state or Union Territory has a capital marker that names it', () => {
    const india = read<IndiaFile>('india.json');
    const markers = read<MarkerFile>('markers.json').india.markers.filter((m) => m.layer === 'capitals');
    for (const s of india.states) {
      expect(markers.some((m) => m.note.includes(s.name)), `no capital found for ${s.name}`).toBe(true);
    }
  });

  it('world.json has the countries', () => {
    const world = read<WorldFile>('world.json');
    expect(world.countries.length).toBeGreaterThan(200);
    expect(world.countries.every((c) => c.d.length > 0)).toBe(true);
  });

  it('markers are well formed and sit inside their map', () => {
    const file = read<MarkerFile>('markers.json');
    const bounds = { india: [66, 5, 99, 38], world: [-180, -90, 180, 90] } as const;
    for (const region of ['india', 'world'] as const) {
      const ids = new Set<string>();
      const [x0, y0, x1, y1] = bounds[region];
      for (const m of file[region].markers) {
        expect(ids.has(m.id), `duplicate marker id ${m.id}`).toBe(false);
        ids.add(m.id);
        expect(REGION_LAYERS[region].includes(m.layer), `${m.name} uses layer ${m.layer} which ${region} does not offer`).toBe(true);
        expect(m.lon >= x0 && m.lon <= x1 && m.lat >= y0 && m.lat <= y1, `${m.name} is outside the ${region} map`).toBe(true);
        expect(m.note.trim().length, `${m.name} has no note`).toBeGreaterThan(0);
      }
    }
  });
});
