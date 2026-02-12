"use client"

import Link from "next/link"
import { Building2, Mail, Phone, MapPin } from "lucide-react"
import { Home } from "lucide-react"
import { motion } from "framer-motion"

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
}

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="md:col-span-2" variants={rise}>
            <motion.div variants={inner}>
              <motion.div className="flex items-center gap-2 mb-4" variants={rise}>
                
                <span className="text-2xl font-bold">BYD B</span>
              </motion.div>
              <motion.p className="text-primary-foreground/80 mb-4" variants={rise}>
                BYD B - Creating exceptional homes across Australia with 13 years of experience and
                unmatched craftsmanship.
              </motion.p>
              <motion.div className="space-y-2" variants={inner}>
                
                <motion.div className="flex items-center gap-2" variants={rise}>
                  <Phone className="w-4 h-4" />
                  <a href="tel:+61410664649" className="hover:text-primary-foreground/60 transition-colors">
                    0410 664 649
                  </a>
                </motion.div>
                <motion.div className="flex items-center gap-2" variants={rise}>
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:bpanahi@bydb.com.au"
                    className="hover:text-primary-foreground/60 transition-colors"
                  >
                    bpanahi@bydb.com.au
                  </a>
                </motion.div>
                <motion.div className="flex items-center gap-2" variants={rise}>
                  <MapPin className="w-4 h-4" />
                  <span>22 Olga Road, Maddington WA 6109</span>
                </motion.div>
                <motion.div className="flex items-center gap-2" variants={rise}>
                  <Home className="w-4 h-4" />
                  <p>
                   Office Hours: Monday – Friday, 7:00 AM – 5:00 PM
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={rise}>
            <motion.h3 className="text-lg font-semibold mb-4" variants={rise}>Quick Links</motion.h3>
            <motion.ul className="space-y-2" variants={inner}>
              <motion.li variants={rise}>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li variants={rise}>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </motion.li>
              <motion.li variants={rise}>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </motion.li>
              <motion.li variants={rise}>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gallery
                </Link>
              </motion.li>
              <motion.li variants={rise}>
                <Link
                  href="/testimonials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </motion.li>
              <motion.li variants={rise}>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={rise}>
            <motion.h3 className="text-lg font-semibold mb-4" variants={rise}>Services</motion.h3>
            <motion.ul className="space-y-2 text-primary-foreground/80" variants={inner}>
              <motion.li variants={rise}>Custom Home Building</motion.li>
              <motion.li variants={rise}>Home Renovations</motion.li>
              <motion.li variants={rise}>Kitchen & Bathroom</motion.li>
              <motion.li variants={rise}>Extensions & Additions</motion.li>
              <motion.li variants={rise}>Commercial Projects</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
          variants={inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p className="text-primary-foreground/80" variants={rise}>
            © 2024 BYD B. All rights reserved. | ABN: 12 345 678 901
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
