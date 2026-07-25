const STATS = [
  { value: '20+', label: 'Formulations' },
  { value: '5L', label: 'Bulk value packs' },
  { value: '100%', label: 'Made in Chennai' },
  { value: '99.9%', label: 'Germ kill claim' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-4 lg:px-8">
        {STATS.map((s) => (
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
