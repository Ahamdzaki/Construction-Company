import HeroSection from "@/components/hero-section"
import dynamic from "next/dynamic"

// Lazily loaded, below-the-fold components
const GalleryPreview = dynamic(() => import("@/components/gallery-preview"), { ssr: true, loading: () => null })
const AboutPreview = dynamic(() => import("@/components/about-preview"), { ssr: true, loading: () => null })
const ServicesPreview = dynamic(() => import("@/components/services-preview"), { ssr: true, loading: () => null })
const FeaturedDesigns = dynamic(() => import("@/components/featured-designs"), { ssr: true, loading: () => null })
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: true, loading: () => null })
const ContactInfo = dynamic(() => import("@/components/contact-info"), { ssr: true, loading: () => null })
const Footer = dynamic(() => import("@/components/footer"), { ssr: true, loading: () => null })
const FixedContactButton = dynamic(() => import("@/components/fixed-contact-button"), { ssr: true, loading: () => null })

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GalleryPreview />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedDesigns />
      <Testimonials />
      <ContactInfo />
      <Footer />
      <FixedContactButton />
    </>
  )
}