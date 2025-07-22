import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 relative z-10 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold bg-gradient-to-r from-cyan-200 to-blue-300 text-transparent bg-clip-text mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm Priscilla Jospin, a passionate Fullstack Developer and Machine learning engineer with a love for
        crafting modern, responsive, and interactive user experiences. My goal
        is to bring creative designs to life using the latest web technologies and to implement new models to the world.
      </motion.p>
    </section>
  );
}