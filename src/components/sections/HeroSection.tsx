import Image from 'next/image';
import Link from 'next/link';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { PlaceHolderImages } from '@/lib/hero-images';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white px-4">
      {heroImage ? (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover -z-10 brightness-50"
          data-ai-hint={heroImage.imageHint}
        />
      ) : (
        <div className="absolute inset-0 bg-executive-black -z-10" />
      )}
      <div className="relative max-w-3xl animate-fade-in">
      <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl md:text-6xl text-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
  LuxWalls – Premium Luxury Wallpapers
</h1>

<p className="mt-4 text-lg md:text-xl font-medium text-soft-ivory/95">
  The Art of Atmosphere
</p>
        <div className="mt-10 flex justify-center">
          <Link href="/wallpapers">
            <LuxuryButton size="lg" className="group">
              Explore the Collection
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </LuxuryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
