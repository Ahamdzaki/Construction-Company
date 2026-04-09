"use client"

import Image from "next/image"
import Link from "next/link"

const mosaicImages = [
  { src: "/exterior-1.jpg", alt: "Luxury home exterior" },
  { src: "/modern-kitchen-island-lights.png", alt: "Modern kitchen" },
  { src: "/elegant-dining-area-with-chandelier.png", alt: "Elegant dining" },
  { src: "/Exterior-16.jpg", alt: "Contemporary home" },
]

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
    <>
      {/* Mosaic + Locations */}
      <section className="bg-neutral-900">
        <div className="grid lg:grid-cols-[3fr_2fr]">
          {/* Photo mosaic */}
          <div className="grid grid-cols-2 grid-rows-2" style={{ minHeight: "480px" }}>
            {mosaicImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Locations text */}
          <div className="flex flex-col justify-center px-10 py-14 bg-neutral-900">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#00A5E0] mb-6">
              BYD B Locations
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-6 leading-snug">
              Where We Build:
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Perth, Maddington, Fremantle, Joondalup, Rockingham, Mandurah,
              Armadale, Midland, Canning Vale, Wanneroo, Stirling, Thornlie,
              Bunbury, Geraldton, and across all of Western Australia.
            </p>
            <Link
              href="/contact"
              className="mt-8 self-start px-6 py-3 border border-[#00A5E0] text-[#00A5E0] text-sm font-medium tracking-wide hover:bg-[#00A5E0] hover:text-white transition-colors duration-200"
            >
              Build with us
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram strip */}
      <section className="bg-neutral-900 pb-0">
        <div className="text-center py-10 border-t border-neutral-800">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-white">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/bydbau/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A5E0] hover:underline"
            >
              @bydbau
            </a>
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6">
          {instaImages.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/bydbau/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, 16vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
