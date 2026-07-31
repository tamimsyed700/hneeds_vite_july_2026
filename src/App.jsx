import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import { products } from './data/products'
import content from './data/content.json'

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
          eyebrow={content.sections.essentials.eyebrow}
          title={content.sections.essentials.title}
          description={content.sections.essentials.description}
          products={byCategory('essentials')}
        />

        <ProductSection
          id="bulk"
          eyebrow={content.sections.bulk.eyebrow}
          title={content.sections.bulk.title}
          description={content.sections.bulk.description}
          products={byCategory('bulk')}
          tint="tinted"
        />

        <ProductSection
          id="accessories"
          eyebrow={content.sections.accessories.eyebrow}
          title={content.sections.accessories.title}
          description={content.sections.accessories.description}
          products={byCategory('accessories')}
        />

        <ProductSection
          id="combo"
          eyebrow={content.sections.combo.eyebrow}
          title={content.sections.combo.title}
          description={content.sections.combo.description}
          products={byCategory('combo')}
          tint="tinted"
        />
      </main>
      <Footer />
    </div>
  )
}
