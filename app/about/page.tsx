import type { Metadata } from "next"
import AboutSections from "@/components/about-sections"
import CtaBanner from "@/components/ui/cta-banner"
import Footer from "@/components/footer"

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
