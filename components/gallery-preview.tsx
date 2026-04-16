"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { BedDouble, Bath, Car, Maximize } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { projects } from "@/lib/data/projects"
import { sections } from "@/lib/data/content"

const categoryOrder: Record<string, number> = { Exterior: 0, Interior: 1, "New Construction": 2, "Custom Design": 3, "Double Storey": 4 }

const featured = projects
  .filter((p) => p.featured)
  .sort((a, b) => (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99))
  .slice(0, 6)

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">Featured <span className="text-[#00A5E0]">Projects</span></h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto">
            {sections.gallery.description}
          </p>
        </div>
      </div>

      <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Link
                href="/gallery"
                className="group block relative overflow-hidden aspect-[4/3] bg-neutral-200"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] font-semibold mb-1" style={{ color: "#00A5E0" }}>
                    {project.category}
                  </p>
                  <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.1em] text-white leading-tight mb-1.5">
                    {project.title}
                  </h3>
                  {project.price && (
                    <p className="text-sm text-amber-300 font-semibold mb-2">{project.price}</p>
                  )}
                  {(project.bedrooms || project.bathrooms || project.carSpaces || project.size) && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {project.bedrooms && (
                        <span className="flex items-center gap-1 text-xs text-white font-medium">
                          <BedDouble className="w-3.5 h-3.5 text-white/70" />{project.bedrooms} Bed
                        </span>
                      )}
                      {project.bathrooms && (
                        <span className="flex items-center gap-1 text-xs text-white font-medium">
                          <Bath className="w-3.5 h-3.5 text-white/70" />{project.bathrooms} Bath
                        </span>
                      )}
                      {project.carSpaces && (
                        <span className="flex items-center gap-1 text-xs text-white font-medium">
                          <Car className="w-3.5 h-3.5 text-white/70" />{project.carSpaces} Car
                        </span>
                      )}
                      {project.size && (
                        <span className="flex items-center gap-1 text-xs text-white font-medium">
                          <Maximize className="w-3.5 h-3.5 text-white/70" />{project.size}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white/80 text-xs tracking-widest uppercase">View →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-10 mb-6">
          <Link
            href={sections.gallery.cta.href}
            className="inline-block px-7 py-3 border border-[#00A5E0] text-[#00A5E0] text-sm font-medium tracking-wide hover:bg-[#00A5E0] hover:text-white transition-colors duration-200"
          >
            {sections.gallery.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
