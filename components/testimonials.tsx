"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic"

const Star = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Star })), { ssr: false })

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "Perth, WA",
    text: "BYD B PTY LTD exceeded our expectations in every way. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was outstanding. Our dream home became a reality!",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    location: "Sydney, NSW",
    text: "The team at BYD B PTY LTD made the building process seamless and stress-free. Their communication was excellent, and they delivered on time and within budget. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma & James Wilson",
    location: "Melbourne, VIC",
    text: "We couldn't be happier with our new home. The craftsmanship is exceptional, and the team was professional throughout the entire process. Thank you for making our vision come to life!",
    rating: 5
  },
  {
    id: 4,
    name: "Robert & Lisa Martinez",
    location: "Perth, WA",
    text: "Outstanding service from start to finish. The quality of workmanship is second to none, and they really listened to our needs. Our custom home is everything we dreamed of and more.",
    rating: 5
  },
  {
    id: 5,
    name: "Andrew & Sophie Taylor",
    location: "Adelaide, SA",
    text: "Professional, reliable, and incredibly skilled. BYD B PTY LTD delivered our project on schedule with exceptional attention to detail. We love our new home!",
    rating: 5
  },
  {
    id: 6,
    name: "Mark & Jennifer Brown",
    location: "Gold Coast, QLD",
    text: "From design to completion, BYD B PTY LTD provided excellent service. Their team was knowledgeable, friendly, and always available to answer our questions. Fantastic experience!",
    rating: 5
  },
];

const VISIBLE = 3;

export default function Testimonials() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setStart((s) => (s + 1) % testimonials.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(start + i) % testimonials.length]);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied homeowners
            have to say about their experience with BYD B PTY LTD.
          </p>
        </div>

        {/* Carousel with nav buttons */}
        <div className="flex items-center gap-4">
          {/* Left button */}
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="shrink-0 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 visible cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {visible.map((t, i) => (
              <Card key={`${t.id}-${i}`} className="bg-white">
                <CardContent className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm italic text-muted-foreground leading-relaxed flex-1">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="shrink-0 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
