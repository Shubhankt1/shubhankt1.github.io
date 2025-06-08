import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages deployment configuration
  base: "/shubhankt1.github.io/", // Replace 'your-repo-name' with your actual GitHub repo name
  build: {
    outDir: "dist",
  },
});
