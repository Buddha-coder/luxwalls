"use client";

import Image from "next/image";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { downloadImage } from "@/lib/download-image";
import { Wallpaper } from "@/data/wallpapers";

interface WallpaperCardProps {
  wallpaper: Wallpaper;
}

export default function WallpaperCard({ wallpaper }: WallpaperCardProps) {
  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-muted transition-transform duration-300 hover:-translate-y-1">
      <Image
        src={wallpaper.src}
        alt={`${wallpaper.title} - ${wallpaper.category} wallpaper by LuxWalls`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        priority={false}
      />

      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="mb-5 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <LuxuryButton
            size="sm"
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
  );
}
