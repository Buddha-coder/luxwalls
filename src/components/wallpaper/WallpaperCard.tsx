"use client";

import Image from "next/image";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { downloadImage } from "@/lib/download-image";
import { Wallpaper } from "@/data/wallpapers";
import { AnimateIn } from "@/components/ui/animate-in";

interface WallpaperCardProps {
  wallpaper: Wallpaper;
}

export default function WallpaperCard({ wallpaper }: WallpaperCardProps) {
  return (
    <AnimateIn>
      <div className="glass rounded-[2rem] overflow-hidden p-1 bg-white/[0.02]">
        <div className="group relative aspect-[9/16] overflow-hidden rounded-[1.8rem] border border-white/5 bg-muted transition-all duration-700 hover:shadow-2xl">
          <Image
            src={wallpaper.src}
            alt={`${wallpaper.title} - ${wallpaper.category} wallpaper by LuxWalls`}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
          />

          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="mb-6 translate-y-4 transition-all duration-500 group-hover:translate-y-0">
              <LuxuryButton
                size="sm"
                className="glass border-white/20 px-8 py-2.5 rounded-full hover:bg-white/10"
                onClick={() =>
                  downloadImage(
                    wallpaper.src,
                    `luxwalls-${wallpaper.category}-${wallpaper.id}.jpg`
                  )
                }
              >
                Download
              </LuxuryButton>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
