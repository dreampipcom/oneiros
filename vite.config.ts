/// <reference types='vitest' />
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig((env) => {
  console.log({ env });
  return env.MODE == 'es'
    ? {
        // es-module
        build: {
          outDir: './dist/esm',
          lib: {
            entry: './src/index.ts',
            name: 'oneiros-esm',
            fileName: (format) => `index.es.js`,
            formats: ['es'],
          },
          rollupOptions: {
            external: [
              ...Object.keys(peerDependencies),
              'react/jsx-runtime',
              'moment',
            ],
          },
          sourcemap: true,
          emptyOutDir: false,
        },
        plugins: [
          dts({
            insertTypesEntry: true,
            tsconfigPath: './ts-config.json',
          }),
          react({ fastRefresh: false }),
          env.mode !== 'test' &&
            eslint({
              exclude: ['/virtual:/**', 'node_modules/**', '/sb-preview/**'],
            }),
        ],
        test: {
          globals: true,
          environment: 'jsdom',
          setupFiles: './setupTests.ts',
        },
      }
    : {
        build: {
          // cjs
          outDir: './dist/cjs',
          lib: {
            entry: './src/index.ts',
            name: 'oneiros-cjs',
            fileName: (format) => `index.cjs`,
            formats: ['cjs'],
          },
          rollupOptions: {
            external: [
              ...Object.keys(peerDependencies),
              'react/jsx-runtime',
              'moment',
            ],
          },
          sourcemap: true,
          emptyOutDir: false,
        },
        plugins: [
          dts({
            insertTypesEntry: true,
            tsconfigPath: './tsconfig-cjs.json',
          }),
          react({ fastRefresh: false }),
          env.mode !== 'test' &&
            eslint({
              exclude: ['/virtual:/**', 'node_modules/**', '/sb-preview/**'],
            }),
        ],
        test: {
          globals: true,
          environment: 'jsdom',
          setupFiles: './setupTests.ts',
        },
      };
});
