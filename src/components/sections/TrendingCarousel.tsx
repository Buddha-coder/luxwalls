'use client';

import Image from "next/image";
import Link from "next/link";
import { wallpapers } from "@/data/wallpapers";
import { Container } from "@/components/layout/container";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function TrendingCarousel() {
  const trendingWallpapers = wallpapers.slice(0, 10);

  return (
    <section className="w-full pt-28 pb-10 md:pt-44 md:pb-16 bg-black overflow-hidden border-t border-white/5">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <Zap className="w-2.5 h-2.5 text-primary" />
              <span className="text-[7px] font-black uppercase tracking-[0.4em] text-primary/80">In High Demand</span>
            </div>
            <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tight">
              Trending Archive
            </h2>
          </div>
          <Link href="/wallpapers" className="text-[7px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-all duration-500 pb-1 border-b border-white/10 mb-1">
            Browse All
          </Link>
        </div>
      </Container>

      {/* Infinite Loop Track */}
      <div className="relative">
        {/* Soft Refractive Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none" />

        <div className="flex overflow-hidden select-none">
          <motion.div 
            className="flex gap-4 py-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Elegant, slow movement
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
            whileHover={{ transition: { duration: 120 } }} // Decelerate on hover for elite UX
          >
             {/* Marquee duplication for seamless loop */}
             {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  {trendingWallpapers.map((wallpaper) => (
                    <Link
                      key={`${i}-${wallpaper.id}`}
                      href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
                      className="group relative flex-shrink-0 w-[140px] md:w-[190px] aspect-[9/16] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/40 hover:scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                    >
                      <Image
                        src={wallpaper.src}
                        alt={wallpaper.title}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                        sizes="(max-width: 768px) 140px, 190px"
                        draggable={false}
                      />
                      
                      {/* Atmospheric Category Label */}
                      <div className="absolute inset-x-0 bottom-0 p-3 translate-y-4 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100 z-20">
                        <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-3 py-1 text-center shadow-2xl">
                           <p className="text-[7px] font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
                             {wallpaper.category}
                           </p>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                      <div className="absolute inset-0 border border-white/5 rounded-[inherit] pointer-events-none z-30" />
                    </Link>
                  ))}
                </div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
