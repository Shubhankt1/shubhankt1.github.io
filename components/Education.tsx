'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const education = [
  {
    college: 'Northeastern University',
    degree: 'Master of Science in Computer Engineering',
    duration: 'Sept. 2023 – May 2025',
    gpa: 'GPA: 3.64/4.00',
    coursework: 'IoT Security, Machine Learning, Computer Vision, Embedded Systems',
    activities: 'Dean\'s List, Cum Laude',
    logo: '🎓',
    bgClass: 'from-blue-500/20 to-purple-500/20',
  },
  {
    college: 'UPES',
    degree: 'Bachelor of Technology in Electronics & Computer Engineering',
    duration: 'Aug. 2017 – June 2021',
    gpa: 'GPA: 3.2/4.00',
    coursework: 'IoT Architecture, Wireless Networks, Digital Signal Processing',
    activities: 'IoT Club Member, Technical Lead',
    logo: '🎓',
    bgClass: 'from-green-500/20 to-blue-500/20',
  },
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.college}
              className="perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div className="relative w-full aspect-square">
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flipped === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front of card */}
                  <div
                    className={`absolute w-full h-full glass-effect rounded-2xl p-8 flex flex-col items-center justify-center bg-gradient-to-br ${edu.bgClass}`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-6xl mb-4">{edu.logo}</div>
                    <div className="text-center bg-[#0a0a0f]/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <h3 className="text-xl font-semibold text-primary">
                        {edu.college}
                      </h3>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute w-full h-full glass-effect rounded-2xl p-6 overflow-y-auto"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-secondary font-semibold">{edu.college}</p>
                      <p className="text-gray-400 text-sm">{edu.duration}</p>
                      <p className="text-gray-400 text-sm">{edu.gpa}</p>
                      <div>
                        <p className="text-gray-300 text-sm font-semibold mb-1">
                          Coursework:
                        </p>
                        <p className="text-gray-400 text-sm">{edu.coursework}</p>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm font-semibold mb-1">
                          Activities:
                        </p>
                        <p className="text-gray-400 text-sm">{edu.activities}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
