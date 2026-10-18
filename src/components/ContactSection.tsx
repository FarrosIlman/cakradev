'use client';

import MosaicGrid from './MosaicGrid';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ContactSection() {
  const { email, whatsapp } = PORTFOLIO_DATA.personal;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    target.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="fin" id="kontak">
      <div className="g g2">
        <div className="img" style={{ minHeight: 340 }}>
          <MosaicGrid cols={8} rows={6} seed={7} id="m2" />
        </div>

        <div className="cell" onMouseMove={handleMouseMove}>
          <div className="lb">siap-digitalisasi-bisnis? // konsultasi gratis</div>
          <div className="t3">hubungi-cakradev/</div>
          <p className="txt" style={{ marginBottom: 24 }}>
            Ceritakan kebutuhan sistem atau aplikasi yang ingin Anda bangun. Tim CakraDev siap
            berdiskusi, memberikan rekomendasi solusi digital terbaik, dan estimasi biaya yang transparan tanpa komitmen.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignSelf: 'flex-start' }}>
            <a
              className="gb"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: 260 }}
            >
              Chat WhatsApp Sekarang
            </a>
            <a
              className="ob"
              href={`mailto:${email}?subject=Konsultasi%20Pembuatan%20Sistem%20CakraDev`}
              style={{ maxWidth: 260 }}
            >
              Kirim Email ({email})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
