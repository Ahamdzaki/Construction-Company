"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "Perth, WA",
    text: "BYD B PTY LTD exceeded our expectations in every way. From the initial consultation to the final walkthrough, their attention to detail and commitment to quality was outstanding. Our dream home became a reality!",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    location: "Sydney, NSW",
    text: "The team at BYD B PTY LTD made the building process seamless and stress-free. Their communication was excellent, and they delivered on time and within budget. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma & James Wilson",
    location: "Melbourne, VIC",
    text: "We couldn't be happier with our new home. The craftsmanship is exceptional, and the team was professional throughout the entire process. Thank you for making our vision come to life!",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert & Lisa Martinez",
    location: "Perth, WA",
    text: "Outstanding service from start to finish. The quality of workmanship is second to none, and they really listened to our needs. Our custom home is everything we dreamed of and more.",
    rating: 5,
  },
  {
    id: 5,
    name: "Andrew & Sophie Taylor",
    location: "Adelaide, SA",
    text: "Professional, reliable, and incredibly skilled. BYD B PTY LTD delivered our project on schedule with exceptional attention to detail. We love our new home!",
    rating: 5,
  },
  {
    id: 6,
    name: "Mark & Jennifer Brown",
    location: "Gold Coast, QLD",
    text: "From design to completion, BYD B PTY LTD provided excellent service. Their team was knowledgeable, friendly, and always available to answer our questions. Fantastic experience!",
    rating: 5,
  },
]

const VISIBLE = 3

export default function TestimonialFeatured() {
  const [start, setStart] = useState(0)

  const prev = () => setStart((s) => (s - 1 + testimonials.length) % testimonials.length)
  const next = () => setStart((s) => (s + 1) % testimonials.length)

  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(start + i) % testimonials.length])

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="w-full">
        <div className="text-center mb-10 px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-2">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">What our clients say</h2>
        </div>

        {/* Carousel */}
        <div className="flex items-stretch gap-4 px-4 sm:px-6 lg:px-8">
          {/* Left button */}
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="shrink-0 self-center p-2 rounded-full bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-700" />
          </button>

          {/* 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {visible.map((t, i) => (
              <Card key={`${t.id}-${i}`} className="bg-neutral-50 border-0 shadow-none">
                <CardContent className="p-6 md:p-8 flex flex-col gap-4 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-700 italic leading-relaxed flex-1">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="shrink-0 self-center p-2 rounded-full bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-neutral-700" />
          </button>
        </div>

        <div className="text-center mt-10 px-4 sm:px-6 lg:px-8">
          <Link
            href="/testimonials"
            className="inline-block px-7 py-3 border border-[#00A5E0] text-[#00A5E0] text-sm font-medium tracking-wide hover:bg-[#00A5E0] hover:text-white transition-colors duration-200 rounded-sm"
          >
            Read more reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
