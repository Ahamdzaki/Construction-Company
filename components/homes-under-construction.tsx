"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Image-13 is used only as the full-width banner below — not repeated in the grid
const grid = [
  { src: "/Image-1.jpg",   alt: "Site 1" },  // 0 — wide hero
  { src: "/Image-2.jpg",   alt: "Site 2" },  // 1
  { src: "/Image-3.jpg",   alt: "Site 3" },  // 2
  { src: "/Image-4.jpg",   alt: "Site 4" },  // 3
  { src: "/Image-6.jpg",   alt: "Site 5" },  // 4
  { src: "/Image-8.jpg",   alt: "Site 6" },  // 5
  { src: "/Image-9.jpg",   alt: "Site 7" },  // 6
  { src: "/Image-10.jpg",  alt: "Site 8" },  // 7 — wide
  { src: "/Image-12.jpeg", alt: "Site 9" },  // 8 — wide
]

function Tile({
  src, alt, className, delay, sizes, style,
}: {
  src: string; alt: string; className?: string
  delay: number; sizes: string; style?: React.CSSProperties
}) {
  return (
    <motion.div
      className={`relative overflow-hidden group ${className}`}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      <Image
        src={src} alt={alt} fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={sizes}
        loading="lazy"
      />
    </motion.div>
  )
}

export default function HomesUnderConstruction() {
  return (
    <section className="py-16 md:py-24 bg-white">

      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
          Homes Under <span className="text-[#00A5E0]">Construction</span>
        </h2>
        <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto">
          Discover our most popular home designs, each crafted with attention to detail and modern living in mind.
        </p>
      </motion.div>

      {/*
        4-column grid — zero white gaps.

        Row 1:  [0 col-span-2 aspect-[4/3] md:aspect-[8/3]] [1 aspect-[4/3]] [2 aspect-[4/3]]
                 On desktop: wide + 2 normal tiles, all same row height (8/3 == 2× 4/3).
                 On mobile:  full-width (col-span-2), then 1+1.

        Row 2:  [3] [4] [5] [6]  — 4 equal tiles

        Row 3:  [7 col-span-2 aspect-[4/3] md:aspect-[8/3]] [8 col-span-2 aspect-[4/3] md:aspect-[8/3]]
                 Two wide tiles that together fill all 4 columns.
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">

        {/* Row 1 */}
        <Tile src={grid[0].src} alt={grid[0].alt}
          className="col-span-2"
          style={{ aspectRatio: "4/3" }}
          delay={0} sizes="(max-width: 768px) 100vw, 50vw" />
        <Tile src={grid[1].src} alt={grid[1].alt}
          className="col-span-1 aspect-[4/3] md:aspect-auto"
          delay={0.07} sizes="(max-width: 768px) 50vw, 25vw" />
        <Tile src={grid[2].src} alt={grid[2].alt}
          className="col-span-1 aspect-[4/3] md:aspect-auto"
          delay={0.12} sizes="(max-width: 768px) 50vw, 25vw" />

        {/* Row 2 — 4 equal tiles */}
        <Tile src={grid[3].src} alt={grid[3].alt} className="col-span-1" style={{ aspectRatio: "4/3" }} delay={0}    sizes="(max-width: 768px) 50vw, 25vw" />
        <Tile src={grid[4].src} alt={grid[4].alt} className="col-span-1" style={{ aspectRatio: "4/3" }} delay={0.07} sizes="(max-width: 768px) 50vw, 25vw" />
        <Tile src={grid[5].src} alt={grid[5].alt} className="col-span-1" style={{ aspectRatio: "4/3" }} delay={0.12} sizes="(max-width: 768px) 50vw, 25vw" />
        <Tile src={grid[6].src} alt={grid[6].alt} className="col-span-1" style={{ aspectRatio: "4/3" }} delay={0.17} sizes="(max-width: 768px) 50vw, 25vw" />

        {/* Row 3 — two wide tiles */}
        <Tile src={grid[7].src} alt={grid[7].alt}
          className="col-span-2"
          style={{ aspectRatio: "4/3" }}
          delay={0} sizes="(max-width: 768px) 100vw, 50vw" />
        <Tile src={grid[8].src} alt={grid[8].alt}
          className="col-span-2"
          style={{ aspectRatio: "4/3" }}
          delay={0.1} sizes="(max-width: 768px) 100vw, 50vw" />

      </div>

      {/* Full-width banner — Image-13, not repeated above */}
      <motion.div
        className="relative w-full overflow-hidden group mt-0.5"
        style={{ aspectRatio: "21/6" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/Image-13.jpg"
          alt="BYD B — homes under construction"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>

    </section>
  )
}
