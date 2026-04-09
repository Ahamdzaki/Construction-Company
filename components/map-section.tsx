"use client"

import dynamic from "next/dynamic"

const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false })

const regions = [
  {
    region: "PERTH NORTH",
    suburbs: ["Joondalup", "Wanneroo", "Stirling", "Mirrabooka"],
  },
  {
    region: "PERTH SOUTH",
    suburbs: ["Rockingham", "Mandurah", "Armadale", "Gosnells"],
  },
  {
    region: "PERTH EAST",
    suburbs: ["Maddington", "Midland", "Canning Vale", "Thornlie"],
  },
  {
    region: "PERTH INNER",
    suburbs: ["Perth CBD", "Fremantle", "Subiaco", "Victoria Park"],
  },
  {
    region: "PERTH WEST",
    suburbs: ["Cottesloe", "Claremont", "Nedlands", "Mosman Park"],
  },
]

export default function MapSection() {
  return (
    <section className="bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-2">Where We Build</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-1">
          BYD B builds homes across Western Australia.
        </h2>
        <p className="text-base text-neutral-500">Select a location to view our communities.</p>
      </div>

      {/* Full-width map */}
      <div className="w-full relative">
        <LeafletMap />
      </div>

      {/* Suburb grid below map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {regions.map((r) => (
            <div key={r.region}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">{r.region}</h4>
              <ul className="space-y-1.5">
                {r.suburbs.map((s) => (
                  <li key={s} className="text-sm text-neutral-500 hover:text-[#00A5E0] cursor-default transition-colors">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
