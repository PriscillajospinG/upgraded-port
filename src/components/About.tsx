import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket, FaLightbulb } from 'react-icons/fa';

export default function About() {
  const features = [
    {
      icon: FaCode,
      title: 'Full Stack Developer',
      description: 'Modern web applications with React, Node.js & TypeScript',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: FaBrain,
      title: 'AI & ML Engineer',
      description: 'Deep learning models using TensorFlow & Python',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: FaRocket,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: FaLightbulb,
      title: 'Innovator',
      description: 'Building the future with cutting-edge technologies',
      gradient: 'from-green-600 to-emerald-600',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="block text-white mb-2">Who Am I?</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let me show you
            </span>
          </h2>
          <div className="flex gap-2 justify-center mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-2 h-1 bg-slate-600 rounded-full" />
            <div className="w-2 h-1 bg-slate-600 rounded-full" />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl glass-effect-premium hover:border-blue-400/50 p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg mb-6">
            Let's collaborate and build something amazing together
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
