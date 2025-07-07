// src/components/HeroSection.jsx
import { useState, useEffect } from "react";

const HeroSection = () => {
  const texts = [
    "{ FULL-STACK + MOBILE + CLOUD }",
    "{ X-PLATFORM MOBILE APPS }",
    "{ CLOUD }",
    "{ INTERNET OF THINGS }",
    "{ EMBEDDED SYSTEMS }",
  ];

  const [typingText, setTypingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    let timeout;

    if (!isDeleting && typingText.length < current.length) {
      timeout = setTimeout(
        () => setTypingText(current.slice(0, typingText.length + 1)),
        80
      );
    } else if (!isDeleting && typingText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && typingText.length > 0) {
      timeout = setTimeout(
        () => setTypingText(current.slice(0, typingText.length - 1)),
        30
      );
    } else if (isDeleting && typingText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((i) => (i + 1) % texts.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, currentIndex]);

  return (
    <section className="h-screen flex flex-col justify-center items-center px-8 fixed top-0 left-0 w-full z-10">
      <h1 className="hero-title animate-fadeInUp">SHUBHANK TYAGI</h1>
      <div className="hero-subtitle w-full flex flex-col md:flex-row md:justify-between animate-fadeInUpDelay mt-2 md:mt-1">
        <div className="text-center md:text-left mb-4 md:mb-0">
          SOFTWARE ENGINEER. BUILDER.
        </div>
        <div className="text-center md:text-right md:min-w-[200px]">
          <span className="typing-cursor relative inline-block min-h-[1.2em] text-blue-500 font-light">
            {typingText.toLowerCase()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
