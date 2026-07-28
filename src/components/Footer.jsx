import { IconLeaf, IconMail, IconMapPin, IconPhone } from './icons'
import content from '../data/content.json'

const { site, footer } = content

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
              <span className="text-lg font-bold">{site.brandName}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-emerald-200">{footer.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-100">
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {site.address}
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`tel:${site.phone}`} className="hover:text-white">{site.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm text-emerald-100">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-900 pt-6 text-xs text-emerald-300">
          © {new Date().getFullYear()} {site.copyrightName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
