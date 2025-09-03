import Image from "next/image";
import Link from "next/link";

const exteriorImages = [
  { id: 3, title: "Contemporary Exterior", image: "/contemporary-home-exterior-with-landscaping.png" },
  { id: 5, title: "Outdoor Entertainment", image: "/outdoor-entertainment-area-with-deck.png" },
  { id: 10, title: "Luxury Pool Area", image: "/luxury-pool-area-with-outdoor-kitchen.png" },
  { id: 13, title: "The Modern Family", image: "/modern-family-home-with-large-windows-and-clean-ar.png" },
  { id: 14, title: "The Executive", image: "/luxury-executive-home-with-premium-materials-and-l.png" },
  { id: 15, title: "The Coastal", image: "/coastal-style-home-with-natural-timber-and-beach-i.png" },
];

export default function ExteriorDesigns() {
  return (
    <section className="py-16" id="exterior-designs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Exterior Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exteriorImages.map((img) => (
            <div key={img.id} className="rounded-lg overflow-hidden shadow bg-white">
              <Link href={`/similar/${img.id}?category=Exterior`} scroll={false} className="block">
                <Image
                  src={img.image}
                  alt={img.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </Link>
              <div className="p-4 text-center text-base font-semibold text-foreground">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
