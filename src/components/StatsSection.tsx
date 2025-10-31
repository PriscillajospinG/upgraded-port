import { motion } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '2+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '10+', label: 'Technologies' },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-slate-900/50 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 rounded-lg blur transition-all duration-500" />

              {/* Card */}
              <div className="relative glass-effect rounded-lg p-6 text-center hover:border-blue-400/60 transition-all duration-300">
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text mb-3"
                  whileInView={{
                    textShadow: [
                      '0px 0px 0px rgba(59, 130, 246, 0)',
                      '0px 0px 20px rgba(59, 130, 246, 0.5)',
                    ],
                  }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-slate-300 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
