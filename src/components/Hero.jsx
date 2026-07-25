import { useState } from 'react'
import { IconCheck, IconChevronDown, IconLeaf, IconWhatsapp } from './icons'
import useInteracted from '../hooks/useInteracted'

const HIGHLIGHTS = [
  'Organic-derived formulas',
  'Hospital-grade disinfection',
  'Made in Chennai',
  'Doorstep delivery available',
  'GST-compliant billing on all orders',
]

export default function Hero() {
  const interacted = useInteracted()
  // On desktop the combo photo sits beside the text, above the fold, so it should load immediately.
  const [isDesktop] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches)
  const showImage = isDesktop || interacted

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="absolute -left-24 top-10 -z-10 hidden h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex min-h-[100svh] flex-col justify-center lg:min-h-0 lg:block">
          <span className="inline-flex animate-fade-in-up items-center gap-1.5 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-800 shadow-sm">
            <IconLeaf className="h-3.5 w-3.5 text-emerald-600" />
            Hospital &middot; House &middot; Hospitality &middot; Hotel
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-extrabold tracking-tight text-slate-900 [animation-delay:100ms] sm:text-5xl">
            Feathers by <span className="whitespace-nowrap">H-NEEDS —</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
              your trusted partner in hygiene.
            </span>
          </h1>
          <p className="mt-5 max-w-xl animate-fade-in-up text-lg text-slate-600 [animation-delay:200ms]">
            A full range of organic-formula cleaning essentials, bulk value packs and hygiene
            accessories, engineered for homes, hotels and hospitality businesses across Chennai.
          </p>

          <ul className="mt-6 flex animate-fade-in-up flex-wrap gap-x-6 gap-y-2 [animation-delay:300ms]">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <IconCheck className="h-4 w-4 text-emerald-600" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 max-w-xl animate-fade-in-up rounded-2xl border border-emerald-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm [animation-delay:400ms]">
            <p className="text-base italic leading-relaxed text-slate-600">
              Feathers by H-NEEDS is built on one simple promise — clean shouldn't be a compromise.
              Every bottle blends organic-derived power with hospital-grade reliability, made right
              here in Chennai. That's the standard we hold ourselves to, every time.
            </p>
          </div>

          <div className="mt-8 flex animate-fade-in-up flex-col gap-3 [animation-delay:500ms] sm:flex-row sm:flex-wrap">
            <a
              href="#essentials"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 sm:w-auto"
            >
              Browse Products
              <IconChevronDown className="h-4 w-4 animate-bounce" />
            </a>
            <a
              href="https://wa.me/917708840444"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 sm:w-auto"
            >
              <IconWhatsapp className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-emerald-100/70 blur-2xl" />
          <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5">
            {showImage && (
              <picture>
                <source
                  type="image/webp"
                  srcSet="/products/8567-320w.webp 320w, /products/8567-480w.webp 480w, /products/8567-640w.webp 640w, /products/8567.webp 800w"
                  sizes="(min-width: 1024px) 576px, calc(100vw - 40px)"
                />
                <img
                  src="/products/8567.jpg"
                  alt="Feathers home cleaning combo — toilet cleaner, dish wash, floor cleaner, fabric wash, glass cleaner and room spray"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </picture>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
