import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    img: "https://via.placeholder.com/400x250/00bcd4/fff?text=Portfolio+Website",
    link: "#",
    desc: "A modern portfolio with smooth animations.",
  },
  {
    title: "E-Commerce UI",
    img: "https://via.placeholder.com/400x250/2196f3/fff?text=E-Commerce+UI",
    link: "#",
    desc: "A stylish online store design with React.",
  },
  {
    title: "Chat App",
    img: "https://via.placeholder.com/400x250/3f51b5/fff?text=Chat+App",
    link: "#",
    desc: "Real-time messaging app with a clean UI.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white/5 backdrop-blur-md relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-200 to-blue-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-cyan-300">{project.title}</h3>
                <p className="mt-2 text-gray-100">{project.desc}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-cyan-300 to-blue-400 text-black rounded-lg hover:scale-105 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}