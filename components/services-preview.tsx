"use client"

import Link from "next/link"
import { Home, Wrench, Palette, Building2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { services, sections } from "@/lib/data/content"

const iconMap: Record<string, LucideIcon> = { Home, Wrench, Palette, Building2 }

export default function ServicesPreview() {
  const { description } = sections.services
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">Our <span className="text-[#00A5E0]">Services</span></h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto">{description}</p>
        </div>
      </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#e2e8f0]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.iconName]
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="flex flex-col items-center text-center px-8 py-12 group border-[#e2e8f0]
                  border-b last:border-b-0 first:border-l
                  sm:border-b-0 sm:[&:nth-child(-n+2)]:border-b sm:border-r sm:even:border-r-0 sm:first:border-l
                  lg:[&:nth-child(-n+2)]:border-b-0 lg:border-r lg:even:border-r lg:last:border-r-0 lg:first:border-l"
              >
                <Icon className="w-14 h-14 text-[#00A5E0] mb-6 stroke-[1.25]" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#00A5E0] mb-5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-500 leading-relaxed mb-8 flex-1">
                  {service.shortDescription}
                </p>
                <Link
                  href={service.href}
                  className="inline-block px-7 py-3 border border-[#00A5E0] text-[#00A5E0] text-sm font-semibold uppercase tracking-[0.12em] hover:bg-[#00A5E0] hover:text-white transition-colors duration-200"
                >
                  Learn More
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
    </section>
  )
}
