import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-blue-300 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-white/80 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Feel free to reach out for collaborations or just a friendly hello.
      </motion.p>
      <a
        href="mailto:priscillajosping@example.com"
        className="px-6 py-3 bg-gradient-to-r from-cyan-300 to-blue-400 text-black rounded-xl shadow-lg hover:scale-110 transition"
      >
        Send an Email
      </a>
    </section>
  );
}