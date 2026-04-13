"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import { company, contact, socials, footerLinks, footerServices } from "@/lib/data/content"

const socialIcons: Record<string, React.ElementType> = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  WhatsApp: FaWhatsapp,
}

const socialColorClass: Record<string, string> = {
  Facebook: "text-[#1877F2]",
  Instagram: "text-[#E1306C]",
  WhatsApp: "text-[#25D366]",
}

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
            <div className="bg-white rounded px-2 py-1 inline-block mb-4">
              <Image
                src={company.logo}
                alt={company.name}
                width={140}
                height={60}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-5">
              {company.tagline}
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href }) => {
                const Icon = socialIcons[label]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
                  >
                    <Icon className={`w-4 h-4 ${socialColorClass[label]}`} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div variants={rise}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
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
              {footerServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact Info */}
          <motion.div variants={rise}>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00A5E0]" />
                <span>{contact.address}</span>
              </div>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2 text-neutral-400 hover:text-[#00A5E0] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-[#00A5E0]" />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-2 text-neutral-400 hover:text-[#00A5E0] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-[#00A5E0]" />
                {contact.email}
              </a>
              <div className="flex items-start gap-2 text-neutral-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#00A5E0]" />
                <span>{contact.hoursShort}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>ABN: {company.abn} | ACN: {company.acn} | License: {company.license}</p>
        </div>
      </div>
    </footer>
  )
}
