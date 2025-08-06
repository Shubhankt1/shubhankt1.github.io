import { useState } from "react";

const Navbar = ({ isScrolled }) => {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Prevent body scroll when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Handle escape key to close mobile menu
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`
          fixed top-2 left-0 w-full z-50 transition-all duration-500 ease-out
          tablet-sm:top-5
          bg-transparent
        `}
        onKeyDown={handleKeyDown}
      >
        {/* Responsive container to keep navbar and its white background under width constraints */}
        <div
          className={`
            mx-auto w-full
            ${
              isScrolled
                ? // When scrolled - wider on small tablets, more conservative on mobile
                  "max-w-[90vw] tablet-sm:max-w-[80vw] lg:max-w-[70vw] qhd:max-w-[60vw]"
                : // When not scrolled
                  "max-w-[90vw] tablet-sm:max-w-[80vw] qhd:max-w-[70vw] 3k:max-w-[65vw] 4k:max-w-[60vw]"
            }
            transition-all duration-500
          `}
        >
          {/* White background, shadow, and padding for the navbar */}
          <div
            className={`
              bg-white
              ${isScrolled ? "shadow-lg mt-4 md:mt-6 lg:mt-8" : ""}
              ${
                isScrolled
                  ? "py-2 tablet-sm:py-5 tablet-lg:py-6 fhd:py-8"
                  : "py-4 md:py-6 lg:py-8"
              }
              ${
                isScrolled
                  ? "px-4 sm:px-4 tablet-sm:px-6 tablet-md:px-6 fhd:px-8"
                  : "px-4 lg:px-6"
              }
              flex justify-between items-center
              rounded-full
              transition-all duration-500
            `}
          >
            {/* Logo */}
            <a
              href="#"
              className={`
                text-sm xs:text-base tablet-sm:text-lg 
                font-bold no-underline tracking-wide flex-shrink-0 
                mr-2 xs:mr-4 tablet-sm:mr-6 lg:mr-8
                transition-colors duration-300
                text-black hover:text-blue-500
                2k+:text-lg
                qhd:text-xl
				3k:text-2xl
              `}
            >
              HEYIAMSHUBHANK
            </a>

            {/* Desktop Menu - Show on tablets and up */}
            <ul className="hidden tablet-sm:flex items-center gap-2 tablet-md:gap-4 lg:gap-6 xl:gap-8 list-none flex-shrink-0">
              <li>
                <a
                  href="#about"
                  className={`
                    no-underline text-base font-medium py-2 whitespace-nowrap
                    transition-all duration-300 hover:-translate-y-0.5
                    text-black hover:text-blue-500
                    2k+:text-lg
                    qhd:text-xl
					3k:text-2xl
                  `}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`
                    no-underline text-base font-medium py-2 whitespace-nowrap
                    transition-all duration-300 hover:-translate-y-0.5
                    text-black hover:text-blue-500
                    2k+:text-lg
                    qhd:text-xl
					3k:text-2xl
                  `}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`
                    no-underline text-base font-medium py-2 whitespace-nowrap
                    transition-all duration-300 hover:-translate-y-0.5
                    text-black hover:text-blue-500
                    2k+:text-lg
                    qhd:text-xl
					3k:text-2xl
                  `}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`
                    no-underline text-base font-medium py-2 whitespace-nowrap
                    transition-all duration-300 hover:-translate-y-0.5
                    text-black hover:text-blue-500
                    2k+:text-lg
                    qhd:text-xl
					3k:text-2xl
                  `}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`
                    bg-black text-white rounded-full font-semibold no-underline
                    px-3 tablet-md:px-4
                    py-3 2k:py-2
                    text-sm tablet-md:text-sm
                    transition-all duration-300 whitespace-nowrap
                    hover:bg-blue-500 hover:-translate-y-0.5 hover:scale-105
                    hover:shadow-xl
                    2k+:text-lg
                    qhd:text-xl
					3k:text-2xl
                  `}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Controls - Show on mobile and small tablets */}
            <div className="tablet-sm:hidden flex items-center gap-2 xs:gap-3">
              {/* Mobile Contact Button */}
              <a
                href="#contact"
                className="bg-black text-white rounded-full font-semibold no-underline
                         px-2 xs:px-3 py-1.5 xs:py-2 text-xs xs:text-sm
                         transition-all duration-300
                         hover:bg-white hover:text-black"
              >
                Contact
              </a>

              {/* Hamburger Menu */}
              <button
                className="flex flex-col cursor-pointer p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <div
                  className={`
                  w-6 h-0.5 my-0.5 transition-all duration-300 rounded-sm
                  ${isScrolled ? "bg-slate-700" : "bg-black"}
                  ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}
                `}
                />
                <div
                  className={`
                  w-6 h-0.5 my-0.5 transition-all duration-300 rounded-sm
                  ${isScrolled ? "bg-slate-700" : "bg-black"}
                  ${isMobileMenuOpen ? "opacity-0" : ""}
                `}
                />
                <div
                  className={`
                  w-6 h-0.5 my-0.5 transition-all duration-300 rounded-sm
                  ${isScrolled ? "bg-slate-700" : "bg-black"}
                  ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}
                `}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed bg-white border border-gray-200 rounded-lg shadow-xl z-50 
          transition-all duration-300 tablet-sm:hidden
          top-14 xs:top-16 right-2 xs:right-4 
          w-40 xs:w-48
          ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-2 opacity-0 invisible"
          }
        `}
      >
        <div className="flex flex-col py-4">
          <a
            href="#about"
            className="text-black no-underline text-base font-medium px-6 py-3 
                       transition-all duration-200 border-b border-gray-100 last:border-b-0
                       hover:bg-gray-50 hover:text-gray-700"
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href="#education"
            className="text-black no-underline text-base font-medium px-6 py-3 
                       transition-all duration-200 border-b border-gray-100 last:border-b-0
                       hover:bg-gray-50 hover:text-gray-700"
            onClick={closeMobileMenu}
          >
            Education
          </a>
          <a
            href="#skills"
            className="text-black no-underline text-base font-medium px-6 py-3 
                       transition-all duration-200 border-b border-gray-100 last:border-b-0
                       hover:bg-gray-50 hover:text-gray-700"
            onClick={closeMobileMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-black no-underline text-base font-medium px-6 py-3 
                       transition-all duration-200 border-b border-gray-100 last:border-b-0
                       hover:bg-gray-50 hover:text-gray-700"
            onClick={closeMobileMenu}
          >
            Projects
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;
