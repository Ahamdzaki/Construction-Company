"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

// Images for background slideshow
const imageSources = [
  "/main.png",
 "/exterior-5.jpg",
  "/exterior-1.jpg",
]

// slideshow timing (ms)
const SLIDE_DURATION = 6000 // time each slide is visible (adjust as you like)
const FADE_DURATION = 800 // fade length (ms)

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const text = "Building Dreams Into Reality"
  const mounted = useRef(false)

  // Preload images (best practice to avoid flicker)
  useEffect(() => {
    imageSources.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  // Slideshow interval (uses a ref-safe pattern)
  useEffect(() => {
    mounted.current = true
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageSources.length)
    }, SLIDE_DURATION)
    return () => {
      mounted.current = false
      clearInterval(id)
    }
  }, [])

  // Typewriter effect for <h1>
  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 120 // ms per char
    const pauseDuration = 2200 // pause at end

    let timeoutId: number | undefined

    const type = () => {
      if (!mounted.current) return
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
        timeoutId = window.setTimeout(type, typingSpeed)
      } else {
        // Wait then restart
        timeoutId = window.setTimeout(() => {
          currentIndex = 0
          type()
        }, pauseDuration)
      }
    }

    type()
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="relative min-h-[70vh] xs:min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-[95vh] xl:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background wrapper with fallback background to prevent white flash */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-slate-900">
        {/* All slides mounted — each positioned absolutely and crossfaded by opacity */}
        {imageSources.map((src, i) => {
          const isActive = i === index
          return (
            <motion.div
              key={src + "-" + i}
              aria-hidden={!isActive}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: FADE_DURATION / 1000, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{ willChange: "opacity" }}
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === 0} // prioritize first slide; others are preloaded above
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                placeholder="empty" // avoid blur flash
              />
              {/* subtle overlay for consistent tone (optional) */}
              <div className="absolute inset-0 bg-primary/30"></div>
            </motion.div>
          )
        })}
      </div>

      {/* Content (on top of slideshow) */}
      <div className="relative z-10 text-center text-white max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-balance whitespace-pre inline-block leading-tight">
          {displayedText}
          <span className="blinking-cursor">|</span>
        </h1>
      </div>

      {/* Blinking cursor style */}
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
