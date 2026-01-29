import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import { wallpapers } from "@/data/wallpapers";
import CategoryTabs from "@/components/wallpaper/CategoryTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Wallpapers - Premium 4K & HD Downloads",
  description:
    "Browse and download the full collection of premium luxury wallpapers from LuxWalls for free. High-quality, responsive and optimized for every device.",
  alternates: {
    canonical: "/wallpapers",
  }
};

export default function WallpapersPage() {
  return (
    <main className="w-full px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-headline font-semibold sm:text-4xl">
          All Premium Wallpapers
        </h1>

        <p className="mb-8 text-muted-foreground">
          Browse high-quality luxury wallpapers by category.
        </p>

        <CategoryTabs />

        <WallpapersGrid wallpapers={wallpapers} />
      </div>
    </main>
  );
}
