import React from "react";
import Section from "../Section";
import TiltCard from "../TiltCard";
import Counter from "../Counter";
import { ACHIEVEMENTS } from "../../data";

/**
 * Displays numeric achievements with animated counters.
 */
export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Impact at a glance."
    >
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {ACHIEVEMENTS.map((a) => (
          <TiltCard key={a.label}>
            <div className="text-4xl font-bold text-slate-900 dark:text-white">
              <Counter to={a.value} />
            </div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {a.label}
            </p>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
