import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Shinah",
        short_name: "Shinah",
        description: "Shinah",
        theme_color: "#c9c3e3",
        background_color: "#c9c3e3",
        display: "standalone",
        icons: [
          {
            src: "pwa-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: [
          '**/*.{html,js,css,png,jpg,svg,ico}'
        ],
        globIgnores: [
          '/node_modules//*',
          'sw.js',
          'workbox-*.js'
        ]
      },
      devOptions: {
        enabled: true, // Enables PWA in development mode
        type: "module",
      },
    }),
  ],
});
