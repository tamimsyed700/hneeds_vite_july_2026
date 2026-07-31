import { IconLeaf, IconMail, IconMapPin, IconPhone } from './icons'
import content from '../data/content.json'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-emerald-950 text-emerald-50">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700">
                <IconLeaf className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">{content.brand.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-emerald-200">{content.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-100">
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {content.contact.address}
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`tel:${content.contact.phone}`} className="hover:text-white">{content.contact.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`mailto:${content.contact.email}`} className="hover:text-white">
                  {content.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm text-emerald-100">
              <li><a href="#essentials" className="hover:text-white">Essentials</a></li>
              <li><a href="#bulk" className="hover:text-white">Bulk Packs</a></li>
              <li><a href="#accessories" className="hover:text-white">Accessories</a></li>
              <li><a href="#combo" className="hover:text-white">Combo Pack</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-900 pt-6 text-xs text-emerald-300">
          © {new Date().getFullYear()} {content.footer.copyrightName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
