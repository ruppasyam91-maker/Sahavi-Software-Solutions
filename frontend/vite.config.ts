import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const page = (name: string) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: page('./index.html'),
        about: page('./about.html'),
        services: page('./services.html'),
        technologies: page('./technologies.html'),
        contact: page('./contact.html'),
      },
    },
  },
})