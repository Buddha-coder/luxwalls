'use client';

import { Wallpaper } from "@/data/wallpapers";
import { EmptyState } from "@/components/ui/empty-state";
import WallpaperCard from "./WallpaperCard";

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
        {wallpapers.map((wallpaper) => (
          <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
        ))}
      </div>
    </div>
  );
}
