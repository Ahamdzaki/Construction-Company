"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const imageSources = [
  "/main.png",
  "/exterior-5.jpg",
  "/exterior-1.jpg",
]

const SLIDE_DURATION = 6000
const FADE_DURATION = 800

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const text = "Building Dreams Into Reality"
  const mounted = useRef(false)

  useEffect(() => {
    imageSources.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

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

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 120
    const pauseDuration = 2200
    let timeoutId: number | undefined

    const type = () => {
      if (!mounted.current) return
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
        timeoutId = window.setTimeout(type, typingSpeed)
      } else {
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
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-slate-900">
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
                priority={i === 0}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center 35%" }}
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-black/55" />
            </motion.div>
          )
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm uppercase tracking-[0.15em] font-medium text-amber-400 mb-4"
        >
          Licensed Builder BC106152 · 13+ Years Experience
        </motion.p>

        {/* Typewriter headline */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
          {displayedText}
          <span className="blinking-cursor">|</span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto mt-4"
        >
          From custom new builds to complete renovations, we bring your vision to life with quality craftsmanship you can trust.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-900 rounded-lg font-semibold text-base transition-colors w-full sm:w-auto text-center"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/gallery"
            className="px-8 py-4 bg-transparent border-2 border-white/40 hover:bg-white/10 text-white rounded-lg font-medium text-base transition-colors w-full sm:w-auto text-center"
          >
            View Our Projects
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
