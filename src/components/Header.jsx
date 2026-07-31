import { useEffect, useState } from 'react'
import { IconLeaf, IconPhone } from './icons'
import content from '../data/content.json'

const NAV = [
  { href: '#essentials', label: 'Essentials' },
  { href: '#bulk', label: 'Bulk Packs' },
  { href: '#accessories', label: 'Accessories' },
  { href: '#combo', label: 'Combo' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-white/60 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white">
            <IconLeaf className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-emerald-900">{content.brand.name}</span>
            <span className="block text-[11px] font-medium uppercase tracking-widest text-emerald-700">
              {content.brand.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${content.contact.phone}`}
            className="flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <IconPhone className="h-4 w-4" />
            {content.contact.phoneDisplay}
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50"
            >
              {item.label}
            </a>
          ))}
          <a href={`tel:${content.contact.phone}`} className="rounded-lg px-3 py-2 text-sm font-semibold text-emerald-800">
            Call {content.contact.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  )
}
