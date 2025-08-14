import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useScrollSpy from "../hooks/useScrollSpy";
import useDarkMode from "../hooks/useDarkMode";
import { PROFILE } from "../data";
import { CommandPaletteButton } from "./CommandPalette";

/**
 * Sticky navigation bar with scroll progress bar, command palette trigger,
 * theme toggle, and responsive tablet/mobile handling.
 */
export default function Header({ sectionIds, onJump, onPaletteOpen }) {
  const active = useScrollSpy(sectionIds);

  const [dark, setDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.1,
  });

  // Horizontal scroll hints for pill nav
  const pillScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const updateScrollHints = useCallback(() => {
    const el = pillScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 6);
  }, []);
  const scrollByAmount = (amt) => {
    const el = pillScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: amt, behavior: "smooth" });
  };
  useEffect(() => {
    const el = pillScrollRef.current;
    if (!el) return;
    updateScrollHints();
    const onScroll = () => updateScrollHints();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(updateScrollHints);
    ro.observe(el);
    window.addEventListener("resize", updateScrollHints);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
      window.removeEventListener("resize", updateScrollHints);
    };
  }, [updateScrollHints]);

  return (
    <>
      {/* Scroll progress bar */}
      {/* <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet-500 to-cyan-400"
      /> */}

      <header
        className="
	  	sticky top-0 z-50 border-b border-slate-200
		bg-white/40 backdrop-blur
		dark:border-white/10 dark:bg-[#0b0d15]/80
	  "
      >
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          {/* Left: Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onJump("home");
            }}
            className="font-semibold tracking-tight text-slate-900 dark:text-white flex-shrink-0"
          >
            {PROFILE.name}
          </a>

          {/* Center: scrollable pill nav */}
          <div className="relative hidden md:flex flex-1 min-w-0 items-center justify-center">
            {/* fade edges */}
            <div
              className={`pointer-events-none absolute left-0 top-1/2 z-10 hidden h-9 w-10 -translate-y-1/2 bg-gradient-to-r from-white to-transparent dark:from-[#0b0d15] md:block ${
                canScrollLeft ? "" : "opacity-0"
              }`}
            />
            <div
              className={`pointer-events-none absolute right-0 top-1/2 z-10 hidden h-9 w-10 -translate-y-1/2 bg-gradient-to-l from-white to-transparent dark:from-[#0b0d15] md:block ${
                canScrollRight ? "" : "opacity-0"
              }`}
            />

            {/* scroll container */}
            <div
              ref={pillScrollRef}
              className="
			  relative mx-10 max-w-full overflow-x-auto
			  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            "
            >
              <div className="relative inline-flex items-center whitespace-nowrap gap-1 rounded-full bg-white/60 p-1 ring-1 ring-slate-200/70 backdrop-blur dark:bg-white/10 dark:ring-white/10">
                {sectionIds.map((id) => {
                  const isActive = active === id;
                  const compact = [
                    "achievements",
                    "experience",
                    "education",
                  ].includes(id);
                  return (
                    <button
                      key={id}
                      onClick={(e) => {
                        e.preventDefault();
                        onJump(id);
                      }}
                      className={`relative ${
                        compact ? "hidden lg:inline-flex" : "inline-flex"
                      } mx-0.5 rounded-full px-2.5 md:px-3 py-1.5 text-xs md:text-sm transition-colors ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navPill"
                          className="absolute inset-0 -z-[1] rounded-full bg-slate-900/5 shadow-sm dark:bg-white/15"
                        />
                      )}
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* arrow controls */}
            <div className="absolute inset-y-0 left-0 hidden items-center md:flex">
              <button
                aria-label="Scroll left"
                onClick={() => scrollByAmount(-180)}
                className={`z-20 ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-200 ${
                  canScrollLeft ? "" : "opacity-0 pointer-events-none"
                }`}
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 hidden items-center md:flex">
              <button
                aria-label="Scroll right"
                onClick={() => scrollByAmount(180)}
                className={`z-20 mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-200 ${
                  canScrollRight ? "" : "opacity-0 pointer-events-none"
                }`}
              >
                ›
              </button>
            </div>
          </div>

          {/* Right: command button (desktop), theme toggle, mobile menu */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <CommandPaletteButton onOpen={onPaletteOpen} />
            {/* <button
              onClick={() => setDark((d) => !d)}
              className="rounded-lg border border-slate-300/60 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
            >
              {dark ? "Light" : "Dark"}
            </button> */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden rounded-lg border border-slate-300/60 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
