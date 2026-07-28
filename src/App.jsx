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

        {content.productSections.map((section) => (
          <ProductSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            products={byCategory(section.id)}
            tint={section.tint}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}
