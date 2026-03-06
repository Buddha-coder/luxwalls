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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {wallpapers.map((wallpaper, index) => (
          <div 
            key={wallpaper.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Link 
              href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
              className="group relative block aspect-[9/16] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-2xl hover:shadow-primary/20"
            >
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover pointer-events-none transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                quality={85}
                priority={index < 4}
                draggable={false}
              />
              
              {/* Premium Frosted Glass Overlay (Dynamic Visibility) */}
              <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="relative overflow-hidden rounded-[1.8rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10">
                  {/* Internal blur layer for maximum glass effect */}
                  <div className="absolute inset-0 backdrop-blur-2xl bg-black/40" />
                  
                  <div className="relative z-10 space-y-1">
                    <p className="text-white text-xs font-bold truncate leading-tight tracking-tight">
                      {wallpaper.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                        View
                      </p>
                      <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury Vignette and Edge Highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] group-hover:border-white/10 transition-colors duration-700" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}