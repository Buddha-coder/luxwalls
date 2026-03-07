'use client';

import { wallpapers, Wallpaper } from "@/data/wallpapers";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Download, Eye, Palette } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import SmartDownloadModule from "@/components/wallpaper/SmartDownloadModule";
import { LikeButton } from "@/components/wallpaper/LikeButton";

interface WallpaperViewProps {
  wallpaper: Wallpaper;
}

export default function WallpaperView({ wallpaper }: WallpaperViewProps) {
  // Engagement logic: Shuffle related wallpapers within the same category
  const relatedPool = wallpapers.filter(
    (w) => w.category === wallpaper.category && w.id !== wallpaper.id
  );
  
  const related = [...relatedPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background pb-20 pt-28 md:pt-44">
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
            <div className="relative aspect-[9/16] w-full max-h-[85vh] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 group">
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
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 md:space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <Link href={`/wallpapers/${wallpaper.category}`} className="inline-flex items-center text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {wallpaper.category} Collection
                </Link>
                <h1 className="text-2xl md:text-4xl font-headline font-bold leading-tight text-white">
                  {wallpaper.title}
                </h1>
                <div className="flex flex-wrap gap-2 pt-2">
                  {wallpaper.tags?.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="bg-black/40 backdrop-blur-md text-foreground/80 border-white/10 text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <InfoCard icon={<Eye className="w-4 h-4" />} label="Views" value={wallpaper.views?.toLocaleString() || "1.2K"} />
                <InfoCard icon={<Download className="w-4 h-4" />} label="Saved" value={wallpaper.downloads?.toLocaleString() || "850"} />
                <LikeButton wallpaperId={wallpaper.id.toString()} />
              </div>

              {/* Smart Download Module */}
              <SmartDownloadModule src={wallpaper.src} id={wallpaper.id} />

              {/* Visual DNA (Color Palette) */}
              <div className="glass rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 border border-white/5 space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest flex items-center text-white/70">
                  <Palette className="w-4 h-4 mr-2 text-primary" /> Visual DNA
                </h3>
                <div className="flex gap-2 md:gap-3">
                  {(wallpaper.colors || ["#0F0F12", "#222222", "#C9A24D", "#FFFFFF"]).map(color => (
                    <div 
                      key={color} 
                      className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-white/10 transition-transform hover:scale-110 shadow-lg cursor-help" 
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Recommended Usage */}
              <div className="glass rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 border border-white/5 space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/70">Perfect For</h3>
                <div className="space-y-2 md:space-y-3">
                  {(wallpaper.bestFor || ["AMOLED Displays", "Minimalist Setups", "Lock Screen"]).map(use => (
                    <div key={use} className="flex items-center text-xs md:text-sm text-muted-foreground">
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
        <section className="mt-24 md:mt-32 space-y-10 md:space-y-12">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <h2 className="text-xl md:text-3xl font-headline font-semibold text-white">Similar Aesthetics</h2>
            <Link href="/wallpapers" className="text-[10px] md:text-sm font-bold text-primary hover:text-white transition uppercase tracking-widest">Explore All</Link>
          </div>
          <WallpapersGrid wallpapers={related} />
        </section>
      </Container>
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="glass rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/5 flex flex-col items-center text-center space-y-1">
      <div className="text-primary mb-1">{icon}</div>
      <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{label}</p>
      <p className="text-xs md:text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
