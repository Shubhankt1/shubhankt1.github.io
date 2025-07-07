import { useState, useEffect } from "react";

export default function useSectionAnimation(
  ref,
  {
    startWidth = 75,
    endWidth = 100,
    startOffset = 0.9, // percentage of viewport height before animation begins
  } = {}
) {
  const [width, setWidth] = useState(startWidth);
  const [left, setLeft] = useState((100 - startWidth) / 2);
  const [isVisible, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    function update() {
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress = 0 at bottom-of-section start  → 1 at offset*vh into view
      const progress = Math.max(
        0,
        Math.min(1, (vh - rect.top) / (vh * startOffset))
      );

      // interpolate width/left
      const deltaW = endWidth - startWidth;
      const newW = startWidth + deltaW * progress;

      setWidth(Math.min(100, newW));
      setLeft((100 - newW) / 2);
      setVis(progress > 0.05);
    }

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, startWidth, endWidth, startOffset]);

  return { width, left, isVisible };
}
