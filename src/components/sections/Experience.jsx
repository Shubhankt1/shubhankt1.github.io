import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import TiltCard from "../TiltCard";
import { EXPERIENCE } from "../../data";

/**
 * Timeline of professional roles with bullets describing your contributions.
 */
export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="What I’ve shipped and owned."
    >
      <ol className="relative border-s border-slate-200 pl-6 dark:border-white/10">
        {EXPERIENCE.map((job, idx) => (
          <motion.li
            key={`${job.company}-${idx}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-10 ms-4"
          >
            <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-slate-300 bg-violet-400/60 dark:border-white/20" />
            <TiltCard>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {job.role} —{" "}
                <span className="text-slate-600 dark:text-slate-300">
                  {job.company}
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {job.period}
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </TiltCard>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
