import './Services.css';

const SERVICES = [
  {
    id: 1,
    title: 'Horoscope Reading\n(Jathakam / Thirukanitham)',
    desc: 'In-depth Vedic birth chart analysis to reveal your life path, destiny, and cosmic blueprint.',
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80',
  },
  {
    id: 2,
    title: 'Vishnumaya Deva Prasannam',
    desc: 'Sacred Prasanam ritual invoking divine wisdom to find answers, resolve obstacles, and restore harmony.',
    img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80',
  },
  {
    id: 3,
    title: 'Marriage Matching\n(Thirumana Porutham)',
    desc: 'Comprehensive Vedic compatibility reading ensuring a blessed and harmonious union between partners.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    id: 4,
    title: 'Evil Eye & Black Magic Removal',
    desc: 'Powerful spiritual cleansing rituals to remove negative energies, curses, and malefic influences.',
    img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80',
  },
  {
    id: 5,
    title: 'Nadi Jothidam\n(Nadi Astrology)',
    desc: 'Ancient palm-leaf manuscript readings that unveil your past, present, and future with uncanny precision.',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80',
  },
  {
    id: 6,
    title: 'Muhurtha\n(Auspicious Timing)',
    desc: 'Identifying the most auspicious dates and times for weddings, business launches, travel, and life events.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
  {
    id: 7,
    title: 'Vastu Shastra',
    desc: 'Align your home or workspace with cosmic energies to invite prosperity, peace, and positive vibrations.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 8,
    title: 'Numerology\n(Enkiyology)',
    desc: 'Unlock the hidden power of your name and birth numbers to guide decisions and attract abundance.',
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <p className="section-tag reveal">What We Offer</p>
        <h2 className="section-title reveal" style={{ transitionDelay: '0.1s' }}>Our Services</h2>
        <div className="section-divider reveal" style={{ transitionDelay: '0.2s' }}></div>
        <p className="section-desc reveal" style={{ transitionDelay: '0.3s' }}>
          Authentic Vedic astrology services rooted in tradition,<br />
          offering clarity, guidance, and spiritual healing<br />
          for every phase of life.
        </p>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div
              className="service-card reveal"
              key={service.id}
              style={{ transitionDelay: `${0.1 * (index + 4)}s` }}
            >
              {/* Background photo */}
              <div
                className="service-card-bg"
                style={{ backgroundImage: `url(${service.img})` }}
              />
              {/* Dark gradient overlay */}
              <div className="service-card-overlay" />
              {/* Content */}
              <div className="service-card-content">
                <h3 className="service-title">
                  {service.title.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < service.title.split('\n').length - 1 && <br />}</span>
                  ))}
                </h3>
                <p className="service-text">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
