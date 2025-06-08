import { useState, useEffect } from "react";

const HeroSection = () => {
  const texts = [
    "FULL-STACK",
    "MOBILE DEVELOPMENT",
    "CLOUD DEVELOPMENT",
    "INTERNET OF THINGS",
    "EMBEDDED SYSTEMS",
  ];

  const [typingText, setTypingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    let timeout;

    if (!isDeleting && typingText.length < current.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setTypingText(current.slice(0, typingText.length + 1));
      }, 80);
    } else if (!isDeleting && typingText.length === current.length) {
      // Pause at end
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && typingText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setTypingText(current.slice(0, typingText.length - 1));
      }, 30);
    } else if (isDeleting && typingText.length === 0) {
      // Move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [typingText, isDeleting, currentIndex]);

  return (
    <section className="h-screen flex flex-col justify-center items-center px-8 fixed top-0 left-0 w-full z-10">
      <div className="flex flex-col items-center">
        {/* Main Title */}
        <h1 className="hero-title animate-fadeInUp">SHUBHANK TYAGI</h1>

        {/* Subtitle with typing animation */}
        <div className="hero-subtitle w-full flex flex-col md:flex-row md:justify-between animate-fadeInUpDelay mt-2 md:mt-1">
          {/* Left subtitle */}
          <div className="text-center md:text-left flex-shrink-0 mb-4 md:mb-0">
            SOFTWARE ENGINEER. BUILDER.
          </div>

          {/* Right subtitle with typing animation */}
          <div className="text-center md:text-right flex-shrink-0 md:min-w-[200px]">
            <span className="typing-cursor relative inline-block min-h-[1.2em]">
              {typingText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
