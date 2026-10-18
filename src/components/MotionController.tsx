'use client';

import { useEffect } from 'react';

const GLYPHS = '01/_<>-+*#[]{}%=';

export function scrambleText(
  el: HTMLElement | null,
  finalStr?: string,
  duration = 0.6
) {
  if (!el || (el as any)._scrambling) return;
  (el as any)._scrambling = true;
  const text = finalStr || el.getAttribute('data-txt') || el.textContent || '';
  el.setAttribute('data-txt', text);
  const steps = Math.max(12, Math.floor(duration * 40));
  let frame = 0;

  const timer = setInterval(() => {
    frame++;
    const progress = frame / steps;
    const n = Math.floor(progress * text.length);
    el.textContent =
      text.slice(0, n) +
      text
        .slice(n)
        .replace(
          /\S/g,
          () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        );

    if (frame >= steps) {
      clearInterval(timer);
      el.textContent = text;
      (el as any)._scrambling = false;
    }
  }, 18);
}

export default function MotionController() {
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

    // 1. Top Scroll Progress Bar
    const sbar = document.getElementById('sbar');
    if (sbar) {
      const handleScroll = () => {
        const total =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
        sbar.style.transform = `scaleX(${progress})`;
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // 2. Giant Wordmark: 3D character flip-up (GitHub Universe style)
    const wmObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const wm = entry.target as HTMLElement;
            const chList = wm.querySelectorAll<HTMLElement>('.ch');
            chList.forEach((ch, idx) => {
              ch.animate(
                [
                  { opacity: 0, transform: 'translateY(110%) rotateX(-80deg)' },
                  { opacity: 1, transform: 'translateY(0%) rotateX(0deg)' },
                ],
                {
                  duration: 850,
                  delay: idx * 45,
                  easing: ease,
                  fill: 'forwards',
                }
              );
            });
            obs.unobserve(wm);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll<HTMLElement>('.wm').forEach((wm) => {
      if (!wm.querySelector('.ch')) {
        const text = (wm.textContent || '').trim();
        if (text) {
          const chars = text.split('');
          wm.innerHTML = chars
            .map(
              (c) =>
                `<span class="ch" style="opacity:0">${
                  c === ' ' ? '&nbsp;' : c
                }</span>`
            )
            .join('');
        }
      }
      wmObserver.observe(wm);
    });

    // 3. Statement & Section Headings: Word-by-word masked slide-up
    const headingObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hd = entry.target as HTMLElement;
            const wordList = hd.querySelectorAll<HTMLElement>('.w-in');
            wordList.forEach((w, idx) => {
              w.animate(
                [
                  { opacity: 0, transform: 'translateY(105%)' },
                  { opacity: 1, transform: 'translateY(0%)' },
                ],
                {
                  duration: 650,
                  delay: idx * 45,
                  easing: ease,
                  fill: 'forwards',
                }
              );
            });
            obs.unobserve(hd);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll<HTMLElement>('.stm, .sec, .fin .t3')
      .forEach((hd) => {
        if (!hd.querySelector('.w-wrap')) {
          const text = (hd.textContent || '').trim();
          if (text) {
            const words = text.split(/\s+/);
            hd.innerHTML = words
              .map(
                (w) =>
                  `<span class="w-wrap"><span class="w-in" style="opacity:0">${w}</span></span>`
              )
              .join(' ');
          }
        }
        headingObserver.observe(hd);
      });

    // 4. Hero cells & Interactive Dot Matrix entrance
    const heroItems = document.querySelectorAll<HTMLElement>(
      '.hero > *, .big, .dots'
    );
    heroItems.forEach((el, idx) => {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        {
          duration: 700,
          delay: 200 + idx * 80,
          easing: ease,
          fill: 'forwards',
        }
      );
    });

    // 5. Monospace Labels & Nav Links: Terminal Scramble-in on view & hover
    const scrambleObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            scrambleText(
              el,
              el.getAttribute('data-txt') || el.textContent || '',
              0.65
            );
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll<HTMLElement>('.lb, .sk-num, nav ul a, nav .si')
      .forEach((el) => {
        if (el.children.length > 0) return;
        const text = el.textContent || '';
        el.setAttribute('data-txt', text);

        if (!el.closest('nav')) {
          scrambleObserver.observe(el);
        }

        el.addEventListener('mouseenter', () => {
          scrambleText(el, el.getAttribute('data-txt') || text, 0.45);
        });
      });

    // 6. Cards, Skills & Timeline Rows: Staggered 3D reveal
    const cardObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.animate(
              [
                { opacity: 0, transform: 'translateY(28px) scale(0.98)' },
                { opacity: 1, transform: 'translateY(0) scale(1)' },
              ],
              {
                duration: 650,
                easing: ease,
                fill: 'forwards',
              }
            );
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll<HTMLElement>('.cell, .card, .sp > div, .ev')
      .forEach((el) => {
        el.style.opacity = '0';
        cardObserver.observe(el);
      });

    // 7. Interactive Cursor Spotlight Glow
    document
      .querySelectorAll<HTMLElement>('.cell, .card, .sp > div')
      .forEach((card) => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
      });

    // 8. Magnetic Pull on Buttons
    document
      .querySelectorAll<HTMLElement>('.gb, .ob, .pb, .nxt')
      .forEach((btn) => {
        btn.addEventListener('mousemove', (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.14;
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
          btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.02)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate(0px, 0px) scale(1)';
        });
      });

    // 9. Mosaic Grid: Stagger reveal
    const mosaicObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const g = entry.target as HTMLElement;
            const cellList = g.querySelectorAll<HTMLElement>('i');
            cellList.forEach((cell, idx) => {
              cell.animate(
                [
                  { opacity: 0, transform: 'scale(0.5)' },
                  { opacity: 1, transform: 'scale(1)' },
                ],
                {
                  duration: 450,
                  delay: (idx % 8) * 25,
                  easing: ease,
                  fill: 'forwards',
                }
              );
            });
            obs.unobserve(g);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll<HTMLElement>('.mos').forEach((g) => {
      mosaicObserver.observe(g);
    });

    return () => {
      wmObserver.disconnect();
      headingObserver.disconnect();
      scrambleObserver.disconnect();
      cardObserver.disconnect();
      mosaicObserver.disconnect();
    };
  }, []);

  return null;
}
