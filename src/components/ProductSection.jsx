import ProductCard from './ProductCard'

export default function ProductSection({ id, eyebrow, title, description, products, tint = 'white' }) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 ${tint === 'tinted' ? 'bg-emerald-50/50' : 'bg-white'}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">{eyebrow}</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
          <p className="mt-3 text-slate-600">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
