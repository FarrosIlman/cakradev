'use client';

import MosaicGrid from './MosaicGrid';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ContactSection() {
  const { email, whatsapp, phone, officeHours, location } = PORTFOLIO_DATA.personal;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    target.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="fin" id="kontak">
      <div className="g g2">
        <div className="img" style={{ minHeight: 280 }}>
          <MosaicGrid cols={8} rows={6} seed={7} id="m2" />
        </div>

        <div className="cell" onMouseMove={handleMouseMove}>
          <div>
            <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
              KONSULTASI BISNIS // BEBAS BIAYA
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: '12px 0 16px',
              }}
            >
              Hubungi Tim CakraDev
            </h2>
            <p className="txt" style={{ marginBottom: 18, fontSize: '0.92rem', lineHeight: 1.65 }}>
              Ceritakan kebutuhan sistem atau aplikasi yang ingin Anda bangun. Tim CakraDev siap
              berdiskusi, memberikan rekomendasi arsitektur digital terbaik, dan estimasi RAB biaya yang transparan tanpa komitmen.
            </p>

            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.74rem',
                color: 'var(--mut)',
                marginBottom: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                background: 'var(--hv)',
                padding: '14px 16px',
                borderRadius: 6,
                border: '1px solid var(--ln)',
              }}
            >
              <div>
                <span style={{ color: 'var(--g)' }}>●</span> <strong>Lokasi:</strong> {location}
              </div>
              <div>
                <span style={{ color: 'var(--g)' }}>●</span> <strong>Jam Layanan:</strong> {officeHours}
              </div>
              <div>
                <span style={{ color: 'var(--g)' }}>●</span> <strong>Hotline WhatsApp:</strong> {phone}
              </div>
            </div>
          </div>

          <div className="hero-btn-row">
            <a
              className="gb mobile-full-btn"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat WhatsApp Sekarang
            </a>
            <a
              className="ob mobile-full-btn"
              href={`mailto:${email}?subject=Konsultasi%20Pembuatan%20Sistem%20CakraDev`}
            >
              Kirim Email ({email})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
