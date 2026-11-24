import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket, FaLightbulb } from 'react-icons/fa';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const features = [
    {
      icon: FaCode,
      title: 'Full Stack Developer',
      description: 'Modern web applications with React, Node.js & TypeScript',
    },
    {
      icon: FaBrain,
      title: 'AI & ML Engineer',
      description: 'Deep learning models using TensorFlow & Python',
    },
    {
      icon: FaRocket,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
    },
    {
      icon: FaLightbulb,
      title: 'Innovator',
      description: 'Building the future with cutting-edge technologies',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface py-28 text-ink sm:py-36"
    >
      {/* Soft light from above (static) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Header */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em]">
              <span className="block text-ink">Who Am I?</span>
              <span className="serif-accent block text-[1.08em]">
                Let me show you
              </span>
            </h2>
            <div className="mt-8 h-px w-16 bg-white/30" />
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="card group relative overflow-hidden p-6 sm:p-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.8,
                    ease: EASE_OUT,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Top light on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_circle_at_50%_0%,rgba(188,208,255,0.08),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-ink-soft transition-colors duration-300 group-hover:border-line-strong group-hover:text-ink">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </div>

                    <h3 className="mb-2 text-lg font-medium tracking-[-0.02em] text-ink">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE_OUT }}
          viewport={{ once: true }}
        >
          <p className="max-w-md text-lg tracking-[-0.015em] text-ink-soft">
            Let's collaborate and build something amazing together
          </p>
          <a href="#contact" className="btn btn-solid">
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
