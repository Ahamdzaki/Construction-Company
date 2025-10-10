"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Lazy load icons for better performance
const MapPin = dynamic(() => import("lucide-react").then(mod => ({ default: mod.MapPin })), { ssr: false })
const Phone = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Phone })), { ssr: false })
const Mail = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Mail })), { ssr: false })
import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
export default function ContactPage() {
  const [showCopied, setShowCopied] = useState(false)

  const handleCallClick = (e: React.MouseEvent) => {
    // Check if user is on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    if (!isMobile) {
      e.preventDefault()
      // Copy phone number to clipboard on desktop
      navigator.clipboard
        .writeText("0410 664 649")
        .then(() => {
          setShowCopied(true)
          setTimeout(() => setShowCopied(false), 2000)
        })
        .catch(() => {
          // Fallback if clipboard API fails
          alert("Phone: 0410 664 649")
        })
    }
    // On mobile, let the tel: link work normally
  }

  // Define contact items as data (best practice: easier to maintain + map)
  const contacts = [
    {
      id: "address",
      title: "Address",
      subtitle: (
        <>
          8 Brian Street<br />Mount Nasura, WA 6112<br />Australia
        </>
      ),
      href: undefined,
      icon: <MapPin className="w-5 h-5 xs:w-4 xs:h-4 text-primary-foreground" aria-hidden />,
    },
    {
      id: "phone",
      title: "Phone",
      subtitle: "0410 664 649",
      href: "tel:+61410664649",
      icon: <Phone className="w-5 h-5 xs:w-4 xs:h-4 text-primary-foreground" aria-hidden />,
    },
    {
      id: "email",
      title: "Email",
      subtitle: "buildyourdreamhome2@gmail.com",
      href: "mailto:buildyourdreamhome2@gmail.com",
      icon: <Mail className="w-5 h-5 xs:w-4 xs:h-4 text-primary-foreground" aria-hidden />,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      subtitle: null,
      href: "https://wa.me/61410664649",
      external: true,
      icon: (
        <svg className="w-5 h-5 xs:w-4 xs:h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
    },
    {
      id: "facebook",
      title: "Facebook",
      subtitle: null,
      href: "https://www.facebook.com/profile.php?id=61580685163994",
      external: true,
      icon: (
        <svg className="w-5 h-5 xs:w-4 xs:h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      title: "Instagram",
      subtitle: null,
      href: "https://www.instagram.com/buildyourdreambuilding/",
      external: true,
      icon: (
        <svg className="w-5 h-5 xs:w-4 xs:h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="py-10 xs:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 xs:mb-6">
            <h1 className="text-3xl xs:text-2xl md:text-5xl font-bold text-foreground mb-4 xs:mb-2">Office Hours </h1>
            <p className="text-base xs:text-sm text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-3xl mx-auto">
            We are available <b> Monday-Friday from 7:00 AM to 5:00 PM </b>.
            Feel free to visit us during these hours or contact our team — we’d be happy to assist you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 xs:py-8">
        <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 xs:mb-6">
              <h2 className="text-3xl xs:text-xl font-semibold text-foreground mb-4 xs:mb-2">Contact Us</h2>
              <p className="text-sm xs:text-xs text-muted-foreground mb-6 xs:mb-4">
              Ready to start your building journey? Get in touch with our team for a consultation and quote.
              </p>
              <div className="relative inline-block w-full max-w-xs xs:max-w-sm">
                <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 xs:px-2 xs:py-1">
                  <a href="tel:+61410664649" className="inline-flex items-center justify-center w-full h-full space-x-2 text-sm xs:text-xs" onClick={handleCallClick}>
                    <Phone className="w-4 h-4 xs:w-3 xs:h-3" />
                    <span>Call Now</span>
                  </a>
                </Button>
                {showCopied && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    Phone number copied to clipboard!
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-3 sm:gap-8">
              <div className="space-y-4 xs:space-y-3 sm:space-y-8 w-full">
                {/* Map over contacts and make each row clickable (full-row anchors) */}
                {contacts.map((c, i) => {
                  const isClickable = !!c.href
                  const Element: any = isClickable ? motion.a : motion.div

                  return (
                    <Element
                      key={c.id}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className={`group ${isClickable ? "hover:bg-muted/50 rounded-lg transition-colors" : ""} flex items-start space-x-3 xs:space-x-2 p-2`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                      onClick={c.id === "phone" ? undefined : undefined}
                    >
                      <div className="w-9 h-9 xs:w-8 xs:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-base xs:text-sm">{c.title}</h3>
                        <p className="text-muted-foreground text-sm xs:text-xs">
                          {c.subtitle}
                        </p>
                      </div>
                    </Element>
                  )
                })}

                {/* Bank account (not clickable) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: contacts.length * 0.08 }}
                  className="group flex items-start space-x-3 xs:space-x-2 p-2 rounded-lg"
                >
                  <div className="w-9 h-9 xs:w-8 xs:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 xs:w-4 xs:h-4 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-base xs:text-sm">Bank Account</h3>
                    <p className="text-muted-foreground text-sm xs:text-xs">BYD B PTY LTD</p>
                  </div>
                </motion.div>

              </div>

              <div className="flex flex-col items-end space-y-10">
                {/* intentionally left blank for layout symmetry */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
