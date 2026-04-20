import './Footer.css';

/* ── Compass star SVG logo (matches reference) ── */
function CompassLogo() {
  return (
    <svg className="footer-logo-svg" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="flg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#flg)" />
      <ellipse cx="40" cy="40" rx="36" ry="20" fill="none" stroke="#c9a84c" strokeWidth="0.8" strokeOpacity="0.6" className="fl-orbit" />
      <ellipse cx="40" cy="40" rx="26" ry="14" fill="none" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.4" className="fl-orbit-inner" />
      <g className="fl-star">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
          const rad = (a * Math.PI) / 180;
          const len = a % 90 === 0 ? 22 : 15;
          return <line key={a} x1="40" y1="40" x2={40 + len * Math.cos(rad)} y2={40 + len * Math.sin(rad)}
            stroke="#c9a84c" strokeWidth={a % 90 === 0 ? 1.4 : 0.7} strokeOpacity="0.9" />;
        })}
        {[0, 90, 180, 270].map(a => {
          const rad = (a * Math.PI) / 180;
          const tx = 40 + 22 * Math.cos(rad);
          const ty = 40 + 22 * Math.sin(rad);
          return <polygon key={a}
            points={`${tx},${ty - 3} ${tx + 2},${ty} ${tx},${ty + 3} ${tx - 2},${ty}`}
            fill="#c9a84c" fillOpacity="0.95"
            transform={`rotate(${a}, ${tx}, ${ty})`} />;
        })}
      </g>
      <circle cx="40" cy="40" r="9" fill="none" stroke="#c9a84c" strokeWidth="0.7" strokeOpacity="0.6" />
      <circle cx="40" cy="40" r="3" fill="#c9a84c" fillOpacity="0.95" />
      {[0, 90, 180, 270].map(a => {
        const rad = (a * Math.PI) / 180;
        return <circle key={a} cx={40 + 36 * Math.cos(rad)} cy={40 + 20 * Math.sin(rad)} r="2.5"
          fill="#c9a84c" fillOpacity="0.85" />;
      })}
    </svg>
  );
}

const Footer = () => (
  <footer className="site-footer" id="footer">
    <div className="footer-inner">

      {/* ── Col 1: Quick Links ── */}
      <div className="footer-col footer-links-col">
        <h4 className="footer-col-title">Quick links</h4>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#home"     className="footer-link">Home</a>
          <a href="#about"    className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact"  className="footer-link">Contact Us</a>
        </nav>
      </div>

      {/* ── Col 2: Address ── */}
      <div className="footer-col footer-address-col">
        <h4 className="footer-col-title">Address</h4>
        <address className="footer-address">
          <p className="addr-name">Astrologer Sanjai</p>
          <p className="addr-line">
            Salem, Tamil Nadu – 636302
          </p>
          <div className="addr-contacts">
            <a href="tel:+918428855999" className="footer-contact-link">+91-8428855999</a>
            <a href="mailto:sanjais006@gmail.com" className="footer-contact-link">
              sanjais006@gmail.com
            </a>
          </div>
        </address>
      </div>

      {/* ── Col 3: Brand ── */}
      <div className="footer-col footer-brand-col">
        <div className="footer-brand">
          <CompassLogo />
          <div className="footer-brand-text">
            <span className="footer-brand-name">Vishnumaya Jyothidam</span>
            <span className="footer-brand-tagline">AUTHENTIC TRADITIONAL ASTROLOGY</span>
          </div>
        </div>
        <p className="footer-brand-desc">
          Welcome to Vishnumaya Jyothidam, your trusted center for ancient
          Vedic and traditional astrology in the heart of Sankagiri, Salem.
        </p>
      </div>

    </div>

    {/* ── Bottom bar ── */}
    <div className="footer-bottom">
      <span className="footer-copy">
        © {new Date().getFullYear()} Vishnumaya Jyothidam. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
