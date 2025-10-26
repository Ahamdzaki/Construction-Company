"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Lazy load icons for better performance
const Menu = dynamic(() => import("lucide-react").then(mod => ({ default: mod.Menu })), { ssr: false })
const X = dynamic(() => import("lucide-react").then(mod => ({ default: mod.X })), { ssr: false })

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true) // Start visible at top
  const lastScrollY = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Always visible at the top
      if (currentScrollY < 10) {
        setIsVisible(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        lastScrollY.current = currentScrollY
        return
      }
      
      if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show navbar briefly
        setIsVisible(true)
        
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        
        // Hide navbar after 3 seconds if no cursor movement
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        // Scrolling down - hide navbar
        setIsVisible(false)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    setIsVisible(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleMouseLeave = () => {
    // Only hide if scrolled past top
    if (window.scrollY > 10) {
      setIsVisible(false)
    }
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm transition-transform duration-300"
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos.png" 
              alt="BYD B Logo" 
              width={180} 
              height={80}
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground font-medium transition-colors duration-300 hover:text-primary group"
              >
                {item.label}
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground flex items-center justify-center p-2 xs:p-2.5 sm:p-3 rounded-full transition-all"
              aria-label="Open menu"
            >
              {isOpen ? (
                <X className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
              ) : (
                <Menu className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
