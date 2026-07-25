import { IconLeaf, IconMail, IconMapPin, IconPhone } from './icons'

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
              <span className="text-lg font-bold">H-NEEDS</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-emerald-200">
              Feathers is H-NEEDS Hospitality's in-house range of organic-formula cleaning
              essentials, trusted across homes, hotels and hospitality businesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-100">
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                Kasturi Garden, 8th Cross Street, Palavakkam, ECR, Chennai&nbsp;600041
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href="tel:+917708840444" className="hover:text-white">77088 40444</a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href="mailto:hneedshospitality@gmail.com" className="hover:text-white">
                  hneedshospitality@gmail.com
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
          © {new Date().getFullYear()} H Needs Hospitality. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
