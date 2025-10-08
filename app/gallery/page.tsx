"use client"
import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic"
const Footer = dynamic(() => import("@/components/footer"), { ssr: true, loading: () => null })
import { Bed, Bath, Car, Home } from "lucide-react";
import { motion } from "framer-motion";

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

// Gallery projects array
const projects = [
  // --- NEW CONSTRUCTION & CUSTOM DESIGN ---
  {
    id: 1,
    title: "Modern Family Home - Brisbane",
    category: "New Construction",
    image: "/Exterior-18.jpg",
    bedrooms: 3,
    bathrooms: 3,
    carSpaces: 2,
    size: "280m²",
    price: "Start from $299,999",
  },
  {
    id: 2,
    title: "Luxury Pool Area",
    category: "Custom Design",
    image: "/Exterior-19.jpg",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "350m²",
    price: "Start from $599,999",
  },
  {
    id: 3,
    title: "Signature Home",
    image: "/1.jpg",
    category: "Exterior",
    bedrooms: 2,
    bathrooms: 2,
    carSpaces: 2,
    size: "200m²",
    price: "Start from $299,999",
  },
  {
    id: 4,
    title: "Luxury Executive Home",
    image: "/exterior-5.jpg",
    category: "Exterior",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "200m²",
    price: "Start from $299,999",
  },
  {
    id: 5,
    title: "High-End Executive Home",
    image: "/main.png",
    category: "Exterior",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "Start from $299,999",
  },
  {
    id: 6,
    title: "Modern Townhouse",
    category: "Exterior",
    image: "/exterior-4.jpg",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    size: "180m²",
    price: "Start from $299,999",
  },

  // --- INTERIOR IMAGES ---
  {
    id: 7,
    title: "Elegant Dining Area",
    category: "Interior",
    image: "/elegant-dining-area-with-chandelier.png",
    price: "Start from $10,000",
  },
  {
    id: 8,
    title: "Designer Bathroom",
    category: "Interior",
    image: "/designer-bathroom-with-marble-finishes.png",
    price: "Start from $10,000",
  },
  {
    id: 9,
    title: "Luxury Master Bedroom",
    category: "Interior",
    image: "/luxury-master-bedroom-with-ensuite.png",
    price: "Start from $10,000",
  },
  {
    id: 10,
    title: "Modern Kitchen Design",
    category: "Interior",
    image: "/modern-kitchen-island-lights.png",
    price: "Start from $10,000",
  },
  {
    id: 11,
    title: "Modern Home Office",
    category: "Interior",
    image: "/modern-home-office-with-built-in-storage.png",
    price: "Start from $10,000",
  },
  {
    id: 12,
    title: "Walk-in Wardrobe",
    category: "Interior",
    image: "/walk-in-wardrobe-with-custom-storage.png",
    price: "Start from $10,000",
  },

  // --- EXTERIOR IMAGES ---
  {
    id: 13,
    title: "Contemporary Exterior",
    category: "Exterior",
    image: "/exterior-1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "280m²",
    price: "Start from $359,000",
  },
  {
    id: 14,
    title: "Luxury House",
    category: "Exterior",
    image: "/exterior-2.jpg",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "350m²",
    price: "Start from $599,999",
  },
  {
    id: 15,
    title: "Executive Estate",
    category: "Exterior",
    image: "/exterior-3.jpg",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 3,
    size: "300m²",
    price: "Start from $359,000",
  },
  {
    id: 16,
    title: "Luxury Pool Area",
    image: "/luxury-pool-area-with-outdoor-kitchen.png",
    category: "Exterior",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "Start from $599,999",
  },
  {
    id: 17,
    title: "Premier Executive Villa",
    category: "Exterior",
    image: "/Exterior-16.jpg",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 3,
    size: "350m²",
    price: "Start from $599,999",
  },
  {
    id: 18,
    title: "Coastal Style Home",
    category: "Exterior",
    image: "/exterior-6.jpg",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "Start from $299,999",
  },
  {
    id: 19,
    title: "Luxury House",
    category: "Exterior",
    image: "/7.jpg",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 3,
    size: "350m²",
    price: "Start from $599,999",
  },
  {
    id: 20,
    title: "Outdoor Entertainment",
    category: "Exterior",
    image: "/outdoor-entertainment-area-with-deck.png",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "300m²",
    price: "Start from $299,999",
  },
  {
    id: 21,
    title: "Modern Townhouse",
    category: "Exterior",
    image: "/Exterior-17.jpg",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "Start from $299,999",
  },
  {
    id: 22,
    title: "Upscale Executive Retreat",
    category: "Exterior",
    image: "/luxury-executive-home-with-premium-materials-and-l.png",
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    size: "350m²",
    price: "Start from $599,999",
  },
  {
    id: 23,
    title: "Coastal Style Home",
    category: "Exterior",
    image: "/coastal-style-home-with-natural-timber-and-beach-i.png",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "Start from $299,999",
  },
  {
    id: 24,
    title: "Contemporary Exterior",
    category: "Exterior",
    image: "/contemporary-home-exterior-with-landscaping.png",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "280m²",
    price: "Start from $299,999",
  },
];

export default function GalleryPage() {
  return (
    <main>
  <Navigation />

  {/* Hero Section */}
  <section className="py-16 bg-muted/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Our Portfolio
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our collection of completed projects, showcasing the quality
          and craftsmanship that defines YourBrand Homes.
        </p>
      </div>
    </div>
  </section>

  {/* Gallery Grid */}
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  </section>
  <Footer />
</main>


  );
}
