import React, { useEffect, useRef, useState } from "react";

/**
 * Counter that animates from 0 to `to` when it enters the viewport.
 * It uses requestAnimationFrame for smooth animation.
 */
export default function Counter({ to = 0, duration = 1.2 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(!!e?.isIntersecting), {
      threshold: 0.4,
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!on) return;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min(1, (ts - start) / (duration * 1000));
      setVal(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    const r = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r);
  }, [on, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString()}
    </span>
  );
}
