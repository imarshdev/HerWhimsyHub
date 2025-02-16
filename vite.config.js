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
        runtimeCaching: [
          {
            urlPattern: /\/assets\/.*\.svg$/, // Match all SVGs in the /assets folder
            handler: "CacheFirst", // First try to get from cache
            options: {
              cacheName: "svg-assets-cache",
              expiration: {
                maxEntries: 50, // Limit the cache to 50 files
                maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
              },
            },
          },
          {
            urlPattern: /\/fonts\/.*\.ttf$/, // Match all TTFs in the /assets folder
            handler: "CacheFirst", // First try to get from cache
            options: {
              cacheName: "ttf-assets-cache",
              expiration: {
                maxEntries: 50, // Limit the cache to 50 files
                maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
              },
            },
          },
          {
            urlPattern: /\.(js|css|html)$/, // General caching for other assets
            handler: "NetworkFirst",
            options: {
              cacheName: "general-assets-cache",
            },
          },
        ],
      },
      devOptions: {
        enabled: true, // Enables PWA in development mode
        type: "module",
      },
    }),
  ],
});
