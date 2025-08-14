import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Button that gently follows the cursor on hover, creating a magnetic feel.
 * Accepts either an href (anchor) or onClick handler.
 */
export default function MagButton({ children, href, onClick, className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const strength = 10;

  const move = (e) => {
    const r = ref.current?.getBoundingClientRect?.();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x / strength, y: y / strength });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={move}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPos({ x: 0, y: 0 });
      }}
      animate={{ x: hover ? pos.x : 0, y: hover ? pos.y : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-slate-300/60 bg-white text-slate-900 hover:bg-slate-50 dark:ring-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 ${className}`}
    >
      {children}
    </motion.a>
  );
}
