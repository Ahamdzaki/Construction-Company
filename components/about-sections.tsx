"use client"

import Image from "next/image"
import { Award, Shield, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { slideInLeft, slideInRight, fadeInUp, staggerContainer } from "@/lib/animations"
import { about } from "@/lib/data/content"

const iconMap: Record<string, LucideIcon> = { Award, Shield, Zap }

const { overview, credentials: checkpoints, values } = about

function ValueIcon({ iconName }: { iconName: string }) {
  const Icon = iconMap[iconName]
  return <Icon className="w-7 h-7 text-[#00A5E0] group-hover:text-white transition-colors duration-300" />
}

export default function AboutSections() {
  return (
    <>
      {/* ── Company Overview ── */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-20"
          >
            <p className="text-xs uppercase tracking-[0.18em] font-medium text-[#00A5E0] mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Company Overview
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-5">
              {overview.paragraph1}
            </p>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
              {overview.paragraph2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checkpoints.map((point) => (
                <div key={point.label} className="flex flex-col bg-neutral-50 border border-neutral-100 rounded-lg px-4 py-3">
                  <span className="text-xs text-[#00A5E0] uppercase tracking-[0.1em] mb-0.5">{point.label}</span>
                  <span className="text-sm font-semibold text-neutral-900">{point.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative min-h-[400px] lg:min-h-full"
          >
            <Image
              src={overview.image}
              alt={overview.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.18em] font-medium text-[#00A5E0] mb-3">Our Principles</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Mission &amp; values</h2>
            <p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto">
              Every home we build is guided by three core principles that define who we are.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="group relative bg-neutral-50 border border-neutral-100 rounded-2xl p-8 hover:shadow-lg hover:border-blue-100 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-4 right-6 text-7xl font-black text-neutral-100 group-hover:text-blue-50 transition-colors duration-300 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative w-14 h-14 rounded-xl bg-[#e6f7fd] group-hover:bg-[#00A5E0] flex items-center justify-center mb-6 transition-colors duration-300">
                  <ValueIcon iconName={v.iconName} />
                </div>

                <p className="relative text-xs uppercase tracking-wider text-neutral-400 mb-2">{v.heading}</p>
                <h3 className="relative text-xl font-bold text-neutral-900 mb-4">{v.title}</h3>
                <p className="relative text-base text-neutral-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
