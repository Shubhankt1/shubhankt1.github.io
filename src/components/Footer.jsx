import React from "react";
import { PROFILE } from "../data";

/**
 * Simple footer showing the current year and your name.
 */
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500 dark:border-white/5 dark:text-slate-400">
      © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
    </footer>
  );
}
