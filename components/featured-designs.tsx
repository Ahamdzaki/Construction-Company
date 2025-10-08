"use client"

import dynamic from "next/dynamic"

// Lazy load framer-motion for better performance
const motion = dynamic(() => import("framer-motion").then(mod => ({ default: mod.motion })), { ssr: false })
// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" as const } },
}

type AnimatedItemProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};
function AnimatedItem({ children, className = "", ...props }: AnimatedItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Bath, Car, Home } from "lucide-react"
import Image from "next/image"

const designs = [
  {
    id: 1,
    image: "/Image-1.jpg",
   
  },
  {
    id: 2,
    image: "/Image-2.jpg",
    
  },
  {
    id: 3,
    image: "/Image-3.jpg",
  },
  {
    id: 5,
    image: "/Image-4.jpg",
   
  },
  
  {
    id: 8,
    image: "/Image-6.jpg",
    
  },
  {
    id: 10,
    image: "/Image-8.jpg",
  },
  {
    id: 11,
    image: "/Image-9.jpg",
    
  },
  {
    id: 12,
    image: "/Image-10.jpg",
  },
  {
    id: 13,
    image: "/Image-13.jpg",  
  },
  {
    id: 14,
    image: "/Image-12.jpeg",  
  },
  
]

export default function FeaturedDesigns() {
  return (
    <motion.section
      className="py-16 bg-muted/30" id="featured-designs"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedItem className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Homes Under Construction</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular home designs, each crafted with attention to detail and modern living in mind.
          </p>
        </AnimatedItem>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {designs.map((design) => (
            <AnimatedItem key={design.id}>
              <div className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={design.image || "/placeholder.svg"}
                    alt="Featured home design image"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


// import { Card, CardContent } from "@/components/ui/card"
// import { Bed, Bath, Car, Home } from "lucide-react"
// import Image from "next/image"

// const designs = [
//   {
//     id: 1,
//     title: "The Modern Family",
//     description: "Contemporary 4-bedroom home with open-plan living",
//     image: "/Image-1.jpg",
//     bedrooms: 4,
//     bathrooms: 3,
//     carSpaces: 2,
//     size: "280m²",
//   },
//   {
//     id: 2,
//     title: "The Executive",
//     description: "Luxury 5-bedroom home with premium finishes",
//     image: "/Image-2.jpg",
//     bedrooms: 5,
//     bathrooms: 4,
//     carSpaces: 3,
//     size: "350m²",
//   },
//   {
//     id: 3,
//     title: "The Coastal",
//     description: "Beach-inspired design with natural materials",
//     image: "/Image-3.jpg",
//     bedrooms: 3,
//     bathrooms: 2,
//     carSpaces: 2,
//     size: "220m²",
//   },
//   {
//     id: 5,
//     title: "The Entertainer",
//     description: "Perfect for hosting with large outdoor areas",
//     image: "/Image-4.jpg",
//     bedrooms: 4,
//     bathrooms: 3,
//     carSpaces: 2,
//     size: "320m²",
//   },
//   {
//     id: 6,
//     title: "The Compact",
//     description: "Efficient design maximizing space and functionality",
//     image: "/Image-5.jpg",
//     bedrooms: 3,
//     bathrooms: 2,
//     carSpaces: 1,
//     size: "180m²",
//   },
//   {
//     id: 8,
//     title: "The Minimalist",
//     description: "Clean lines and open spaces for modern living",
//     image: "/Image-6.jpg",
//     bedrooms: 3,
//     bathrooms: 2,
//     carSpaces: 2,
//     size: "200m²",
//   },
//   {
//     id: 10,
//     title: "The Urban Retreat",
//     description: "City living with private outdoor sanctuary",
//     image: "/Image-8.jpg",
//     bedrooms: 3,
//     bathrooms: 2,
//     carSpaces: 2,
//     siqWQW1Aze: "240m²",
//   },
//   {
//     id: 11,
//     title: "The Family Haven",
//     description: "Perfect family home with kids' play areas",
//     image: "/Image-9.png",
//     bedrooms: 4,
//     bathrooms: 3,
//     carSpaces: 2,
//     size: "300m²",
//   },
//   {
//     id: 12,
//     title: "The Eco Smart",
//     description: "Sustainable design with solar and rainwater systems",
//     image: "/Image-10.png",
//     bedrooms: 4,
//     bathrooms: 2,
//     carSpaces: 2,
//     size: "270m²",
//   },
// ]

// export default function FeaturedDesigns() {
//   return (
//     <section className="py-16 bg-muted/30" id="featured-designs">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Home Designs</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Discover our most popular home designs, each crafted with attention to detail and modern living in mind.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {designs.map((design) => (
//             <Card key={design.id} className="group hover:shadow-lg transition-shadow duration-300">
//               <div className="relative overflow-hidden rounded-t-lg">
//                 <Image
//                   src={design.image || "/placeholder.svg"}
//                   alt={design.title}
//                   width={400}
//                   height={300}
//                   className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold text-foreground mb-2">{design.title}</h3>
//                 <p className="text-muted-foreground mb-4">{design.description}</p>
//                 <div className="flex justify-between text-sm text-muted-foreground">
//                   <div className="flex items-center gap-1">
//                     <Bed className="w-4 h-4" />
//                     <span>{design.bedrooms}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Bath className="w-4 h-4" />
//                     <span>{design.bathrooms}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Car className="w-4 h-4" />
//                     <span>{design.carSpaces}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Home className="w-4 h-4" />
//                     <span>{design.size}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
