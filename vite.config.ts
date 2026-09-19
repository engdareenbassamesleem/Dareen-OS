import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Dareen-OS/',
  build: {
    target: 'es2020',
  },
});
