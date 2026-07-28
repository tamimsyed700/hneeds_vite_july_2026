import { useState } from 'react'
import { IconCheck, IconChevronDown, IconLeaf, IconWhatsapp } from './icons'
import useInteracted from '../hooks/useInteracted'
import content from '../data/content.json'

const { site, hero } = content

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
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 animate-fade-in-up text-4xl font-extrabold tracking-tight text-slate-900 [animation-delay:100ms] sm:text-5xl">
            {hero.headlinePrefix}<span className="whitespace-nowrap">{hero.headlineEmphasis}</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>
          <p className="mt-5 max-w-xl animate-fade-in-up text-lg text-slate-600 [animation-delay:200ms]">
            {hero.subhead}
          </p>

          <ul className="mt-6 flex animate-fade-in-up flex-wrap gap-x-6 gap-y-2 [animation-delay:300ms]">
            {hero.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <IconCheck className="h-4 w-4 text-emerald-600" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 max-w-xl animate-fade-in-up rounded-2xl border border-emerald-100 bg-white/70 p-4 shadow-sm backdrop-blur-sm [animation-delay:400ms]">
            <p className="text-base italic leading-relaxed text-slate-600">{hero.brandStatement}</p>
          </div>

          <div className="mt-8 flex animate-fade-in-up flex-col gap-3 [animation-delay:500ms] sm:flex-row sm:flex-wrap">
            <a
              href={hero.ctaPrimaryHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 sm:w-auto"
            >
              {hero.ctaPrimaryLabel}
              <IconChevronDown className="h-4 w-4 animate-bounce" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 sm:w-auto"
            >
              <IconWhatsapp className="h-4 w-4" />
              {hero.ctaSecondaryLabel}
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
                  srcSet={[320, 480, 640]
                    .map((w) => `${hero.image.base}-${w}w.webp ${w}w`)
                    .concat(`${hero.image.base}.webp 800w`)
                    .join(', ')}
                  sizes="(min-width: 1024px) 576px, calc(100vw - 40px)"
                />
                <img
                  src={`${hero.image.base}.jpg`}
                  alt={hero.image.alt}
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
