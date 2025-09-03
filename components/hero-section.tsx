"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-australian-home-exterior-with-clean-lines-a.png"
          alt="Modern Australian home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-100">
          Building Dreams Into Reality
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90 animate-fade-in-up animation-delay-200 animate-pulse">
          "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent
          execution."
        </p>
      </div>
    </section>
  )
}
