import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaGithub } from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiMongodb, 
  SiFigma, 
  SiNextdotjs, 
  SiPostgresql, 
  SiMysql,
  SiTensorflow 
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-300" /> },
  { name: "Transformer LLM", icon: <GiArtificialIntelligence className="text-purple-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white text-center">
      <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-50 to-blue-100 bg-clip-text text-transparent">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 shadow-md hover:scale-110 hover:shadow-purple-500/30 transition-transform duration-300"
          >
            <div className="text-4xl mb-2 drop-shadow-lg">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}