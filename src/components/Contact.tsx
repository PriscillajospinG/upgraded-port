import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      details: 'priscillajospin@gmail.com',
      link: 'priscillajospin@gmail.com',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      details: '+91 6380206687',
      link: 'tel:+15551234567',
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      details: 'Available for Remote Work',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/priscilla-jospin-g-a52799295/',
      color: 'hover:text-blue-500',
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/PriscillajospinG',
      color: 'hover:text-gray-400',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-800/50 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration
            opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-400 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-slate-300">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-slate-300 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to Work Together?
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Whether you're looking for a Machine Learning Engineer to develop
              intelligent systems, a Full Stack Developer to build modern
              applications, or a collaborative partner for innovative projects,
              I'm here to help bring your ideas to life.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:priscilla.jospin@example.com"
                className="w-full inline-block text-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="Frontend/src/assets/Priscilla - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
