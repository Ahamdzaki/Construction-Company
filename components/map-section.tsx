"use client"

import dynamic from "next/dynamic"

const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false })

export default function MapSection() {
  return (
    <section className="bg-neutral-50 pb-0 hidden md:block" style={{ isolation: "isolate" }}>
      <div className="w-full relative">
        <LeafletMap />
      </div>
    </section>
  )
}
