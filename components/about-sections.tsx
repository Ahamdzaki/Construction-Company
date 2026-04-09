"use client"

import Image from "next/image"
import { Check, Award, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { slideInLeft, slideInRight, fadeInUp, staggerContainer } from "@/lib/animations"

const values = [
  {
    icon: Award,
    iconBg: "bg-blue-50",
    iconColor: "text-primary-600",
    title: "Built to last",
    heading: "Quality First",
    description:
      "Every home we build is backed by our BC106152 builder's licence and a comprehensive structural warranty. We use premium materials from trusted Australian suppliers and conduct rigorous quality checks at every stage.",
  },
  {
    icon: Shield,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "No surprises",
    heading: "Trust & Transparency",
    description:
      "We offer fixed-price contracts so you know exactly what you're paying from day one. Our clients receive regular progress updates with photos, and our team is always a phone call away.",
  },
  {
    icon: Zap,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    title: "Modern living, built smart",
    heading: "Innovation & Excellence",
    description:
      "We incorporate energy-efficient designs, smart home readiness, and sustainable building practices into every project — delivering homes that are as efficient as they are beautiful.",
  },
]

const credentials = [
  { label: "ABN", value: "66 678 883 488" },
  { label: "ACN", value: "678 883 488" },
  { label: "Builder's Licence", value: "BC106152" },
  { label: "Registered in", value: "Western Australia" },
]

export default function AboutSections() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-neutral-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-400 mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About BYD B</h1>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Building exceptional homes across Western Australia for over 13 years.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-500 mb-3">Our Story</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
                13+ years of craftsmanship
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-4">
                BYD B PTY LTD brings over 13 years of experience in the construction industry. We specialise in building high-quality residential homes — single and double storey — and have built a reputation for quality, reliability, and innovation across Western Australia.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed mb-6">
                Our company is fully registered, licenced, and insured. Every project we take on is backed by our builder's licence BC106152 and comprehensive warranty coverage. We believe great homes start with great relationships — which is why we work closely with every client from first consultation to final handover.
              </p>
              <div className="flex flex-col gap-2">
                {["Fully licensed and insured", "Fixed-price contracts — no hidden costs", "Weekly progress updates with photos", "Comprehensive structural warranty"].map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src="/construction-team-working-on-building-site-with-mo.png"
                alt="BYD B construction team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-500 mb-2">Our Principles</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Mission & values</h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="bg-white rounded-xl border border-neutral-100 p-6 shadow-sm"
              >
                <div className={`w-10 h-10 rounded-lg ${v.iconBg} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-5 h-5 ${v.iconColor}`} />
                </div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">{v.heading}</p>
                <h3 className="text-base font-semibold text-neutral-900 mb-3">{v.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-amber-500 mb-2">Licencing</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Our credentials</h2>
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {credentials.map((c) => (
              <motion.div
                key={c.label}
                variants={fadeInUp}
                className="text-center bg-neutral-50 border border-neutral-100 rounded-xl p-5"
              >
                <p className="text-xs text-neutral-500 mb-1">{c.label}</p>
                <p className="text-sm font-semibold text-neutral-900">{c.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  )
}
