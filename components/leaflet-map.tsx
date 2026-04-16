"use client"

import { useEffect, useRef } from "react"

const tooltipHtml = `<div style="
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  background:#ffffff;
  border-radius:10px;
  box-shadow:0 4px 16px rgba(0,0,0,0.18);
  padding:10px 16px;
  text-align:center;
  min-width:200px;
">
  <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#00A5E0;margin-bottom:3px;">Our Location</div>
  <div style="font-size:13px;font-weight:600;color:#1e293b;line-height:1.4;">22 Olga Road</div>
  <div style="font-size:12px;font-weight:400;color:#64748b;">Maddington WA 6109</div>
</div>`

const iconHtml = `<div style="position:relative;width:0;height:0;">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28"
    viewBox="0 0 32 40"
    style="position:absolute;left:-11px;bottom:0;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.35));cursor:pointer;">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 10.5 16 24 16 24S32 26.5 32 16C32 7.163 24.837 0 16 0z" fill="#00A5E0"/>
    <circle cx="16" cy="16" r="6" fill="white"/>
  </svg>
</div>`

export default function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const init = async () => {
      const L = (await import("leaflet")).default
      await import("leaflet/dist/leaflet.css")

      if (!containerRef.current || mapRef.current) return

      const locationIcon = L.divIcon({
        className: "",
        html: iconHtml,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      })

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

      const marker = L.marker([-32.0489, 115.9939], { icon: locationIcon }).addTo(map)

      marker.bindTooltip(tooltipHtml, {
        permanent: true,
        direction: "top",
        offset: [0, -30],
        opacity: 1,
        className: "custom-tooltip",
      })

      marker.on("click", () => {
        window.open(
          "https://www.google.com/maps/search/?api=1&query=22+Olga+Road+Maddington+WA+6109",
          "_blank"
        )
      })

      mapRef.current = map
    }

    init()

    return () => {
      if (mapRef.current) {
        (mapRef.current as { remove: () => void }).remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div style={{ position: "relative", width: "100%", height: "720px" }}>
      <style>{`
        .leaflet-container { background: #b8d4d8 !important; }
        .leaflet-tile-pane { filter: saturate(2.2) hue-rotate(25deg) brightness(1.02); }
        .custom-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .custom-tooltip::before { display: none !important; }
      `}</style>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
