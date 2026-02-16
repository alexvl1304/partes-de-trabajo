import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // generates 'manifest.webmanifest' file on build
      registerType: 'autoUpdate',
      includeAssets: ["icon.png",  "assets/*"],
      manifest: {
        // caches the assets/icons mentioned (assets/* includes all the assets present in your src/ directory) 
        name: 'Simplifying Progressive Web App (PWA) Development with Vite: A Beginners Guide',
        short_name: 'PWA Guide',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        screenshots: [
          {
            src: '/screenshot/wide.png',
            sizes: '1282x663',
            type: 'image/png',
            form_factor: 'wide'
          },
          {
            src: '/screenshot/narrow.png',
            sizes: '615x778',
            type: 'image/png',
            form_factor: 'narrow'
          }
        ],
        icons: [
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // defining cached files formats
        navigateFallback: 'index.html',
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      }
    })
  ]
})