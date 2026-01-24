"use client";

import Image from "next/image";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { downloadImage } from "@/lib/download-image";

interface WallpaperCardProps {
  src: string;
  index: number;
}

export default function WallpaperCard({ src, index }: WallpaperCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border">
      <div className="relative aspect-[9/16] w-full">
        <Image
          src={src}
          alt="Luxury wallpaper"
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
              downloadImage(src, `luxwalls-wallpaper-${index + 1}.jpg`)
            }
          >
            Download
          </LuxuryButton>
        </div>
      </div>
    </div>
  );
}
