import HeroSection from "@/components/sections/HeroSection";
import TrendingCarousel from "@/components/sections/TrendingCarousel";
import WallpaperShowcase from "@/components/sections/WallpaperShowcase";
import ValueProposition from "@/components/sections/ValueProposition";
import MoodCategories from "@/components/sections/MoodCategories";
import PrimaryCTA from "@/components/PrimaryCTA";

export default function HomePage() {
  return (
    <main className="w-full bg-black">
      <HeroSection />
      
      {/* Dynamic Discovery Layer */}
      <TrendingCarousel />
      
      {/* Curated Atmosphere */}
      <MoodCategories />
      
      {/* Flagship Showcase */}
      <WallpaperShowcase />
      
      {/* Hardware Philosophy */}
      <ValueProposition />
      
      {/* Final Gateway */}
      <PrimaryCTA />
    </main>
  );
}
