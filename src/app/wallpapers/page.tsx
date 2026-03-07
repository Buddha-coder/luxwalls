import WallpapersGrid from "@/components/wallpaper/WallpapersGrid";
import { wallpapers } from "@/data/wallpapers";
import CategoryTabs from "@/components/wallpaper/CategoryTabs";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Explore All Wallpapers - LuxWalls Collection",
  description:
    "Browse the entire collection of premium luxury wallpapers from LuxWalls. Find the perfect high-resolution background for your mobile or desktop screen.",
  alternates: {
    canonical: "/wallpapers",
  },
};

export default function WallpapersPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";

  const imageObjectLd = wallpapers.map((wallpaper) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: wallpaper.src.startsWith('http') ? wallpaper.src : `${baseUrl}${wallpaper.src}`,
    license: `${baseUrl}/terms`,
    acquireLicensePage: `${baseUrl}/terms`,
    creditText: "LuxWalls",
    creator: {
      "@type": "Organization",
      name: "LuxWalls",
    },
    copyrightNotice: "© LuxWalls. All rights reserved.",
    name: wallpaper.title,
    description: `Download the '${wallpaper.title}' wallpaper from the ${wallpaper.category} collection. High-resolution luxury wallpaper for your device.`,
  }));

  return (
    <main className="relative w-full pt-48 pb-16 md:pt-64 md:pb-24 overflow-hidden">
      {/* Immersive Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-full max-w-[1400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectLd) }}
      />
      
      <Container>
        <div className="mb-16 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">The Archive</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tighter text-white">
              All Premium <br className="hidden md:block" /> Assets
            </h1>
          </div>

          <p className="max-w-2xl text-muted-foreground text-sm md:text-lg leading-relaxed font-medium opacity-80">
            A curated master collection of high-resolution digital atmosphere. 
            Filtered for excellence, designed for your elite displays.
          </p>
        </div>

        <div className="mb-12">
          <CategoryTabs />
        </div>

        <WallpapersGrid wallpapers={wallpapers} />
      </Container>
    </main>
  );
}
