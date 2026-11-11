import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const page = (name: string) => fileURLToPath(new URL(name, import.meta.url))

export default defineConfig(({ mode }) => {
  const verificationToken = loadEnv(mode, process.cwd(), 'VITE_').VITE_GOOGLE_SITE_VERIFICATION?.trim()

  return {
    plugins: verificationToken ? [{
      name: 'google-site-verification',
      transformIndexHtml(html) {
        const escapedToken = verificationToken.replace(/[&<>"']/g, (character) => {
          switch (character) {
            case '&': return '&amp;'
            case '<': return '&lt;'
            case '>': return '&gt;'
            case '"': return '&quot;'
            case "'": return '&#39;'
            default: return character
          }
        })
        return html.replace('</head>', `  <meta name="google-site-verification" content="${escapedToken}" />\n  </head>`)
      },
    }] : [],
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
          contact: page('./contact.html'),
          privacy: page('./privacy.html'),
        },
      },
    },
  }
})