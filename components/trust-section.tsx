"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { slideInLeft, slideInRight } from "@/lib/animations"

const trustPoints = [
  "Fully Licensed & Insured",
  "Fixed-Price Contracts",
  "13+ Years Experience",
  "Comprehensive Warranty",
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="/exterior-1.jpg"
              alt="BYD B construction team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-3">Why Choose Us</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
              Trusted builders since 2011
            </h2>
            <p className="text-base text-neutral-600 mb-6 leading-relaxed">
              BYD B PTY LTD is a fully licensed construction company specializing in high-quality residential homes in Western Australia. We combine traditional craftsmanship with modern innovation on every project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-sm text-neutral-700">{point}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              About us →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
