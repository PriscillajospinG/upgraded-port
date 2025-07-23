import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 relative z-10 px-6 text-center bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      <motion.h2
        className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I'm <span className="text-purple-400 font-semibold">Priscilla Jospin</span>, a passionate{" "}
        <span className="text-cyan-300">Fullstack Developer</span> and{" "}
        <span className="text-blue-300">Machine Learning Engineer</span> with a love for
        crafting modern, responsive, and interactive user experiences.  
        My goal is to bring creative designs to life using the latest web technologies  
        and to build intelligent models that create real-world impact.
      </motion.p>
    </section>
  );
}