import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/explorer-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // Włącza Service Workera w trybie deweloperskim
      },
      manifest: {
        name: 'Explorer App',
        short_name: 'Explorer',
        start_url: "/explorer-app/",
        scope: "/explorer-app/",
        description: 'Explore and save places offline',
        theme_color: '#007bff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          { src: '/explorer-app/explorer-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/explorer-app/explorer-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
    }),
  ],
});
