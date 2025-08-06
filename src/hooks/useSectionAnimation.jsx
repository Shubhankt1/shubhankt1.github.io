// src/hooks/useSectionAnimation.jsx
import { useState, useEffect } from "react";

export default function useSectionAnimation(
  ref,
  { startWidth = 75, endWidth = 100, startOffset = 0.9 } = {}
) {
  const [width, setWidth] = useState(startWidth);
  const [left, setLeft] = useState((100 - startWidth) / 2);
  const [isVisible, setVisible] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    function update() {
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 → 1 over the first startOffset*vh of scroll into view
      const progress = Math.max(
        0,
        Math.min(1, (vh - rect.top) / (vh * startOffset))
      );

      // interpolate width/left
      const deltaW = endWidth - startWidth;
      const newW = startWidth + deltaW * progress;

      setWidth(Math.min(100, newW));
      setLeft((100 - newW) / 2);
      setVisible(progress > 0.05);
      // mark “fully scrolled” once progress hits 1
      setScrolled(progress >= 1);
    }

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, startWidth, endWidth, startOffset]);

  return { width, left, isVisible, isScrolled };
}
