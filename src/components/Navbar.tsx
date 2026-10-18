'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logoText, whatsapp } = PORTFOLIO_DATA.personal;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav id="nav" className={isOpen ? 'open' : ''}>
      <Link href="#top" className="lg" aria-label="CakraDev Beranda" onClick={closeMenu}>
        {logoText}
      </Link>
      <ul id="menu">
        <li>
          <Link href="#layanan" onClick={closeMenu}>
            Layanan
          </Link>
        </li>
        <li>
          <Link href="#sistem" onClick={closeMenu}>
            Portofolio Sistem
          </Link>
        </li>
        <li>
          <Link href="#tech" onClick={closeMenu}>
            Tech Stack
          </Link>
        </li>
        <li>
          <Link href="#paket" onClick={closeMenu}>
            Paket Biaya
          </Link>
        </li>
        <li>
          <Link href="#alur" onClick={closeMenu}>
            Alur Kerja
          </Link>
        </li>
        <li>
          <Link href="#testimoni" onClick={closeMenu}>
            Testimoni
          </Link>
        </li>
        <li className="mobile-only-nav">
          <a
            href={whatsapp || '#kontak'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            style={{ color: 'var(--g)', fontWeight: 600 }}
          >
            Chat WhatsApp ↗
          </a>
        </li>
        <li className="mobile-only-nav">
          <Link
            href="#kontak"
            onClick={closeMenu}
            style={{ fontWeight: 600 }}
          >
            Konsultasi Gratis ↗
          </Link>
        </li>
      </ul>
      <div className="r">
        <a
          className="si"
          href={whatsapp || '#kontak'}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a className="gb" href="#kontak" onClick={closeMenu}>
          <span className="gb-text-full">Konsultasi Gratis</span>
          <span className="gb-text-short">Konsultasi</span>
        </a>
        <button
          className="bt"
          id="bt"
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
