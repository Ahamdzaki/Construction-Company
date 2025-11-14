export const metadata = {
  title: "Gallery",
  description: "Explore our gallery of completed and ongoing projects by BYD B PTY LTD.",
};
import dynamic from "next/dynamic"
const Footer = dynamic(() => import("@/components/footer"), { ssr: true, loading: () => null })
const AnimatedGalleryGrid = dynamic(() => import("@/components/animated-gallery-grid"), { ssr: true, loading: () => <div>Loading gallery...</div> })

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
    <>
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
          <AnimatedGalleryGrid projects={projects} />
        </div>
      </section>
      <Footer />
    </>
  );
}
