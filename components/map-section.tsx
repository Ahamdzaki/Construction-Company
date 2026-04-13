"use client"

import dynamic from "next/dynamic"

const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false })

export default function MapSection() {
  return (
    <section className="bg-white pb-0">
      {/* Map with vertical breathing room */}
      <div className="w-full relative">
        <LeafletMap />
      </div>
    </section>
  )
}
