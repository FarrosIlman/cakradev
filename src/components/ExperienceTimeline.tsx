import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ExperienceTimeline() {
  const timeline = PORTFOLIO_DATA.timeline;

  return (
    <section id="alur">
      <div style={{ padding: '60px 28px 20px', background: 'var(--cd)', borderBottom: '1px solid var(--ln)' }}>
        <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
          METODOLOGI SOFTWARE ENGINEERING // ROADMAP JELAS
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: 8 }}>
          Tahapan &amp; Alur Pengerjaan Sistem
        </h2>
      </div>
      <div className="g g2 ag">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="lb">PROSES SISTEMATIS // UPDATE PROGRES MINGGUAN</div>
            <p className="txt" style={{ marginTop: 16 }}>
              Proses rekayasa sistem yang teruji dan transparan — Anda dapat memantau langsung
              setiap perkembangan modul sistem setiap minggu tanpa khawatir hasil tidak sesuai harapan.
            </p>
            <div
              style={{
                marginTop: 24,
                padding: '16px',
                background: 'var(--hv)',
                border: '1px solid var(--ln)',
                borderRadius: 4,
                fontSize: '0.74rem',
                color: 'var(--mut)',
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: 'var(--g)', fontWeight: 600 }}>● GARANSI &amp; DUKUNGAN RESMI:</span>
              <br />
              Seluruh sistem dilengkapi garansi perbaikan bug gratis, training langsung untuk tim/staf Anda,
              serta penyerahan hak milik source code 100%.
            </div>
          </div>
          <Link
            href="#kontak"
            className="ob"
            style={{ maxWidth: 240, marginTop: 32 }}
          >
            Mulai Konsultasi Alur
          </Link>
        </div>

        <div>
          {timeline.map((item) => (
            <div key={item.id} className="ev">
              <h3>{item.period}</h3>
              <time>{item.year}</time>
              <div>
                <b>{item.title}</b>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
