"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"


const locationIcon = L.divIcon({
  className: "",
  html: `<div style="position:relative;width:0;height:0;">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40"
      viewBox="0 0 32 40"
      style="position:absolute;left:-16px;bottom:0;drop-shadow:0 3px 6px rgba(0,0,0,0.3);filter:drop-shadow(0 3px 6px rgba(0,0,0,0.35))">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 10.5 16 24 16 24S32 26.5 32 16C32 7.163 24.837 0 16 0z" fill="#1d4ed8"/>
      <circle cx="16" cy="16" r="6" fill="white"/>
    </svg>
  </div>`,
  iconSize: [0, 0],
  iconAnchor: [0, 0],
})

export default function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    if (mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [-30.5, 118.0],
      zoom: 5,
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
    })

    L.control.zoom({ position: "bottomright" }).addTo(map)

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 18 }
    ).addTo(map)

    // Maddington WA location pin
    L.marker([-32.0489, 115.9939], { icon: locationIcon }).addTo(map)

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div style={{ position: "relative", width: "100%", height: "950px" }}>
      {/* Match unloaded-tile background to the map's ocean teal; boost tile greenness */}
      <style>{`
        .leaflet-container { background: #b8d4d8 !important; }
        .leaflet-tile-pane { filter: saturate(2.2) hue-rotate(25deg) brightness(1.02); }
      `}</style>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />

    </div>
  )
}
