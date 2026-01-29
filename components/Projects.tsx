'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Hardware GEMM Accelerator in Darknet',
    tech: 'C, SystemC, QEMU, Linux',
    description:
      'Implemented hardware-accelerated GEMM module for Zynq platform optimizing neural network inference in Darknet, achieving 10-13x speedup through fixed-point accelerator and memory-mapped register interface.',
    icon: '⚡',
  },
  {
    title: 'LTE Network Testbed for Profiling',
    tech: 'USRP, UHD, srsRAN',
    description:
      'Developed simplified LTE network using USRP hardware and srsRAN software, simulating real-world 4G telecommunications infrastructure with comprehensive authentication processes.',
    icon: '📡',
  },
  {
    title: 'Flutter Development Portfolio',
    tech: 'Flutter, CLEAN, BLoC, Riverpod',
    description:
      'Created multiple Flutter applications including travel app, Instagram and Spotify clones, showcasing state management patterns, CLEAN architecture, and advanced animations.',
    icon: '📱',
  },
  {
    title: 'ML-Based Answer Evaluation Tool',
    tech: 'Python, Google Cloud NLP',
    description:
      'Built automated grading system during 3-day CodeChef Hackathon using semantic similarity analysis and custom scoring algorithms, reaching hackathon semifinals.',
    icon: '🤖',
  },
  {
    title: 'Electronic Door Lock System',
    tech: 'C++, Arduino, RC522, RFID',
    description:
      'Home automation project with RFID authentication, servo motor actuation, and buzzer alerts, demonstrating microcontroller programming and hardware interfacing skills.',
    icon: '🔒',
  },
  {
    title: 'Computer Vision Risk Management',
    tech: 'YOLOv4, Python, OpenCV',
    description:
      'Developed real-time safety monitoring system for mining operations with 95% accuracy in hazard detection, processing multiple camera feeds simultaneously.',
    icon: '👁️',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-effect rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-secondary text-sm font-semibold mb-3">
                {project.tech}
              </p>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
