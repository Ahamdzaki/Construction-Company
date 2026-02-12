"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Bed, Bath, Car, Home } from "lucide-react"

type Project = {
  id: number
  title: string
  category: string
  image: string
  price?: string
  bedrooms?: number
  bathrooms?: number
  carSpaces?: number
  size?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.14, delayChildren: 0.08 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 24 } },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export default function GalleryGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-80px" }}
    >
      {projects.map((project) => (
        <motion.article
          key={project.id}
          variants={cardVariants}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Link
            href={{
              pathname: `/projects/${project.id}`,
              query: {
                title: project.title,
                category: project.category,
                price: project.price,
                image: project.image,
                bedrooms: project.bedrooms,
                bathrooms: project.bathrooms,
                carSpaces: project.carSpaces,
                size: project.size,
              },
            }}
            className="block"
          >
            <div className="relative aspect-[4/3] overflow-hidden cursor-pointer">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <motion.div
              className="w-full px-3 py-2 bg-gray-100 text-gray-800 text-center rounded-b-lg min-h-[56px] flex flex-col justify-center"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { when: "beforeChildren", staggerChildren: 0.1 },
                },
              } as Variants}
            >
              <motion.h3 className="text-lg font-semibold mb-1" variants={textVariants}>{project.title}</motion.h3>
              <motion.p className="text-sm" variants={textVariants}>{project.category}</motion.p>
              {project.price && (
                <motion.div variants={textVariants}>
                  <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold mt-1 w-auto">
                    {project.price}
                  </span>
                </motion.div>
              )}
              <div className="flex justify-center gap-4 mt-2">
                {project.bedrooms !== undefined && (
                  <motion.span className="flex items-center gap-1" variants={textVariants}><Bed className="w-4 h-4" />{project.bedrooms}</motion.span>
                )}
                {project.bathrooms !== undefined && (
                  <motion.span className="flex items-center gap-1" variants={textVariants}><Bath className="w-4 h-4" />{project.bathrooms}</motion.span>
                )}
                {project.carSpaces !== undefined && (
                  <motion.span className="flex items-center gap-1" variants={textVariants}><Car className="w-4 h-4" />{project.carSpaces}</motion.span>
                )}
                {project.size && (
                  <motion.span className="flex items-center gap-1" variants={textVariants}><Home className="w-4 h-4" />{project.size}</motion.span>
                )}
              </div>
            </motion.div>
          </Link>
        </motion.article>
      ))}
    </motion.div>
  )
}

