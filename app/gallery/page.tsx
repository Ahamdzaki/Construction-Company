import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Car, Home } from "lucide-react";

// Gallery projects array
const projects = [
  // --- NEW CONSTRUCTION & CUSTOM DESIGN ---
  {
    id: 1,
    title: "Modern Family Home - Brisbane",
    category: "New Construction",
    image: "/modern-family-home-brisbane-with-contemporary-arch.png",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "280m²",
    price: "$450,000",
  },
  {
    id: 2,
    title: "Luxury Master Bedroom - Gold Coast",
    category: "Custom Design",
    image: "/luxury-master-bedroom-with-ensuite.png",
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    size: "350m²",
    price: "$1,200,000",
  },
  {
    id: 3,
    title: "Heritage Renovation - Melbourne",
    category: "Renovation",
    image: "/heritage-home-renovation-melbourne-with-modern-ext.png",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "300m²",
    price: "$850,000",
  },
  {
    id: 4,
    title: "Coastal Retreat - Byron Bay",
    category: "New Construction",
    image: "/coastal-retreat-byron-bay-with-timber-and-glass-de.png",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "320m²",
    price: "$1,000,000",
  },
  {
    id: 5,
    title: "Urban Townhouse - Sydney",
    category: "Custom Design",
    image: "/urban-townhouse-sydney-with-modern-facade.png",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "$950,000",
  },
  {
    id: 6,
    title: "Modern Kitchen Design - Perth",
    category: "New Construction",
    image: "/modern-kitchen-island-lights.png",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 1,
    size: "180m²",
    price: "$600,000",
  },

  // --- INTERIOR IMAGES ---
  {
    id: 7,
    title: "Elegant Dining Area",
    category: "Interior",
    image: "/elegant-dining-area-with-chandelier.png",
    price: "$12,000",
  },
  {
    id: 8,
    title: "Designer Bathroom",
    category: "Interior",
    image: "/designer-bathroom-with-marble-finishes.png",
    price: "$9,500",
  },
  {
    id: 9,
    title: "Luxury Master Bedroom",
    category: "Interior",
    image: "/luxury-master-bedroom-with-ensuite.png",
    price: "$15,000",
  },
  {
    id: 10,
    title: "Modern Kitchen Design",
    category: "Interior",
    image: "/modern-kitchen-island-lights.png",
    price: "$18,000",
  },
  {
    id: 11,
    title: "Modern Home Office",
    category: "Interior",
    image: "/modern-home-office-with-built-in-storage.png",
    price: "$8,000",
  },
  {
    id: 12,
    title: "Walk-in Wardrobe",
    category: "Interior",
    image: "/walk-in-wardrobe-with-custom-storage.png",
    price: "$7,500",
  },

  // --- EXTERIOR IMAGES ---
  {
    id: 195,
    title: "Contemporary Exterior",
    category: "Exterior",
    image: "/exterior-1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "280m²",
    price: "$22,000",
  },
  {
    id: 196,
    title: "Luxury Pool Area",
    category: "Exterior",
    image: "/exterior-2.jpg",
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    size: "350m²",
    price: "$30,000",
  },
  {
    id: 197,
    title: "Outdoor Entertainment",
    category: "Exterior",
    image: "/exterior-3.jpg",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "300m²",
    price: "$16,000",
  },
  {
    id: 198,
    title: "Modern Townhouse",
    category: "Exterior",
    image: "/exterior-4.jpg",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "$25,000",
  },
  {
    id: 199,
    title: "Luxury Executive Home",
    category: "Exterior",
    image: "/exterior-5.jpg",
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    size: "350m²",
    price: "$40,000",
  },
  {
    id: 200,
    title: "Coastal Style Home",
    category: "Exterior",
    image: "/exterior-6.jpg",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "$28,000",
  },
  {
    id: 201,
    title: "Luxury Pool Area",
    category: "Exterior",
    image: "/luxury-pool-area-with-outdoor-kitchen.png",
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    size: "350m²",
    price: "$30,000",
  },
  {
    id: 202,
    title: "Outdoor Entertainment",
    category: "Exterior",
    image: "/outdoor-entertainment-area-with-deck.png",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "300m²",
    price: "$16,000",
  },
  {
    id: 203,
    title: "Modern Townhouse",
    category: "Exterior",
    image: "/modern-townhouse-with-rooftop-garden.png",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "$25,000",
  },
  {
    id: 204,
    title: "Luxury Executive Home",
    category: "Exterior",
    image: "/luxury-executive-home-with-premium-materials-and-l.png",
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    size: "350m²",
    price: "$40,000",
  },
  {
    id: 205,
    title: "Coastal Style Home",
    category: "Exterior",
    image: "/coastal-style-home-with-natural-timber-and-beach-i.png",
    bedrooms: 3,
    bathrooms: 2,
    carSpaces: 2,
    size: "220m²",
    price: "$28,000",
  },
  {
    id: 206,
    title: "Contemporary Exterior",
    category: "Exterior",
    image: "/contemporary-home-exterior-with-landscaping.png",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
    size: "280m²",
    price: "$22,000",
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Info (Category only visible on hover) */}
                <div className="absolute bottom-12 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.price && (
                    <p className="mt-1 text-sm font-semibold">{project.price}</p>
                  )}
                </div>

                {/* Fixed Bottom Info (Centered & Larger) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white flex justify-center gap-6 text-base font-semibold">
                  {project.bedrooms && (
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5" /> {project.bedrooms}
                    </div>
                  )}
                  {project.bathrooms && (
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5" /> {project.bathrooms}
                    </div>
                  )}
                  {project.carSpaces && (
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5" /> {project.carSpaces}
                    </div>
                  )}
                  {project.size && (
                    <div className="flex items-center gap-2">
                      <Home className="w-5 h-5" /> {project.size}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
</main>


  );
}
