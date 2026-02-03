import { wallpapers } from "@/data/wallpapers";
import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import CategoryTabs from "@/components/wallpaper/CategoryTabs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categoryIntros } from "@/lib/category-intros";

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

  const title = `Discover ${capitalizedCategory} Wallpapers - LuxWalls`;
  const description = `Explore a curated collection of premium ${category} wallpapers from LuxWalls. Download stunning, high-resolution designs for your mobile and desktop screens for free.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/wallpapers/${category}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category);

  const introText =
    categoryIntros[category] ||
    `Premium ${category} wallpapers, curated to look beautiful on all your devices.`;

  const filteredWallpapers = wallpapers.filter((w) => w.category === category);

  if (filteredWallpapers.length === 0) {
    notFound();
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";

  const imageObjectLd = filteredWallpapers.map((wallpaper) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${baseUrl}${wallpaper.src}`,
    license: `${baseUrl}/terms`,
    acquireLicensePage: `${baseUrl}/terms`,
    creditText: "LuxWalls",
    creator: {
      "@type": "Organization",
      name: "LuxWalls",
    },
    copyrightNotice: "© LuxWalls. All rights reserved.",
    name: wallpaper.title,
    description: `Download the '${wallpaper.title}' wallpaper from the ${wallpaper.category} collection. High-resolution luxury wallpaper for your device.`,
  }));

  return (
    <main className="w-full px-4 py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectLd) }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-headline font-semibold capitalize sm:text-4xl">
            {category} Wallpapers
          </h1>

          <p className="max-w-2xl text-muted-foreground">{introText}</p>
        </div>

        <CategoryTabs />

        <WallpapersGrid wallpapers={filteredWallpapers} />
      </div>
    </main>
  );
}
