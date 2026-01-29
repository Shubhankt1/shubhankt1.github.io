'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, SiJavascript, SiFlutter, SiNodedotjs, 
  SiReact, SiAmazon, SiTerraform, SiDocker,
  SiMongodb, SiMysql, SiRedis, SiFirebase, SiGit
} from 'react-icons/si';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C/C++', icon: '💻' },
      { name: 'Python', icon: SiPython },
      { name: 'Flutter (Dart)', icon: SiFlutter },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    category: 'Mobile Development',
    items: [
      { name: 'CLEAN Architecture', icon: '🏗️' },
      { name: 'Riverpod/Provider/BloC', icon: '⚛️' },
      { name: 'React Native', icon: SiReact },
      { name: 'GetX', icon: '📱' },
      { name: 'OneSignal', icon: '🔔' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'AWS', icon: SiAmazon },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Docker', icon: SiDocker },
      { name: 'CloudWatch', icon: '☁️' },
      { name: 'API Gateway', icon: '🚪' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
      { name: 'DynamoDB', icon: '🗄️' },
      { name: 'SQLite', icon: '💾' },
    ],
  },
  {
    category: 'Networking & IoT',
    items: [
      { name: 'TCP/IP', icon: '🌐' },
      { name: 'MQTT', icon: '📡' },
      { name: 'CoAP', icon: '🔌' },
      { name: 'Wi-Fi', icon: '📶' },
      { name: 'Bluetooth/BLE', icon: '🔵' },
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Flask', icon: '🌶️' },
      { name: 'Git', icon: SiGit },
      { name: 'JIRA', icon: '📋' },
      { name: 'Agile/Scrum', icon: '🏃' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="glass-effect rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: groupIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {typeof skill.icon === 'string' ? (
                      <span className="text-xl">{skill.icon}</span>
                    ) : (
                      <skill.icon className="text-primary" />
                    )}
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
