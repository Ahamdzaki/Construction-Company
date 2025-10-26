"use client"

import { motion } from "framer-motion"
// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" as const } },
}

type AnimatedItemProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};
function AnimatedItem({ children, className = "", ...props }: AnimatedItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
import { Card, CardContent } from "@/components/ui/card"
import { Home, Wrench, Palette, Building } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "New Home Construction",
    description: "Custom-built homes designed to your specifications with quality materials and expert craftsmanship.",
  },
  {
    icon: Wrench,
    title: "Home Renovations",
    description: "Transform your existing space with our comprehensive renovation services, from kitchens to full home makeovers.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Work with our architects and designers to create a unique home that reflects your lifestyle and preferences.",
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Professional construction services for commercial properties, offices, and retail spaces.",
  },
]

export default function ServicesPreview() {
  return (
    <motion.section
      className="py-16 bg-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedItem className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With 13 years of experience, we offer comprehensive building services to bring your vision to life. From new
            home construction to renovations and custom designs, we deliver excellence in every project.
          </p>
        </AnimatedItem>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedItem key={index}>
              <Card className="text-center hover:scale-105 transition-transform duration-300 h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <service.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
