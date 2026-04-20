import './About.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-inner about-inner">
        <div className="about-visual reveal">
          <div className="mandala-container">
            <svg viewBox="0 0 100 100" className="mandala-svg">
              <circle cx="50" cy="50" r="48" stroke="rgba(201, 168, 76, 0.3)" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="40" stroke="rgba(201, 168, 76, 0.5)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="30" stroke="rgba(201, 168, 76, 0.8)" strokeWidth="1" fill="none" />
              <path d="M50 20 L50 80 M20 50 L80 50 M28.7 28.7 L71.3 71.3 M28.7 71.3 L71.3 28.7" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="4" fill="var(--gold)" />
            </svg>
            <div className="mandala-glow"></div>
          </div>
        </div>
        
        <div className="about-content text-left">
          <p className="section-tag reveal" style={{ transitionDelay: '0.1s' }}>Our Story</p>
          <h2 className="section-title reveal" style={{ transitionDelay: '0.2s' }}>About Us</h2>
          <div className="section-divider left reveal" style={{ transitionDelay: '0.3s' }}></div>
          <p className="section-desc reveal" style={{ transitionDelay: '0.4s' }}>
            With decades of experience in Vedic astrology,
            Vishnu Maya Jothidam brings clarity, peace, and direction
            to thousands of lives through authentic Jyotish tradition.
          </p>
          <p className="section-desc reveal" style={{ transitionDelay: '0.5s', marginTop: '1rem' }}>
            Our mission is to decode the cosmic blueprint of your life, offering actionable insights that empower you to make informed decisions and overcome life's obstacles with spiritual resilience.
          </p>
          
          <div className="about-stats reveal" style={{ transitionDelay: '0.6s' }}>
            <div className="stat">
              <span className="stat-num">30+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat">
              <span className="stat-num">10k+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat">
              <span className="stat-num">100+</span>
              <span className="stat-label">Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
