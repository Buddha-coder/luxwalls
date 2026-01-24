import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import WallpaperShowcase from "@/components/sections/WallpaperShowcase";
import ValueProposition from "@/components/sections/ValueProposition";
import PrimaryCTA from "@/components/PrimaryCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "LuxWalls is a premium luxury wallpaper platform focused on mobile-first design and ultra-high-quality wallpapers.",
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
