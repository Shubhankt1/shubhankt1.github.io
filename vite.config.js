import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// IMPORTANT: replace <REPO_NAME> with the EXACT repo name
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "", // required for GitHub Pages project sites
  build: {
    sourcemap: false,
    cssMinify: true,
    rollupOptions: { output: { manualChunks: undefined } },
  },
  esbuild: { drop: ["console", "debugger"] },
});
