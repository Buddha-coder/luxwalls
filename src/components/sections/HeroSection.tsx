import Image from 'next/image';
import Link from 'next/link';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { PlaceHolderImages } from '@/lib/hero-images';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white px-4">
      {heroImage ? (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority // Critical for LCP performance
          className="object-cover -z-20 brightness-[0.45]"
          sizes="100vw"
          data-ai-hint={heroImage.imageHint}
        />
      ) : (
        <div className="absolute inset-0 bg-executive-black -z-20" />
      )}
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background -z-10" />

      <div className="relative max-w-4xl space-y-8 animate-fade-in">
        <div className="space-y-4">
          <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block">
            The Elite Gallery
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter font-headline leading-[1.05] text-white">
            Elevate Your <br className="hidden sm:block" /> Atmosphere
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-soft-ivory/60 leading-relaxed max-w-2xl mx-auto italic font-headline">
            The intersection of high-resolution digital art and premium luxury aesthetics.
          </p>
        </div>
        
        <div className="flex justify-center pt-4">
          <Link href="/wallpapers">
            <LuxuryButton size="lg" className="group rounded-full bg-white text-black hover:bg-white/90">
              Explore Collection
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </LuxuryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
