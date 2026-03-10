import { wallpapers } from "@/data/wallpapers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WallpaperView from "@/components/wallpaper/WallpaperView";

interface WallpaperPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

// Seeded pseudo-random number generator
function seededRandom(seed: number) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Seeded shuffle function
function seededShuffle(array: any[], seed: number) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    const random = () => seededRandom(seed + currentIndex);

    while (0 !== currentIndex) {
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export async function generateStaticParams() {
  const params = [];
  
  for (const wallpaper of wallpapers) {
    params.push({
      category: wallpaper.category,
      id: wallpaper.id.toString(),
    });
  }
  return params;
}

export async function generateMetadata({ params }: WallpaperPageProps): Promise<Metadata> {
  const { id } = await params;
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

export default async function WallpaperDetailPage({ params }: WallpaperPageProps) {
  const { id, category } = await params;
  const wallpaper = wallpapers.find((w) => w.id.toString() === id);
  if (!wallpaper) notFound();

  // Pre-shuffle related wallpapers on the server to prevent hydration mismatches
  const relatedPool = wallpapers.filter(
    (w) => w.category === category && w.id.toString() !== id
  );
  
  const seed = parseInt(id, 10);
  const related = seededShuffle([...relatedPool], seed).slice(0, 4);

  return <WallpaperView wallpaper={wallpaper} related={related} />;
}
