"use client";

import Image from "next/image";
import Link from "next/link";
import { Wallpaper } from "@/data/wallpapers";
import { AnimateIn } from "@/components/ui/animate-in";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

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
        
        {/* Clean Luxury Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end justify-center pb-10">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <LuxuryButton size="sm" className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-2 font-bold uppercase tracking-widest text-[10px]">
              Explore
            </LuxuryButton>
          </div>
        </div>
        
        <div className="absolute inset-0 border border-white/5 rounded-[inherit] group-hover:border-white/10 transition-colors duration-700 z-20" />
      </Link>
    </AnimateIn>
  );
}
