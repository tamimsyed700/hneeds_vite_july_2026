// Generates responsive WebP variants for every product photo in public/products.
// Run via `npm run gen:images` after adding/replacing a photo there.
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const PRODUCTS_DIR = path.resolve(import.meta.dirname, '../public/products')
const WIDTHS = [320, 480, 640]

const files = await readdir(PRODUCTS_DIR)
const sources = files.filter((f) => /\.jpe?g$/i.test(f) && !/-\d+w\.jpe?g$/i.test(f))

for (const file of sources) {
  const base = file.replace(/\.jpe?g$/i, '')
  const input = path.join(PRODUCTS_DIR, file)
  const meta = await sharp(input).metadata()

  for (const width of WIDTHS) {
    if (meta.width && width >= meta.width) continue // never upscale
    const output = path.join(PRODUCTS_DIR, `${base}-${width}w.webp`)
    await sharp(input).resize(width).webp({ quality: 80 }).toFile(output)
    console.log(`${base}-${width}w.webp`)
  }
}