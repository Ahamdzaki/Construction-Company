import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"
import StatCards from "@/components/stat-cards"

const ServicesPreview       = dynamic(() => import("@/components/services-preview"))
const GalleryPreview        = dynamic(() => import("@/components/gallery-preview"))
const HomesUnderConstruction = dynamic(() => import("@/components/homes-under-construction"))
const TestimonialFeatured   = dynamic(() => import("@/components/testimonial-featured"))
const LocationsMosaic       = dynamic(() => import("@/components/locations-mosaic"))
const ContactSection        = dynamic(() => import("@/components/contact-section"))
const MapSection            = dynamic(() => import("@/components/map-section"))
const Footer                = dynamic(() => import("@/components/footer"))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatCards />
      <ServicesPreview />
      <GalleryPreview />
      <HomesUnderConstruction />
      <TestimonialFeatured />
      <LocationsMosaic />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  )
}
