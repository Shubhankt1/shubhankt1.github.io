'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'tyagi.shub@northeastern.edu',
    href: 'mailto:tyagi.shub@northeastern.edu',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shubhanktyagi',
    href: 'https://linkedin.com/in/shubhanktyagi',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Shubhankt1',
    href: 'https://github.com/Shubhankt1',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (857) 693-9537',
    href: 'tel:+18576939537',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-gray-400">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                    <contact.icon />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                    <p className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-400 mb-6">
              Available for full-time opportunities starting May 2025
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="mailto:tyagi.shub@northeastern.edu"
                className="px-8 py-3 bg-gradient-to-r from-[#00ff88] to-[#0066ff] text-[#0a0a0f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
