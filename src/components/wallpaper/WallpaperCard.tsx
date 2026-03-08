"use client";

import Image from "next/image";
import Link from "next/link";
import { Wallpaper } from "@/data/wallpapers";
import { AnimateIn } from "@/components/ui/animate-in";

interface WallpaperCardProps {
  wallpaper: Wallpaper;
}

export default function WallpaperCard({ wallpaper }: WallpaperCardProps) {
  return (
    <AnimateIn>
      <Link 
        href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
        className="group relative block aspect-[9/16] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-neutral-900 border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-2xl hover:shadow-primary/20"
      >
        <Image
          src={wallpaper.src}
          alt={wallpaper.title}
          fill
          className="object-cover pointer-events-none transition-all duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          draggable={false}
        />
        
        {/* Refined Luxury Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-end pb-12 px-6 text-center">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1.5">
            <p className="text-[11px] font-bold text-white uppercase tracking-[0.2em] line-clamp-1">
              {wallpaper.title}
            </p>
            <div className="h-px w-8 bg-primary/30 mx-auto" />
            <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">
              Explore
            </p>
          </div>
        </div>
        
        <div className="absolute inset-0 border border-white/5 rounded-[inherit] group-hover:border-white/10 transition-colors duration-700 z-20" />
      </Link>
    </AnimateIn>
  );
}
