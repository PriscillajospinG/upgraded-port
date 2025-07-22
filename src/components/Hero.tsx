import { motion } from "framer-motion";
import profile from "/Users/priscillajosping/Desktop/College/Portfolio/Frontend/src/assets/profile.png"; // <-- Your picture

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
      {/* Gradient blobs */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full blur-3xl opacity-50 animate-pulse top-20 left-10"></div>
      <div className="absolute w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-600 rounded-full blur-3xl opacity-40 animate-bounce bottom-10 right-10"></div>

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-200 text-transparent bg-clip-text drop-shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Priscilla Jospin
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Crafting <span className="text-cyan-300">modern</span> and{" "}
        <span className="text-blue-300">interactive</span> web experiences.
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
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-cyan-300 shadow-2xl hover:scale-105 transition-transform duration-300"
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
          className="px-8 py-3 bg-gradient-to-r from-cyan-300 to-blue-400 text-black font-semibold rounded-xl shadow-xl hover:scale-110 transition"
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
    </section>
  );
}