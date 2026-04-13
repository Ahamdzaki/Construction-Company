"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { BedDouble, Bath, Car } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { projects } from "@/lib/data/projects"
import { sections } from "@/lib/data/content"

const categoryOrder: Record<string, number> = { Exterior: 0, Interior: 1, "New Construction": 2, "Custom Design": 3 }

const featured = projects
  .filter((p) => p.featured)
  .sort((a, b) => (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99))
  .slice(0, 6)

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">{sections.gallery.heading}</h2>
          <p className="text-base text-neutral-500 max-w-xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] uppercase tracking-wider text-[#00A5E0] font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm md:text-base mt-0.5 mb-1">
                    {project.title}
                  </h3>
                  {project.price && (
                    <p className="text-xs text-amber-400 font-medium mb-2">{project.price}</p>
                  )}
                  {(project.bedrooms || project.bathrooms || project.carSpaces) && (
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
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 text-neutral-900 text-sm font-medium px-4 py-2">
                    View project →
                  </span>
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
