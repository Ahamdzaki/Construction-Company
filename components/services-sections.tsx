"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Wrench, Palette } from "lucide-react"

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

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

const inner = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const rise = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
}

const iconMap = {
  Home,
  Wrench,
  Palette,
}

export default function ServicesSections({ services, steps }: { services: Service[]; steps: Step[] }) {
  return (
    <>
      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.iconName as keyof typeof iconMap]
              return (
                <motion.article key={index} variants={rise}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <motion.div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6" variants={rise}>
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                    <motion.h3 className="text-2xl font-semibold text-foreground mb-4" variants={rise}>{service.title}</motion.h3>
                    <motion.p className="text-muted-foreground mb-6" variants={rise}>{service.description}</motion.p>
                    <motion.ul className="space-y-2" variants={inner}>
                      {service.features.map((feature, featureIndex) => (
                        <motion.li key={featureIndex} className="flex items-center text-muted-foreground" variants={rise}>
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                    </CardContent>
                  </Card>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={rise}>Our Building Process</motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((item, index) => (
              <motion.article key={index} className="text-center" variants={rise}>
                <motion.div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4" variants={rise}>
                  <span className="text-xl font-bold text-accent-foreground">{item.step}</span>
                </motion.div>
                <motion.h3 className="text-xl font-semibold text-foreground mb-2" variants={rise}>{item.title}</motion.h3>
                <motion.p className="text-muted-foreground" variants={rise}>{item.description}</motion.p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
