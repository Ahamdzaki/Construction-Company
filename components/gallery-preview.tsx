"use client";
import { useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Car, Home } from "lucide-react";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
const galleryImages = [
  
  // --- EXTERIOR IMAGES ---
  {
    id: 1,
    title: "Contemporary Exterior",
    image: "/exterior-1.jpg",
    category: "Exterior",
    // price: "Start from $359,000",
     price: "Start from $399,999",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "280m²"
  },
  {
    id: 2,
    title: "Luxury Pool Area",
    image: "/exterior-2.jpg",
    category: "Exterior",
    // price: "Start from $599,999",
     price: "Start from $399,999",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "350m²"
  },
  {
    id: 3,
    title: "Coastal Style Home",
    category: "Exterior",
    image: "/exterior-6.jpg",
    // price: "Start from $299,999",
     price: "Start from $399,999",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²"
  },
  
  {
    id: 4,
    title: "Modern Townhouse",
    image: "/exterior-4.jpg",
    category: "Exterior",
    // price: "Start from $299,999",
    price: "Start from $399,999",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    size: "180m²"
  },
  {
    id: 5,
    title: "Luxury Executive Home",
    image: "/exterior-5.jpg",
    category: "Exterior",
    // price: "Start from $299,999",
    price: "Start from $399,999",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "200m²"
  },
  {
    id: 6,
    title: "High-End Executive Home",
    image: "/main.png",
    category: "Exterior",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    // price: "Start from $299,999",
    price: "Start from $399,999",
  },
  
  {
    id: 7,
    title: "Modern Home Office",
    image: "/modern-home-office-with-built-in-storage.png",
    category: "Interior",
    price: "Start from $10,000",
    
  },
  {
    id: 208,
    title: "Elegant Dining Area",
    image: "/elegant-dining-area-with-chandelier.png",
    category: "Interior",
    price: "Start from $10,000",
    
  },
  {
    id: 209,
    title: "Luxury Master Bedroom",
    image: "/luxury-master-bedroom-with-ensuite.png",
    category: "Interior",
    price: "Start from $10,000",
    
  },
  {
    id: 210,
    title: "Modern Kitchen Design",
    image: "/modern-kitchen-island-lights.png",
    category: "Interior",
    price: "Start from $10,000",
    
  },
  {
    id: 211,
    title: "Walk-in Wardrobe",
    image: "/walk-in-wardrobe-with-custom-storage.png",
    category: "Interior",
    price: "Start from $10,000",
    
  },
  {
    id: 212,
    title: "Designer Bathroom",
    image: "/designer-bathroom-with-marble-finishes.png",
    category: "Interior",
    price: "Start from $10,000",
    
  }
  
  
]

const infoContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 }
  }
}

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
}

export default function GalleryPreview() {
  // Modal logic removed; images are now unclickable

  return (
    <section className="py-16 bg-muted/30" id="gallery-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing 13 years of quality craftsmanship and attention to
            detail in every home we build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link
                href={{
                  pathname: `/projects/${item.id}`,
                  query: {
                    title: item.title,
                    category: item.category,
                    price: item.price,
                    image: item.image,
                    bedrooms: item.bedrooms,
                    bathrooms: item.bathrooms,
                    carSpaces: item.carSpaces,
                    size: item.size,
                  },
                }}
                className="block"
              >
                <div className="relative overflow-hidden cursor-pointer">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Details bar below image */}
                <motion.div
                  className="w-full px-3 py-2 bg-gray-100 text-gray-800 text-center rounded-b-lg min-h-[56px] flex flex-col justify-center"
                  variants={infoContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.h3 className="text-lg font-semibold mb-1" variants={rise}>{item.title}</motion.h3>
                  <motion.p className="text-sm" variants={rise}>{item.category}</motion.p>
                    {item.price && (
                      <motion.div variants={rise}>
                        <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold mt-1 w-auto">{item.price}</span>
                      </motion.div>
                    )}
                  <div className="flex justify-center gap-4 mt-2">
                    {item.bedrooms !== undefined && (
                      <motion.span className="flex items-center gap-1" variants={rise}><Bed className="w-4 h-4" />{item.bedrooms}</motion.span>
                    )}
                    {item.bathrooms !== undefined && (
                      <motion.span className="flex items-center gap-1" variants={rise}><Bath className="w-4 h-4" />{item.bathrooms}</motion.span>
                    )}
                    {item.carSpaces !== undefined && (
                      <motion.span className="flex items-center gap-1" variants={rise}><Car className="w-4 h-4" />{item.carSpaces}</motion.span>
                    )}
                    {item.size && (
                      <motion.span className="flex items-center gap-1" variants={rise}><Home className="w-4 h-4" />{item.size}</motion.span>
                    )}
                  </div>
                </motion.div>
              </Link>
            </Card>
          ))}
        </div>
          
          <div className="text-center mt-20">
          <Link href="/gallery">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Our Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}