'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function FeaturedSkills() {
  const skills = PORTFOLIO_DATA.skills;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    target.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="tech">
      <div style={{ padding: '60px 28px 20px', background: 'var(--cd)', borderBottom: '1px solid var(--ln)' }}>
        <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
          TEKNOLOGI &amp; INFRASTRUKTUR // MODERN &amp; STABIL
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: 8 }}>
          Teknologi Standar Industri yang Kami Gunakan
        </h2>
        <p style={{ color: 'var(--mut)', fontSize: '0.92rem', marginTop: 6, maxWidth: 640 }}>
          Kami menggunakan fondasi teknologi modern yang terbukti cepat, aman, dan mudah dirawat dalam jangka panjang.
        </p>
      </div>
      <div className="g g4 sp">
        {skills.map((skill) => (
          <div key={skill.number} onMouseMove={handleMouseMove} style={{ padding: '24px 20px' }}>
            <div className="sk-num" style={{ color: 'var(--g)', fontWeight: 600 }}>
              {skill.number}
            </div>
            <div>
              <div className="sk-title" style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: 8 }}>
                {skill.title}
              </div>
              <div className="sk-sub" style={{ fontSize: '0.8rem', color: 'var(--mut)', marginTop: 4, lineHeight: 1.5 }}>
                {skill.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
