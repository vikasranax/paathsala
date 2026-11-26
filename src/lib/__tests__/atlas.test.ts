import { describe, it, expect } from 'vitest';
import { BASE_VIEW, EXTENT, MAX_ZOOM, clampView, panBy, zoomAt, zoomOf } from '../atlas';

const regions = ['india', 'world'] as const;

describe('atlas view maths', () => {
  it('keeps the point under the cursor fixed when zooming', () => {
    const v = BASE_VIEW.india;
    const cx = v.x + v.w * 0.3;
    const cy = v.y + v.h * 0.7;
    const z = zoomAt('india', v, 2, cx, cy);
    expect((cx - z.x) / z.w).toBeCloseTo((cx - v.x) / v.w, 6);
    expect((cy - z.y) / z.h).toBeCloseTo((cy - v.y) / v.h, 6);
    expect(zoomOf('india', z)).toBeCloseTo(2, 6);
  });

  it('never zooms out past the base view or in past the maximum', () => {
    for (const region of regions) {
      const base = BASE_VIEW[region];
      expect(zoomAt(region, base, 0.1, base.x, base.y).w).toBeCloseTo(base.w, 6);
      let v = base;
      for (let i = 0; i < 40; i++) v = zoomAt(region, v, 2, v.x + v.w / 2, v.y + v.h / 2);
      expect(zoomOf(region, v)).toBeCloseTo(MAX_ZOOM[region], 6);
    }
  });

  it('never pans outside the map', () => {
    for (const region of regions) {
      const ext = EXTENT[region];
      const zoomed = zoomAt(region, BASE_VIEW[region], 4, ext.x + ext.w / 2, ext.y + ext.h / 2);
      const far = panBy(region, zoomed, 1e9, 1e9);
      expect(far.x + far.w).toBeLessThanOrEqual(ext.x + ext.w + 1e-6);
      expect(far.y + far.h).toBeLessThanOrEqual(ext.y + ext.h + 1e-6);
      const near = panBy(region, zoomed, -1e9, -1e9);
      expect(near.x).toBeGreaterThanOrEqual(ext.x - 1e-6);
      expect(near.y).toBeGreaterThanOrEqual(ext.y - 1e-6);
    }
  });

  it('keeps the aspect ratio of the base view', () => {
    for (const region of regions) {
      const base = BASE_VIEW[region];
      const v = clampView(region, { x: base.x, y: base.y, w: base.w / 3, h: 1 });
      expect(v.w / v.h).toBeCloseTo(base.w / base.h, 6);
    }
  });
});
