import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 relative z-10 px-6 text-center bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out for <span className="text-cyan-300">collaborations</span>  
        or just say <span className="text-purple-300">hello!</span>
      </motion.p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=priscilla@example.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-gradient-to-r from-cyan-300 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
      >
        Send an Email
      </a>
    </section>
  );
}