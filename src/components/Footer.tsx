import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const { shortYear, email, whatsapp, github, linkedin, instagram } =
    PORTFOLIO_DATA.personal;

  return (
    <footer id="footer">
      <div className="wm">{shortYear}</div>
      <div className="fr">
        <span>
          © 2026 CAKRADEV — JASA PEMBUATAN SISTEM INFORMASI &amp; APLIKASI CUSTOM
        </span>
        <div>
          <a href="#layanan">Layanan</a>
          <a href="#sistem">Portofolio</a>
          <a href="#paket">Paket Biaya</a>
          <a href="#alur">Alur Kerja</a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={`mailto:${email}`}>Email</a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
