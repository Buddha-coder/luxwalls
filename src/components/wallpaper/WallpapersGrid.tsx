'use client';

import Image from "next/image";
import Link from "next/link";
import { Wallpaper } from "@/data/wallpapers";
import { EmptyState } from "@/components/ui/empty-state";

interface WallpapersGridProps {
  wallpapers: Wallpaper[];
}

export default function WallpapersGrid({ wallpapers }: WallpapersGridProps) {
  if (!wallpapers || wallpapers.length === 0) {
    return (
      <EmptyState
        title="No Wallpapers Found"
        desc="Our curators are currently preparing new additions."
      />
    );
  }

  return (
    <div
      className="relative select-none pb-20"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
        {wallpapers.map((wallpaper, index) => (
          <div 
            key={wallpaper.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 50}ms` }}
          >
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
                priority={index < 4}
                draggable={false}
              />
              
              {/* Premium Label Overlay */}
              <div className="absolute inset-x-0 bottom-8 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-6">
                <p className="text-white text-[11px] font-bold tracking-tight mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] line-clamp-1">
                  {wallpaper.title}
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-px w-4 bg-primary/60" />
                  <p className="text-primary text-[9px] font-black tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Explore
                  </p>
                  <div className="h-px w-4 bg-primary/60" />
                </div>
              </div>

              {/* Luxury Vignette and Edge Highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 border border-white/5 rounded-[inherit] group-hover:border-white/10 transition-colors duration-700" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
