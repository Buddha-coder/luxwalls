import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import WallpaperShowcase from "@/components/sections/WallpaperShowcase";
import ValueProposition from "@/components/sections/ValueProposition";
import PrimaryCTA from "@/components/PrimaryCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "LuxWalls is a premium luxury wallpaper platform which provides ultra high-quality wallpapes."
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
