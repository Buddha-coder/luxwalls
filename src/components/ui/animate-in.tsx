"use client";

import { motion } from "framer-motion";

export function AnimateIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Slower, more elegant entrance
      }}
    >
      {children}
    </motion.div>
  );
}
