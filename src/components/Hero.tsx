import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowDown,
} from 'react-icons/fa';
import profilePng from '../assets/profile.webp';
import waveVideo from '../assets/media/wave.mp4';
import wavePoster from '../assets/media/wave-poster.webp';

// ─── Animation Variants ──────────────────────────────────────────────────────

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
};

const maskVariants: Variants = {
  hidden: { y: '105%' },
  visible: { y: '0%', transition: { duration: 1.05, ease: EASE_OUT } },
};

const quoteVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: EASE_OUT },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.2, ease: EASE_OUT, delay: 0.45 },
  },
};

// ─── Social Links ─────────────────────────────────────────────────────────────

const socials = [
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
];

// ─── Background: looping wave video, still image under reduced motion ────────

function WaveBackdrop({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  // Only play while the hero is on screen (saves battery and CPU)
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (reduce || !video || !section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        void video.play?.()?.catch(() => undefined);
      } else {
        video.pause?.();
      }
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, [reduce, sectionRef]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Still fallback: always underneath, the only layer under reduced motion */}
      <img
        src={wavePoster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[60%_35%] opacity-70"
        decoding="async"
      />
      {!reduce && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-[60%_35%] transition-opacity duration-700 ${
            ready ? 'opacity-80' : 'opacity-0'
          }`}
          src={waveVideo}
          poster={wavePoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setReady(true)}
        />
      )}
      {/* Scrims keep the text readable over the brightest part of the wave */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/45 lg:via-black/55 lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Subtle parallax as the visitor scrolls into About (off under reduced motion)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-surface text-ink"
    >
      <WaveBackdrop sectionRef={sectionRef} />

      {/* ── Hero grid ────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-24 pb-20 sm:gap-14 sm:pt-28 sm:pb-24 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-32">
        {/* ── LEFT: Text ───────────────────────────────────────────────── */}
        <motion.div
          className="order-2 flex flex-col gap-7 lg:order-1 lg:col-span-7"
          style={reduce ? undefined : { y: textY, opacity: textOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={fadeUpVariants}>
            <div className="badge-metal">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fff"
                aria-hidden="true"
                style={{
                  filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.45))',
                }}
              >
                <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z" />
              </svg>
              <span>Hello, I'm</span>
            </div>
          </motion.div>

          {/* Name */}
          <div className="space-y-4">
            <div className="overflow-hidden pb-[0.08em]">
              <motion.h1
                variants={maskVariants}
                className="text-balance text-[clamp(2.75rem,7vw,5.75rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink"
              >
                Priscilla Jospin G
              </motion.h1>
            </div>

            {/* Role line */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-nowrap items-baseline gap-x-2 sm:flex-wrap sm:gap-x-3 sm:gap-y-1"
            >
              <span className="whitespace-nowrap font-serif text-[clamp(1.5rem,3vw,2.4rem)] italic leading-none tracking-[-0.02em] text-ink-muted">
                AI Engineer
              </span>
              <span className="select-none text-base text-ink-faint sm:text-xl">
                ·
              </span>
              <span className="whitespace-nowrap text-[15px] font-medium tracking-[-0.02em] text-ink-soft sm:text-xl">
                Machine Learning Engineer
              </span>
            </motion.div>
          </div>

          {/* Bio & Quote */}
          <div className="max-w-xl space-y-7">
            <motion.p
              className="text-base leading-relaxed text-ink-muted sm:text-[17px]"
              variants={fadeUpVariants}
            >
              Building intelligent software at the intersection of Machine
              Learning, Deep Learning, Computer Vision, and Full Stack
              Development. Focused on creating AI systems that solve real-world
              problems.
            </motion.p>

            <motion.figure
              variants={quoteVariants}
              className="relative border-l border-white/20 pl-5"
            >
              <p className="font-serif text-xl italic leading-snug text-ink-soft sm:text-[22px]">
                "For the Lord gives wisdom; <br className="hidden sm:block" />{' '}
                from his mouth come knowledge and understanding."
              </p>
              <p className="label mt-3 text-ink-faint">— Proverbs 2:6</p>
            </motion.figure>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-2"
            variants={fadeUpVariants}
          >
            <a
              href="/Priscilla-Resume.pdf"
              download="Priscilla-Jospin-Resume.pdf"
              className="btn btn-solid"
            >
              <FaFileAlt
                className="text-[13px] opacity-80"
                aria-hidden="true"
              />
              Download Resume
            </a>

            <a
              href="https://github.com/PriscillajospinG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub className="text-base opacity-90" aria-hidden="true" />
              GitHub
            </a>

            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </motion.div>

          {/* Social icon row */}
          <motion.div
            className="flex max-w-md items-center gap-3 border-t border-line pt-6"
            variants={fadeUpVariants}
          >
            {socials.map(social => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-[17px] text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-ink"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Profile Card ──────────────────────────────────────── */}
        <motion.div
          className="order-1 flex w-full justify-center lg:order-2 lg:col-span-5 lg:justify-end"
          style={reduce ? undefined : { y: imageY, opacity: imageOpacity }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="group relative w-full max-w-[230px] overflow-hidden rounded-[28px] border border-white/15 bg-black/40 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:max-w-[300px] lg:max-w-[360px]"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Image container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-surface-card">
              <img
                src={profilePng}
                alt="Priscilla Jospin G"
                width={900}
                height={1200}
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Name + status overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-lg font-semibold leading-tight tracking-[-0.03em] text-ink drop-shadow-md">
                  Priscilla Jospin G
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-[13px] text-ink-soft">
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="flex flex-wrap gap-2 px-2 pb-1.5 pt-3">
              {['AI Engineer', 'ML Engineer', 'Full Stack'].map(tag => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-ink-faint transition-colors hover:text-ink md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-xs" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
