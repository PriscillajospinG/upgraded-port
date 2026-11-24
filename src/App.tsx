import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    // reducedMotion="user" makes every Framer Motion animation honour the
    // visitor's prefers-reduced-motion setting.
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-surface text-ink">
        {/* Film grain over everything (decorative) */}
        <div className="grain" aria-hidden="true" />

        <div className="relative z-10">
          <Navbar />
          <ScrollToTop />

          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[70] rounded-md bg-white px-4 py-2 text-sm font-medium text-black"
          >
            Skip to main content
          </a>

          <main id="main-content" role="main">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
