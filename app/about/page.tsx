import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AboutSections from "@/components/about-sections"

const CtaBanner = dynamic(() => import("@/components/ui/cta-banner"))
const Footer    = dynamic(() => import("@/components/footer"))

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BYD B PTY LTD — licensed home builders in Western Australia with 13+ years experience, Builder Licence BC106152.",
}

export default function AboutPage() {
  return (
    <>
      <AboutSections />
      <CtaBanner />
      <Footer />
    </>
  )
}
