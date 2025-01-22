/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// Se na criação do projeto foi criado com swc, altere a biblioteca para @vitejs/plugin-react-swc 

export default defineConfig({
  plugins: [react()],
  base:"/TrybeWallet-ts",
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8'
    }
  },
})