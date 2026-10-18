'use client';

import { useState, useCallback, useRef } from 'react';

const GLYPHS = '01/_<>-+*#[]{}%=';

export function useScramble(initialText: string, duration = 0.5) {
  const [displayText, setDisplayText] = useState(initialText);
  const isScrambling = useRef(false);

  const trigger = useCallback(() => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    const steps = Math.max(12, Math.floor(duration * 35));
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / steps;
      const revealedCount = Math.floor(progress * initialText.length);

      const scrambled =
        initialText.slice(0, revealedCount) +
        initialText
          .slice(revealedCount)
          .replace(/\S/g, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);

      setDisplayText(scrambled);

      if (frame >= steps) {
        clearInterval(timer);
        setDisplayText(initialText);
        isScrambling.current = false;
      }
    }, 20);
  }, [initialText, duration]);

  return { displayText, trigger };
}
