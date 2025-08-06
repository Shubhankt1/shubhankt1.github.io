// src/App.jsx
import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import EducationSection from "./components/EducationSection";
import useScrollAnimation from "./hooks/useScrollAnimation";
import useSectionAnimation from "./hooks/useSectionAnimation";
import SkillsSection from "./components/SkillsSection";

function App() {
  const { isScrolled } = useScrollAnimation();

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

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

  // pick different startWidth based on screen size
  // const aboutStart = isMobile ? 100 : 75;
  const eduStart = isMobile ? 100 : 75;
  const skillsStart = isMobile ? 100 : 75;

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  const aboutAnim = useSectionAnimation(aboutRef, {
    startWidth: 75,
    endWidth: 100,
  });
  const educationAnim = useSectionAnimation(educationRef, {
    startWidth: eduStart,
    endWidth: 100,
  });
  const skillsAnim = useSectionAnimation(skillsRef, {
    startWidth: skillsStart,
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

      {/* Education (stacks over About Me) */}
      <div
        ref={educationRef}
        className="sticky top-0"
        style={{ marginTop: "-8vh", zIndex: 30 }}
      >
        <EducationSection
          sectionWidth={educationAnim.width}
          sectionLeft={educationAnim.left}
          isVisible={educationAnim.isVisible}
          isScrolled={educationAnim.isScrolled}
        />
      </div>

      {/* {Skills (stacks over Education)} */}
      <div
        ref={skillsRef}
        className="sticky top-0"
        style={{ marginTop: "-8vh", zIndex: 30 }}
      >
        <SkillsSection
          sectionWidth={skillsAnim.width}
          sectionLeft={skillsAnim.left}
          isVisible={skillsAnim.isVisible}
          isScrolled={skillsAnim.isScrolled}
        />
      </div>
    </div>
  );
}

export default App;
