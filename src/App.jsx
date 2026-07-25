import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import { products } from './data/products'

const byCategory = (id) => products.filter((p) => p.category === id)

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />

        <ProductSection
          id="essentials"
          eyebrow="Retail Range"
          title="Home & Hospitality Essentials"
          description="Ready-to-use bottles sized for daily use across households, hotel rooms and hospitality back-of-house."
          products={byCategory('essentials')}
        />

        <ProductSection
          id="bulk"
          eyebrow="Value Packs"
          title="Bulk 5L Value Packs"
          description="Concentrated 5-litre containers built for housekeeping teams, restaurants and commercial kitchens."
          products={byCategory('bulk')}
          tint="tinted"
        />

        <ProductSection
          id="accessories"
          eyebrow="Accessories"
          title="Tissue & Accessories"
          description="Finishing touches for guest-facing spaces — durable dispensers with refill packs included."
          products={byCategory('accessories')}
        />

        <ProductSection
          id="combo"
          eyebrow="Best Value"
          title="Combo Pack"
          description="Everything you need to keep a home spotless, bundled into one all-in-one hygiene kit."
          products={byCategory('combo')}
          tint="tinted"
        />
      </main>
      <Footer />
    </div>
  )
}
