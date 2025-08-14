import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import { PROJECTS } from "../../data";

/**
 * Horizontally draggable list of projects.  Each project shows a title,
 * description, tech badges and links to its repository.
 */
export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Drag horizontally to explore."
    >
      <motion.div
        className="overflow-x-auto snap-x snap-mandatory md:overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          drag="x"
          dragElastic={0.04}
          className="flex gap-6 pr-6 md:pr-0"
        >
          {PROJECTS.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -6 }}
              className="min-w-[320px] max-w-[340px] snap-start cursor-grab rounded-2xl border border-slate-200 bg-white p-5 shadow-sm active:cursor-grabbing dark:border-white/10 dark:bg-white/5"
            >
              <h4 className="font-semibold text-slate-900 dark:text-white">
                {p.title}
              </h4>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                {p.blurb}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2 py-1 text-slate-800 dark:bg-white/10 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
