"use client";

import React, { useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import LuxuryButton from "@/components/ui/LuxuryButton";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const heroBgImage = PlaceHolderImages.find(p => p.id === 'hero-bg');
  const heroPreviewImage = PlaceHolderImages.find(p => p.id === 'hero-preview');

  // Mouse Movement Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Spring config to make movement feel "heavy" and "expensive"
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Define movement layers (Negative value = closer/faster, Positive = deeper/slower)
  const layer2X = useTransform(smoothX, [-500, 500], [-40, 40]);
  const layer2Y = useTransform(smoothY, [-500, 500], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[100vh] w-full overflow-hidden bg-executive-black flex items-center justify-center"
    >
      {/* LAYER 1: Deep Background Image (Static) */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center opacity-40 scale-110"
      >
        {heroBgImage && (
            <Image 
            src={heroBgImage.imageUrl}
            alt={heroBgImage.description}
            fill
            priority
            className="object-cover"
            data-ai-hint={heroBgImage.imageHint}
            />
        )}
      </div>

      {/* LAYER 2: Floating Elements / Wallpaper Preview (Moves faster) */}
      <motion.div 
        style={{ x: layer2X, y: layer2Y }}
        className="absolute z-10 w-[80%] h-[60%] border border-champagne-gold/10 rounded-lg overflow-hidden shadow-2xl"
        data-hover
      >
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-executive-black/80 z-20" />
         {heroPreviewImage && (
            <Image 
            src={heroPreviewImage.imageUrl} 
            alt={heroPreviewImage.description}
            fill
            className="object-cover opacity-60"
            data-ai-hint={heroPreviewImage.imageHint}
            />
         )}
      </motion.div>

      {/* FOREGROUND: Content (Stays relatively centered or moves slightly opposite) */}
      <div className="relative z-30 text-center flex flex-col items-center gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-soft-ivory text-6xl md:text-8xl font-headline tracking-tighter mb-4">
            LUX<span className="text-champagne-gold">WALLS</span>
          </h1>
          <p className="text-soft-ivory/60 text-lg md:text-xl font-light max-w-2xl mx-auto tracking-widest uppercase">
            Curating Digital Opulence for your screens
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <LuxuryButton text="Enter the Gallery" onClick={() => router.push("/wallpapers")} />
        </motion.div>
      </div>

      {/* Decorative Gold Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-champagne-gold to-transparent" />
    </section>
  );
};
