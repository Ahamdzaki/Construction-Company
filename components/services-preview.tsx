"use client"

import Link from "next/link"
import { Home, Wrench, PenLine, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, fadeInUp } from "@/lib/animations"

const services = [
  {
    icon: Home,
    title: "New Home Construction",
    description: "Custom-built homes from foundation to finish, designed to your exact specifications and lifestyle.",
    href: "/services",
  },
  {
    icon: Wrench,
    title: "Home Renovations",
    description: "Transform your existing space with expert renovations, from kitchens and bathrooms to full makeovers.",
    href: "/services",
  },
  {
    icon: PenLine,
    title: "Custom Design",
    description: "Work with our team to create a home that reflects your unique lifestyle and personal preferences.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Professional construction services for commercial properties, offices, and retail spaces.",
    href: "/services",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-2">What We Do</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">Our services</h2>
          <p className="text-base text-neutral-500 max-w-xl mx-auto">
            Comprehensive building services to bring your vision to life.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="flex flex-col items-center text-center px-6 py-8 group"
            >
              <service.icon
                className="w-10 h-10 text-neutral-300 mb-5 stroke-[1.25] group-hover:text-[#00A5E0] transition-colors duration-300"
              />
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#00A5E0] mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400 hover:text-[#00A5E0] transition-colors duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
