import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import WallpaperShowcase from "@/components/sections/WallpaperShowcase";
import ValueProposition from "@/components/sections/ValueProposition";
import PrimaryCTA from "@/components/PrimaryCTA";

export const metadata: Metadata = {
  title: "LuxWalls – Premium 4K & HD Luxury Wallpapers for Mobile & Desktop",
  description:
    "Download free premium luxury wallpapers in 4K and HD. LuxWalls offers a curated collection of high-quality, minimal, and AMOLED-friendly wallpapers for your mobile and desktop screens."
};

export default function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <WallpaperShowcase />
      <ValueProposition />
      <PrimaryCTA />
    </main>
  );
}
