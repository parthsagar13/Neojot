import { defineConfig } from 'vite';
import path from "path"
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'dist',  // Ensure this matches Netlify's deploy settings
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // { find: /^@src/, replacement: '/src' },
      // Add more alias mappings as needed
    }
  }
});