"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const LuxuryButton: React.FC<LuxuryButtonProps> = ({ text, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden px-8 py-4 rounded-sm", // Rounded-sm for sharp but not harsh edges
        "border border-soft-ivory/20", // Subtle border
        "bg-soft-ivory/5 backdrop-blur-md", // The Glassmorphic Base
        "transition-colors duration-300",
        className
      )}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }} // Subtle click press effect
    >
      {/* 1. The Gold Reveal Layer (Hidden by default, slides in) */}
      <motion.div
        className="absolute inset-0 bg-champagne-gold z-0"
        variants={{
          initial: { x: "-100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Custom smooth easing
      />

      {/* 2. The Shimmer Effect (Optional: Adds a light reflection passing through) */}
      <motion.div
        className="absolute inset-0 bg-white/20 z-0"
        variants={{
          initial: { x: "-100%", opacity: 0 },
          hover: { x: "100%", opacity: 1 },
        }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      />

      {/* 3. The Text Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span 
          className="font-medium tracking-[0.2em] uppercase text-sm text-soft-ivory transition-colors duration-300 group-hover:text-executive-black"
        >
          {text}
        </span>
        
        {/* Optional Arrow Icon that moves */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-soft-ivory transition-colors duration-300 group-hover:text-executive-black group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </motion.button>
  );
};

export default LuxuryButton;
