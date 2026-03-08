import Image from "next/image";
import Link from "next/link";
import { wallpapers } from "@/data/wallpapers";
import { Container } from "@/components/layout/container";
import { Zap } from "lucide-react";

export default function TrendingCarousel() {
  const trendingWallpapers = wallpapers.slice(0, 10);

  return (
    <section className="w-full py-16 md:py-24 bg-black overflow-hidden">
      <Container>
        <div className="mb-10 flex items-end justify-between px-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">In High Demand</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-headline font-bold text-white tracking-tight italic">
              Trending Archive
            </h2>
          </div>
          <Link href="/wallpapers" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-colors pb-1 border-b border-white/10">
            View Archive
          </Link>
        </div>
      </Container>

      {/* Horizontal Scrolling Strip */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-[10%] pb-12">
        {trendingWallpapers.map((wallpaper) => (
          <Link
            key={wallpaper.id}
            href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
            className="group relative flex-shrink-0 w-[240px] md:w-[320px] aspect-[9/16] rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-primary/40 hover:-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <Image
              src={wallpaper.src}
              alt={wallpaper.title}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 240px, 320px"
            />
            
            {/* Glass Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="glass-container !rounded-3xl !rounded-tr-none !rounded-bl-none overflow-hidden">
                <div className="glass-filter opacity-80" />
                <div className="glass-content p-4 text-center">
                   <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{wallpaper.title}</p>
                </div>
              </div>
            </div>
            
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Link>
        ))}
      </div>
    </section>
  );
}
