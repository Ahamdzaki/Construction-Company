"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Col 1: Logo + tagline + socials */}
          <motion.div variants={rise} className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logos.png"
              alt="BYD B"
              width={140}
              height={60}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-neutral-400 leading-relaxed mb-5">
              Building exceptional homes across Western Australia with 13+ years of experience and unmatched craftsmanship.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61582903377561"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#00A5E0] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/bydbau/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#00A5E0] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/61410664649"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#00A5E0] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div variants={rise}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-[#00A5E0] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div variants={rise}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Custom Home Building</li>
              <li>Home Renovations</li>
              <li>Kitchen & Bathroom</li>
              <li>Extensions & Additions</li>
              <li>Custom Design</li>
            </ul>
          </motion.div>

          {/* Col 4: Contact Info */}
          <motion.div variants={rise}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00A5E0]" />
                <span>22 Olga Road, Maddington WA 6109</span>
              </div>
              <a
                href="tel:+61410664649"
                className="flex items-center gap-2 text-neutral-400 hover:text-[#00A5E0] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-[#00A5E0]" />
                0410 664 649
              </a>
              <a
                href="mailto:bpanahi@bydb.com.au"
                className="flex items-center gap-2 text-neutral-400 hover:text-[#00A5E0] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-[#00A5E0]" />
                bpanahi@bydb.com.au
              </a>
              <div className="flex items-start gap-2 text-neutral-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00A5E0]" />
                <span>Mon–Fri, 7:00 AM – 5:00 PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} BYD B PTY LTD. All rights reserved.</p>
          <p>ABN: 66 678 883 488 | ACN: 678 883 488 | License: BC106152</p>
        </div>
      </div>
    </footer>
  )
}
