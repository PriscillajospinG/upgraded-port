import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot using OpenAI API with React and Node.js.",
    tech: ["React", "Node.js", "Tailwind", "OpenAI"],
    image: "https://via.placeholder.com/400x250", // Replace with your actual image
    link: "https://github.com/your-repo",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Machine Learning Model",
    description: "A deep learning image classifier using TensorFlow and Python.",
    tech: ["TensorFlow", "Python", "Flask"],
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-50 to-blue-100 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-purple-500/30 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple-300">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-purple-600/30 rounded text-xs text-purple-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-black rounded-lg font-medium hover:scale-105 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}