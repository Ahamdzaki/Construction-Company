"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const locations = [
  { name: "Perth", lat: -31.9505, lng: 115.8605 },
  { name: "Joondalup", lat: -31.7452, lng: 115.7661 },
  { name: "Fremantle", lat: -32.0569, lng: 115.7439 },
  { name: "Rockingham", lat: -32.2774, lng: 115.7296 },
  { name: "Mandurah", lat: -32.5270, lng: 115.7215 },
  { name: "Armadale", lat: -32.1500, lng: 116.0131 },
  { name: "Midland", lat: -31.8901, lng: 116.0080 },
  { name: "Maddington", lat: -32.0489, lng: 115.9939 },
  { name: "Bunbury", lat: -33.3271, lng: 115.6414 },
  { name: "Geraldton", lat: -28.7774, lng: 114.6152 },
  { name: "Kalgoorlie", lat: -30.7333, lng: 121.4667 },
  { name: "Albany", lat: -35.0269, lng: 117.8837 },
]

function pillIcon(name: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      background:white;
      border:1.5px solid #00A5E0;
      color:#00A5E0;
      font-size:11px;
      font-weight:700;
      font-family:sans-serif;
      padding:4px 10px;
      border-radius:999px;
      white-space:nowrap;
      box-shadow:0 1px 4px rgba(0,0,0,0.15);
      letter-spacing:0.03em;
    ">${name}, WA</div>`,
    iconAnchor: [0, 10],
  })
}

export default function LeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    if (mapRef.current) return // already initialized

    const map = L.map(containerRef.current, {
      center: [-28.0, 122.0],
      zoom: 5,
      scrollWheelZoom: false,
      zoomControl: true,
    })

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    locations.forEach((loc) => {
      L.marker([loc.lat, loc.lng], { icon: pillIcon(loc.name) }).addTo(map)
    })

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} style={{ width: "100%", height: "520px" }} />
}
