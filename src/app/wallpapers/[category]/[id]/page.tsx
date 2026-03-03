import { wallpapers } from "@/data/wallpapers";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Download, Eye, Calendar, HardDrive, Palette, CheckCircle2, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/container";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { Badge } from "@/components/ui/badge";
import { downloadImage } from "@/lib/download-image";
import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import type { Metadata } from "next";

interface WallpaperPageProps {
  params: {
    category: string;
    id: string;
  };
}

export function generateStaticParams() {
  return wallpapers.map((w) => ({
    category: w.category,
    id: w.id.toString(),
  }));
}

export function generateMetadata({ params }: WallpaperPageProps): Metadata {
  const wallpaper = wallpapers.find((w) => w.id.toString() === params.id);
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
  const wallpaper = wallpapers.find((w) => w.id.toString() === params.id);
  if (!wallpaper) notFound();

  const related = wallpapers
    .filter((w) => w.category === wallpaper.category && w.id !== wallpaper.id)
    .slice(0, 4);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${baseUrl}${wallpaper.src}`,
    name: wallpaper.title,
    description: wallpaper.description || wallpaper.title,
    datePublished: wallpaper.createdAt,
    author: {
      "@type": "Organization",
      name: "LuxWalls"
    },
    width: {
      "@type": "Distance",
      "name": "3840 px"
    },
    height: {
      "@type": "Distance",
      "name": "2160 px"
    }
  };

  return (
    <main className="min-h-screen bg-background pb-20 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={wallpaper.src}
            alt=""
            fill
            className="object-cover blur-3xl scale-110 opacity-40"
            priority
          />
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center py-10">
          <div className="relative aspect-[9/16] h-full max-h-[700px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group">
            <Image
              src={wallpaper.src}
              alt={wallpaper.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
            />
            {/* Resolution Badge Overlay */}
            <div className="absolute top-4 right-4 z-20">
              <Badge variant="secondary" className="bg-black/60 backdrop-blur-md text-white border-white/20 px-3 py-1 font-medium">
                {wallpaper.resolution || "4K UHD"}
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      <Container className="mt-[-40px] md:mt-[-80px] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-10">
            <div className="glass rounded-3xl p-6 md:p-10 shadow-2xl border border-white/5 space-y-6">
              <div className="space-y-4">
                <Link href={`/wallpapers/${wallpaper.category}`} className="inline-flex items-center text-primary text-sm font-medium hover:underline mb-2">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {wallpaper.category.toUpperCase()} COLLECTION
                </Link>
                <h1 className="text-3xl md:text-5xl font-headline font-bold leading-tight">
                  {wallpaper.title}
                </h1>
                <div className="flex flex-wrap gap-2 pt-2">
                  {wallpaper.tags?.map(tag => (
                    <Badge key={tag} className="glass text-xs font-normal px-3 py-1 rounded-full border-white/10">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Smart Download Module */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Recommended For You</p>
                  <p className="text-xl font-semibold">Mobile Portrait (Optimized)</p>
                  <p className="text-xs text-primary flex items-center justify-center md:justify-start">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Verified Safe Download
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <LuxuryButton 
                    className="w-full sm:w-auto px-10 py-4 flex items-center justify-center"
                    onClick={() => downloadImage(wallpaper.src, `luxwalls-${wallpaper.id}.jpg`)}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Free
                  </LuxuryButton>
                </div>
              </div>

              {/* Description Block */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <h2 className="text-xl font-headline font-semibold">Atmosphere & Style</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {wallpaper.description || `Enhance your digital environment with this premium ${wallpaper.category} wallpaper. Selected for its exceptional clarity and atmospheric balance, this asset is optimized for modern displays to provide a seamless visual experience.`}
                </p>
              </div>
            </div>

            {/* Information Panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <InfoCard icon={<HardDrive className="w-4 h-4" />} label="Size" value={wallpaper.fileSize || "2.8 MB"} />
              <InfoCard icon={<Eye className="w-4 h-4" />} label="Views" value={wallpaper.views?.toLocaleString() || "1.2K+"} />
              <InfoCard icon={<Download className="w-4 h-4" />} label="Downloads" value={wallpaper.downloads?.toLocaleString() || "850+"} />
              <InfoCard icon={<Calendar className="w-4 h-4" />} label="Added" value={wallpaper.createdAt || "Jan 2025"} />
            </div>
          </div>

          {/* Sidebar (Right) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Color Palette */}
            <div className="glass rounded-3xl p-6 border border-white/5 space-y-4">
              <h3 className="text-sm font-semibold flex items-center">
                <Palette className="w-4 h-4 mr-2 text-primary" /> Design Palette
              </h3>
              <div className="flex gap-3">
                {(wallpaper.colors || ["#000000", "#333333", "#C9A24D", "#FFFFFF"]).map(color => (
                  <div 
                    key={color} 
                    className="h-10 w-10 rounded-full border border-white/10 transition-transform hover:scale-110" 
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground pt-2">Dominant tones used in this composition.</p>
            </div>

            {/* Best For */}
            <div className="glass rounded-3xl p-6 border border-white/5 space-y-4">
              <h3 className="text-sm font-semibold">Recommended Usage</h3>
              <div className="space-y-2">
                {(wallpaper.bestFor || ["Lock Screen", "Minimal Setup", "AMOLED Screen"]).map(use => (
                  <div key={use} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {use}
                  </div>
                ))}
              </div>
            </div>

            {/* Gamification Indicator */}
            <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20 flex items-center justify-between">
              <div className="flex items-center text-primary font-medium text-sm">
                <TrendingUp className="w-4 h-4 mr-2" /> 
                Trending this week
              </div>
              <Badge className="bg-primary text-black font-bold">TOP 10</Badge>
            </div>
          </aside>
        </div>

        {/* Related Wallpapers */}
        <section className="mt-20 space-y-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-2xl md:text-3xl font-headline font-semibold">Similar Aesthetics</h2>
            <Link href="/wallpapers" className="text-sm text-muted-foreground hover:text-primary transition">View All</Link>
          </div>
          <WallpapersGrid wallpapers={related} />
        </section>
      </Container>
    </main>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="glass rounded-2xl p-4 border border-white/5 flex flex-col items-center text-center space-y-1">
      <div className="text-primary mb-1">{icon}</div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}
