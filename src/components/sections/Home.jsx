import React from "react";
import { motion } from "framer-motion";
import { PROFILE, PHOTO_URL } from "../../data";
import MagButton from "../MagButton";

/**
 * Landing (hero) section showing your name, title, tagline, call-to-action
 * buttons, and animated profile photo.
 */
export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
            {PROFILE.name}
          </h1>
          <p className="mt-3 text-xl text-slate-600 dark:text-slate-300">
            {PROFILE.title}
          </p>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            {PROFILE.tagline}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <MagButton className="w-full sm:w-auto" href={PROFILE.links.resume}>
              Download Resume
            </MagButton>
            <MagButton className="w-full sm:w-auto" href={PROFILE.links.github}>
              GitHub
            </MagButton>
            <MagButton
              className="w-full sm:w-auto"
              href={PROFILE.links.linkedin}
            >
              LinkedIn
            </MagButton>
          </div>
        </motion.div>

        {/* Profile photo with animations */}
        <div className="flex items-center justify-center">
          <motion.div
            className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 md:h-96 md:w-96"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Glow ring */}
            <motion.div
              aria-hidden
              className="absolute -inset-1 z-0 rounded-full blur-xl"
              style={{
                backgroundImage:
                  "conic-gradient(from 0deg at 50% 50%, rgba(139,92,246,0.8), rgba(56,189,248,0.7), rgba(139,92,246,0.8))",
              }}
              animate={{ rotate: 360, opacity: [0.25, 0.6, 0.25] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Shine overlay */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-full mix-blend-screen"
              animate={{ backgroundPositionX: ["-200%", "200%"] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
            />
            {/* Actual photo */}
            <motion.img
              src={PHOTO_URL}
              alt={PROFILE.name}
              className="relative z-10 h-full w-full rounded-full object-cover ring-1 ring-black/5 shadow-2xl dark:ring-white/20"
              animate={{ y: [0, -6, 0, 6, 0] }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
