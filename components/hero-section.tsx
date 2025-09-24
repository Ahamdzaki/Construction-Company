"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

// Image motion variants
const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

// Text fade-in variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Fade variants for slideshow
const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

// Images for background slideshow
const imageSources = [
  "/modern-australian-home-exterior-with-clean-lines-a.png",
  "/exterior-1.jpg",
  "/Exterior-5.jpg",
  "/main.png",
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const text = "Building Dreams Into Reality"

  // Slideshow effect
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageSources.length)
    }, 10000) // 10 seconds per slide for slower slideshow
    return () => clearInterval(id)
  }, [])

  // Typewriter effect for <h1>
  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 200 // slower: 200ms per character
    const pauseDuration = 2500 // longer pause at end of sentence

    const type = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
        setTimeout(type, typingSpeed)
      } else {
        // Wait before restarting
        setTimeout(() => {
          currentIndex = 0
          type()
        }, pauseDuration)
      }
    }

    type()
  }, [])

  return (
    <section className="relative min-h-[70vh] xs:min-h-[80vh] sm:min-h-[90vh] md:min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // slower entrance
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 3.0, ease: "easeInOut" }} // slower fade
            >
              <Image
                src={imageSources[index]}
                alt="Modern Australian home"
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="(min-width: 1280px) 100vw, (min-width: 1024px) 100vw, (min-width: 768px) 100vw, 100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-primary/40"></div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 xs:px-6 sm:px-8"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Typewriter <h1> */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:6xl font-bold mb-4 xs:mb-5 sm:mb-6 text-balance whitespace-pre inline-block">
          {displayedText}
          <span className="blinking-cursor">|</span>
        </h1>
        <p className="text-lg xs:text-xl sm:text-2xl mb-6 xs:mb-7 sm:mb-8 text-balance opacity-90">
          "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent
          execution."
        </p>
      </motion.div>

      {/* Blinking cursor style */}
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
