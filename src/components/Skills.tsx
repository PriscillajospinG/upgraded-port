import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFigma,
  SiNextdotjs,
  SiPostgresql,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiScikitlearn,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const skills = [
  // Full Stack
  {
    name: 'React',
    icon: <FaReact />,
    category: 'fullstack',
    color: 'text-cyan-400',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    category: 'fullstack',
    color: 'text-white',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    category: 'fullstack',
    color: 'text-blue-500',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    category: 'fullstack',
    color: 'text-sky-400',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    category: 'fullstack',
    color: 'text-green-500',
  },
  {
    name: 'Python',
    icon: <FaPython />,
    category: 'fullstack',
    color: 'text-yellow-400',
  },

  // Database
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    category: 'database',
    color: 'text-green-600',
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    category: 'database',
    color: 'text-blue-400',
  },

  // AI & Machine Learning
  {
    name: 'TensorFlow',
    icon: <SiTensorflow />,
    category: 'ai',
    color: 'text-orange-400',
  },
  { name: 'Keras', icon: <SiKeras />, category: 'ai', color: 'text-red-500' },
  {
    name: 'OpenCV',
    icon: <SiOpencv />,
    category: 'ai',
    color: 'text-blue-300',
  },
  {
    name: 'Scikit-learn',
    icon: <SiScikitlearn />,
    category: 'ai',
    color: 'text-orange-600',
  },
  {
    name: 'LLM',
    icon: <GiArtificialIntelligence />,
    category: 'ai',
    color: 'text-purple-400',
  },

  // Tools
  {
    name: 'Git',
    icon: <FaGitAlt />,
    category: 'tools',
    color: 'text-orange-500',
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    category: 'tools',
    color: 'text-blue-600',
  },
  {
    name: 'Figma',
    icon: <SiFigma />,
    category: 'tools',
    color: 'text-pink-400',
  },
];

const categories = [
  { id: 'fullstack', label: 'Full Stack', icon: '💻' },
  { id: 'database', label: 'Database', icon: '🗄️' },
  { id: 'ai', label: 'AI & ML', icon: '🤖' },
  { id: 'tools', label: 'Tools', icon: '🛠️' },
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

        {/* Category-based layout */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              skill => skill.category === category.id
            );

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-300">
                    {category.label}
                  </h3>
                  <div className="flex-grow h-0.5 bg-gradient-to-r from-blue-500/20 to-transparent" />
                </div>

                {/* Icon Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <div className="flex flex-col items-center">
                        {/* Icon Container */}
                        <motion.div
                          className="w-16 h-16 md:w-20 md:h-20 glass-effect rounded-2xl flex items-center justify-center mb-3 group-hover:border-blue-400/80 transition-all duration-300 cursor-pointer"
                          whileHover={{
                            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                          }}
                        >
                          <div
                            className={`text-4xl md:text-5xl ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}
                          >
                            {skill.icon}
                          </div>
                        </motion.div>

                        {/* Skill Name Tooltip */}
                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0, y: 5 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-xs md:text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors truncate max-w-[70px]">
                            {skill.name}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
