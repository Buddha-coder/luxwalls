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
        className="group relative block aspect-[9/16] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-neutral-900 border border-white/5 hover:border-primary/30 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl hover:shadow-primary/20"
      >
        <Image
          src={wallpaper.src}
          alt={wallpaper.title}
          fill
          className="object-cover pointer-events-none transition-all duration-[1s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          draggable={false}
        />
        
        {/* Refined Minimalist Hover Label */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out z-10 flex flex-col items-center justify-end pb-10 px-4 text-center">
          <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <p className="text-[10px] font-medium text-white/50 tracking-[0.2em] leading-relaxed line-clamp-2 uppercase">
              {wallpaper.title}
            </p>
          </div>
        </div>
        
        <div className="absolute inset-0 border border-white/5 rounded-[inherit] group-hover:border-white/10 transition-colors duration-400 z-20" />
      </Link>
    </AnimateIn>
  );
}
