import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MarqueeBanner } from "@/components/marquee-banner"
import { ProductGrid } from "@/components/product-grid"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MarqueeBanner />
      <ProductGrid />
      <AboutSection />
      <Testimonials />
      <BlogSection />
      <CtaBanner />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
