import type { Metadata } from "next"
import GalleryClient from "./GalleryClient"
import Footer from "@/components/footer"
import CtaBanner from "@/components/ui/cta-banner"

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Explore our portfolio of completed homes across Western Australia — exteriors, interiors, new builds, and renovations by BYD B PTY LTD.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryClient />
      <CtaBanner />
      <Footer />
    </>
  )
}
