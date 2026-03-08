'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, y: 10 },
  enter: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.05
    } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { 
      duration: 0.25,
      ease: [0.23, 1, 0.32, 1]
    } 
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
