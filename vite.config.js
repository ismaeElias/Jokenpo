import react from '@vitejs/plugin-react';

import eslintPlugin from 'vite-plugin-eslint';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
  },
  plugins: [react(), eslintPlugin()],
});
