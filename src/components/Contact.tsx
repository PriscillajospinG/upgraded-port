import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
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
      link: 'mailto:priscillajospin@gmail.com',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      details: '+91 6380206687',
      link: 'tel:+916380206687',
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
      color: 'hover:text-cyan-500',
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
      className="relative overflow-hidden border-t border-line bg-surface py-28 text-ink sm:py-36"
    >
      {/* Soft light from above (static) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(188,208,255,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="mb-6 text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.05em] text-ink">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Ready to discuss your next project or explore collaboration
            opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Contact Information */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="label mb-5">Contact Information</h3>
              <div className="overflow-hidden rounded-2xl border border-line">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 border-b border-line bg-surface-card p-5 transition-colors duration-300 last:border-b-0 hover:bg-[#141414]"
                  >
                    <div
                      className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors group-hover:text-ink [&_svg]:h-4 [&_svg]:w-4"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="mb-0.5 text-[13px] text-ink-muted">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="break-words text-[15px] text-ink transition-colors duration-300 hover:text-accent"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-[15px] text-ink">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="label mb-5">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full glass text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-ink [&_svg]:h-5 [&_svg]:w-5"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="card relative flex flex-col justify-center overflow-hidden p-8 sm:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="mb-4 text-2xl font-medium tracking-[-0.03em] text-ink sm:text-3xl">
                Ready to Work Together?
              </h3>
              <p className="mb-10 text-[15px] leading-relaxed text-ink-muted">
                Whether you're looking for a Machine Learning Engineer to
                develop intelligent systems, a Full Stack Developer to build
                modern applications, or a collaborative partner for innovative
                projects, I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:priscillajospin@gmail.com"
                  className="btn btn-solid w-full"
                >
                  Send Email
                </a>
                <a
                  href="/Priscilla-Resume.pdf"
                  download="Priscilla-Jospin-Resume.pdf"
                  className="btn btn-ghost w-full"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
