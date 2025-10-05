"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "Brisbane, QLD",
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

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const length = testimonials.length;

  const goTo = (newIndex: number, dir: number = 0) => {
    setDirection(dir);
    setIndex(((newIndex % length) + length) % length);
  };

  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Enter") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.98 }),
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied homeowners
            have to say about their experience with BYD B PTY LTD.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center gap-4 relative">
          <div className="relative w-full max-w-3xl px-10 sm:px-16"> {/* Added horizontal padding */}
            {/* Prev Button */}
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 outline-none focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Card Container */}
            <div className="w-full overflow-hidden rounded-xl" aria-live="polite">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={testimonials[index].id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                >
                  <Card
                    onClick={next}
                    className="cursor-pointer bg-white"
                    role="button"
                    aria-pressed="false"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") next();
                    }}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col gap-4 text-center sm:text-left">
                        <div className="flex justify-center sm:justify-start items-center gap-1 mb-2">
                          {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>

                        <p className="text-sm italic text-muted-foreground mb-4 leading-relaxed">
                          "{testimonials[index].text}"
                        </p>

                        <div>
                          <p className="font-semibold text-foreground">{testimonials[index].name}</p>
                          <p className="text-xs text-muted-foreground">{testimonials[index].location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 outline-none focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-2 text-center">
            Tip: click the card to go to the next testimonial, or use the arrows / keyboard arrows.
          </p>
        </div>
      </div>
    </section>
  );
}
