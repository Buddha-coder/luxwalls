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
    <div className="group relative overflow-hidden rounded-2xl border border-border">
      <div className="relative aspect-[9/16] w-full">
        <Image
          src={wallpaper.src}
          alt={wallpaper.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
      </div>

      <div className="absolute inset-0 flex items-end justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="mb-4">
          <LuxuryButton
            size="sm"
            onClick={() =>
              downloadImage(
                wallpaper.src,
                `luxwalls-wallpaper-${wallpaper.id}.jpg`
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
