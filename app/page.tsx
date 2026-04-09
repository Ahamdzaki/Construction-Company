import HeroSection from "@/components/hero-section"
import StatCards from "@/components/stat-cards"
import ServicesPreview from "@/components/services-preview"
import GalleryPreview from "@/components/gallery-preview"
import LocationsMosaic from "@/components/locations-mosaic"
import TestimonialFeatured from "@/components/testimonial-featured"
import MapSection from "@/components/map-section"
import CtaBanner from "@/components/ui/cta-banner"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatCards />
      <ServicesPreview />
      <GalleryPreview />
      <LocationsMosaic />
      <TestimonialFeatured />
      <MapSection />
      <CtaBanner />
      <Footer />
    </>
  )
}
