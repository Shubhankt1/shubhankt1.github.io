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
          fixed top-0 left-0 w-full px-8 py-6 z-50 transition-all duration-500 ease-out
          ${
            isScrolled
              ? "navbar-scrolled md:navbar-scrolled navbar-mobile-scrolled"
              : ""
          }
        `}
        onKeyDown={handleKeyDown}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className={`
              text-xl font-bold no-underline tracking-wide flex-shrink-0 mr-8
              transition-colors duration-300
              text-black
            `}
          >
            HEYIAMSHUBHANK
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 list-none flex-shrink-0">
            <li>
              <a
                href="#about"
                className={`
                  no-underline text-base font-medium py-2 whitespace-nowrap
                  transition-all duration-300 hover:-translate-y-0.5
                  ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-500"
                      : "text-black hover:text-gray-700"
                  }
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
                  ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-500"
                      : "text-black hover:text-gray-700"
                  }
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
                  ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-500"
                      : "text-black hover:text-gray-700"
                  }
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
                  ${
                    isScrolled
                      ? "text-gray-600 hover:text-blue-500"
                      : "text-black hover:text-gray-700"
                  }
                `}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`
                  bg-black text-white px-6 py-3 rounded-full font-semibold text-base
                  transition-all duration-300 whitespace-nowrap no-underline
                  hover:bg-white hover:text-black hover:-translate-y-0.5 hover:scale-105
                  hover:shadow-xl
                  ${
                    isScrolled
                      ? "bg-black text-white hover:bg-white hover:text-black"
                      : ""
                  }
                `}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Contact Button */}
            <a
              href="#contact"
              className="bg-black text-white px-4 py-2.5 rounded-full font-semibold text-sm
                         transition-all duration-300 no-underline
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-16 right-4 w-48 bg-white border border-gray-200 rounded-lg
          shadow-xl z-50 transition-all duration-300 md:hidden
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
