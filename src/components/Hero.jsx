import { IconCheck, IconWhatsapp } from './icons'

const HIGHLIGHTS = ['Organic-derived formulas', 'Hospital-grade disinfection', 'Made in Chennai']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-800">
            Hospital &middot; House &middot; Hospitality &middot; Hotel
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Feathers by H-NEEDS —
            <span className="block text-emerald-700">your trusted partner in hygiene.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            A full range of organic-formula cleaning essentials, bulk value packs and hygiene
            accessories, engineered for homes, hotels and hospitality businesses across Chennai.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <IconCheck className="h-4 w-4 text-emerald-600" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#essentials"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Browse Products
            </a>
            <a
              href="https://wa.me/917708840444"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              <IconWhatsapp className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-emerald-100/70 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5">
            <img
              src="/products/8567.jpg"
              alt="Feathers home cleaning combo — toilet cleaner, dish wash, floor cleaner, fabric wash, glass cleaner and room spray"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
