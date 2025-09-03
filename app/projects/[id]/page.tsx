"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ProjectDetails({  }) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const category = searchParams.get("category") || "";
  const price = searchParams.get("price") || "";
  const image = searchParams.get("image") || "";
  const bedrooms = searchParams.get("bedrooms") || "";
  const bathrooms = searchParams.get("bathrooms") || "";
  const carSpaces = searchParams.get("carSpaces") || "";
  const size = searchParams.get("size") || "";

  // Optionally, you can add more fields (bedrooms, bathrooms, carSpaces, size) if you add them to the galleryImages array and pass them in the query.

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-muted/30 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full flex flex-col items-center">
        <div className="w-full flex justify-center mb-6">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
        <p className="text-lg text-muted-foreground mb-2 text-center">{category}</p>
        {price && <p className="text-xl font-semibold text-primary mb-4 text-center">Price: {price}</p>}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {bedrooms && (
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded">
              <span className="font-semibold">Bedrooms:</span> {bedrooms}
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded">
              <span className="font-semibold">Bathrooms:</span> {bathrooms}
            </div>
          )}
          {carSpaces && (
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded">
              <span className="font-semibold">Car Spaces:</span> {carSpaces}
            </div>
          )}
          {size && (
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded">
              <span className="font-semibold">Size:</span> {size}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
