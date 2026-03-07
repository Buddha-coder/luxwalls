import { wallpapers } from "@/data/wallpapers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WallpaperView from "@/components/wallpaper/WallpaperView";

interface WallpaperPageProps {
  params: {
    category: string;
    id: string;
  };
}

export async function generateStaticParams() {
  return wallpapers.map((w) => ({
    category: w.category,
    id: w.id.toString(),
  }));
}

export function generateMetadata({ params }: WallpaperPageProps): Metadata {
  const { id } = params;
  const wallpaper = wallpapers.find((w) => w.id.toString() === id);
  if (!wallpaper) return { title: "Wallpaper Not Found" };

  return {
    title: `${wallpaper.title} - Download ${wallpaper.resolution || "4K"} Luxury Wallpaper`,
    description: wallpaper.description || `Download the high-resolution ${wallpaper.title} wallpaper from LuxWalls. Perfect for ${wallpaper.category} fans and minimalist setups. 100% Free.`,
    openGraph: {
      images: [wallpaper.src],
    },
  };
}

export default function WallpaperDetailPage({ params }: WallpaperPageProps) {
  const { id } = params;
  const wallpaper = wallpapers.find((w) => w.id.toString() === id);
  if (!wallpaper) notFound();

  return <WallpaperView wallpaper={wallpaper} />;
}
