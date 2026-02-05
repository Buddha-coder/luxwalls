import HeroSection from "@/components/sections/HeroSection";
import WallpaperShowcase from "@/components/sections/WallpaperShowcase";
import ValueProposition from "@/components/sections/ValueProposition";
import PrimaryCTA from "@/components/PrimaryCTA";
import { AnimateIn } from "@/components/ui/animate-in";

export default function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <ValueProposition />
      <WallpaperShowcase />
      <PrimaryCTA />
    </main>
  );
}
