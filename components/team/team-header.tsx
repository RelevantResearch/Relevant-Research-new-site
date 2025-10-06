"use client";

import { motion } from "framer-motion";
import { textVariants } from "@/lib/animations";

/**
 * Props for the TeamHeader component
 */
interface TeamHeaderProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly className?: string;
}

/**
 * Header component for the team page with animated title and description
 */
export function TeamHeader({
  title = "Meet Our Team",
  subtitle = "Our expert team brings together diverse skills in web development, data analysis, and public impact strategy.",
  className,
}: TeamHeaderProps) {
  return (
    <div className={`space-y-4 text-center ${className || ""}`}>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Meet Our <span className="gradient-text">Team</span>
      </motion.h1>

      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
