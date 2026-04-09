import type { Metadata } from "next"
import ServicesSections from "@/components/services-sections"
import CtaBanner from "@/components/ui/cta-banner"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive building services in Western Australia — new home construction, renovations, extensions, and custom design. Licensed builder BC106152.",
}

const services = [
  {
    iconName: "Home",
    title: "New Home Construction",
    description:
      "Complete home building services from foundation to finish, backed by 13 years of experience and full licensing. We specialise in single and double storey homes across Western Australia.",
    features: ["Custom floor plans", "Premium materials", "Energy-efficient designs", "Fixed-price contracts"],
  },
  {
    iconName: "Wrench",
    title: "Home Renovations",
    description:
      "Transform your existing home with our comprehensive renovation services, from kitchen makeovers to full home extensions. We respect your home as if it were our own.",
    features: [
      "Kitchen & bathroom renovations",
      "Home extensions",
      "Structural modifications",
      "Heritage restorations",
    ],
  },
  {
    iconName: "Palette",
    title: "Custom Designs",
    description:
      "Work with our experienced team to create a truly unique home that reflects your lifestyle and preferences. From architectural design through to material selection, we guide every step.",
    features: [
      "Architectural design",
      "Interior design consultation",
      "Planning permit assistance",
      "Material selection guidance",
    ],
  },
  {
    iconName: "Building2",
    title: "Commercial Projects",
    description:
      "Professional construction services for commercial properties, offices, and retail spaces. We deliver high-quality builds that meet commercial standards and business requirements.",
    features: [
      "Office fit-outs & refurbishments",
      "Retail & hospitality spaces",
      "Warehouse & industrial builds",
      "Commercial compliance & approvals",
    ],
  },
]

const steps = [
  { step: "01", title: "Consultation", description: "Initial meeting to discuss your vision, budget, and timeline." },
  { step: "02", title: "Design", description: "Detailed plans and specifications tailored to your needs." },
  { step: "03", title: "Construction", description: "Professional building with regular progress updates." },
  { step: "04", title: "Handover", description: "Final inspection, walkthrough, and keys to your new home." },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-neutral-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-400 mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our services</h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            With 13+ years of experience, we offer comprehensive building services to bring your vision to life.
          </p>
        </div>
      </section>

      <ServicesSections services={services} steps={steps} />
      <CtaBanner />
      <Footer />
    </>
  )
}
