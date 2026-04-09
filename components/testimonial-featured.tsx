"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function TestimonialFeatured() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-2">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">What our clients say</h2>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-neutral-50 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto relative"
        >
          <span className="absolute top-6 left-8 text-7xl leading-none text-neutral-200 font-serif select-none">&ldquo;</span>
          <p className="text-base md:text-lg text-neutral-700 italic leading-relaxed relative z-10">
            BYD B PTY LTD exceeded our expectations in every way. From the initial consultation to the final walkthrough,
            their attention to detail and commitment to quality was outstanding. Our dream home became a reality!
          </p>
          <div className="flex justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-base font-semibold text-neutral-900 mt-3">Sarah & Michael Thompson</p>
          <p className="text-sm text-neutral-500">Perth, WA</p>
        </motion.div>

        <div className="text-center mt-10">
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
