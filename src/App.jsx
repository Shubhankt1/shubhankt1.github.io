import React, { useCallback, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PROFILE } from "./data";
import useScrollSpy from "./hooks/useScrollSpy";
// import useDarkMode from "./hooks/useDarkMode";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CommandPaletteOverlay } from "./components/CommandPalette";

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

/**
 * Root component that stitches everything together.
 * It manages dark mode, the command palette, and global scroll effects.
 */
export default function App() {
  const sectionIds = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "experience",
    "education",
    "contact",
  ];
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Use scroll spy to highlight the active nav pill.
  const active = useScrollSpy(sectionIds);

  // Dark mode state lives here; Header calls into useDarkMode via its own hook.
  //   const [dark, setDark] = useDarkMode();

  // Scroll progress bar, parallax backgrounds
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.1,
  });
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Scroll to a section smoothly
  const goto = useCallback((id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Keyboard shortcut to open the command palette (Cmd/Ctrl+K)
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-violet-500/40 selection:text-white dark:bg-[#0b0d15] dark:text-slate-200">
      <Header
        sectionIds={sectionIds}
        onJump={goto}
        onPaletteOpen={() => setPaletteOpen(true)}
      />

      {/* Parallax backgrounds */}
      <motion.div
        aria-hidden
        style={{ y: ySlow }}
        className="pointer-events-none fixed inset-x-0 top-[-20%] h-[45vh] bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.18),transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.25),transparent_55%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: yFast }}
        className="pointer-events-none fixed inset-x-0 bottom-[-20%] h-[45vh] bg-[radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.16),transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.24),transparent_55%)]"
      />

      {/* Content sections */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Education />
      <Contact />

      <Footer />

      {/* Command Palette */}
      <CommandPaletteOverlay
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onJump={(id) => goto(id)}
        sectionIds={sectionIds}
      />
    </div>
  );
}
