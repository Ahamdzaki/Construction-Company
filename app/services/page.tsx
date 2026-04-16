import type { Metadata } from "next"
import dynamic from "next/dynamic"
import ServicesSections from "@/components/services-sections"
import { services, processSteps } from "@/lib/data/content"

const CtaBanner = dynamic(() => import("@/components/ui/cta-banner"))
const Footer    = dynamic(() => import("@/components/footer"))

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
