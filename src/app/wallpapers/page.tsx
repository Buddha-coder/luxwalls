import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import { wallpapers } from "@/data/wallpapers";
import CategoryTabs from "@/components/wallpaper/CategoryTabs";
export const metadata = {
  title: "Wallpapers",
  description:
    "Download premium luxury wallpapers for free. High-quality, responsive and optimized for every device."
};

export default function WallpapersPage() {
  return (
    <main className="w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
          Premium Wallpapers
        </h1>

        <p className="mb-6 text-muted-foreground">
          Browse high-quality luxury wallpapers by category.
        </p>

        <CategoryTabs />

        <WallpapersGrid wallpapers={wallpapers} />
      </div>
    </main>
  );
}
