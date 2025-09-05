import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(() => ({
  root: resolve(__dirname, "client"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "client/src"),
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
}));
