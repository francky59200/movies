/// <reference types="vitest" />
import * as path from 'node:path'

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// import Vue from '@vitejs/plugin-vue'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    svgr(),
    // Vue(),
    // svelte(),
  ],
  test: {
    include: ['test/**/*.test.{j,t}s'],
    environment: 'jsdom',
  },
})
