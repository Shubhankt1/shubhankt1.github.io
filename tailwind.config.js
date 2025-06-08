/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
