import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";

function App() {
  // State for navbar scroll effect
  const [isScrolled, setIsScrolled] = useState(false);

  // State for section animation visibility
  const [sectionVisible, setSectionVisible] = useState(false);

  // State for second section width animation
  const [sectionWidth, setSectionWidth] = useState(75);
  const [sectionLeft, setSectionLeft] = useState(12.5);
  const [borderRadius, setBorderRadius] = useState(24);

  useEffect(() => {
    // Configuration for animations
    const ANIMATION_CONFIG = {
      startWidth: 75,
      endWidth: 100,
      maxBorderRadius: 0,
    };

    // Combined scroll handler function
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Navbar scroll animation - triggers when scrolled past 80% of viewport
      const aboutMeSectionComplete = viewportHeight * 0.8;
      setIsScrolled(scrollY > aboutMeSectionComplete);

      // Start point is 0 (top of page), end point is 90% of viewport height
      const startPoint = 0;
      const endPoint = viewportHeight * 0.9;

      // Calculate scroll progress (0 to 1) from top of page
      const scrollProgress = Math.max(
        0,
        Math.min((scrollY - startPoint) / (endPoint - startPoint), 1)
      );

      // Calculate width percentage based on scroll progress
      const widthPercent =
        ANIMATION_CONFIG.startWidth +
        (ANIMATION_CONFIG.endWidth - ANIMATION_CONFIG.startWidth) *
          scrollProgress;

      const finalWidth = Math.min(100, widthPercent);

      // Update section dimensions
      setSectionWidth(finalWidth);
      setSectionLeft(Math.max(0, (100 - finalWidth) / 2));

      // Update border radius (decreases as section expands)
      const newBorderRadius =
        ANIMATION_CONFIG.maxBorderRadius * (1 - scrollProgress);
      setBorderRadius(newBorderRadius);

      // Show section content when scroll progress > 5%
      setSectionVisible(scrollProgress > 0.05);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Add resize event listener to recalculate on window resize
    window.addEventListener("resize", handleScroll);

    // Initial calculation on component mount
    handleScroll();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section - Fixed positioning */}
      <HeroSection />

      {/* Scroll Spacer - Creates space for scroll effect */}
      {/* <div className="h-[50vh] w-full" /> */}

      {/* Second Section - Animated width and positioning */}
      <AboutMeSection
        sectionWidth={sectionWidth}
        sectionLeft={sectionLeft}
        borderRadius={borderRadius}
        isVisible={sectionVisible}
      />
    </div>
  );
}

export default App;
