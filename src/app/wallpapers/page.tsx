import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata = {
  title: "Wallpapers | LuxWalls",
  description: "Download premium luxury wallpapers for free.",
};

export default function WallpapersPage() {
  return (
    <main className="w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
          Premium Wallpapers
        </h1>

        <p className="mb-10 text-muted-foreground">
          High-quality luxury wallpapers, optimized for mobile and desktop.
        </p>

        <WallpapersGrid wallpapers={PlaceHolderImages.map((img) => img.imageUrl)} />
      </div>
    </main>
  );
}