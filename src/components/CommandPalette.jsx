import { useState, useEffect, useRef } from "react";

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Command data - actions available in your portfolio
  const commands = [
    // Navigation commands
    {
      id: "nav-about",
      title: "Go to About",
      description: "Navigate to About Me section",
      icon: "👤",
      action: () => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
      keywords: ["about", "bio", "intro", "me"],
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      description: "Navigate to Skills & Technologies section",
      icon: "⚡",
      action: () => {
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
      keywords: ["skills", "tech", "technologies", "programming"],
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      description: "Navigate to Work Experience timeline",
      icon: "💼",
      action: () => {
        document
          .getElementById("experience")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
      keywords: ["experience", "work", "job", "career", "timeline"],
    },
    {
      id: "nav-education",
      title: "Go to Education",
      description: "Navigate to Education section",
      icon: "🎓",
      action: () => {
        document
          .getElementById("education")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
      keywords: ["education", "school", "university", "degree"],
    },
    {
      id: "nav-top",
      title: "Go to Top",
      description: "Back to top of the page",
      icon: "⬆️",
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        onClose();
      },
      keywords: ["top", "home", "start", "beginning"],
    },

    // Contact commands
    {
      id: "contact-email",
      title: "Send Email",
      description: "Open email client to contact",
      icon: "📧",
      action: () => {
        window.open("mailto:tyagi.shu@northeastern.edu", "_blank");
        onClose();
      },
      keywords: ["email", "contact", "mail", "reach"],
    },
    {
      id: "contact-linkedin",
      title: "LinkedIn Profile",
      description: "Open LinkedIn profile",
      icon: "💼",
      action: () => {
        window.open("https://linkedin.com/in/iamshubhank", "_blank");
        onClose();
      },
      keywords: ["linkedin", "profile", "professional", "connect"],
    },
    {
      id: "contact-github",
      title: "GitHub Profile",
      description: "Open GitHub repositories",
      icon: "⚡",
      action: () => {
        window.open("https://github.com/Shubhankt1", "_blank");
        onClose();
      },
      keywords: ["github", "code", "repositories", "projects"],
    },

    // Theme/UI commands
    {
      id: "copy-email",
      title: "Copy Email Address",
      description: "Copy email to clipboard",
      icon: "📋",
      action: () => {
        navigator.clipboard.writeText("tyagi.shu@northeastern.edu");
        onClose();
      },
      keywords: ["copy", "email", "clipboard"],
    },
    // {
    //   id: "copy-phone",
    //   title: "Copy Phone Number",
    //   description: "Copy phone number to clipboard",
    //   icon: "📱",
    //   action: () => {
    //     navigator.clipboard.writeText("+1(857) 398-5728");
    //     onClose();
    //   },
    //   keywords: ["copy", "phone", "number", "mobile"],
    // },

    // Quick info commands
    {
      id: "info-location",
      title: "Current Location",
      description: "Boston, Massachusetts, USA",
      icon: "📍",
      action: () => {
        onClose();
      },
      keywords: ["location", "boston", "where", "live"],
    },
    {
      id: "info-status",
      title: "Availability Status",
      description: "Actively seeking full-time roles",
      icon: "🟢",
      action: () => {
        onClose();
      },
      keywords: ["status", "available", "hiring", "job", "open"],
    },
  ];

  // Filter commands based on search query
  const filteredCommands = commands.filter(
    (command) =>
      command.title.toLowerCase().includes(query.toLowerCase()) ||
      command.description.toLowerCase().includes(query.toLowerCase()) ||
      command.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query.toLowerCase())
      )
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Reset query when closed
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Command Palette */}
      <div className="fixed top-20 left-0 right-0 z-50 p-4">
        <div className="max-w-2xl mx-auto mt-20">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden animate-in slide-in-from-top duration-300">
            {/* Search Input */}
            <div className="p-4 border-b border-gray-200/50">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-lg">⌘</span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500 text-lg"
                />
                <kbd className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-mono">
                  ESC
                </kbd>
              </div>
            </div>

            {/* Command List */}
            <div className="max-h-96 overflow-y-auto custom-scrollbar">
              {filteredCommands.length > 0 ? (
                <div className="py-2">
                  {filteredCommands.map((command, index) => (
                    <button
                      key={command.id}
                      onClick={command.action}
                      className={`
                        w-full text-left px-4 py-3 flex items-center gap-4
                        transition-all duration-150
                        ${
                          index === selectedIndex
                            ? "bg-blue-50 border-r-2 border-blue-500"
                            : "hover:bg-gray-50"
                        }
                      `}
                    >
                      <span className="text-xl flex-shrink-0">
                        {command.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`
                          font-medium
                          ${
                            index === selectedIndex
                              ? "text-blue-900"
                              : "text-gray-900"
                          }
                        `}
                        >
                          {command.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {command.description}
                        </div>
                      </div>
                      {index === selectedIndex && (
                        <kbd className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-mono">
                          ↵
                        </kbd>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <span className="text-4xl mb-2 block">🔍</span>
                  No commands found for "{query}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-gray-50/50 border-t border-gray-200/50">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white rounded font-mono">
                      ↑↓
                    </kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white rounded font-mono">
                      ↵
                    </kbd>
                    Select
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white rounded font-mono">
                    ESC
                  </kbd>
                  Close
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandPalette;
