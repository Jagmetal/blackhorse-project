import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/blackhorse-project/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Ensure this path is correct
    },
  },
});
