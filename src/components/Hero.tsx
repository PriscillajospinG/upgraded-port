import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import profile from '../assets/profile.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Professional Introduction */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-2">
            Machine Learning Engineer & Full Stack Developer
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Priscilla Jospin G
        </motion.h1>

        {/* Professional Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Crafting{' '}
          <span className="text-blue-400 font-semibold">
            intelligent solutions
          </span>{' '}
          through advanced{' '}
          <span className="text-emerald-400 font-semibold">
            Machine Learning
          </span>{' '}
          and modern{' '}
          <span className="text-purple-400 font-semibold">
            Web Technologies
          </span>
        </motion.p>

        {/* Profile Picture - Professional Style */}
        <motion.div
          className="mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <img
                src={profile}
                alt="Priscilla Jospin G - Professional Photo"
                className="w-full h-full rounded-full object-cover border-4 border-slate-800 shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-800 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Professional Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="/Priscilla-Resume.pdf"
            download="Priscilla-Jospin-Resume.pdf"
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <FaDownload className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Professional Social Links */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href="https://github.com/PriscillajospinG"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/priscilla-jospin-g-a52799295/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <HiChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
