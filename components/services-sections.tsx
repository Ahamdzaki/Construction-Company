"use client"

import { motion } from "framer-motion"
import { Check, Home, Wrench, Palette, Building2 } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/animations"

type Service = {
  iconName: string
  title: string
  description: string
  features: string[]
}

type Step = {
  step: string
  title: string
  description: string
}

const iconMap = {
  Home,
  Wrench,
  Palette,
  Building2,
}

const iconColors: Record<string, { bg: string; text: string }> = {
  Home:      { bg: "bg-[#e6f7fd]", text: "text-[#00A5E0]" },
  Wrench:    { bg: "bg-[#e6f7fd]", text: "text-[#00A5E0]" },
  Palette:   { bg: "bg-[#e6f7fd]", text: "text-[#00A5E0]" },
  Building2: { bg: "bg-[#e6f7fd]", text: "text-[#00A5E0]" },
}

export default function ServicesSections({ services, steps }: { services: Service[]; steps: Step[] }) {
  return (
    <>
      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-2">What We Build</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Services built around you</h2>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service) => {
              const IconComponent = iconMap[service.iconName as keyof typeof iconMap]
              const colors = iconColors[service.iconName] ?? { bg: "bg-neutral-100", text: "text-neutral-600" }
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-white border border-neutral-100 rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-11 h-11 rounded-lg ${colors.bg} flex items-center justify-center mb-5`}>
                    <IconComponent className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#00A5E0] flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#00A5E0] mb-2">How It Works</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Our building process</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="text-center bg-white border border-neutral-100 rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#00A5E0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
