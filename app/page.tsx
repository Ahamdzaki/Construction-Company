import HeroSection from "@/components/hero-section"
import StatCards from "@/components/stat-cards"
import ServicesPreview from "@/components/services-preview"
import GalleryPreview from "@/components/gallery-preview"
import TestimonialFeatured from "@/components/testimonial-featured"
import LocationsMosaic from "@/components/locations-mosaic"
import ContactSection from "@/components/contact-section"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatCards />
      <ServicesPreview />
      <GalleryPreview />
      <TestimonialFeatured />
      <LocationsMosaic />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  )
}
