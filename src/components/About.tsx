import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket } from 'react-icons/fa';

export default function About() {
  const highlights = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Full Stack Development',
      description:
        'Building scalable web applications with modern frameworks and best practices',
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: 'Machine Learning',
      description:
        'Developing intelligent systems using deep learning and AI technologies',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Innovation Focus',
      description:
        'Creating solutions that bridge the gap between technology and real-world impact',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative bg-gradient-to-b from-black via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-slate-300 hover:text-slate-100 transition-colors">
              I'm{' '}
              <span className="text-blue-300 font-semibold">
                Priscilla Jospin G
              </span>
              , a dedicated{' '}
              <span className="text-emerald-300 font-semibold">
                Machine Learning Engineer
              </span>{' '}
              and{' '}
              <span className="text-purple-300 font-semibold">
                Full Stack Developer
              </span>{' '}
              passionate about creating intelligent solutions that make a
              difference.
            </p>
            <p className="text-lg leading-relaxed text-slate-300 hover:text-slate-100 transition-colors">
              With expertise in both cutting-edge AI technologies and modern web
              development, I bridge the gap between complex algorithms and
              user-friendly applications. My approach combines technical
              excellence with creative problem-solving to deliver impactful
              solutions.
            </p>
            <p className="text-lg leading-relaxed text-slate-300 hover:text-slate-100 transition-colors">
              I believe in continuous learning and staying at the forefront of
              technology to build systems that not only solve current challenges
              but also anticipate future needs.
            </p>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group glass-effect rounded-xl p-6 hover:border-blue-400/80 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 group-hover:text-blue-200 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
