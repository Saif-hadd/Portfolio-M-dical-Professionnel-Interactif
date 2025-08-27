import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // exclude lucide-react pour éviter les problèmes de build
  },
  server: {
    host: '127.0.0.1', // écoute sur IPv4 localhost
    port: 5173,        // tu peux changer le port si nécessaire
  },
  build: {
    rollupOptions: {
      output: {
        // assure que les assets du public sont correctement copiés
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
