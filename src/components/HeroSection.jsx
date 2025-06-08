import { useState, useEffect } from "react";

const HeroSection = () => {
  // State for typing animation
  const [typingText, setTypingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Array of texts to cycle through in typing animation
  const texts = [
    "FULL-STACK",
    "MOBILE DEVELOPMENT",
    "CLOUD DEVELOPMENT",
    "INTERNET OF THINGS",
    "EMBEDDED SYSTEMS",
  ];

  useEffect(() => {
    // Typing animation logic
    const typeText = () => {
      const fullText = texts[currentIndex];
      let typeSpeed = 50;

      if (isDeleting) {
        // Deleting text - remove one character
        setTypingText(fullText.substring(0, typingText.length - 1));
        typeSpeed = 30; // Faster deletion speed
      } else {
        // Typing text - add one character
        setTypingText(fullText.substring(0, typingText.length + 1));
        typeSpeed = 50; // Normal typing speed
      }

      // Check if we've finished typing the current word
      if (!isDeleting && typingText === fullText) {
        typeSpeed = 1000; // Pause at the end of each word
        setIsDeleting(true);
      }
      // Check if we've finished deleting the current word
      else if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next word
        typeSpeed = 200; // Pause before starting next word
      }

      return typeSpeed;
    };

    // Start typing animation after initial delay
    const timer = setTimeout(() => {
      const speed = typeText();
      // Set up next typing step
      setTimeout(typeText, speed);
    }, 1500); // Initial delay before starting animation

    return () => clearTimeout(timer);
  }, [typingText, currentIndex, isDeleting, texts]);

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
