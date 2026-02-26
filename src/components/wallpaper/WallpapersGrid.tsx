
import Image from "next/image";
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
        desc="It seems there are no wallpapers to display right now."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {wallpapers.map((wallpaper) => (
        <div key={wallpaper.id} className="relative aspect-[9/16] rounded-2xl overflow-hidden group">
          <Image
            src={wallpaper.image}
            alt={wallpaper.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
            quality={85}
            placeholder="blur"
            blurDataURL="/blur-placeholder.png"
          />
        </div>
      ))}
    </div>
  );
}
