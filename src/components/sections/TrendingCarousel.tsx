import Image from "next/image";
import Link from "next/link";
import { wallpapers } from "@/data/wallpapers";
import { Container } from "@/components/layout/container";
import { Zap } from "lucide-react";

export default function TrendingCarousel() {
  // Use first 10 for carousel
  const trendingWallpapers = wallpapers.slice(0, 10);

  return (
    <section className="w-full py-16 md:py-24 bg-black overflow-hidden border-t border-white/5">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">In High Demand</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white tracking-tight">
              Trending Archive
            </h2>
          </div>
          <Link href="/wallpapers" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-all pb-1 border-b border-white/10 mb-1">
            Browse All
          </Link>
        </div>
      </Container>

      {/* Horizontal Scrolling Strip with padding offset for alignment */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-12">
        {trendingWallpapers.map((wallpaper) => (
          <Link
            key={wallpaper.id}
            href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
            className="group relative flex-shrink-0 w-[260px] md:w-[340px] aspect-[9/16] rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-primary/40 hover:-translate-y-2 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <Image
              src={wallpaper.src}
              alt={wallpaper.title}
              fill
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 260px, 340px"
            />
            
            {/* Glass Overlay Label */}
            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 text-center">
                 <p className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">{wallpaper.title}</p>
              </div>
            </div>
            
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Link>
        ))}
        {/* End Spacer for horizontal scroll */}
        <div className="flex-shrink-0 w-8" />
      </div>
    </section>
  );
}
