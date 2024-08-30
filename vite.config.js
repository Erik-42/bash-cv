import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Configuration Vite
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/__variables.scss";` // Import global si nécessaire
  //     }
  //   }
  // },
  resolve: {
    // Résolution des alias pour simplifier les importations
    alias: {
      '@': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'css': path.resolve(__dirname, './src/css'),
      'layout': path.resolve(__dirname, './src/layout'),
      'pages': path.resolve(__dirname, './src/pages'),
      'useful': path.resolve(__dirname, './src/useful')
    }
  },
  server: {
    // Configuration du serveur de développement
    port: 3000,
    open: true,
    // Autres configurations serveur si nécessaire
  },
  build: {
    // Configuration de la construction du projet
    outDir: './dist',
    // Autres configurations de construction si nécessaire
  },
  // Autres configurations globales si nécessaires
});

