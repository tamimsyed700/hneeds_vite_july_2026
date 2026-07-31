import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import content from './src/data/content.json'

const escapeHtml = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function siteMetaPlugin() {
  return {
    name: 'site-meta-from-content-json',
    transformIndexHtml(html) {
      return html
        .replace(/<title>.*<\/title>/, `<title>${escapeHtml(content.site.title)}</title>`)
        .replace(
          /<meta name="description" content=".*" \/>/,
          `<meta name="description" content="${escapeHtml(content.site.description)}" />`
        )
    },
  }
}

export default defineConfig({
  plugins: [react(), siteMetaPlugin()],
})
