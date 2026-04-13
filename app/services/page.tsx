import type { Metadata } from "next"
import ServicesSections from "@/components/services-sections"
import CtaBanner from "@/components/ui/cta-banner"
import Footer from "@/components/footer"
import { services, processSteps } from "@/lib/data/content"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive building services in Western Australia — new home construction, renovations, extensions, and custom design. Licensed builder BC106152.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesSections services={services} steps={processSteps} />
      <CtaBanner />
      <Footer />
    </>
  )
}
