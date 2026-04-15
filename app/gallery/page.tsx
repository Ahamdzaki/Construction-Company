import type { Metadata } from "next"
import dynamic from "next/dynamic"
import GalleryClient from "./GalleryClient"

const CtaBanner = dynamic(() => import("@/components/ui/cta-banner"))
const Footer    = dynamic(() => import("@/components/footer"))

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
