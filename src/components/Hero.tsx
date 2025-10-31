import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import profile from '../assets/profile.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 bg-black pt-20"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,.05)_25%,rgba(59,130,246,.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,.05)_75%,rgba(59,130,246,.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(59,130,246,.05)_25%,rgba(59,130,246,.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,.05)_75%,rgba(59,130,246,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />

        {/* Animated gradient spheres */}
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-l from-cyan-600/20 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-left lg:text-left"
            variants={containerVariants}
          >
            {/* Verse Badge */}
            <motion.div
              className="flex justify-center mb-8"
              variants={textVariants}
            >
              <div className="px-4 py-2 border border-blue-500/50 rounded-full bg-blue-500/10 backdrop-blur-sm text-center max-w-2xl">
                <p className="text-sm font-semibold text-blue-300 leading-relaxed">
                  Blessed be the name of God forever and ever, for wisdom and
                  power belong to Him - Daniel 2:20
                </p>
              </div>
            </motion.div>

            {/* Main Title with gradient */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight"
              variants={textVariants}
            >
              <span className="block text-white">Priscilla</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Jospin G
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-2xl text-slate-400 mb-8 leading-relaxed font-medium"
              variants={textVariants}
            >
              Building intelligent systems with{' '}
              <span className="text-cyan-400 font-bold">ML</span> &{' '}
              <span className="text-purple-400 font-bold">Full-Stack</span>{' '}
              expertise
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start mb-12"
              variants={textVariants}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50" />
                <span className="relative">View My Work</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="group px-8 py-3 font-semibold text-white border-2 border-slate-600 rounded-lg hover:border-blue-500/80 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4" variants={textVariants}>
              {[
                {
                  icon: FaGithub,
                  href: 'https://github.com/PriscillajospinG',
                  label: 'GitHub',
                },
                {
                  icon: FaLinkedin,
                  href: 'https://www.linkedin.com/in/priscilla-jospin-g-a52799295/',
                  label: 'LinkedIn',
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -5 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image Section */}
          <motion.div
            className="relative hidden lg:flex justify-center"
            variants={textVariants}
          >
            <div className="relative inline-block">
              {/* Animated glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img
                  src={profile}
                  alt="Priscilla Jospin"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiChevronDown className="w-6 h-6 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
