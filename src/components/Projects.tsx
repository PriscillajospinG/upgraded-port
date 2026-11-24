import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Bento spans on large screens: two wide cards, then three.
const spans = [
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
];
import project2 from '../assets/2.webp';
import project3 from '../assets/3.jpeg';
import project4 from '../assets/4.webp';
import project5 from '../assets/5.webp';
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
      className="relative overflow-hidden border-t border-line bg-surface py-28 text-ink sm:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.h2
          className="mb-14 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em] text-ink sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`card group flex h-full flex-col overflow-hidden p-2 ${spans[index] ?? 'lg:col-span-2'} ${
                index === 0 ? 'sm:col-span-2 lg:col-span-3' : ''
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: (index % 3) * 0.08,
                duration: 0.9,
                ease: EASE_OUT,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-raised">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col px-4 pb-4 pt-6 sm:px-5">
                <h3 className="mb-3 text-xl font-medium leading-tight tracking-[-0.03em] text-ink sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost w-full"
                >
                  View Project →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
