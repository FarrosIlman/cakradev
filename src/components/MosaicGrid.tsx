'use client';

import { useEffect, useRef, useState } from 'react';

interface MosaicGridProps {
  cols?: number;
  rows?: number;
  seed?: number;
  id?: string;
}

const PALETTE = [
  '#10b981',
  '#34d399',
  '#d1fae5',
  '#e4e4e7',
  '#f4f4f5',
  '#ededf0',
  '#ffffff',
];

const createInitialCells = (cols: number, rows: number, seed: number) => {
  let currentSeed = seed;
  const seededRandom = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };

  const list = [];
  const total = cols * rows;
  for (let i = 0; i < total; i++) {
    const colorIndex = Math.floor(seededRandom() * PALETTE.length);
    list.push({
      id: i,
      color: PALETTE[colorIndex],
    });
  }
  return list;
};

export default function MosaicGrid({
  cols = 8,
  rows = 6,
  seed = 3,
  id = 'm1',
}: MosaicGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState(() => createInitialCells(cols, rows, seed));

  useEffect(() => {
    // Living pulse interval like GitHub contribution matrix
    const interval = setInterval(() => {
      setCells((prev) => {
        if (!prev.length) return prev;
        const copy = [...prev];
        const randomIdx = Math.floor(Math.random() * copy.length);
        const randomColor =
          PALETTE[Math.floor(Math.random() * PALETTE.length)];
        copy[randomIdx] = { ...copy[randomIdx], color: randomColor };
        return copy;
      });
    }, 220);

    return () => clearInterval(interval);
  }, []);

  const handleCellHover = (index: number) => {
    setCells((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], color: '#10b981' };
      return copy;
    });
  };

  return (
    <div
      ref={containerRef}
      className="mos"
      id={id}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {cells.map((cell, idx) => (
        <i
          key={cell.id}
          style={{ backgroundColor: cell.color }}
          onMouseEnter={() => handleCellHover(idx)}
        />
      ))}
    </div>
  );
}
