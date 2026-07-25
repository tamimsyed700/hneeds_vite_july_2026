import { IconWhatsapp } from './icons'
import useInteracted from '../hooks/useInteracted'

export default function ProductCard({ product }) {
  const waMessage = encodeURIComponent(`Hi, I'd like to enquire about ${product.name} (${product.size}).`)
  const interacted = useInteracted()

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5">
      <div className="flex aspect-square items-center justify-center bg-slate-50 p-6">
        {interacted && (
          <picture>
            <source
              type="image/webp"
              srcSet={[320, 480, 640].map((w) => `${product.image.replace(/\.jpg$/, `-${w}w.webp`)} ${w}w`)
                .concat(`${product.image.replace(/\.jpg$/, '.webp')} 800w`)
                .join(', ')}
              sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 640px) 40vw, 70vw"
            />
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
            />
          </picture>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            {product.size}
          </span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-slate-500">{product.tagline}</p>
        <div className="mt-2 flex items-center justify-between">
          {product.price ? (
            <span className="text-lg font-bold text-slate-900">
              ₹{product.price.toLocaleString('en-IN')}
              <span className="ml-1 text-xs font-normal text-slate-500">MRP incl. tax</span>
            </span>
          ) : (
            <span className="text-sm font-medium text-slate-500">Price on enquiry</span>
          )}
          <a
            href={`https://wa.me/917708840444?text=${waMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-emerald-700 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800"
          >
            <IconWhatsapp className="h-3.5 w-3.5" />
            Enquire
          </a>
        </div>
      </div>
    </div>
  )
}
