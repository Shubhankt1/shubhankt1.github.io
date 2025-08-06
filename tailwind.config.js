/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // Custom breakpoints for specific device issues
      xs: "480px", // big mobile devices
      "tablet-sm": "768px", // Small tablets (768x1024, iPad portrait)
      "tablet-md": "834px", // Medium tablets (iPad Air, etc.)
      "tablet-lg": "1080px", // Large tablets (iPad landscape)
      "2k": "1440px", // wide screens (1440x900, 1600x1200)
      "2k+": "1536px",
      fhd: "1920px", // Full HD screens (1920x1080, 2560x1440)
      qhd: "2560px", // Quad HD screens (2560x1440, 3840x2160)
      "3k": "3200px",
      "4k": "3840px",
    },
    extend: {
      maxWidth: {
        hd: "1280px", // HD screens
        "2k": "1440px", // wide screens
        fhd: "1920px", // Full HD screens
        qhd: "2560px",
        "3k": "3200px",
      },
      // Custom fonts similar to your original design
      fontFamily: {
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      // Custom animations for typing effect and floating elements
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        fadeInUpDelay: "fadeInUp 1s ease-out 0.3s both",
        blink: "blink 1s infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay-2": "float 6s ease-in-out infinite 2s",
        "float-delay-4": "float 6s ease-in-out infinite 4s",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(50px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(120deg)" },
          "66%": { transform: "translateY(10px) rotate(240deg)" },
        },
      },
      // Custom backdrop blur for glassmorphism effect
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
