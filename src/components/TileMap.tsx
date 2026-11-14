'use client';

import { stateTiles } from '@/data/stateTiles';
import type { StateId } from '@/data/stateTiles';

type Props = {
  highlighted: Set<StateId>;
  leaders: Set<StateId>;
  selected: StateId | null;
  hideLabels: boolean;
  onSelect: (id: StateId) => void;
};

export default function TileMap({ highlighted, leaders, selected, hideLabels, onSelect }: Props) {
  return (
    <div
      role="group"
      aria-label="Schematic map of Indian states and Union Territories"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
        gridTemplateRows: 'repeat(7, auto)',
        gap: '4px',
        width: '100%',
        maxWidth: '560px',
      }}
    >
      {stateTiles.map((tile) => {
        const isHighlighted = highlighted.has(tile.id);
        const isLeader = leaders.has(tile.id);
        const isSelected = selected === tile.id;
        const showName = !hideLabels || isSelected;
        return (
          <button
            key={tile.id}
            onClick={() => onSelect(tile.id)}
            aria-label={showName ? tile.name : 'Hidden state'}
            title={showName ? tile.name : 'Tap to reveal'}
            style={{
              gridColumn: tile.col + 1,
              gridRow: tile.row + 1,
              aspectRatio: '1 / 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(9px, 2.3vw, 13px)',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
              background: isHighlighted ? 'var(--marigold)' : 'var(--surface)',
              color: isHighlighted ? '#14231F' : 'var(--indigo)',
              border: isSelected ? '2px solid var(--indigo)' : `1px ${tile.kind === 'ut' ? 'dashed' : 'solid'} var(--border)`,
              boxShadow: isLeader ? '0 0 0 2px var(--kumkum)' : 'none',
            }}
          >
            {showName ? tile.code : ''}
            {isLeader ? '*' : ''}
          </button>
        );
      })}
    </div>
  );
}
