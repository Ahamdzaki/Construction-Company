"use client"

import Image from "next/image"
import { mosaicImages } from "@/lib/data/content"

export default function LocationsMosaic() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6">
      {mosaicImages.map((img, i) => (
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
