import React from "react";
import Section from "../Section";
import TiltCard from "../TiltCard";
import { SKILLS } from "../../data";

/**
 * Lists out skill categories with badges.  Uses TiltCard for a subtle 3D effect.
 */
export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools that keep me fast and reliable."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SKILLS.map((grp) => (
          <TiltCard key={grp.category}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {grp.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {grp.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-800 dark:bg-white/10 dark:text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
