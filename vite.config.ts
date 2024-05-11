/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'vite-react-ts-button',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), 'react/jsx-runtime'],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts(), react({ fastRefresh: false })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
