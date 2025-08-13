// src/App.jsx
import { useRef, useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import AboutMeSection from "./components/AboutMeSection";
import CommandPalette from "./components/CommandPalette";
import useScrollAnimation from "./hooks/useScrollAnimation";
import EducationSection from "./components/EducationSection";
import useSectionAnimation from "./hooks/useSectionAnimation";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  const { isScrolled } = useScrollAnimation();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Define a handler that checks the window’s width
    // and updates our `isMobile` state accordingly
    const onResize = () => {
      // If the viewport is narrower than 834px, we consider it “mobile”
      setIsMobile(window.innerWidth < 768);
    };

    // Add the resize listener so onResize runs every time the window is resized
    window.addEventListener("resize", onResize);

    // Run it once on mount to initialize `isMobile` with the current width
    onResize();

    // Cleanup: remove the listener when this effect is torn down
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  //   Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K on Mac, Ctrl+K on Windows/Linux
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // pick different startWidth based on screen size
  // const aboutStart = isMobile ? 100 : 75;
  const skillsStart = isMobile ? 100 : 75;
  const ExperienceStart = isMobile ? 100 : 75;
  const eduStart = isMobile ? 100 : 75;

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const ExperienceRef = useRef(null);
  const educationRef = useRef(null);

  const aboutAnim = useSectionAnimation(aboutRef, {
    startWidth: 75,
    endWidth: 100,
  });
  const skillsAnim = useSectionAnimation(skillsRef, {
    startWidth: skillsStart,
    endWidth: 100,
  });
  const ExpAnim = useSectionAnimation(ExperienceRef, {
    startWidth: ExperienceStart,
    endWidth: 100,
  });
  const educationAnim = useSectionAnimation(educationRef, {
    startWidth: eduStart,
    endWidth: 100,
  });

  return (
    <div className="relative">
      <Navbar isScrolled={isScrolled} />

      {/* Hero (full-width, static background) */}
      {!(isMobile && aboutAnim.isScrolled) && <HeroSection />}

      {/* About Me (stacks over Hero) */}
      <div
        ref={aboutRef}
        className="sticky tablet-sm:top-0"
        style={{ marginTop: "90vh", zIndex: 20 }}
      >
        <AboutMeSection
          sectionWidth={aboutAnim.width}
          sectionLeft={aboutAnim.left}
          isVisible={aboutAnim.isVisible}
          isScrolled={aboutAnim.isScrolled}
        />
      </div>

      {/* {Skills (stacks over Education)} */}
      <div
        ref={skillsRef}
        className="sticky tablet-sm:top-0"
        style={{ marginTop: "-8vh", zIndex: 30 }}
      >
        <SkillsSection
          sectionWidth={skillsAnim.width}
          sectionLeft={skillsAnim.left}
          isVisible={skillsAnim.isVisible}
          isScrolled={skillsAnim.isScrolled}
        />
      </div>

      {/* {Experience (stacks over Education)} */}
      <div
        ref={ExperienceRef}
        className="relative"
        style={{ marginTop: "-8vh", zIndex: 30 }}
      >
        <ExperienceSection
          sectionWidth={ExpAnim.width}
          sectionLeft={ExpAnim.left}
          isVisible={ExpAnim.isVisible}
          isScrolled={ExpAnim.isScrolled}
        />
      </div>

      {/* Education (stacks over About Me) */}
      <div
        ref={educationRef}
        className="sticky tablet-sm:top-0"
        style={{ zIndex: 40 }}
      >
        <EducationSection
          sectionWidth={educationAnim.width}
          sectionLeft={educationAnim.left}
          isVisible={educationAnim.isVisible}
          isScrolled={educationAnim.isScrolled}
        />
      </div>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
