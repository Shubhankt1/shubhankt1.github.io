import React from "react";
import { motion } from "framer-motion";

/**
 * Wrapper that provides consistent spacing, titles, and reveal animations
 * for each major section of the portfolio.
 */
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
