"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

// Lazy load icons for better performance
const Bed = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Bed })), { ssr: false })
const Bath = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Bath })), { ssr: false })
const Car = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Car })), { ssr: false })
const Home = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Home })), { ssr: false })

// Animation variants for gallery cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeInOut" 
    } 
  },
}

interface Project {
  id: number
  title: string
  category: string
  image: string
  bedrooms?: number
  bathrooms?: number
  carSpaces?: number
  size?: string
  price: string
}

interface AnimatedGalleryGridProps {
  projects: Project[]
}

export default function AnimatedGalleryGrid({ projects }: AnimatedGalleryGridProps) {
  return (
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          variants={itemVariants}
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
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                loading="lazy"
                quality={85}
              />
            </div>
            {/* Details bar below image */}
            <div className="w-full px-3 py-2 bg-gray-100 text-gray-800 text-center rounded-b-lg min-h-[56px] flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm">{project.category}</p>
              {project.price && (
                <div>
                  <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold mt-1 w-auto">{project.price}</span>
                </div>
              )}
              <div className="flex justify-center gap-4 mt-2">
                {project.bedrooms !== undefined && (
                  <span className="flex items-center gap-1"><Bed className="w-4 h-4" />{project.bedrooms}</span>
                )}
                {project.bathrooms !== undefined && (
                  <span className="flex items-center gap-1"><Bath className="w-4 h-4" />{project.bathrooms}</span>
                )}
                {project.carSpaces !== undefined && (
                  <span className="flex items-center gap-1"><Car className="w-4 h-4" />{project.carSpaces}</span>
                )}
                {project.size && (
                  <span className="flex items-center gap-1"><Home className="w-4 h-4" />{project.size}</span>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
