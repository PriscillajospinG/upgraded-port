import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import NeuralNetworkBg from './components/NeuralNetworkBg';

export default function App() {
  return (
    <div className="relative min-h-screen text-white scroll-smooth">
      {/* AI Neural Network Background */}
      <NeuralNetworkBg />

      {/* Content overlays the background */}
      <div className="relative z-10">
        <Navbar />
        <ScrollToTop />

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
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
  );
}
