"use client";

import { motion } from "framer-motion";

export function AnimateIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a "luxury" feel
      }}
    >
      {children}
    </motion.div>
  );
}