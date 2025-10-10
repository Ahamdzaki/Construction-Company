// components/animated-gallery-grid.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";

const Bed = dynamic(() => import("lucide-react").then(m => ({ default: m.Bed })), { ssr: false });
const Bath = dynamic(() => import("lucide-react").then(m => ({ default: m.Bath })), { ssr: false });
const Car = dynamic(() => import("lucide-react").then(m => ({ default: m.Car })), { ssr: false });
const Home = dynamic(() => import("lucide-react").then(m => ({ default: m.Home })), { ssr: false });

/* --- Animation Variants --- */
const detailsContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: { when: "beforeChildren", staggerChildren: 0.15, delayChildren: 0.08 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

// ✨ Enhanced: fade + scale + deep rise for icons
const riseStat = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut" as const,
    },
  },
};

export type Project = {
  id: number;
  title: string;
  category?: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  carSpaces?: number;
  size?: string;
  price?: string;
};

export default function AnimatedGalleryGrid({ projects }: { projects: Project[] }) {
  if (!projects) {
    if (process.env.NODE_ENV === "development") {
      throw new Error(
        "AnimatedGalleryGrid: required prop `projects` is missing. Pass an array of projects to <AnimatedGalleryGrid projects={projects} />"
      );
    } else return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <Link
            href={{
              pathname: `/projects/${project.id}`,
              query: {
                title: project.title,
                category: project.category,
                price: project.price,
                image: project.image,
                bedrooms: project.bedrooms,
                bathrooms: project.bathrooms,
                carSpaces: project.carSpaces,
                size: project.size,
              },
            }}
            className="block"
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[4/3] min-h-[160px] sm:min-h-[180px] md:min-h-[220px] overflow-hidden bg-gray-100">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover w-full h-full block group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={85}
              />
            </div>

            {/* DETAILS (fade up separately) */}
            <motion.div
              className="px-3 py-3 bg-gray-50 text-center"
              variants={detailsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
            >
              <motion.h3 className="text-sm font-semibold truncate" variants={rise}>
                {project.title}
              </motion.h3>

              <motion.p className="text-xs text-muted-foreground truncate mt-1" variants={rise}>
                {project.category}
              </motion.p>

              {project.price && (
                <motion.div className="mt-2" variants={rise}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-white">
                    {project.price}
                  </span>
                </motion.div>
              )}

              {/* Stats Icons */}
              <motion.div
                className="flex justify-center gap-3 mt-3 text-xs"
                variants={statsContainer}
              >
                {project.bedrooms !== undefined && (
                  <motion.span className="flex items-center gap-1" variants={riseStat}>
                    <Bed className="w-4 h-4" />
                    {project.bedrooms}
                  </motion.span>
                )}
                {project.bathrooms !== undefined && (
                  <motion.span className="flex items-center gap-1" variants={riseStat}>
                    <Bath className="w-4 h-4" />
                    {project.bathrooms}
                  </motion.span>
                )}
                {project.carSpaces !== undefined && (
                  <motion.span className="flex items-center gap-1" variants={riseStat}>
                    <Car className="w-4 h-4" />
                    {project.carSpaces}
                  </motion.span>
                )}
                {project.size && (
                  <motion.span className="flex items-center gap-1" variants={riseStat}>
                    <Home className="w-4 h-4" />
                    {project.size}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          </Link>
        </article>
      ))}
    </div>
  );
}
