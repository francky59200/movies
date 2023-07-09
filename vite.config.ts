/// <reference types="vitest" />
import * as path from 'node:path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// import Vue from '@vitejs/plugin-vue'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  define: {
    'windows.process': { cwd: () => '' },
    'process.env': {
      VITE_URL: 'https://virtserver.swaggerhub.com/amelique-atecna/Atecna-workout/1.0.0',
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    // Vue(),
    // svelte(),
  ],
  test: {
    include: ['test/**/*.test.{j,t}s'],
    environment: 'jsdom',
  },
})
