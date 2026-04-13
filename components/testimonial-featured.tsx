"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ReviewButton from "@/app/testimonials/ReviewButton"
import { testimonials } from "@/lib/data/testimonials"

const VISIBLE = 3

export default function TestimonialFeatured() {
  const [start, setStart] = useState(0)

  const prev = () => setStart((s) => (s - 1 + testimonials.length) % testimonials.length)
  const next = () => setStart((s) => (s + 1) % testimonials.length)

  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(start + i) % testimonials.length])

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white w-full">

      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">What our clients <span className="text-[#00A5E0]">say</span></h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto">
            Real stories from homeowners across Western Australia.
          </p>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={start}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {visible.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="relative bg-white border border-neutral-200 p-8 flex flex-col gap-5 hover:border-[#00A5E0]/40 hover:shadow-md transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#00A5E0]/30 flex-shrink-0" />

                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed flex-1">{t.text}</p>

                <div className="h-px bg-neutral-100" />

                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <ReviewButton />

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-500 hover:border-[#00A5E0] hover:text-[#00A5E0] transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStart(i)}
                  className={`h-1 transition-all duration-300 ${i === start % testimonials.length ? "w-6 bg-[#00A5E0]" : "w-2 bg-neutral-300 hover:bg-neutral-400"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 flex items-center justify-center border border-neutral-300 text-neutral-500 hover:border-[#00A5E0] hover:text-[#00A5E0] transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
