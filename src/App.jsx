// src/App.jsx
import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import EducationSection from "./components/EducationSection";
import useScrollAnimation from "./hooks/useScrollAnimation";
import useSectionAnimation from "./hooks/useSectionAnimation";

function App() {
  const { isScrolled } = useScrollAnimation();

  const aboutRef = useRef(null);
  const educationRef = useRef(null);

  const aboutAnim = useSectionAnimation(aboutRef, {
    startWidth: 75,
    endWidth: 100,
  });
  const educationAnim = useSectionAnimation(educationRef, {
    startWidth: 80,
    endWidth: 100,
  });

  return (
    <div className="relative">
      <Navbar isScrolled={isScrolled} />

      {/* Hero (full-width, static background) */}
      <HeroSection />

      {/* About Me (stacks over Hero) */}
      <div
        ref={aboutRef}
        className="sticky top-0"
        style={{ marginTop: "90vh", zIndex: 20 }}
      >
        <AboutMeSection
          sectionWidth={aboutAnim.width}
          sectionLeft={aboutAnim.left}
          isVisible={aboutAnim.isVisible}
        />
      </div>

      {/* Education (stacks over About Me) */}
      <div
        ref={educationRef}
        className="sticky top-0"
        style={{ marginTop: "180vh", zIndex: 30 }}
      >
        <EducationSection
          sectionWidth={educationAnim.width}
          sectionLeft={educationAnim.left}
          isVisible={educationAnim.isVisible}
        />
      </div>
    </div>
  );
}

export default App;
