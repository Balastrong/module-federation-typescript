import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    federation({
      name: "app02",
      filename: "remoteEntry.js",
      exposes: {
        "./App02": "./src/App",
        "./Bar": "./src/routes/app02/bar",
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
