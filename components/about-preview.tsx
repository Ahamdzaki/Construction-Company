"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Shield, Building, Phone, Mail, MapPin } from "lucide-react"
import { Home } from "lucide-react"

import Link from "next/link"
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

function AnimatedItem({ children, className = "", ...props }) {
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
  )
}

export default function AboutPreview() {
  return (
    <motion.section
      className="py-16 bg-muted/30"
      id="about-preview"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedItem className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Build Your Dream Home</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Build Your Dream Home (BYD B PTY LTD) is a trusted construction company specializing in building
            high-quality residential houses, including single and double storey homes.
          </p>
        </AnimatedItem>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <AnimatedItem>
            <h3 className="text-2xl font-semibold mb-6">Company Information</h3>
            <div className="space-y-4">
              <AnimatedItem className="flex items-start gap-3">
                <Building className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Company Name:</p>
                  <p className="text-muted-foreground">BYD B PTY LTD</p>
                </div>
              </AnimatedItem>
              <AnimatedItem className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Australian Company Number (ACN):</p>
                  <p className="text-muted-foreground">678 883 488</p>
                </div>
              </AnimatedItem>
              <AnimatedItem className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">ABN:</p>
                  <p className="text-muted-foreground">66678883488</p>
                </div>
              </AnimatedItem>
              <AnimatedItem className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">License Number:</p>
                  <p className="text-muted-foreground">BP106072</p>
                </div>
              </AnimatedItem>
              <AnimatedItem className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Experience:</p>
                  <p className="text-muted-foreground">Over 13 years in the construction industry</p>
                </div>
              </AnimatedItem>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
            <div className="space-y-4">
              <AnimatedItem className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Address:</p>
                  <p className="text-muted-foreground">Perth, WA 6000, Australia</p>
                </div>
              </AnimatedItem>
              <AnimatedItem className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-muted-foreground">0410 664 649</p>
                </div>
              </AnimatedItem>
              <AnimatedItem className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">buildyourdreamhome2@gmail.com</p>
                </div>
              </AnimatedItem>
              <AnimatedItem className="flex items-start gap-3">
                <Home className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Hours:</p>
                  <p className="text-muted-foreground">Monday – Friday, 7:00 AM – 5:00 PM</p>
                </div>
              </AnimatedItem>
              
            </div>
          </AnimatedItem>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <AnimatedItem>
            <Card className="text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Licensed & Registered</h3>
                <p className="text-muted-foreground">Fully licensed with</p>
                <p >BP106072</p>
              </CardContent>
            </Card>
          </AnimatedItem>
          <AnimatedItem>
            <Card className="text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">13+ years of construction expertise</p>
              </CardContent>
            </Card>
          </AnimatedItem>
          <AnimatedItem>
            <Card className="text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Homes</h3>
                <p className="text-muted-foreground">Single & double storey specialists</p>
              </CardContent>
            </Card>
          </AnimatedItem>
          <AnimatedItem>
            <Card className="text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
                <p className="text-muted-foreground">Comprehensive warranty on all work</p>
              </CardContent>
            </Card>
          </AnimatedItem>
        </div>

        <AnimatedItem className="text-center">
          <Link href="/about">
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-300">
              Learn More About Us
            </Button>
          </Link>
        </AnimatedItem>
      </div>
    </motion.section>
  )
}
