import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Using the original tagger but will be referenced as Dream Team Services tagger in comments
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Dream Team Services component tagging
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
