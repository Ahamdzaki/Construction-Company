import Image from "next/image"

// Real data for similar images (gallery + featured, with category: 'Exterior' or 'Interior')
const allImages = [
  // Gallery images
  { id: 1, title: "Modern Kitchen Design", image: "/modern-kitchen-island-lights.png", category: "Interior" },
  { id: 2, title: "Luxury Master Bedroom", image: "/luxury-master-bedroom-with-ensuite.png", category: "Interior" },
  { id: 3, title: "Contemporary Exterior", image: "/contemporary-home-exterior-with-landscaping.png", category: "Exterior" },
  { id: 5, title: "Outdoor Entertainment", image: "/outdoor-entertainment-area-with-deck.png", category: "Exterior" },
  { id: 6, title: "Designer Bathroom", image: "/designer-bathroom-with-marble-finishes.png", category: "Interior" },
  { id: 8, title: "Modern Home Office", image: "/modern-home-office-with-built-in-storage.png", category: "Interior" },
  { id: 10, title: "Luxury Pool Area", image: "/luxury-pool-area-with-outdoor-kitchen.png", category: "Exterior" },
  { id: 11, title: "Walk-in Wardrobe", image: "/walk-in-wardrobe-with-custom-storage.png", category: "Interior" },
  { id: 12, title: "Elegant Dining Area", image: "/elegant-dining-area-with-chandelier.png", category: "Interior" },
  // Featured designs (exterior only)
  { id: 13, title: "The Modern Family", image: "/modern-family-home-with-large-windows-and-clean-ar.png", category: "Exterior" },
  { id: 14, title: "The Executive", image: "/luxury-executive-home-with-premium-materials-and-l.png", category: "Exterior" },
  { id: 15, title: "The Coastal", image: "/coastal-style-home-with-natural-timber-and-beach-i.png", category: "Exterior" },
  { id: 16, title: "The Entertainer", image: "/modern-home-with-large-outdoor-entertaining-area.png", category: "Exterior" },
  { id: 17, title: "The Urban Retreat", image: "/modern-townhouse-with-rooftop-garden.png", category: "Exterior" },
  { id: 18, title: "The Family Haven", image: "/family-home-with-children-play-areas.png", category: "Exterior" },
  { id: 19, title: "The Eco Smart", image: "/sustainable-solar-home.png", category: "Exterior" },
  { id: 20, title: "Contemporary Exterior", image: "/contemporary-home-exterior-with-landscaping.png", category: "Exterior" },
];

export default function SimilarPictures({ id, category }: { id: number; category: string }) {
  // Find 6 similar images by category, excluding the current id
  let similar = allImages.filter(img => img.category === category && img.id !== id);
  // To ensure different images for each id, rotate the array based on id
  if (similar.length > 0) {
    const rotateBy = id % similar.length;
    similar = similar.slice(rotateBy).concat(similar.slice(0, rotateBy));
  }
  if (similar.length < 6) {
    // If not enough, fill with other images (not same id)
    const others = allImages.filter(img => img.id !== id && !similar.includes(img));
    similar = similar.concat(others.slice(0, 6 - similar.length));
  }
  similar = similar.slice(0, 6);

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {similar.map(img => (
          <div key={img.id} className="rounded-lg overflow-hidden shadow">
            <Image src={img.image} alt={img.title} width={400} height={300} className="object-cover w-full h-48" loading="lazy" />
            <div className="p-2 text-center text-sm font-medium">{img.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
