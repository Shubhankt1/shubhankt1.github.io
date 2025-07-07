import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import EducationSection from "./components/EducationSection";
import useSectionAnimation from "./hooks/useSectionAnimation";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);

  const aboutAnim = useSectionAnimation(aboutRef, {
    startWidth: 70,
    endWidth: 100,
  });
  const eduAnim = useSectionAnimation(educationRef, {
    startWidth: 80,
    endWidth: 100,
  });

  return (
    <div className="relative">
      <Navbar />

      {/* Hero (index 0) */}
      <div ref={heroRef}>
        <HeroSection
          index={0}
          sectionWidth={100}
          sectionLeft={0}
          isVisible={true}
        />
      </div>

      {/* About Me (index 1) */}
      <div ref={aboutRef}>
        <AboutMeSection
          index={1}
          sectionWidth={aboutAnim.width}
          sectionLeft={aboutAnim.left}
          isVisible={aboutAnim.isVisible}
        />
      </div>

      {/* Education (index 2) */}
      <div ref={educationRef}>
        <EducationSection
          index={2}
          sectionWidth={eduAnim.width}
          sectionLeft={eduAnim.left}
          isVisible={eduAnim.isVisible}
        />
      </div>
    </div>
  );
}

export default App;
