import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Overlay that lists section names and lets the user jump to any section.
 */
export function CommandPaletteOverlay({ open, onClose, onJump, sectionIds }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-[#0b0d15]"
          >
            <div className="mb-3 text-sm text-slate-700 dark:text-slate-300">
              Jump to…
            </div>
            <ul className="max-h-[50vh] overflow-auto">
              {sectionIds.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      onClose();
                      onJump(id);
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Button that opens the command palette.  Hidden on mobile because the palette
 * is accessible via the mobile menu.
 */
export function CommandPaletteButton({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/60 p-1 pl-3 pr-2 text-sm text-slate-700 ring-1 ring-slate-200/70 backdrop-blur dark:bg-white/10 dark:text-slate-300 dark:ring-white/10"
      aria-label="Open Command Palette"
      title="Command Palette (⌘/Ctrl+K)"
    >
      <span className="px-1.5">Jump to…</span>
      <span className="rounded-md border border-slate-300/70 px-1.5 py-0.5 text-[11px] text-slate-600 dark:border-white/20 dark:text-slate-300">
        ⌘K
      </span>
    </button>
  );
}
