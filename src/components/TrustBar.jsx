import content from '../data/content.json'

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-4 lg:px-8">
        {content.trustBar.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-extrabold text-emerald-700 sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
