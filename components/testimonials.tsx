"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "Brisbane, QLD",
    text: "BYD B PTY LTD exceeded our expectations in every way. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was outstanding. Our dream home became a reality!",
    rating: 5,
    photo: "/professional-couple-sarah-and-michael-thompson-smi.png",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Sydney, NSW",
    text: "The team at BYD B PTY LTD made the building process seamless and stress-free. Their communication was excellent, and they delivered on time and within budget. Highly recommended!",
    rating: 5,
    photo: "/professional-asian-man-david-chen-smiling.png",
  },
  {
    id: 3,
    name: "Emma & James Wilson",
    location: "Melbourne, VIC",
    text: "We couldn't be happier with our new home. The craftsmanship is exceptional, and the team was professional throughout the entire process. Thank you for making our vision come to life!",
    rating: 5,
    photo: "/young-professional-couple-emma-and-james-wilson-sm.png",
  },
  {
    id: 4,
    name: "Robert & Lisa Martinez",
    location: "Perth, WA",
    text: "Outstanding service from start to finish. The quality of workmanship is second to none, and they really listened to our needs. Our custom home is everything we dreamed of and more.",
    rating: 5,
    photo: "/middle-aged-couple-robert-and-lisa-martinez-smilin.png",
  },
  {
    id: 5,
    name: "Andrew & Sophie Taylor",
    location: "Adelaide, SA",
    text: "Professional, reliable, and incredibly skilled. BYD B PTY LTD delivered our project on schedule with exceptional attention to detail. We love our new home!",
    rating: 5,
    photo: "/professional-couple-andrew-and-sophie-taylor-smili.png",
  },
  {
    id: 6,
    name: "Mark & Jennifer Brown",
    location: "Gold Coast, QLD",
    text: "From design to completion, BYD B PTY LTD provided excellent service. Their team was knowledgeable, friendly, and always available to answer our questions. Fantastic experience!",
    rating: 5,
    photo: "/happy-couple-mark-and-jennifer-brown-smiling.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied homeowners
            have to say about their experience with BYD B PTY LTD.
          </p>
        </div>

        {/* Motion wrapper for horizontal scroll */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 120, // slower scroll
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <Card
              key={`${testimonial.id}-${i}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] lg:w-[350px] bg-white"
            >
              <CardContent className="p-4 flex flex-col bg-white">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 flex-grow text-sm italic ">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.photo || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
