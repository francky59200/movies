/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
// import { react } from '@vitejs/plugin-react'
// import Vue from '@vitejs/plugin-vue'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // react(),
    // Vue(),
    // svelte(),
  ],
  test: {
    include: ['test/**/*.test.{j,t}s'],
    environment: 'jsdom',
  },
})
