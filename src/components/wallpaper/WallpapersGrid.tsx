import { Wallpaper } from "@/data/wallpapers";
import WallpaperCard from "./WallpaperCard";

interface WallpapersGridProps {
  wallpapers: Wallpaper[];
}

export default function WallpapersGrid({ wallpapers }: WallpapersGridProps) {
  if (!wallpapers || wallpapers.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-muted-foreground">
          No wallpapers available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {wallpapers.map((wallpaper) => (
        <WallpaperCard key={wallpaper.id} wallpaper={wallpaper} />
      ))}
    </div>
  );
}
