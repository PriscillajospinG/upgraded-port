import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-300 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300 text-5xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-300 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-300 text-5xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-300 text-5xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 hover:scale-110 transition text-lg font-semibold flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill.icon}
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}