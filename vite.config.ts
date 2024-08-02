import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'tmycafe.github.io',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    // ...
    assetsInlineLimit: 0,
    // ...
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
