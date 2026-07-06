import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFileAlt,
} from 'react-icons/fa';
// Import the raw HEIC file for user tracking and compilation dependencies
import profileHeic from '../assets/1000392866.heic';
// Import the converted displayable PNG version
import profilePng from '../assets/1000392866.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Keep reference to the HEIC import to prevent compilation tree-shaking
  const imageSource = profilePng || profileHeic;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 md:pt-32 pb-16"
    >
      {/* Background - Minimal dark with subtle radial glow and light grid */}
      <div className="absolute inset-0 z-0 bg-[#09090B] pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Very subtle animating radial gradient */}
        <motion.div
          className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-gradient-to-b from-sky-500/5 via-indigo-500/3 to-transparent blur-[100px]"
          animate={{
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl w-full mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text (Appears last on mobile, first on desktop) */}
          <motion.div
            className="lg:col-span-7 text-left space-y-6 order-2 lg:order-1"
            variants={containerVariants}
          >
            <motion.div className="space-y-1.5" variants={textVariants}>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#71717A]">
                Hello, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                Priscilla Jospin G
              </h1>

              {/* Job titles with a small gradient */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3">
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Engineer
                </span>
                <span className="text-xs text-[#71717A]">&bull;</span>
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Machine Learning Engineer
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base text-[#A1A1AA] leading-relaxed max-w-xl font-normal"
              variants={textVariants}
            >
              Building intelligent software using Machine Learning, Deep
              Learning, Computer Vision and Full Stack Development.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              className="flex flex-wrap items-center gap-3 pt-2"
              variants={textVariants}
            >
              <a
                href="/Priscilla-Resume.pdf"
                download="Priscilla-Jospin-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <FaFileAlt className="text-[11px]" />
                Download Resume
              </a>

              <a
                href="https://github.com/PriscillajospinG"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-[#A1A1AA] hover:text-white bg-zinc-900 border border-white/5 hover:border-white/10 rounded-lg transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/priscilla-jospin-g-a52799295/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-[#A1A1AA] hover:text-white bg-zinc-900 border border-white/5 hover:border-white/10 rounded-lg transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-semibold text-[#A1A1AA] hover:text-white bg-zinc-900 border border-white/5 hover:border-white/10 rounded-lg transition-colors"
              >
                Contact
              </a>
            </motion.div>

            {/* Social Icons row below buttons */}
            <motion.div
              className="flex items-center gap-4 pt-3 border-t border-white/[0.04] max-w-xs"
              variants={textVariants}
            >
              {[
                {
                  icon: <FaGithub />,
                  url: 'https://github.com/PriscillajospinG',
                  label: 'GitHub',
                },
                {
                  icon: <FaLinkedin />,
                  url: 'https://www.linkedin.com/in/priscilla-jospin-g-a52799295/',
                  label: 'LinkedIn',
                },
                {
                  icon: <FaEnvelope />,
                  url: 'mailto:priscillajospin@gmail.com',
                  label: 'Email',
                },
                {
                  icon: <FaInstagram />,
                  url: 'https://instagram.com',
                  label: 'Instagram',
                },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71717A] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image (Appears first on mobile, last on desktop) */}
          <motion.div
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
            variants={imageVariants}
          >
            {/* Premium Profile Frame */}
            <motion.div
              className="relative p-2 rounded-2xl bg-zinc-950/60 border border-white/10 shadow-2xl flex items-center justify-center max-w-[280px] sm:max-w-[320px] w-full aspect-square overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle inner cyan glow */}
              <div className="absolute inset-0 bg-sky-500/[0.02] pointer-events-none" />

              {/* Circular profile image container */}
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5">
                <img
                  src={imageSource}
                  alt="Priscilla Jospin"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
