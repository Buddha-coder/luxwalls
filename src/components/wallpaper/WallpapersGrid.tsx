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
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <Link 
              href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
              className="group relative block aspect-[9/16] rounded-[2rem] overflow-hidden bg-muted border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-2xl hover:shadow-primary/10"
            >
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover pointer-events-none transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                quality={85}
                priority={index < 4}
                draggable={false}
              />
              
              {/* Premium Frosted Glass Overlay */}
              <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="glass rounded-2xl p-4 shadow-2xl ring-1 ring-white/10">
                  <div className="space-y-1">
                    <p className="text-white text-xs font-semibold truncate leading-tight tracking-tight">
                      {wallpaper.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-primary text-[10px] font-bold tracking-[0.15em] uppercase">
                        View Details
                      </p>
                      <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Edge highlight for luxury feel */}
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none group-hover:border-white/20 transition-colors duration-700" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
