// src/hooks/useScrollAnimation.js
import { useState, useEffect } from "react";

export default function useScrollAnimation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sectionWidth, setSectionWidth] = useState(75);
  const [sectionLeft, setSectionLeft] = useState(12.5);
  const [borderRadius, setBorderRadius] = useState(24);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const CONFIG = { startWidth: 75, endWidth: 100, maxBorderRadius: 0 };

    function handleScroll() {
      const scrollY = window.scrollY;
      const h = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (h * 0.9), 0), 1);
      const widthDelta = CONFIG.endWidth - CONFIG.startWidth;
      const newWidth = CONFIG.startWidth + widthDelta * progress;

      setIsScrolled(scrollY > h * 0.8);
      setSectionWidth(Math.min(100, newWidth));
      setSectionLeft(Math.max(0, (100 - newWidth) / 2));
      setBorderRadius(CONFIG.maxBorderRadius * (1 - progress));
      setIsVisible(progress > 0.05);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { isScrolled, sectionWidth, sectionLeft, borderRadius, isVisible };
}
