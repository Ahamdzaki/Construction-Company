"use client"

import { motion } from "framer-motion"

// Animation variants
export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" as const } },
}

type AnimatedItemProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

export function AnimatedItem({ children, className = "", ...props }: AnimatedItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

