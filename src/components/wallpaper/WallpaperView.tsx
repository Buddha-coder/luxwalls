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
import { useState, useEffect } from "react";
import MockupPreview from "./MockupPreview";
import { useFirestore, useDoc, useMemoFirebase } from "@/firebase";
import { doc, runTransaction } from "firebase/firestore";

interface WallpaperViewProps {
  wallpaper: Wallpaper;
  related: Wallpaper[];
}

export default function WallpaperView({ wallpaper, related }: WallpaperViewProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const firestore = useFirestore();

  // Memoize the document reference for real-time stats
  const statsRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, 'stats', wallpaper.id.toString());
  }, [firestore, wallpaper.id]);

  const { data: liveStats, isLoading: isStatsLoading } = useDoc(statsRef);

  // Automatic Visit Counter
  useEffect(() => {
    if (!firestore || !wallpaper.id) return;
    
    const incrementViews = async () => {
      const docRef = doc(firestore, 'stats', wallpaper.id.toString());
      try {
        await runTransaction(firestore, async (transaction) => {
          const docSnap = await transaction.get(docRef);
          const currentViews = docSnap.exists() ? (docSnap.data().views || 0) : 0;
          transaction.set(docRef, { views: currentViews + 1 }, { merge: true });
        });
      } catch (error) {
        // Silently fail for analytics to prevent UI disruption
        console.warn("View tracking offline");
      }
    };

    incrementViews();
  }, [firestore, wallpaper.id]);

  return (
    <div className="min-h-screen bg-background pb-8 pt-24 md:pt-36 overflow-x-hidden">
      <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden opacity-25 blur-[120px] pointer-events-none scale-150">
        <Image
          src={wallpaper.src}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          
          <div className="lg:col-span-7 xl:col-span-8 space-y-5">
            <div 
              className="relative aspect-[9/16] w-full max-h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.9)] border border-white/10 group select-none"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover pointer-events-none"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-[inherit] pointer-events-none" />
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => setIsPreviewOpen(true)}
                className="group relative flex items-center gap-2 p-1 pr-5 rounded-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 text-white transition-all hover:bg-white/[0.08] hover:scale-105 active:scale-95 shadow-lg"
              >
                <div className="p-2 rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] leading-none mb-0.5 text-primary">Device Preview</span>
                  <span className="text-[7px] text-white/30 uppercase tracking-widest font-bold">Interactive Experience</span>
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 space-y-5 md:space-y-6">
            <div className="space-y-5">
              <div className="space-y-3">
                <Link href={`/wallpapers/${wallpaper.category}`} className="inline-flex items-center text-primary text-[9px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors">
                  <ChevronLeft className="w-3 h-3 mr-1.5" />
                  {wallpaper.category} Collection
                </Link>
                <h1 className="text-2xl md:text-4xl font-headline font-bold leading-tight text-white tracking-tight">
                  {wallpaper.title}
                </h1>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {wallpaper.tags?.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="bg-white/[0.02] text-foreground/60 border-white/5 text-[8px] uppercase tracking-[0.2em] font-black px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <StatTile 
                  icon={<Eye className="w-3 h-3" />} 
                  label="Views" 
                  value={liveStats?.views?.toLocaleString() || (isStatsLoading ? "..." : "0")} 
                />
                <StatTile 
                  icon={<Download className="w-3 h-3" />} 
                  label="Saved" 
                  value={liveStats?.downloads?.toLocaleString() || (isStatsLoading ? "..." : "0")} 
                />
                <LikeButton wallpaperId={wallpaper.id.toString()} />
              </div>

              <SmartDownloadModule src={wallpaper.src} id={wallpaper.id} />

              <div className="relative glass-container !rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="glass-filter opacity-40" />
                <div className="glass-overlay !bg-white/[0.01]" />
                <div className="glass-content p-5 space-y-4">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.3em] flex items-center text-white/40">
                    <Palette className="w-3.5 h-3.5 mr-2 text-primary/60" /> Visual DNA
                  </h3>
                  <div className="flex gap-3">
                    {(wallpaper.colors || ["#0F0F12", "#222222", "#C9A24D", "#FFFFFF"]).map(color => (
                      <div 
                        key={color} 
                        className="relative h-10 w-10 rounded-full border border-white/10 transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-pointer" 
                        style={{ backgroundColor: color }}
                        title={color}
                      >
                        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative glass-container !rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="glass-filter opacity-30" />
                <div className="glass-overlay !bg-white/[0.01]" />
                <div className="glass-content p-5 space-y-3">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-2 text-primary/50" /> Performance Profile
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {(wallpaper.bestFor || ["AMOLED Displays", "Lock Screen", "True Black Optimization"]).map(use => (
                      <div key={use} className="flex items-center gap-3 text-[9px] font-bold text-muted-foreground group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors" />
                        <span className="tracking-widest uppercase group-hover/item:text-white transition-colors">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 md:mt-24 space-y-10">
          <div className="flex items-end justify-between border-b border-white/5 pb-6">
            <div className="space-y-1.5">
              <span className="text-[8px] font-black text-primary uppercase tracking-[0.4em]">Refined Selection</span>
              <h2 className="text-xl md:text-3xl font-headline font-bold text-white">Similar Aesthetics</h2>
            </div>
            <Link href="/wallpapers" className="text-[8px] font-black text-white/30 hover:text-primary transition-all uppercase tracking-[0.2em] pb-1">
              Explore All
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
    <div className="relative glass-container !rounded-full border border-white/5 overflow-hidden flex-1 py-2.5 min-h-[50px] active:scale-95 transition-transform duration-300">
      <div className="glass-filter opacity-30" />
      <div className="glass-overlay !bg-white/[0.01]" />
      <div className="glass-content flex flex-col items-center justify-center text-center p-1 space-y-0.5">
        <div className="text-primary/60">{icon}</div>
        <div className="space-y-0">
          <p className="text-[9px] font-black text-white leading-none">{value}</p>
          <p className="text-[6px] uppercase tracking-[0.2em] text-white/20 font-black">{label}</p>
        </div>
      </div>
    </div>
  );
}