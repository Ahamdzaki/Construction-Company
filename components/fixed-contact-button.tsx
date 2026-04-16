"use client"

import type React from "react"
import { Mail, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { contact, socials } from "@/lib/data/content"

const whatsappHref = socials.find((s) => s.label === "WhatsApp")?.href ?? contact.phoneHref

export default function FixedContactButton() {
  const [showCopied, setShowCopied] = useState(false)

  const handleCallClick = (e: React.MouseEvent) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (!isMobile) {
      e.preventDefault()
      navigator.clipboard.writeText(contact.phone).then(() => {
        setShowCopied(true)
        setTimeout(() => setShowCopied(false), 2000)
      })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-green-600 hover:bg-green-700"
          asChild
        >
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </Button>

        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
          asChild
        >
          <a href={contact.emailHref} className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Email Us</span>
          </a>
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground relative"
          onClick={handleCallClick}
          asChild
        >
          <a href={contact.phoneHref} className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Call Us</span>
          </a>
        </Button>

        {showCopied && (
          <div className="absolute bottom-full right-0 mb-2 bg-green-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
            Phone number copied!
          </div>
        )}
      </div>
    </div>
  )
}
