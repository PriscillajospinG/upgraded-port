import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');

  // Frosted background once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map(item => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the menu on Escape or when resizing to desktop; lock scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    const mq = window.matchMedia?.('(min-width: 768px)');
    const onMq = (e: MediaQueryListEvent) => e.matches && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    mq?.addEventListener('change', onMq);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      mq?.removeEventListener('change', onMq);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        aria-label="Primary"
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 border-b ${
          scrolled || isOpen
            ? 'bg-black/60 backdrop-blur-xl border-line'
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 lg:px-10 py-3.5">
          <motion.a
            href="#hero"
            className="justify-self-start flex h-10 w-10 items-center justify-center rounded-full glass text-[15px] font-semibold tracking-[-0.04em] text-ink"
            whileHover={{ scale: 1.05 }}
          >
            PJ
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rounded-full glass p-1">
            {navItems.map((item, index) => {
              const isActive = active === item.href;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-1.5 text-[13.5px] transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-[1] rounded-full bg-white/[0.09] border border-white/15"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden justify-self-end flex h-11 w-11 items-center justify-center rounded-md border border-line bg-black/50 text-ink transition-colors hover:border-line-strong hover:bg-white/5"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu (sibling of the nav so the fixed overlay covers the viewport) */}
      <motion.div
        id="mobile-menu"
        className="md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-2xl"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.28 }}
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-6 pt-20 pb-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              className={`flex h-14 items-center rounded-xl border px-5 text-[19px] tracking-[-0.02em] transition-colors ${
                active === item.href
                  ? 'border-line-strong bg-white/[0.06] text-ink'
                  : 'border-line text-ink-soft hover:text-ink'
              }`}
              onClick={() => setIsOpen(false)}
              initial={false}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                delay: isOpen ? 0.05 + index * 0.04 : 0,
                duration: 0.35,
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
