'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentRole, setCurrentRole] = useState('Full-Stack');
  
  const roles = ['Full-Stack', 'Mobile', 'IoT', 'Embedded', 'Cloud'];
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Shubhank Tyagi</span>
        </motion.h1>

        <motion.div
          className="text-2xl md:text-3xl text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gray-500">|</span>{' '}
          <span>IoT & Software Engineer</span>
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-primary font-semibold">{currentRole}</span>
          <span className="text-primary animate-pulse">|</span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Full-Stack + Mobile + Embedded developer experienced in building
          high-performance applications with cloud-native solutions.
          Passionate about IoT, machine learning, and creating innovative tech
          solutions that make a real-world impact.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#00ff88] to-[#0066ff] text-[#0a0a0f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </motion.div>
    </section>
  );
}
