import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
// This file is used to check environment variables at build time.
import(join(dirname(fileURLToPath(import.meta.url)), "src/config/env.ts"));

import "dotenv/config";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueJsx(), // vueDevTools(),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG!,
      project: process.env.VITE_SENTRY_PROJECT!,
      telemetry: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@types": fileURLToPath(new URL("./types", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
    origin: process.env.VITE_SERVER_ORIGIN!,
    allowedHosts: (process.env.VITE_SERVER_ALLOWED_HOSTS || "")
      .split(",")
      .map((h) => h.trim())
      .filter(Boolean),
  },
});
