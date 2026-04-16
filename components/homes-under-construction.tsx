"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// h = numeric height used by the balancing algorithm (px)
// hClass = Tailwind class applied to the image container
// Order is tuned so the shortest-column-first algorithm produces ~28px variance at 4 cols
const images = [
  { src: "/Image-1.jpg",  title: "Brick & Roof Framing",     description: "Early stage brickwork with roof truss installation underway.",                 h: 350, hClass: "h-[350px]" },
  { src: "/Image-6.jpg",  title: "Upper Level Masonry",      description: "Bricklayers completing the upper level with full scaffolding in place.",        h: 280, hClass: "h-[280px]" },
  { src: "/Image-13.jpg", title: "Completed Night View",     description: "Finished double storey home illuminated at dusk — ready for handover.",         h: 300, hClass: "h-[300px]" },
  { src: "/Image-10.jpg", title: "Double Storey Scaffold",   description: "Full scaffold wrap on a large double storey family home.",                      h: 178, hClass: "h-[178px]" },
  { src: "/Image-2.jpg",  title: "Concrete Slab Foundation", description: "Fresh concrete slab poured and curing before framing begins.",                  h: 192, hClass: "h-[192px]" },
  { src: "/Image-9.jpg",  title: "Lock-Up Stage",            description: "Windows and doors going in as the home approaches lock-up.",                    h: 262, hClass: "h-[262px]" },
  { src: "/Image-3.jpg",  title: "Double Storey Brickwork",  description: "Scaffolding up as the second storey walls take shape.",                         h: 242, hClass: "h-[242px]" },
  { src: "/Image-4.jpg",  title: "Wall Frame Progress",      description: "Ground floor walls rising from the slab on a new estate block.",                h: 178, hClass: "h-[178px]" },
  { src: "/Image-8.jpg",  title: "Steel Reinforcement",      description: "Reinforcing steel mesh laid and inspected before the slab pour.",               h: 178, hClass: "h-[178px]" },
]

const GAP = 8 // px — must match gap-2 (8px)

// Shortest-column-first algorithm: always assign next image to the shortest column.
// This is how Pinterest balances its grid.
function distributeColumns(numCols: number) {
  const colHeights = Array<number>(numCols).fill(0)
  const cols: (typeof images)[] = Array.from({ length: numCols }, () => [])

  for (const img of images) {
    const minH = Math.min(...colHeights)
    const ci = colHeights.indexOf(minH)
    cols[ci].push(img)
    colHeights[ci] += img.h + GAP
  }

  return cols
}

// Pre-compute once at module level (not reactive — images never change at runtime)
const cols2 = distributeColumns(2)
const cols3 = distributeColumns(3)
const cols4 = distributeColumns(4)

// ── Pin card ─────────────────────────────────────────────────────────────────
function Pin({
  item,
  globalIndex,
  onClick,
  colIndex,
}: {
  item: (typeof images)[number]
  globalIndex: number
  onClick: () => void
  colIndex: number
}) {
  return (
    <motion.div
      className="cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: colIndex * 0.07 }}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden rounded-xl group shadow-sm hover:shadow-xl transition-shadow duration-300 w-full ${item.hClass}`}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
          <p className="text-white/80 text-xs mt-1 leading-snug">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ── Column renderer ───────────────────────────────────────────────────────────
function MasonryGrid({ cols }: { cols: (typeof images)[] }) {
  return (
    <div className="flex gap-2 items-start">
      {cols.map((col, ci) => (
        <div key={ci} className="flex-1 flex flex-col gap-2">
          {col.map((item) => {
            const gi = images.indexOf(item)
            return (
              <Pin
                key={item.src}
                item={item}
                globalIndex={gi}
                colIndex={ci}
                onClick={() => {}} // wired up in parent via context-free approach below
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = images[index]

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose()
      if (e.key === "ArrowLeft")  onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button className="absolute top-4 right-4 text-white/80 hover:text-white z-10" onClick={onClose} aria-label="Close">
        <X size={28} />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 bg-black/30 rounded-full p-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </button>

      <motion.div
        key={index}
        className="relative max-w-5xl w-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.title}
          width={1200}
          height={0}
          className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
          sizes="100vw"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl px-5 py-4">
          <p className="text-white font-semibold text-base">{item.title}</p>
          <p className="text-white/75 text-sm">{item.description}</p>
        </div>
      </motion.div>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10 bg-black/30 rounded-full p-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </button>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {index + 1} / {images.length}
      </p>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function HomesUnderConstruction() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openAt = useCallback((i: number) => setLightboxIndex(i), [])
  const close  = useCallback(() => setLightboxIndex(null), [])
  const prev   = useCallback(() => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length)), [])
  const next   = useCallback(() => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length)), [])

  // Render a column layout where each pin's onClick is wired to the lightbox
  function Grid({ cols }: { cols: (typeof images)[] }) {
    return (
      <div className="flex gap-2 items-start">
        {cols.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-2">
            {col.map((item) => {
              const gi = images.indexOf(item)
              return (
                <motion.div
                  key={item.src}
                  className="cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: ci * 0.07 }}
                  onClick={() => openAt(gi)}
                >
                  <div className={`relative overflow-hidden rounded-xl group shadow-sm hover:shadow-xl transition-shadow duration-300 w-full ${item.hClass}`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
                      <p className="text-white/80 text-xs mt-1 leading-snug">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>
    )
  }

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
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
          Homes Under <span className="text-[#00A5E0]">Construction</span>
        </h2>
        <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto">
          Discover our most popular home designs, each crafted with attention to detail and modern living in mind.
        </p>
      </motion.div>

      {/* Masonry grid — shortest-column-first balancing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden">         <Grid cols={cols2} /></div>
        <div className="hidden md:block lg:hidden"><Grid cols={cols3} /></div>
        <div className="hidden lg:block">   <Grid cols={cols4} /></div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>

    </section>
  )
}
