# Feathers by H-NEEDS

Firose Khan Brother's Home cleaning company website — single-page marketing/catalog site for **Feathers by H-NEEDS**, a cleaning-products brand. It's a static showcase — no cart, checkout, routing, or backend. Every "buy" action is a `wa.me` WhatsApp deep link pre-filled with an enquiry message for that product.

## Getting started

```bash
npm install
npm run dev       # start Vite dev server (http://localhost:5173)
```

Other commands:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally (http://localhost:4173)
```

There is no test suite, linter, or type checker configured in this project.

## Project structure

- **`src/data/products.js`** — single source of truth for the catalog: a flat `products` array (`id`, `name`, `size`, optional `price`, `category`, `tagline`, `image`) plus a `categories` array. `App.jsx` filters this array by category (`essentials`, `bulk`, `accessories`, `combo`) to build each product section. To add/edit/remove a product or category, this is the only file that needs to change.
- **`src/App.jsx`** — composes the whole page top-to-bottom: `Header`, `Hero`, `TrustBar`, four `ProductSection`s (one per category), `Footer`. Section order and copy live inline here, not in the data file.
- **`src/components/`** — `ProductSection` (generic category renderer) and `ProductCard` (one product tile; builds its own WhatsApp enquiry link from `product.name`/`product.size`).
- **`src/components/icons.jsx`** — every inline SVG icon as a small functional component, no icon library dependency.
- **`public/products/`** — product images actually served by Vite (referenced as `/products/<file>.jpg`). Source photography also lives in `product/`, but new images must be added to `public/products/` to show up on the site.
- Styling is Tailwind utility classes only; the `feathers` color palette (green/leaf/blue) is defined in `tailwind.config.js`.

## Notes

- Contact details (phone, WhatsApp number, address, email) are hardcoded independently in `Header.jsx`, `Hero.jsx`, `Footer.jsx`, and `ProductCard.jsx` — update all occurrences together when they change.
- See `CLAUDE.md` for more detailed architecture notes.