"use client";

import { motion } from "framer-motion";

export function AnimateIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1], // Faster, smoother "GOAT" bezier
      }}
    >
      {children}
    </motion.div>
  );
}
