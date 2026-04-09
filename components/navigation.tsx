"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logos.png"
              alt="BYD B Logo"
              width={180}
              height={80}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    active ? "text-[#00A5E0]" : "text-neutral-700 hover:text-[#00A5E0]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#00A5E0] transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold rounded-lg px-4 py-2 text-sm"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-neutral-700"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Image src="/logos.png" alt="BYD B" width={120} height={50} className="h-8 w-auto" />
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="flex flex-col px-6 py-4 gap-1">
                {navItems.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                        active
                          ? "bg-[#e6f7fd] text-[#007aa8]"
                          : "text-neutral-700 hover:bg-neutral-50 hover:text-[#00A5E0]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
              <div className="px-6 pt-2 pb-6 flex flex-col gap-3 border-t mt-2">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get a Free Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="tel:+61410664649" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    0410 664 649
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}
