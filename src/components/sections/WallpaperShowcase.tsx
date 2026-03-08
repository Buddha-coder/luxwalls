import Image from "next/image";
import Link from "next/link";
import { wallpapers } from "@/data/wallpapers";
import { Container } from "@/components/layout/container";

export default function WallpaperShowcase() {
  const featuredWallpaperIds = [10001, 603, 10004, 10009, 10016, 501, 410, 11];
  const featuredWallpapers = wallpapers.filter(wallpaper => featuredWallpaperIds.includes(wallpaper.id));

  return (
    <section className="w-full bg-black py-20 md:py-40 border-t border-white/5 overflow-hidden">
      <Container>
        <div className="space-y-4 text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">The Curated Suite</span>
            <h2 className="text-4xl sm:text-6xl font-headline font-bold leading-tight text-white tracking-tighter">
              Featured Archive
            </h2>
            <p className="max-w-xl mx-auto text-white/40 text-xs md:text-sm leading-relaxed uppercase tracking-widest font-medium">
                High-resolution digital atmosphere for the elite visual enthusiast.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {featuredWallpapers.map((wallpaper, index) => (
            <Link
              href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
              key={wallpaper.id}
              className="group relative aspect-[9/16] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 transition-all duration-[1s] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-cover transition-all duration-[2.5s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-w: 1024px) 33vw, 16vw"
              />
              
              {/* Premium Pebble Label */}
              <div className="absolute inset-x-0 bottom-10 translate-y-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100 flex justify-center px-4 z-20">
                <div className="rounded-full px-6 py-2.5 overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md">
                  <p className="relative text-[9px] text-white font-black tracking-[0.4em] uppercase whitespace-nowrap">
                    Explore
                  </p>
                </div>
              </div>
              
              {/* Refined Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] z-10" />
              
              {/* Specular Rim Highlight */}
              <div className="absolute inset-0 border border-white/5 rounded-[inherit] group-hover:border-white/10 transition-colors duration-700 z-20" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
