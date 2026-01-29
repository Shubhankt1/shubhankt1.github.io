'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Mobile Applications Co-Op',
    company: 'Danlaw Inc.',
    location: 'Michigan, USA',
    duration: 'Jun. 2024 – Aug. 2024',
    achievements: [
      'Enhanced cross-platform app performance by optimizing Flutter widget trees, reducing build times by 30%',
      'Designed and documented an order management API with JWT authentication and role-based access control',
      'Created architectural flowcharts for FedEx integration and secure data flows',
    ],
  },
  {
    title: 'Full Stack Engineer and Release Manager',
    company: 'Forwood Safety',
    location: 'Australia (Remote)',
    duration: 'Jan. 2023 – Jul. 2023',
    achievements: [
      'Led cross-functional design meetings driving technical solutions from ideation to implementation',
      'Migrated to monorepo architecture with Terraform-based AWS Lambda deployments, cutting release time by 67%',
      'Architected microservices including backup system for AWS DynamoDB and OpenSearch',
      'Implemented QR-Code based login via asymmetric encryption, improving uptime by 30%',
    ],
  },
  {
    title: 'Product Engineer',
    company: 'Forwood Safety',
    location: 'Australia (Remote)',
    duration: 'Sep. 2020 – Jan. 2023',
    achievements: [
      'Developed Computer Vision-based Risk Management System with YOLOv4 models achieving 95% accuracy',
      'Secured long-term contract with leading diamond mining company, reducing safety incidents',
      'Engineered Flutter mobile app supporting 16 languages, serving 1.7K+ users globally',
      'Built UDP-based communication system for real-time mining equipment data transmission',
    ],
  },
  {
    title: 'IoT Engineer Intern',
    company: 'Aerologiks',
    location: 'Bengaluru, India',
    duration: 'Feb. 2020 – Sept. 2020',
    achievements: [
      'Built hybrid telemetry infrastructure using DynamoDB and SQLite for drone operations',
      'Developed REST API wireless communication framework using Django',
      'Integrated flight controller with Raspberry Pi for real-time drone command execution',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-primary/30"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-bg-primary" />

              <motion.div
                className="glass-effect rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {exp.company} | {exp.location}
                </p>
                <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 text-sm flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                    >
                      <span className="text-primary mr-2">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
