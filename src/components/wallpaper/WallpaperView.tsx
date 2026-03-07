'use client';

import { Wallpaper } from "@/data/wallpapers";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Download, Eye, Palette, Sparkles, Maximize2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import SmartDownloadModule from "@/components/wallpaper/SmartDownloadModule";
import { LikeButton } from "@/components/wallpaper/LikeButton";
import { useState } from "react";
import MockupPreview from "./MockupPreview";

interface WallpaperViewProps {
  wallpaper: Wallpaper;
  related: Wallpaper[];
}

export default function WallpaperView({ wallpaper, related }: WallpaperViewProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20 pt-28 md:pt-44 overflow-x-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Main Visual (Left) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div 
              className="relative aspect-[9/16] w-full max-h-[85vh] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.9)] border border-white/10 group"
            >
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover transition-all duration-[2s] ease-out"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Specular Rim Highlight */}
              <div className="absolute inset-0 border border-white/20 rounded-[inherit] pointer-events-none" />
            </div>

            {/* LIVE PREVIEW TRIGGER */}
            <div className="flex justify-center">
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="group relative flex items-center gap-3 p-1.5 pr-6 rounded-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 text-white transition-all hover:bg-white/[0.08] hover:scale-105 active:scale-95 shadow-xl"
              >
                <div className="p-2.5 rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] leading-none mb-1 text-primary">Device Preview</span>
                  <span className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Interactive Experience</span>
                </div>
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* Metadata & Actions (Right) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 md:space-y-8">
            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-4">
                <Link href={`/wallpapers/${wallpaper.category}`} className="inline-flex items-center text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {wallpaper.category} Collection
                </Link>
                <h1 className="text-3xl md:text-5xl font-headline font-bold leading-[1.1] text-white tracking-tight">
                  {wallpaper.title}
                </h1>
                <div className="flex flex-wrap gap-2 pt-1">
                  {wallpaper.tags?.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="bg-white/[0.03] backdrop-blur-3xl text-foreground/70 border-white/5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1 rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Engagement Stats Grid (Fully Rounded) */}
              <div className="grid grid-cols-3 gap-3">
                <StatTile icon={<Eye className="w-3.5 h-3.5" />} label="Views" value={wallpaper.views?.toLocaleString() || "1.2K"} />
                <StatTile icon={<Download className="w-3.5 h-3.5" />} label="Saved" value={wallpaper.downloads?.toLocaleString() || "850"} />
                <LikeButton wallpaperId={wallpaper.id.toString()} />
              </div>

              {/* Smart Download Module */}
              <SmartDownloadModule src={wallpaper.src} id={wallpaper.id} />

              {/* Visual DNA (Fully Rounded) */}
              <div className="relative glass-container !rounded-[3rem] border border-white/5 overflow-hidden group">
                <div className="glass-filter opacity-50" />
                <div className="glass-overlay !bg-white/[0.02]" />
                <div className="glass-content p-6 space-y-5">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center text-white/50">
                    <Palette className="w-4 h-4 mr-2 text-primary/70" /> Visual DNA
                  </h3>
                  <div className="flex gap-4">
                    {(wallpaper.colors || ["#0F0F12", "#222222", "#C9A24D", "#FFFFFF"]).map(color => (
                      <div 
                        key={color} 
                        className="relative h-12 w-12 rounded-full border border-white/10 transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-2xl cursor-pointer" 
                        style={{ backgroundColor: color }}
                        title={color}
                      >
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Profile */}
              <div className="relative glass-container !rounded-[3rem] border border-white/5 overflow-hidden">
                <div className="glass-filter opacity-30" />
                <div className="glass-overlay !bg-white/[0.01]" />
                <div className="glass-content p-6 space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-primary/50" /> Performance Profile
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {(wallpaper.bestFor || ["AMOLED Displays", "Lock Screen"]).map(use => (
                      <div key={use} className="flex items-center gap-4 text-xs font-bold text-muted-foreground group/item">
                        <div className="w-2 h-2 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                        <span className="tracking-wide uppercase text-[10px] group-hover/item:text-white transition-colors">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Aesthetics Section */}
        <section className="mt-32 md:mt-44 space-y-12">
          <div className="flex items-end justify-between border-b border-white/5 pb-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Refined Selection</span>
              <h2 className="text-2xl md:text-4xl font-headline font-bold text-white">Similar Aesthetics</h2>
            </div>
            <Link href="/wallpapers" className="text-[10px] md:text-xs font-black text-white/40 hover:text-primary transition-all uppercase tracking-[0.2em] pb-1">
              Explore All Collection
            </Link>
          </div>
          <WallpapersGrid wallpapers={related} />
        </section>
      </Container>

      <MockupPreview 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        src={wallpaper.src} 
      />
    </div>
  );
}

function StatTile({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="relative glass-container !rounded-full border border-white/5 overflow-hidden flex-1 py-3 min-h-[60px]">
      <div className="glass-filter opacity-40" />
      <div className="glass-overlay !bg-white/[0.02]" />
      <div className="glass-content flex flex-col items-center justify-center text-center p-1.5 space-y-1">
        <div className="text-primary/70">{icon}</div>
        <div className="space-y-0.5">
          <p className="text-[10px] font-black text-white leading-none">{value}</p>
          <p className="text-[7px] uppercase tracking-[0.2em] text-white/30 font-black">{label}</p>
        </div>
      </div>
    </div>
  );
}
