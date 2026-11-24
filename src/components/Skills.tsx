import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaJava,
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
  SiLangchain,
} from 'react-icons/si';
import { GiArtificialIntelligence, GiRobotGrab } from 'react-icons/gi';

const skills = [
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
  { name: 'Java', icon: <FaJava />, color: 'text-red-600' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-400' },
  { name: 'Keras', icon: <SiKeras />, color: 'text-red-500' },
  { name: 'OpenCV', icon: <SiOpencv />, color: 'text-cyan-300' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, color: 'text-orange-600' },
  { name: 'LLM', icon: <GiArtificialIntelligence />, color: 'text-cyan-400' },
  { name: 'Agents', icon: <GiRobotGrab />, color: 'text-indigo-400' },
  { name: 'LangChain', icon: <SiLangchain />, color: 'text-green-400' },
  { name: 'MCP', icon: <GiArtificialIntelligence />, color: 'text-cyan-500' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
  { name: 'Docker', icon: <FaDocker />, color: 'text-cyan-600' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-cyan-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-cyan-400' },
  { name: 'Figma', icon: <SiFigma />, color: 'text-pink-400' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-line bg-surface py-28 text-ink sm:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink">
            Technical Skills
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-muted sm:text-lg lg:text-right">
            A comprehensive toolkit for building modern applications and
            intelligent systems
          </p>
        </motion.div>

        {/* Hairline grid: every cell shares one border */}
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line gap-px sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative flex items-center gap-4 bg-surface px-5 py-6 transition-colors duration-300 hover:bg-surface-card sm:py-7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Neutral icon by default; brand colour fades in on hover */}
              <span
                className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center text-[26px]"
                aria-hidden="true"
              >
                <span className="text-ink-soft transition-opacity duration-300 group-hover:opacity-0">
                  {skill.icon}
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${skill.color}`}
                >
                  {skill.icon}
                </span>
              </span>
              <p className="text-sm font-medium tracking-[-0.01em] text-ink-soft transition-colors group-hover:text-ink">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
