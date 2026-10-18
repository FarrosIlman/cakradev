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
      <h2 className="sec">tech-stack-sistem/</h2>
      <div className="g g4 sp">
        {skills.map((skill) => (
          <div key={skill.number} onMouseMove={handleMouseMove}>
            <div className="sk-num">{skill.number}</div>
            <div>
              <div className="sk-title">{skill.title}</div>
              <div className="sk-sub">{skill.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
