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

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = params.category;
  const exists = wallpapers.some((w) => w.category === category);

  if (!exists) {
    return {
      title: "Category Not Found",
    };
  }
  
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${capitalizedCategory} Wallpapers`,
    description: `Download premium ${category} wallpapers for free.`,
  };
}

export default function CategoryPage({
  params,
}: CategoryPageProps) {
  const category = params.category;

  const filtered = wallpapers.filter(
    (w) => w.category === category
  );

  if (filtered.length === 0) {
    notFound();
  }

  return (
    <main className="w-full px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-semibold capitalize sm:text-4xl">
          {category} Wallpapers
        </h1>

        <p className="mb-6 text-muted-foreground">
          Premium {category} wallpapers, looks beautiful on all devices
        </p>

        <CategoryTabs />

        <WallpapersGrid wallpapers={filtered} />
      </div>
    </main>
  );
}
