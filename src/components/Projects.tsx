import { motion } from 'framer-motion';
import project2 from '../assets/2.png';
import project3 from '../assets/3.jpeg';
import project4 from '../assets/4.png';
import project5 from '../assets/5.png';
import project6 from '../assets/6.jpeg';

const projects = [
  {
    title: 'IEEE Paper Generator',
    description: 'A website where you can generate and format IEEE papers',
    tech: ['React', 'Node.js', 'Tailwind', 'OpenAI'],
    image: project2,
    link: 'https://github.com/PriscillajospinG/backend-research-paper-agent/tree/test_backend',
  },
  {
    title: 'EV Port analyzer',
    description:
      'A real-time AI-powered EV charging analytics and demand prediction system that helps operators monitor usage, reduce wait times, and optimize charger deployment.',
    tech: ['YOLOv11', 'Python', 'FastAPI'],
    image: project3,
    link: 'https://github.com/PriscillajospinG/bi3-ev-charging-port',
  },
  {
    title: 'AI-Powered WAF using SecureBERT',
    description:
      'Designed and implemented a real-time, self-learning WAF that detects and blocks zero-day web attacks with <50ms latency and a 95%+ detection rate.',
    tech: [
      'PyTorch',
      'Transformers',
      'SecureBERT',
      'FastAPI',
      'Uvicorn',
      'Docker',
      'Nginx',
    ],
    image: project4,
    link: 'https://github.com/PriscillajospinG/transformer-waf-test',
  },
  {
    title: 'PrivAI-Secure-Enterprise-AI-Assistant',
    description:
      'PrivAI is a privacy-first, full-stack RAG (Retrieval-Augmented Generation) application designed for secure enterprise document intelligence. It runs entirely on your local infrastructure using Ollama, ensuring that sensitive company knowledge never leaves the organization.',
    tech: ['Python', 'Langchain', 'Langgraph', 'LlaMa', 'RAG'],
    image: project5,
    link: 'https://github.com/PriscillajospinG/PrivAI-Secure-Enterprise-AI-Assistant',
  },
  {
    title: 'Bible App',
    description:
      'A comprehensive Bible reading and daily devotional mobile app featuring reading streaks, prayer points, daily verse guidance, personalized journaling, and a 30-day reading plan. Built with modern mobile development practices for seamless spiritual growth tracking.',
    tech: ['Android', 'iOS', 'Dart', 'Flutter', 'Local LLM'],
    image: project6,
    link: 'https://github.com/PriscillajospinG/Bible-App',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 relative bg-black/20 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group glass-effect-strong rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-cyan-400/60 flex flex-col h-full"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-56 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-sky-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/30 to-sky-500/30 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/30 backdrop-blur-sm"
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
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-sky-500 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/50"
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
