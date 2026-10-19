'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ResumeSection() {
  const { whatsapp, phone, email, companyProfileUrl } = PORTFOLIO_DATA.personal;

  return (
    <div className="g g2" id="konsultasi">
      <div className="resume-col" style={{ background: 'var(--cd)' }}>
        <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
          KONSULTASI GRATIS // RESPONS CEPAT
        </div>
        <h3
          style={{
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginTop: 14,
            marginBottom: 16,
            lineHeight: 1.25,
          }}
        >
          Konsultasikan Kebutuhan Sistem &amp; Estimasi Biaya (RAB)
        </h3>

        <div
          style={{
            background: 'var(--hv)',
            borderRadius: 8,
            padding: '18px',
            border: '1px solid var(--ln)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            fontSize: '0.82rem',
          }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--mut)' }}>
            // Kontak Langsung Tim Software Engineering CakraDev:
          </div>
          <div>
            <strong>WhatsApp: </strong>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--g)', textDecoration: 'underline', fontWeight: 600 }}
            >
              {phone} (CakraDev Studio)
            </a>
          </div>
          <div>
            <strong>Email: </strong>
            <span style={{ color: 'var(--fg)', fontFamily: 'JetBrains Mono, monospace' }}>
              {email}
            </span>
          </div>
          <div style={{ borderTop: '1px solid var(--ln)', paddingTop: 10, marginTop: 4, color: 'var(--mut)', fontSize: '0.78rem' }}>
            Jaminan: 100% Hak Milik Source Code • Training Staf Gratis • Garansi Resmi
          </div>
        </div>
      </div>

      <div
        className="resume-col"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 20,
          background: 'var(--cd)',
        }}
      >
        <div>
          <p className="txt" style={{ fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 16 }}>
            Ceritakan masalah operasional atau kebutuhan sistem yang ingin Anda bangun. Tim CakraDev akan membantu merumuskan spesifikasi fitur, alur database, serta menyusun estimasi jadwal pengerjaan dan rincian anggaran biaya (RAB) yang transparan tanpa komitmen awal.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.84rem', color: 'var(--mut)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
              <span>Diskusi alur sistem via chat WhatsApp atau Google Meet</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
              <span>Dokumen proposal &amp; rancangan estimasi biaya gratis</span>
            </div>
          </div>
        </div>

        <div className="hero-btn-row">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="gb mobile-full-btn"
          >
            Konsultasi WhatsApp Sekarang
          </a>
          <a
            href={companyProfileUrl || '#kontak'}
            target="_blank"
            rel="noopener noreferrer"
            className="ob mobile-full-btn"
          >
            Minta Katalog &amp; Proposal
          </a>
        </div>
      </div>
    </div>
  );
}
