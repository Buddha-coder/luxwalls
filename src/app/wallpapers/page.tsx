import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import { wallpapers } from "@/data/wallpapers";
import CategoryTabs from "@/components/wallpaper/CategoryTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore All Wallpapers - LuxWalls Collection",
  description:
    "Browse the entire collection of premium luxury wallpapers from LuxWalls. Find the perfect high-resolution background for your mobile or desktop screen.",
  alternates: {
    canonical: "/wallpapers",
  },
};

export default function WallpapersPage() {
  return (
    <main className="w-full px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-headline font-semibold sm:text-4xl">
          All Premium Wallpapers
        </h1>

        <p className="mb-8 text-muted-foreground max-w-2xl">
          Discover the perfect backdrop for your device from our complete
          collection. Browse all categories to find a high-resolution wallpaper
          that matches your style.
        </p>

        <CategoryTabs />

        <WallpapersGrid wallpapers={wallpapers} />
      </div>
    </main>
  );
}
