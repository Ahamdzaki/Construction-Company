"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/data/projects"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const categories = ["All", "Exterior", "Interior", "New Construction", "Custom Design"] as const
type Filter = (typeof categories)[number]

export default function GalleryClient() {
  const [active, setActive] = useState<Filter>("All")
  const [visible, setVisible] = useState(6)

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)
  const shown = filtered.slice(0, visible)

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setVisible(6) }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary-700 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={active}
        >
          <AnimatePresence mode="popLayout">
            {shown.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                layout
                exit={{ opacity: 0, scale: 0.95 }}
                className="group bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-neutral-900 text-xs font-medium px-3 py-1.5 rounded-full">
                        View project →
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs uppercase tracking-wider text-amber-500 font-medium">{project.category}</span>
                    <h3 className="text-sm font-semibold text-neutral-900 mt-1 mb-1">{project.title}</h3>
                    <p className="text-xs text-primary-600 font-medium">{project.price}</p>
                    {(project.bedrooms || project.bathrooms || project.size) && (
                      <div className="flex gap-3 mt-2 text-xs text-neutral-500">
                        {project.bedrooms && <span>{project.bedrooms} bed</span>}
                        {project.bathrooms && <span>{project.bathrooms} bath</span>}
                        {project.carSpaces && <span>{project.carSpaces} car</span>}
                        {project.size && <span>{project.size}</span>}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
