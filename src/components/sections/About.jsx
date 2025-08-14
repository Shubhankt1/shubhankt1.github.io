import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";

/**
 * About Me section describing your background, strengths, and interests.
 */
export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="MS in IoT (Northeastern, cum laude). I design protocols, ship apps, and automate deployments."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300"
      >
        <p>
          Recognized for technical innovation and collaborative problem-solving,
          I’ve delivered measurable outcomes—from accelerating release cycles
          and reducing build times to deploying reliable CV and telemetry
          systems in production.
        </p>
        <p>
          I enjoy systems work (e.g., <strong>MQTTeeny</strong>: UDP PUB/SUB
          with CRC-16 & QoS) and I’m equally comfortable improving developer
          experience, CI/CD, and cloud infrastructure.
        </p>
      </motion.div>
    </Section>
  );
}
