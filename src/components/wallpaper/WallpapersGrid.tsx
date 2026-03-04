'use client';

import Image from "next/image";
import Link from "next/link";
import { Wallpaper } from "@/data/wallpapers";
import { EmptyState } from "@/components/ui/empty-state";
import { AnimateIn } from "@/components/ui/animate-in";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {wallpapers.map((wallpaper, index) => (
          <AnimateIn key={wallpaper.id}>
            <Link 
              href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
              className="group relative block aspect-[9/16] rounded-2xl overflow-hidden bg-muted border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-primary/5"
            >
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover pointer-events-none transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                // Optimized sizes for grid performance
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                quality={80}
                priority={index < 4} // Priority for the first row
                draggable={false}
              />
              
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <div className="space-y-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-semibold truncate leading-none">
                    {wallpaper.title}
                  </p>
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase">
                    View Asset
                  </p>
                </div>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}