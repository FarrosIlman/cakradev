'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ResumeSection() {
  const { whatsapp } = PORTFOLIO_DATA.personal;

  return (
    <div className="g g2" id="konsultasi">
      <div style={{ background: 'var(--cd)' }}>
        <div className="lb">konsultasi-gratis // respons-cepat</div>
        <h3
          style={{
            fontSize: 'clamp(1.6rem,2.6vw,2.2rem)',
            fontWeight: 600,
            letterSpacing: '-.03em',
            marginTop: 24,
            marginBottom: 16,
          }}
        >
          request-proposal/
        </h3>

        <div
          className="code-box"
          style={{
            background: '#0d1117',
            borderRadius: 6,
            padding: '16px 20px',
            color: '#7ee787',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.78rem',
            lineHeight: 1.6,
            border: '1px solid #30363d',
            maxWidth: 460,
            overflowX: 'auto',
          }}
        >
          <div style={{ color: '#8b949e', marginBottom: 4 }}>
            // Konsultasi Alur Sistem &amp; Estimasi RAB Gratis:
          </div>
          <div>
            WhatsApp:{' '}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#58a6ff', textDecoration: 'underline' }}
            >
              +62 858-7654-3210 (CakraDev)
            </a>
          </div>
          <div style={{ color: '#e6edf3', marginTop: 4 }}>
            Jaminan: 100% Source Code Milik Anda • Free Training Staf
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 24,
          background: 'var(--cd)',
        }}
      >
        <p className="txt">
          Ceritakan masalah alur kerja operasional bisnis yang ingin Anda rapikan.
          Tim CakraDev akan menyusunkan dokumen spesifikasi fitur sistem, alur database,
          serta estimasi jadwal rilis dan anggaran biaya (RAB) yang transparan.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="gb"
            style={{ maxWidth: 240, padding: '13px 20px' }}
          >
            Konsultasi WhatsApp Sekarang
          </a>
          <a
            href="#alur"
            className="ob"
            style={{ maxWidth: 220 }}
          >
            Pelajari Alur Kerja
          </a>
        </div>
      </div>
    </div>
  );
}
