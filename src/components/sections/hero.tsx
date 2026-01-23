"use client";
import { motion } from "framer-motion";
import LuxuryButton from "@/components/ui/LuxuryButton";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-champagne-gold/5 rounded-full blur-[120px]" />

      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-champagne-gold tracking-[0.3em] uppercase text-sm mb-4"
      >
        Exquisite Aesthetics for your screens
      </motion.span>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-8xl font-light tracking-tighter text-soft-ivory mb-8"
      >
        Elevate Your <br /> 
        <span className="italic font-headline text-champagne-gold">Digital Space</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <LuxuryButton text="Explore Collection" />
      </motion.div>
    </section>
  );
};
