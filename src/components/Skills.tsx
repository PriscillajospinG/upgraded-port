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
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications and
            intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{skill.icon}</div>
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
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
