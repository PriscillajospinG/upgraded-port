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
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-b from-black via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
              <h3 className="text-2xl font-bold text-blue-300 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group glass-effect rounded-lg p-4 hover:border-blue-400/80 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 mt-1 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 group-hover:text-blue-200 transition-colors mb-1">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-slate-300 text-sm">
                            {item.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-blue-300 mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-slate-300 hover:text-blue-300 border-blue-400/40 hover:border-blue-400/80 transition-all duration-300 hover:scale-110"
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
            className="glass-effect rounded-2xl p-8 hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-300 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm">
              Whether you're looking for a Machine Learning Engineer to develop
              intelligent systems, a Full Stack Developer to build modern
              applications, or a collaborative partner for innovative projects,
              I'm here to help bring your ideas to life.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:priscillajospin@gmail.com"
                className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="/Priscilla-Resume.pdf"
                download="Priscilla-Jospin-Resume.pdf"
                className="w-full block text-center px-6 py-3 border-2 border-blue-600 text-blue-300 hover:bg-blue-600/20 font-semibold rounded-lg transition-all duration-300"
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
