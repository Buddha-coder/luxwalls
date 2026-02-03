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
    contentUrl: `${baseUrl}${wallpaper.src}`,
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
    <main className="w-full py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectLd) }}
      />
      <Container>
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-headline font-semibold sm:text-4xl">
            All Premium Wallpapers
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            Discover the perfect backdrop for your device from our complete
            collection. Browse all categories to find a high-resolution wallpaper
            that matches your style.
          </p>
        </div>

        <CategoryTabs />

        <WallpapersGrid wallpapers={wallpapers} />
      </Container>
    </main>
  );
}
