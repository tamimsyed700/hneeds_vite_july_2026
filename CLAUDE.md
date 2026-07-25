# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

There is no test suite, linter, or type checker configured in this project.

## Architecture

This is a single-page marketing/catalog site for "Feathers by H-NEEDS", a cleaning-products brand. It is a static showcase — there is no cart, checkout, routing, or backend. Every "buy" action is a `wa.me` WhatsApp deep link pre-filled with an enquiry message for that product.

- **`src/data/products.js`** is the single source of truth for the catalog: a flat `products` array (each with `id`, `name`, `size`, optional `price`, `category`, `tagline`, `image`) plus a `categories` array. `App.jsx` filters this one array by category (`essentials`, `bulk`, `accessories`, `combo`) to build each `ProductSection`. To add/edit/remove a product or category, this is the only file that needs to change.
- **`src/App.jsx`** composes the whole page top-to-bottom: `Header`, `Hero`, `TrustBar`, four `ProductSection`s (one per category, driven by `products.js`), `Footer`. Section order and copy (eyebrow/title/description) live inline in `App.jsx`, not in the data file.
- **`ProductSection`** is a generic category renderer (title/description/grid of `ProductCard`s); `ProductCard` renders one product tile and builds its own WhatsApp enquiry link from `product.name`/`product.size`.
- Contact details (phone `+917708840444`, WhatsApp number, address, email) are hardcoded independently in `Header.jsx`, `Hero.jsx`, `Footer.jsx`, and `ProductCard.jsx` — there is no shared constants file, so update all occurrences together when they change.
- **`src/components/icons.jsx`** holds every inline SVG icon as a small functional component (`IconPhone`, `IconMail`, `IconLeaf`, `IconCheck`, `IconWhatsapp`, etc.) — no icon library dependency.
- Styling is Tailwind utility classes only (no CSS modules/styled-components); the `feathers` color palette (green/leaf/blue) is defined in `tailwind.config.js`. `src/index.css` just wires up the Tailwind layers plus global font/scroll-behavior.

## Product images

Product photos are duplicated in two places: `product/` (source/original photography) and `public/products/` (what Vite actually serves — referenced via `/products/<file>.jpg` in `products.js` and elsewhere). When adding a new product image, add it to `public/products/`, not just `product/`.
