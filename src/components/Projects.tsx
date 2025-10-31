import { motion } from 'framer-motion';
import project1 from '../assets/1.png';
import project2 from '../assets/2.png';

const projects = [
  {
    title: 'IEEE Paper Generator',
    description: 'A website where you can generate and format IEEE papers',
    tech: ['React', 'Node.js', 'Tailwind', 'OpenAI'],
    image: project2,
    link: 'https://github.com/PriscillajospinG/backend-research-paper-agent/tree/test_backend',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built with React, Tailwind CSS, and Framer Motion.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    image: project1,
    link: 'https://github.com/PriscillajospinG/upgraded-port',
  },
  {
    title: 'Machine Learning Model',
    description:
      'A deep learning image classifier using TensorFlow and Python.',
    tech: ['TensorFlow', 'Python', 'Flask'],
    image: 'https://via.placeholder.com/400x250',
    link: 'https://github.com/PriscillajospinG',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 relative bg-gradient-to-b from-black via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group glass-effect-strong rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-400/60 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full text-xs font-medium text-blue-200 border border-blue-400/30 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  onClick={() =>
                    window.open(project.link, '_blank', 'noopener,noreferrer')
                  }
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
