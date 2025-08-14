import React from "react";
import Section from "../Section";
import TiltCard from "../TiltCard";
import { EDUCATION } from "../../data";

/**
 * Education section showing degrees, periods, and highlights.
 */
export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Learning by building and researching."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {EDUCATION.map((ed, i) => (
          <TiltCard key={`${ed.school}-${i}`}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {ed.school}
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {ed.degree}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {ed.period}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {ed.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-800 dark:bg-white/10 dark:text-slate-300"
                >
                  {h}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
