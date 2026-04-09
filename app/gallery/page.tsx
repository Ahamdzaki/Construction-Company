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
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-400 mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project gallery</h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto">
            Explore our portfolio of completed homes and interiors across Western Australia.
          </p>
        </div>
      </section>

      <GalleryClient />
      <CtaBanner />
      <Footer />
    </>
  )
}
