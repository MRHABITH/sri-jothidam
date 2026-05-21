import { useState, useEffect } from 'react';
import './Hero.css';

// Inline SVG zodiac glyphs — gold on dark, no external dependency, instant load
const makeSVG = (path) =>
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'><circle cx='50' cy='50' r='48' fill='%231a0f35' stroke='%23c9a84c' stroke-width='2'/><g fill='none' stroke='%23c9a84c' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'>${path}</g></svg>`;

const SIGNS = [
  { name: 'Aries',       img: makeSVG("<path d='M50 70 Q50 35 35 25 M50 70 Q50 35 65 25 M42 45 Q50 38 58 45'/>"),                                desc: 'The Ram',      dates: 'Mar 21 – Apr 19' },
  { name: 'Taurus',      img: makeSVG("<circle cx='50' cy='58' r='20'/><path d='M30 58 Q30 30 50 30 Q70 30 70 58'/>"),                          desc: 'The Bull',     dates: 'Apr 20 – May 20' },
  { name: 'Gemini',      img: makeSVG("<line x1='35' y1='25' x2='35' y2='75'/><line x1='65' y1='25' x2='65' y2='75'/><line x1='35' y1='25' x2='65' y2='25'/><line x1='35' y1='75' x2='65' y2='75'/><line x1='35' y1='50' x2='65' y2='50'/>"), desc: 'The Twins',  dates: 'May 21 – Jun 20' },
  { name: 'Cancer',      img: makeSVG("<path d='M30 45 Q30 30 50 30 Q70 30 70 45'/><path d='M30 55 Q30 70 50 70 Q70 70 70 55'/><circle cx='25' cy='50' r='5'/><circle cx='75' cy='50' r='5'/>"), desc: 'The Crab', dates: 'Jun 21 – Jul 22' },
  { name: 'Leo',         img: makeSVG("<circle cx='42' cy='55' r='18'/><path d='M60 55 Q72 55 72 43 Q72 28 55 28 Q42 28 42 37'/>"),              desc: 'The Lion',     dates: 'Jul 23 – Aug 22' },
  { name: 'Virgo',       img: makeSVG("<path d='M30 30 L30 70'/><path d='M30 50 Q30 35 50 35 Q65 35 65 50 L65 70'/><path d='M65 68 Q72 68 72 62 Q72 54 65 54'/>"), desc: 'The Maiden', dates: 'Aug 23 – Sep 22' },
  { name: 'Libra',       img: makeSVG("<line x1='28' y1='60' x2='72' y2='60'/><path d='M38 60 Q38 42 50 42 Q62 42 62 60'/><line x1='28' y1='70' x2='72' y2='70'/>"), desc: 'The Scales', dates: 'Sep 23 – Oct 22' },
  { name: 'Scorpio',     img: makeSVG("<path d='M30 30 L30 60 Q30 72 42 72 L55 72'/><line x1='30' y1='50' x2='50' y2='50'/><path d='M50 50 L50 30'/><path d='M55 68 L63 74 L59 64'/>"), desc: 'The Scorpion', dates: 'Oct 23 – Nov 21' },
  { name: 'Sagittarius', img: makeSVG("<line x1='30' y1='70' x2='70' y2='30'/><path d='M55 30 L70 30 L70 45'/><line x1='28' y1='72' x2='42' y2='58'/>"), desc: 'The Archer', dates: 'Nov 22 – Dec 21' },
  { name: 'Capricorn',   img: makeSVG("<path d='M28 35 Q28 55 42 55'/><path d='M42 35 Q42 55 50 60 Q60 70 72 60 Q80 50 72 42 Q64 32 55 42 Q48 52 55 60'/>"), desc: 'The Sea Goat', dates: 'Dec 22 – Jan 19' },
  { name: 'Aquarius',    img: makeSVG("<path d='M25 42 Q35 35 45 42 Q55 49 65 42 Q75 35 75 42'/><path d='M25 58 Q35 51 45 58 Q55 65 65 58 Q75 51 75 58'/>"), desc: 'Water Bearer', dates: 'Jan 20 – Feb 18' },
  { name: 'Pisces',      img: makeSVG("<path d='M38 25 Q25 50 38 75'/><path d='M62 25 Q75 50 62 75'/><line x1='32' y1='50' x2='68' y2='50'/>"),            desc: 'The Fish',     dates: 'Feb 19 – Mar 20' },
];

function ZodiacWheel({ activeIndex }) {
  const cx = 200, cy = 200;
  // Points on inner star (radius 75)
  const starPts = SIGNS.map((_, i) => {
    const a = (i * 30 - 90) * (Math.PI / 180);
    return { x: cx + 75 * Math.cos(a), y: cy + 75 * Math.sin(a) };
  });
  const starLines = [];
  for (let i = 0; i < 12; i++)
    for (let j = i + 1; j < 12; j++)
      starLines.push([starPts[i], starPts[j]]);

  return (
    <svg viewBox="0 0 400 400" className="zodiac-svg" aria-label="Zodiac wheel">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a0f35" />
          <stop offset="100%" stopColor="#060210" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="medalClip">
          <circle cx="0" cy="0" r="24" />
        </clipPath>
        <clipPath id="centerClip">
          <circle cx={cx} cy={cy - 15} r="38" />
        </clipPath>
      </defs>

      {/* BG */}
      <circle cx={cx} cy={cy} r={178} fill="url(#bgGrad)" />

      {/* ── Counter-rotating inner star ── */}
      <g className="star-ccw">
        {starLines.map(([p1, p2], i) => (
          <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
            stroke="rgba(201,168,76,0.18)" strokeWidth="0.7" />
        ))}
        <circle cx={cx} cy={cy} r={98} fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="0.8" />
        <circle cx={cx} cy={cy} r={75}  fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="0.5" strokeDasharray="3 3" />
      </g>

      {/* ── Clockwise outer ring ── */}
      <g className="ring-cw">
        <circle cx={cx} cy={cy} r={178} fill="none" stroke="rgba(160,120,40,0.9)" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r={155} fill="none" stroke="rgba(160,120,40,0.4)" strokeWidth="0.7" />
        <circle cx={cx} cy={cy} r={105} fill="none" stroke="rgba(160,120,40,0.5)" strokeWidth="0.7" />

        {SIGNS.map((sign, i) => {
          const angleDeg = i * 30;
          const angleRad = (angleDeg - 90) * (Math.PI / 180);
          const mx = cx + 125 * Math.cos(angleRad);
          const my = cy + 125 * Math.sin(angleRad);
          const lx = cx + 167 * Math.cos(angleRad);
          const ly = cy + 167 * Math.sin(angleRad);
          const isActive = i === activeIndex;

          return (
            <g key={sign.name}>
              {/* Divider line */}
              <line
                x1={cx + 105 * Math.cos(angleRad)} y1={cy + 105 * Math.sin(angleRad)}
                x2={cx + 178 * Math.cos(angleRad)} y2={cy + 178 * Math.sin(angleRad)}
                stroke="rgba(160,120,40,0.4)" strokeWidth="0.6"
              />
              {/* Sign name label */}
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
                fontSize="7" fill="#c9a84c" letterSpacing="0.8"
                transform={`rotate(${angleDeg}, ${lx}, ${ly})`}
              >
                {sign.name.toUpperCase()}
              </text>
              
              {/* Medallion Group (Translated to exact coordinate) */}
              <g transform={`translate(${mx}, ${my})`}>
                <circle cx="0" cy="0" r="30"
                  fill={isActive ? '#c9a84c' : '#100820'}
                  stroke={isActive ? '#fff8d0' : '#c9a84c'}
                  strokeWidth={isActive ? 2 : 1.2}
                  filter={isActive ? 'url(#glow)' : undefined}
                  className={isActive ? 'medallion-active' : ''}
                />
                {/* Image counter-rotates around its local 0,0 center perfectly */}
                <image href={sign.img} x="-24" y="-24" width="48" height="48"
                  className="medallion-symbol"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#medalClip)"
                  style={{ opacity: isActive ? 1 : 0.6 }}
                />
              </g>
            </g>
          );
        })}
      </g>

      {/* ── Center: active sign spotlight ── */}
      <circle cx={cx} cy={cy} r={65} fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
      <image href={SIGNS[activeIndex].img} x={cx - 38} y={cy - 53} width="76" height="76"
        className="center-symbol" key={activeIndex}
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#centerClip)"
      />
      <text x={cx} y={cy + 33} textAnchor="middle" fontSize="8" fill="#c9a84c" letterSpacing="1">
        {SIGNS[activeIndex].name.toUpperCase()}
      </text>
      <text x={cx} y={cy + 45} textAnchor="middle" fontSize="6.5" fill="#b8a898">
        {SIGNS[activeIndex].desc}
      </text>
    </svg>
  );
}

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIndex(prev => (prev + 1) % 12);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {/* LEFT — Zodiac Wheel */}
      <div className="hero-left">
        <ZodiacWheel activeIndex={activeIndex} />
        <div className={`active-badge ${fading ? 'fade-out' : 'fade-in'}`}>
          <img src={SIGNS[activeIndex].img} alt="" style={{width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover'}} />
          <div className="badge-info">
            <strong>{SIGNS[activeIndex].name}</strong>
            <span>{SIGNS[activeIndex].dates}</span>
          </div>
        </div>
      </div>

      {/* RIGHT — Text Content */}
      <div className="hero-right">
        <p className="hero-eyebrow">✦ Vedic Astrology &amp; Spiritual Guidance ✦</p>
        <h1 className="hero-title">Sri<br />Jothidam</h1>
        <p className="hero-sub">
          Unlock the secrets of the cosmos.<br />
          Authentic Jyotish readings, horoscope analysis,<br />
          and timeless spiritual wisdom passed down<br />
          through generations.
        </p>
        <a href="#services" className="hero-cta" id="cta-explore">Explore Our Services</a>
      </div>
    </section>
  );
};

export default Hero;
