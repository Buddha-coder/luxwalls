import Image from "next/image";
import Link from "next/link";
import { wallpapers } from "@/data/wallpapers";
import { Container } from "@/components/layout/container";
import { Zap } from "lucide-react";

export default function TrendingCarousel() {
  const trendingWallpapers = wallpapers.slice(0, 10);

  return (
    <section className="w-full py-12 md:py-16 bg-black overflow-hidden border-t border-white/5">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">In High Demand</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight">
              Trending Archive
            </h2>
          </div>
          <Link href="/wallpapers" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-all duration-500 pb-1 border-b border-white/10 mb-1">
            Browse All
          </Link>
        </div>
      </Container>

      <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-10">
        {trendingWallpapers.map((wallpaper) => (
          <Link
            key={wallpaper.id}
            href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
            className="group relative flex-shrink-0 w-[190px] md:w-[260px] aspect-[9/16] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/40 hover:-translate-y-2 hover:scale-[1.02] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <Image
              src={wallpaper.src}
              alt={wallpaper.title}
              fill
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
              sizes="(max-width: 768px) 190px, 260px"
            />
            
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100 z-20">
              <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-2.5 text-center shadow-2xl">
                 <p className="text-[9px] font-black text-white uppercase tracking-[0.4em] whitespace-nowrap">
                   {wallpaper.category}
                 </p>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <div className="absolute inset-0 border border-white/5 rounded-[inherit] pointer-events-none z-30 group-hover:border-white/10 transition-colors duration-700" />
          </Link>
        ))}
        <div className="flex-shrink-0 w-8" />
      </div>
    </section>
  );
}
