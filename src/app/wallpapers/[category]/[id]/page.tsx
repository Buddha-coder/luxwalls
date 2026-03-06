import { wallpapers } from "@/data/wallpapers";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Download, Eye, Calendar, HardDrive, Palette, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import SmartDownloadModule from "@/components/wallpaper/SmartDownloadModule";
import type { Metadata } from "next";

interface WallpaperPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  return wallpapers.map((w) => ({
    category: w.category,
    id: w.id.toString(),
  }));
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
  const { id } = await params;
  const wallpaper = wallpapers.find((w) => w.id.toString() === id);
  if (!wallpaper) notFound();

  // Engagement logic: Shuffle related wallpapers within the same category
  const relatedPool = wallpapers.filter(
    (w) => w.category === wallpaper.category && w.id !== wallpaper.id
  );
  
  const related = [...relatedPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";

  return (
    <div className="min-h-screen bg-background pb-20 pt-32 md:pt-44">
      {/* Immersive Background Atmosphere */}
      <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden opacity-30 blur-[120px] pointer-events-none scale-150">
        <Image
          src={wallpaper.src}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Visual (Left) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="relative aspect-[9/16] w-full max-h-[85vh] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 group">
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Metadata & Actions (Right) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <Link href={`/wallpapers/${wallpaper.category}`} className="inline-flex items-center text-primary text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {wallpaper.category} Collection
                </Link>
                <h1 className="text-3xl md:text-4xl font-headline font-bold leading-tight text-white">
                  {wallpaper.title}
                </h1>
                <div className="flex flex-wrap gap-2 pt-2">
                  {wallpaper.tags?.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="bg-white/5 text-foreground/80 border-white/10 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="grid grid-cols-3 gap-3">
                <InfoCard icon={<Eye className="w-4 h-4" />} label="Views" value={wallpaper.views?.toLocaleString() || "1.2K"} />
                <InfoCard icon={<Download className="w-4 h-4" />} label="Saved" value={wallpaper.downloads?.toLocaleString() || "850"} />
                <InfoCard icon={<HardDrive className="w-4 h-4" />} label="Size" value={wallpaper.fileSize || "2.8MB"} />
              </div>

              {/* Smart Download Module */}
              <SmartDownloadModule src={wallpaper.src} id={wallpaper.id} />

              {/* Visual DNA (Color Palette) */}
              <div className="glass rounded-[2rem] p-6 border border-white/5 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest flex items-center text-white/70">
                  <Palette className="w-4 h-4 mr-2 text-primary" /> Visual DNA
                </h3>
                <div className="flex gap-3">
                  {(wallpaper.colors || ["#0F0F12", "#222222", "#C9A24D", "#FFFFFF"]).map(color => (
                    <div 
                      key={color} 
                      className="h-10 w-10 rounded-full border border-white/10 transition-transform hover:scale-110 shadow-lg cursor-help" 
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Recommended Usage */}
              <div className="glass rounded-[2rem] p-6 border border-white/5 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">Perfect For</h3>
                <div className="space-y-3">
                  {(wallpaper.bestFor || ["AMOLED Displays", "Minimalist Setups", "Lock Screen"]).map(use => (
                    <div key={use} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {use}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Aesthetics Section */}
        <section className="mt-32 space-y-12">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-white">Similar Aesthetics</h2>
            <Link href="/wallpapers" className="text-sm font-bold text-primary hover:text-white transition uppercase tracking-widest">Explore All</Link>
          </div>
          <WallpapersGrid wallpapers={related} />
        </section>
      </Container>
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="glass rounded-2xl p-4 border border-white/5 flex flex-col items-center text-center space-y-1">
      <div className="text-primary mb-1">{icon}</div>
      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{label}</p>
      <p className="text-sm font-semibold text-white">{value}</p>
    </div>
  );
}