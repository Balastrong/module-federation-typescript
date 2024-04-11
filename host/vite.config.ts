import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    federation({
      name: "app",
      remotes: {
        app01: "http://localhost:5001/assets/remoteEntry.js",
        app02: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@tanstack/react-router"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
