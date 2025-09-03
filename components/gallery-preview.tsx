"use client";
import { useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  
  // --- EXTERIOR IMAGES ---
    {
    id: 195,
    title: "Contemporary Exterior",
    image: "/exterior-1.jpg",
    category: "Exterior",
    price: "$22,000"
  },
  {
    id: 196,
    title: "Luxury Pool Area",
    image: "/exterior-2.jpg",
    category: "Exterior",
    price: "$30,000"
  },
  {
    id: 197,
    title: "Outdoor Entertainment",
    image: "/exterior-3.jpg",
    category: "Exterior",
    price: "$16,000"
  },
  {
    id: 198,
    title: "Modern Townhouse",
    image: "/exterior-4.jpg",
    category: "Exterior",
    price: "$25,000"
  },
  {
    id: 199,
    title: "Luxury Executive Home",
    image: "/exterior-5.jpg",
    category: "Exterior",
    price: "$40,000"
  },
  {
    id: 200,
    title: "Coastal Style Home",
    category: "Exterior",
    image: "/exterior-6.jpg",
    price: "$28,000"
  },
  {
    id: 201,
    title: "Luxury Pool Area",
    image: "/luxury-pool-area-with-outdoor-kitchen.png",
    category: "Exterior",
    price: "$30,000"
  },
  {
    id: 202,
    title: "Outdoor Entertainment",
    image: "/outdoor-entertainment-area-with-deck.png",
    category: "Exterior",
    price: "$16,000"
  },
  {
    id: 203,
    title: "Modern Townhouse",
    image: "/modern-townhouse-with-rooftop-garden.png",
    category: "Exterior",
    price: "$25,000"
  },
  {
    id: 204,
    title: "Luxury Executive Home",
    image: "/luxury-executive-home-with-premium-materials-and-l.png",
    category: "Exterior",
    price: "$40,000"
  },
  {
    id: 205,
    title: "Coastal Style Home",
    image: "/coastal-style-home-with-natural-timber-and-beach-i.png",
    category: "Exterior",
    price: "$28,000"
  },
  {
    id: 206,
    title: "Contemporary Exterior",
    image: "/contemporary-home-exterior-with-landscaping.png",
    category: "Exterior",
    price: "$22,000"
  },
  
  // --- INTERIOR IMAGES ---

  {
    id: 207,
    title: "Modern Home Office",
    image: "/modern-home-office-with-built-in-storage.png",
    category: "Interior",
    price: "$8,000"
  },
  
  {
    id: 208,
    title: "Elegant Dining Area",
    image: "/elegant-dining-area-with-chandelier.png",
    category: "Interior",
    price: "$12,000"
  },
  {
    id: 209,
    title: "Luxury Master Bedroom",
    image: "/luxury-master-bedroom-with-ensuite.png",
    category: "Interior",
    price: "$15,000"
  },
  {
    id: 210,
    title: "Modern Kitchen Design",
    image: "/modern-kitchen-island-lights.png",
    category: "Interior",
    price: "$18,000"
  },
  
  {
    id: 211,
    title: "Walk-in Wardrobe",
    image: "/walk-in-wardrobe-with-custom-storage.png",
    category: "Interior",
    price: "$7,500"
  },
  {
    id: 212,
    title: "Designer Bathroom",
    image: "/designer-bathroom-with-marble-finishes.png",
    category: "Interior",
    price: "$28,000"
  },
  
  
]


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
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm">{item.category}</p>
                      {item.price && (
                        <p className="text-sm font-semibold mt-1">{item.price}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
