import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 هذا السطر السحري الذي سيصلح مسارات الـ CSS والـ JS في Netlify
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});