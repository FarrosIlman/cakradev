'use client';

import { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Testimonials() {
  const testimonials = PORTFOLIO_DATA.testimonials;
  const [index, setIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  const current = testimonials[index];

  const triggerAnimation = () => {
    if (typeof window === 'undefined') return;
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    if (quoteRef.current) {
      quoteRef.current.animate(
        [
          { opacity: 0, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 380, easing: ease, fill: 'forwards' }
      );
    }
    if (authorRef.current) {
      authorRef.current.animate(
        [
          { opacity: 0, transform: 'translateY(6px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 380, easing: ease, fill: 'forwards' }
      );
    }
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(triggerAnimation, 10);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(triggerAnimation, 10);
  };

  return (
    <section id="testimoni">
      <div
        className="lb"
        style={{ padding: '64px 28px 16px', borderTop: '1px solid var(--ln)' }}
      >
        ulasan-klien // testimoni pemilik bisnis &amp; instansi
      </div>
      <div className="g g2">
        <div className="cell" style={{ position: 'relative' }}>
          <div className="q" id="qq" ref={quoteRef}>
            {current.quote}
          </div>
          <div className="lb" id="qa" ref={authorRef} style={{ color: 'var(--fg)', fontWeight: 600 }}>
            {current.author}
            {current.role && (
              <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--mut)', fontWeight: 400, marginTop: 4 }}>
                {current.role}
              </span>
            )}
          </div>
        </div>

        <div className="img">
          <div className="ph">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>kepuasan_klien/</span>
              <span style={{ color: 'var(--g)', fontWeight: 600 }}>● SISTEM SUDAH AKTIF DIGUNAKAN</span>
            </div>
            <div
              className="ph-grid"
              style={{
                zIndex: 1,
                position: 'relative',
                background: 'rgba(250,250,250,0.92)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>
                [ Dipercaya Berbagai Klinik, Toko &amp; Perusahaan ]
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--mut)', maxWidth: 360 }}>
                Klinik Medis • Pergudangan &amp; Distribusi • Retail Kasir POS • Properti &amp; Travel
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
                <span className="tag">100% KODE MILIK KLIEN</span>
                <span className="tag">GARANSI RESMI</span>
                <span className="tag">FREE TRAINING STAF</span>
                <span className="tag">MAINTENANCE CEPAT</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', zIndex: 2 }}>
              <span>TESTIMONI TERVERIFIKASI</span>
              <span>ulasan {index + 1} / {testimonials.length}</span>
            </div>
          </div>

          <div className="ar">
            <button id="qp" aria-label="Sebelumnya" onClick={handlePrev}>
              ‹
            </button>
            <button id="qn" aria-label="Selanjutnya" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
