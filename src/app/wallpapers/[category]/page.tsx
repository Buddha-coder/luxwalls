import { wallpapers } from "@/data/wallpapers";
import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import CategoryTabs from "@/components/wallpaper/CategoryTabs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  const categories = [...new Set(wallpapers.map((w) => w.category))];
  return categories.map((category) => ({ category }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = decodeURIComponent(params.category);
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const categoryExists = wallpapers.some((w) => w.category === category);

  if (!categoryExists) {
    return {
      title: "Category Not Found",
    };
  }

  const title = `${capitalizedCategory} Wallpapers - 4K & HD Downloads`;
  const description = `Download free premium ${category} wallpapers in 4K and HD. A curated collection for mobile and desktop, including abstract, AMOLED, and nature designs from LuxWalls.`;
  
  return {
    title,
    description,
    alternates: {
      canonical: `/wallpapers/${category}`,
    },
  };
}

export default function CategoryPage({
  params,
}: CategoryPageProps) {
  const category = decodeURIComponent(params.category);

  const filteredWallpapers = wallpapers.filter(
    (w) => w.category === category
  );

  if (filteredWallpapers.length === 0) {
    notFound();
  }

  return (
    <main className="w-full px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-headline font-semibold capitalize sm:text-4xl">
          {category} Wallpapers
        </h1>

        <p className="mb-8 text-muted-foreground max-w-2xl">
          Premium {category} wallpapers, curated to look beautiful on all your devices.
        </p>

        <CategoryTabs />

        <WallpapersGrid wallpapers={filteredWallpapers} />
      </div>
    </main>
  );
}
