import './Contact.css';

const WA_NUMBER = '918428855999';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name    = e.target.cname.value.trim();
    const phone   = e.target.cphone.value.trim();
    const message = e.target.cmessage.value.trim();
    const text = `Hello Vishnumaya Jyothisham 🙏\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section className="section" id="contact">
      <div className="contact-wrapper reveal">

        {/* ══ LEFT PANEL — Visual ══ */}
        <div className="contact-visual">
          {/* Background photo */}
          <div className="cv-bg" />
          {/* Dark overlay */}
          <div className="cv-overlay" />
          {/* Content */}
          <div className="cv-content">
            {/* Decorative gold star */}
            <svg className="cv-star" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g fill="none" stroke="#c9a84c" strokeWidth="1.2" strokeOpacity="0.85">
                {[0,45,90,135,180,225,270,315].map(a => {
                  const r = (a * Math.PI) / 180;
                  const len = a % 90 === 0 ? 40 : 26;
                  return <line key={a} x1="50" y1="50" x2={50+len*Math.cos(r)} y2={50+len*Math.sin(r)} strokeWidth={a%90===0?1.6:0.8}/>;
                })}
                <circle cx="50" cy="50" r="48" strokeOpacity="0.4" />
                <circle cx="50" cy="50" r="35" strokeOpacity="0.25" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="8" strokeOpacity="0.6" />
                <circle cx="50" cy="50" r="3" fill="#c9a84c" stroke="none" />
              </g>
            </svg>

            <span className="cv-eyebrow">✦ Consult the Stars ✦</span>
            <h2 className="cv-heading">
              Your Destiny<br />Awaits a<br />
              <span className="cv-gold">Reading</span>
            </h2>
            <p className="cv-tagline">
              Every chart holds a story let us help you<br />
              unlock yours with authentic Vedic wisdom.
            </p>

            {/* Quick contact badges */}
            <div className="cv-badges">
              <a href="tel:+918428855999" className="cv-badge">
                <span className="cv-badge-icon"></span>+91 84288 55999
              </a>
              <a href="mailto:sanjais006@gmail.com" className="cv-badge">
                <span className="cv-badge-icon"></span>sanjais006@gmail.com
              </a>
              <div className="cv-badge cv-badge--loc">
                <span className="cv-badge-icon"></span>Salem, Tamil Nadu
              </div>
            </div>
          </div>
        </div>

        {/* ══ RIGHT PANEL — Form ══ */}
        <div className="contact-form-panel">
          <div className="cfp-header">
            <p className="section-tag" style={{marginBottom:'0.6rem'}}>Get In Touch</p>
            <h2 className="cfp-title">Contact Us</h2>
            <p className="cfp-sub">
              Share your details and we'll reach out to schedule<br />
              your personal consultation.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" id="cname" name="cname" placeholder=" " required />
              <label htmlFor="cname">Full Name</label>
            </div>
            <div className="form-group">
              <input type="tel" id="cphone" name="cphone" placeholder=" " required />
              <label htmlFor="cphone">Phone Number</label>
            </div>
            <div className="form-group">
              <textarea id="cmessage" name="cmessage" rows="4" placeholder=" " required></textarea>
              <label htmlFor="cmessage">Your Message / Inquiry</label>
            </div>

            {/* Primary submit */}
            <button type="submit" className="submit-btn">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
