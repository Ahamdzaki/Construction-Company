import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturedDesigns from "@/components/featured-designs"
import AboutPreview from "@/components/about-preview"
import ServicesPreview from "@/components/services-preview"
import GalleryPreview from "@/components/gallery-preview"
import Testimonials from "@/components/testimonials"
import ContactInfo from "@/components/contact-info"
import Footer from "@/components/footer"
import FixedContactButton from "@/components/fixed-contact-button"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <GalleryPreview />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedDesigns />
      <Testimonials />
      <ContactInfo />
      <Footer />
      <FixedContactButton />
    </main>
  )
}