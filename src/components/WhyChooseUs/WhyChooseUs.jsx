import { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const REASONS = [
  {
    id: 1,
    title: 'Traditional & Authentic Methods',
    desc: 'Rooted in centuries-old Vedic wisdom passed through generations of trusted astrologers.',
  },
  {
    id: 2,
    title: 'Spiritual Remedies with Guidance from Vishnumaya Swami',
    desc: 'Sacred remedies and divine blessings channelled through the power of Vishnumaya Deva.',
  },
  {
    id: 3,
    title: 'Decades of Experience in Vedic & Kerala Tantric Astrology',
    desc: 'Deep mastery of Jyotish, Prasanam, and Kerala Tantric traditions refined over decades.',
  },
  {
    id: 4,
    title: 'Personalized Attention and Confidential Consultations',
    desc: 'Every reading is unique. Your details stay completely private — always.',
  },
  {
    id: 5,
    title: 'In-Person & Phone Appointments Available',
    desc: 'Consult from anywhere in the world via phone, or visit us in person for a deeper session.',
  },
];

/* ── Compass Mandala SVG ── */
function CompassMandala({ index }) {
  return (
    <svg
      className="mandala-svg"
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`mg${index}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow bg */}
      <circle cx="80" cy="80" r="75" fill={`url(#mg${index})`} />

      {/* Outer orbit ring */}
      <ellipse cx="80" cy="80" rx="72" ry="38" fill="none"
        stroke="#c9a84c" strokeWidth="0.8" strokeOpacity="0.5"
        className="orbit-ring" />

      {/* Outer orbit dots */}
      {[0, 90, 180, 270].map(a => {
        const r = (a * Math.PI) / 180;
        const x = 80 + 72 * Math.cos(r);
        const y = 80 + 38 * Math.sin(r);
        return <circle key={a} cx={x} cy={y} r="3" fill="#c9a84c" fillOpacity="0.8" />;
      })}

      {/* Inner orbit ring */}
      <ellipse cx="80" cy="80" rx="52" ry="27" fill="none"
        stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.35"
        className="orbit-ring-inner" />

      {/* 8-point compass star (outer) */}
      <g className="star-spin">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
          const r = (a * Math.PI) / 180;
          const long = a % 90 === 0 ? 44 : 30;
          const x2 = 80 + long * Math.cos(r);
          const y2 = 80 + long * Math.sin(r);
          return (
            <line key={a} x1="80" y1="80" x2={x2} y2={y2}
              stroke="#c9a84c" strokeWidth={a % 90 === 0 ? 1.4 : 0.7}
              strokeOpacity="0.85" />
          );
        })}
        {/* Diamond tips on cardinal points */}
        {[0, 90, 180, 270].map(a => {
          const r = (a * Math.PI) / 180;
          const tx = 80 + 44 * Math.cos(r);
          const ty = 80 + 44 * Math.sin(r);
          return (
            <polygon key={a}
              points={`${tx},${ty - 5} ${tx + 3},${ty} ${tx},${ty + 5} ${tx - 3},${ty}`}
              fill="#c9a84c" fillOpacity="0.9"
              transform={`rotate(${a}, ${tx}, ${ty})`}
            />
          );
        })}
      </g>

      {/* Centre rings */}
      <circle cx="80" cy="80" r="18" fill="none" stroke="#c9a84c" strokeWidth="0.9" strokeOpacity="0.6" />
      <circle cx="80" cy="80" r="11" fill="none" stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.4" />
      {/* Centre dot */}
      <circle cx="80" cy="80" r="4" fill="#c9a84c" fillOpacity="0.95" />

      {/* Tick marks around centre ring */}
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        const r1 = 20, r2 = i % 3 === 0 ? 26 : 23;
        return (
          <line key={i}
            x1={80 + r1 * Math.cos(a)} y1={80 + r1 * Math.sin(a)}
            x2={80 + r2 * Math.cos(a)} y2={80 + r2 * Math.sin(a)}
            stroke="#c9a84c" strokeWidth="0.6" strokeOpacity="0.5" />
        );
      })}
    </svg>
  );
}

/* ── Starfield Canvas ── */
function StarCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame;
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.2 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.005 + 0.001,
    }));

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        const a = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,208,128,${a})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="wcu-starfield" />;
}

/* ── Main Section ── */
const WhyChooseUs = () => (
  <section className="wcu-section" id="why-choose-us">
    <StarCanvas />

    <div className="wcu-inner">
      {/* Header */}
      <div className="wcu-header reveal">
        <h2 className="wcu-title">Why Choose Us</h2>
        <div className="wcu-ornament">
          <span className="orn-line" />
          <span className="orn-symbol">❋</span>
          <span className="orn-line" />
        </div>
      </div>

      {/* Cards row */}
      <div className="wcu-grid">
        {REASONS.map((r, i) => (
          <div
            className="wcu-card reveal"
            key={r.id}
            style={{ transitionDelay: `${0.12 * i}s` }}
          >
            {/* Animated compass */}
            <div className="wcu-mandala-wrap">
              <CompassMandala index={r.id} />
            </div>
            <h3 className="wcu-card-title">{r.title}</h3>
            <p className="wcu-card-desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
