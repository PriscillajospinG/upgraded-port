import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFigma,
  SiNextdotjs,
  SiPostgresql,
  SiTensorflow,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 90 },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="text-blue-500" />,
        level: 85,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-sky-400" />,
        level: 88,
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="text-white" />,
        level: 82,
      },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        icon: <FaNodeJs className="text-green-500" />,
        level: 85,
      },
      {
        name: 'Python',
        icon: <FaPython className="text-yellow-400" />,
        level: 92,
      },
      { name: 'Java', icon: <FaJava className="text-red-500" />, level: 80 },
    ],
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      {
        name: 'TensorFlow',
        icon: <SiTensorflow className="text-orange-300" />,
        level: 88,
      },
      {
        name: 'Transformer LLM',
        icon: <GiArtificialIntelligence className="text-purple-400" />,
        level: 85,
      },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-green-600" />,
        level: 85,
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="text-blue-400" />,
        level: 82,
      },
      {
        name: 'Git',
        icon: <FaGitAlt className="text-orange-500" />,
        level: 90,
      },
      { name: 'Figma', icon: <SiFigma className="text-pink-400" />, level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative bg-gradient-to-b from-black via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern applications and
            intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group glass-effect rounded-2xl p-8 hover:border-blue-400/80 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-bold text-blue-300 mb-6 text-center group-hover:text-blue-200 transition-colors">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl transform group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-slate-200 font-semibold group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-blue-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full shadow-lg shadow-blue-500/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
