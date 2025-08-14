import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Adds a subtle 3D tilt effect to its children when the mouse moves over
 * the card.  Purely cosmetic and uses framer-motion for smooth rotation.
 */
export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const damp = 22;

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect?.();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 2 - 1;
    const y = ((e.clientY - r.top) / r.height) * 2 - 1;
    setXY({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setXY({ x: 0, y: 0 })}
      style={{
        transformStyle: "preserve-3d",
        rotateX: xy.y * -damp,
        rotateY: xy.x * damp,
      }}
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
}
