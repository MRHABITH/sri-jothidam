import { useState, useEffect } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'services', 'about', 'contact'], 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        
        {/* LEFT: Brand Name */}
        <a href="#home" className="navbar-brand" id="brand-logo" aria-label="Vishnu Maya Jothidam Home" onClick={closeMobileMenu}>
          <span className="brand-icon"></span>
          <span className="brand-name">Vishnu Maya Jothidam</span>
        </a>

        {/* Hamburger (mobile) */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
          id="hamburger" 
          aria-label="Toggle navigation" 
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* RIGHT: Nav Links */}
        <ul className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`} id="nav-menu" role="list">
          <li className="nav-item">
            <a href="#home" className={`nav-link ${activeSection === 'home' || !activeSection ? 'active' : ''}`} onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={closeMobileMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link contact-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact Us</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
