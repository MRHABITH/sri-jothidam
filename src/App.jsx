import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useIntersectionReveal } from './hooks/useScrollSpy'

function App() {
  // Initialize scroll reveal animations globally
  useIntersectionReveal();

  useEffect(() => {
    // Global Starfield Canvas Logic
    const canvas = document.getElementById('global-stars');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationFrameId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function buildStars(n) {
      stars = [];
      for (let i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random(),
          speed: Math.random() * 0.004 + 0.001,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,208,128,${alpha})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); buildStars(220); });
    resize();
    buildStars(220);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
