import WallpaperCard from "./WallpaperCard";

interface WallpapersGridProps {
  wallpapers: string[];
  }

  export default function WallpapersGrid({ wallpapers }: WallpapersGridProps) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {wallpapers.map((src, index) => (
                      <WallpaperCard key={index} src={src} />
                            ))}
                                </div>
                                  );
                                  }