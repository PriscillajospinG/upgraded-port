import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "./assets/profile.png"; // your image

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl bottom-[-100px] right-[-150px]" />
        <div className="absolute w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-2xl top-[200px] right-[200px]" />
      </div>

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-transparent bg-clip-text drop-shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Priscilla Jospin G
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Building <span className="text-purple-300">intelligent</span> solutions with{" "}
        <span className="text-pink-300">Machine Learning</span> and{" "}
        <span className="text-blue-300">Deep Learning</span> innovation.
      </motion.p>

      {/* Profile Picture */}
      <motion.div
        className="mt-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
      >
        <img
          src={profile}
          alt="Priscilla Jospin G"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold rounded-xl shadow-xl hover:scale-110 transition"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-white/40 bg-white/10 backdrop-blur-md text-white rounded-xl hover:scale-110 transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="mt-6 flex gap-6 text-3xl text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="https://github.com/PriscillajospinG"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-300 transition-transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/priscilla-jospin-g-a52799295/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}