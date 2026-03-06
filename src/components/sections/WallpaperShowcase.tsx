import Image from "next/image";
import Link from "next/link";
import { wallpapers } from "@/data/wallpapers";
import { Container } from "@/components/layout/container";

export default function WallpaperShowcase() {
  const featuredWallpaperIds = [10001, 603, 10004, 10009, 10016, 501, 410, 11];
  const featuredWallpapers = wallpapers.filter(wallpaper => featuredWallpaperIds.includes(wallpaper.id));

  return (
    <section className="w-full bg-executive-black py-16 md:py-32 border-t border-border overflow-hidden">
      <Container>
        <div className="space-y-4 text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-semibold font-headline leading-tight text-white tracking-tight">
              Featured Collections
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-lg leading-relaxed font-body">
                A glimpse into our curated world of premium wallpapers. Discover designs that transform your device.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {featuredWallpapers.map((wallpaper, index) => (
            <Link
              href={`/wallpapers/${wallpaper.category}/${wallpaper.id}`}
              key={wallpaper.id}
              className="group relative aspect-[9/16] overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={wallpaper.src}
                alt={`${wallpaper.title} - LuxWalls Wallpaper Sample`}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-w: 1024px) 33vw, 16vw"
              />
              
              {/* Premium Text-Only Label (Showcase Version) */}
              <div className="absolute inset-x-0 bottom-6 translate-y-1 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 text-center px-4">
                <p className="text-[10px] text-white font-bold tracking-widest uppercase truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {wallpaper.category}
                </p>
              </div>
              
              {/* Subtle glass vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Frosted edge highlight */}
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] group-hover:border-white/20 transition-colors duration-700" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
