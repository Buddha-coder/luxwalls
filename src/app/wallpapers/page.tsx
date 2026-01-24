import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { wallpapers } from "@/data/wallpapers";
export const metadata = {
  title: "Wallpapers",
  description:
    "Download premium luxury wallpapers for free. High-quality, mobile-first, and optimized for every device.",
};

export default function WallpapersPage() {
  return (
    <main className="w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
            Premium Wallpapers
          </h1>
          <p className="text-muted-foreground">
            Handpicked luxury wallpapers in ultra-high resolution. Free to
            download, optimized for mobile and desktop.
          </p>
        </header>

        <WallpapersGrid wallpapers={wallpapers.map(w => w.src)} />
      </div>
    </main>
  );
}