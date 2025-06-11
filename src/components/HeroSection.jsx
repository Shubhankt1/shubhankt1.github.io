import { useState, useEffect } from "react";

const HeroSection = () => {
  // Array of texts to animate through
  const texts = [
    "{ FULL-STACK + MOBILE + CLOUD }",
    "{ X-PLATFORM MOBILE APPS }",
    "{ CLOUD }",
    "{ INTERNET OF THINGS }",
    "{ EMBEDDED SYSTEMS }",
  ];

  // State for the currently displayed text in the animation
  const [typingText, setTypingText] = useState("");
  // State for which text in the array is currently being animated
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to determine if we are deleting or typing
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Get the current text to animate
    const current = texts[currentIndex];
    let timeout;

    // If we are typing and haven't finished the word, add one character
    if (!isDeleting && typingText.length < current.length) {
      timeout = setTimeout(() => {
        setTypingText(current.slice(0, typingText.length + 1));
      }, 80);
    }
    // If we have finished typing the word, pause before starting to delete
    else if (!isDeleting && typingText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    }
    // If we are deleting and there are still characters left, remove one character
    else if (isDeleting && typingText.length > 0) {
      timeout = setTimeout(() => {
        setTypingText(current.slice(0, typingText.length - 1));
      }, 30);
    }
    // If we have finished deleting, move to the next word and start typing
    else if (isDeleting && typingText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 400);
    }

    // Cleanup timeout on effect cleanup to prevent memory leaks
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
            <span className="typing-cursor relative inline-block min-h-[1.2em] text-blue-500 font-light">
              {typingText.toLowerCase()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
