import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite automatically exposes environment variables prefixed with VITE_ to client code
// No need to manually define them
export default defineConfig({
  // Base URL untuk GitHub Pages - ganti 'repo-name' dengan nama repository Anda
  base: '/kamus-mee/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
