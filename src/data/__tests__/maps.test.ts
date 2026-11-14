import { describe, it, expect } from 'vitest';
import { stateTiles } from '../stateTiles';
import { mapGroups } from '../mapLayers';

describe('state tiles', () => {
  it('has 28 states and 8 Union Territories in unique positions', () => {
    expect(stateTiles.length).toBe(36);
    expect(stateTiles.filter((t) => t.kind === 'state').length).toBe(28);
    expect(stateTiles.filter((t) => t.kind === 'ut').length).toBe(8);
    expect(new Set(stateTiles.map((t) => t.id)).size).toBe(36);
    expect(new Set(stateTiles.map((t) => `${t.col},${t.row}`)).size).toBe(36);
  });
});

describe('map layers', () => {
  it('has unique item ids, no duplicate states and leaders that are producers', () => {
    const ids = new Set<string>();
    for (const group of mapGroups) {
      for (const item of group.items) {
        expect(ids.has(item.id), `duplicate map item id ${item.id}`).toBe(false);
        ids.add(item.id);
        expect(item.states.length, `${item.id} has no states`).toBeGreaterThan(0);
        expect(new Set(item.states).size, `${item.id} lists a state twice`).toBe(item.states.length);
        for (const leader of item.leaders ?? []) {
          expect(item.states.includes(leader), `${item.id} leader ${leader} is not in its states`).toBe(true);
        }
      }
    }
  });
});
