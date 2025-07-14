import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: true, // Listen on 0.0.0.0 for cloud deployment
    open: true,
  },
});
