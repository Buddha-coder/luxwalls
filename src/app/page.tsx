import { Footer } from "@/components/layout/footer";
import HeroSection from "@/components/sections/HeroSection";
import WallpaperShowcase from "@/components/sections/WallpaperShowcase";
import ValueProposition from "@/components/sections/ValueProposition";
import PrimaryCTA from "@/components/PrimaryCTA";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WallpaperShowcase />
      <ValueProposition />
      <PrimaryCTA />
      <Footer />
    </>
  );
}
