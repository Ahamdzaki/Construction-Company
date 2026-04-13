"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { stats } from "@/lib/data/content"

export default function StatCards() {
  return (
    <div className="relative z-10 -mt-10 md:-mt-14 px-4 sm:px-6">
      <motion.div
        className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md border border-neutral-100 p-4 md:p-5 text-center"
          >
            <div
              className="text-2xl md:text-3xl font-bold text-[#00A5E0]"
              style={stat.color ? { color: stat.color } : undefined}
            >
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-neutral-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
