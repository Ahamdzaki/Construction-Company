"use client"

import Image from "next/image"

const instaImages = [
  { src: "/exterior-5.jpg", alt: "Project 1" },
  { src: "/designer-bathroom-with-marble-finishes.png", alt: "Project 2" },
  { src: "/Exterior-17.jpg", alt: "Project 3" },
  { src: "/modern-home-with-large-outdoor-entertaining-area.png", alt: "Project 4" },
  { src: "/exterior-6.jpg", alt: "Project 5" },
  { src: "/luxury-pool-area-with-outdoor-kitchen.png", alt: "Project 6" },
]

export default function LocationsMosaic() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6">
      {instaImages.map((img, i) => (
        <div key={i} className="relative aspect-square overflow-hidden group">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 33vw, 16vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}
