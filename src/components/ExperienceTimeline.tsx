import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ExperienceTimeline() {
  const timeline = PORTFOLIO_DATA.timeline;

  return (
    <section id="alur">
      <h2 className="sec">alur-pengerjaan-sistem/</h2>
      <div className="g g2 ag">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="lb">tahapan_transparan // roadmap pengerjaan</div>
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
