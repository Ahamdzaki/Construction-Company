"use client"

import type React from "react"
import { motion } from "framer-motion"

// Add, remove or rename videos here. Files live in /public/videos.
// (video-3.mp4 is left out because it is an exact duplicate of video-1.mp4.)
const videos = [
  { src: "/videos/video-1.mp4", poster: "/videos/poster-1.jpg", title: "Site Walkthrough" },
  { src: "/videos/video-2.mp4", poster: "/videos/poster-2.jpg", title: "Build Progress Tour" },
  { src: "/videos/video-4.mp4", poster: "/videos/poster-4.jpg", title: "Construction Update" },
  { src: "/videos/video-5.mp4", poster: "/videos/poster-5.jpg", title: "Home Nearing Completion" },
  { src: "/videos/video-6.mp4", poster: "/videos/poster-6.jpg", title: "On Site" },
]

// Only one video plays (and downloads) at a time
function pauseOthers(e: React.SyntheticEvent<HTMLVideoElement>) {
  document.querySelectorAll<HTMLVideoElement>("video[data-build-video]").forEach((v) => {
    if (v !== e.currentTarget) v.pause()
  })
}

export default function ConstructionVideos() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
          See Our Builds <span className="text-[#00A5E0]">In Action</span>
        </h2>
        <p className="text-sm md:text-base text-neutral-500 max-w-xl mx-auto">
          Take a walk through our current projects and see the quality that goes into every stage of the build.
        </p>
      </motion.div>

      {/* Videos — wraps 1 / 2 / 3 per row, last row centred */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6">
        {videos.map((video, i) => (
          <motion.div
            key={video.src}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: (i % 3) * 0.08 }}
          >
            <div className="overflow-hidden rounded-xl bg-black shadow-sm aspect-video">
              <video
                src={video.src}
                poster={video.poster}
                controls
                playsInline
                // Loads only the duration/size info up front (the files use +faststart, so this is small).
                // If Firefox shows "network error" again, change this back to preload="none".
                preload="metadata"
                onPlay={pauseOthers}
                className="w-full h-full object-cover"
                aria-label={video.title}
                data-build-video
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-neutral-900">{video.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
