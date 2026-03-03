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
        desc="It seems there are no wallpapers to display right now."
      />
    );
  }

  return (
    <div
      className="relative select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {wallpapers.map((wallpaper, index) => (
          <AnimateIn key={wallpaper.id}>
            <Link 
              href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
              className="group relative block aspect-[9/16] rounded-2xl overflow-hidden bg-muted border border-white/5 hover:border-primary/50 transition-colors"
            >
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={85}
                draggable={false}
              />
              {/* Overlay with subtle info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm font-medium truncate">{wallpaper.title}</p>
                <p className="text-primary text-xs font-semibold">View Details</p>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
