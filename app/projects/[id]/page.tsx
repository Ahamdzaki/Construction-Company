"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Lazy load icons for better performance
const Bed = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Bed })), { ssr: false });
const Bath = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Bath })), { ssr: false });
const Car = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Car })), { ssr: false });
const Home = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Home })), { ssr: false });

export default function ProjectDetails() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "";
  const category = searchParams.get("category") || "";
  const price = searchParams.get("price") || "";
  const image = searchParams.get("image") || "";
  const bedrooms = searchParams.get("bedrooms") || "";
  const bathrooms = searchParams.get("bathrooms") || "";
  const carSpaces = searchParams.get("carSpaces") || "";
  const size = searchParams.get("size") || "";

  return (
    <div>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center bg-muted/30">
        <div className="bg-white rounded-xs shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
          <div className="w-full flex justify-center mb-6">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              loading="lazy"
              quality={85}
            />
          </div>

          <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
          <p className="text-lg text-muted-foreground mb-2 text-center">{category}</p>

          {price && (
            <p className="text-xl font-semibold text-white mb-4 text-center bg-accent rounded-full px-3">
              Price: {price}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {bedrooms && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-accent">
                <Bed className="w-5 h-5" /> {bedrooms}
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-accent">
                <Bath className="w-5 h-5" /> {bathrooms}
              </div>
            )}
            {carSpaces && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-accent">
                <Car className="w-5 h-5" /> {carSpaces}
              </div>
            )}
            {size && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-accent">
                <Home className="w-5 h-5" /> {size}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Use this to enforce dynamic rendering without conflicting with the imported 'dynamic'
export const dynamicRendering = "force-dynamic";