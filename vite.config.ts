// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Build optimizations
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'react-icons'],
        },
      },
    },

    // Optimize chunk size
    chunkSizeWarningLimit: 1000,

    // Enable minification
    minify: 'esbuild',

    // Generate source maps for production debugging
    sourcemap: false,

    // Optimize CSS
    cssCodeSplit: true,
  },

  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },

  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: true,
  },

  // Development server configuration
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },
});
