"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { BedDouble, Bath, Car } from "lucide-react"
import { projects } from "@/lib/data/projects"

const categories = ["All", "Exterior", "Interior", "New Construction", "Custom Design"] as const
type Filter = (typeof categories)[number]

const categoryOrder: Record<string, number> = { Exterior: 0, Interior: 1, "New Construction": 2, "Custom Design": 3 }

export default function GalleryClient() {
  const [active, setActive] = useState<Filter>("All")
  const [visible, setVisible] = useState(9)

  const filtered = active === "All"
    ? [...projects].sort((a, b) => (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99))
    : projects.filter((p) => p.category === active)
  const shown = filtered.slice(0, visible)

  return (
    <div className="min-h-screen bg-white">

      {/* Page header */}
      <div className="pt-28 pb-8 px-6 lg:px-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 max-w-7xl mx-auto">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#00A5E0] mb-2 font-medium">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">Project Gallery</h1>
          <p className="text-sm text-neutral-500 mt-2">
            Completed homes &amp; interiors across Western Australia.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setVisible(9) }}
              className={`px-4 py-1.5 text-xs font-medium uppercase tracking-widest border transition-colors ${
                active === cat
                  ? "bg-[#00A5E0] text-white border-[#00A5E0]"
                  : "bg-transparent border-neutral-300 text-neutral-500 hover:text-[#00A5E0] hover:border-[#00A5E0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-neutral-200"
        >
          {shown.map((project, i) => {
            const col = i % 3
            const verticalBorder =
              col === 0 ? "lg:border-r lg:border-neutral-200"
              : col === 1 ? "lg:border-x lg:border-neutral-200"
              : "lg:border-l lg:border-neutral-200"

            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`group relative block aspect-[4/3] overflow-hidden bg-neutral-100 ${verticalBorder}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 6 ? "eager" : "lazy"}
                />

                {/* Permanent bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Hover darkening */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/60 mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.1em] text-white leading-tight mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mb-2">{project.price}</p>
                  {(project.bedrooms || project.bathrooms || project.carSpaces || project.size) && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {project.bedrooms && (
                        <span className="flex items-center gap-1 text-[10px] text-white/60">
                          <BedDouble className="w-3 h-3" />{project.bedrooms} Bed
                        </span>
                      )}
                      {project.bathrooms && (
                        <span className="flex items-center gap-1 text-[10px] text-white/60">
                          <Bath className="w-3 h-3" />{project.bathrooms} Bath
                        </span>
                      )}
                      {project.carSpaces && (
                        <span className="flex items-center gap-1 text-[10px] text-white/60">
                          <Car className="w-3 h-3" />{project.carSpaces} Car
                        </span>
                      )}
                      {project.size && (
                        <span className="text-[10px] text-white/60">{project.size}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/80 text-xs tracking-widest uppercase">View →</span>
                </div>
              </Link>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Load more */}
      {visible < filtered.length && (
        <div className="text-center py-12">
          <button
            onClick={() => setVisible((v) => v + 9)}
            className="px-8 py-3 border border-neutral-300 text-neutral-600 text-xs uppercase tracking-widest hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
          >
            Load More
          </button>
        </div>
      )}

      <div className="h-8" />
    </div>
  )
}
