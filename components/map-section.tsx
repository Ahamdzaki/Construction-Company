"use client"

import dynamic from "next/dynamic"

const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false })

export default function MapSection() {
  return (
    <section className="bg-white pb-0">
      {/* Heading */}
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8 pt-16 pb-8">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-2">Where We Build</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-1">
          BYD B builds homes across Western Australia.
        </h2>
        <p className="text-base text-neutral-500">Select a location to view our communities.</p>
      </div>

      {/* Map with vertical breathing room */}
      <div className="w-full relative">
        <LeafletMap />
      </div>
    </section>
  )
}
