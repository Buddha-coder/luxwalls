import Image from 'next/image';
import Link from 'next/link';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { PlaceHolderImages } from '@/lib/hero-images';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white px-4">
      {heroImage ? (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover -z-20 brightness-[0.45]"
          sizes="100vw"
          data-ai-hint={heroImage.imageHint}
        />
      ) : (
        <div className="absolute inset-0 bg-executive-black -z-20" />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background -z-10" />

      <div className="relative max-w-3xl space-y-6 animate-fade-in">
        <div className="space-y-3">
          <span className="text-primary text-[8px] font-black tracking-[0.5em] uppercase block">
            The Elite Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter font-headline leading-[1.1] text-white">
            Elevate Your <br className="hidden sm:block" /> Atmosphere
          </h1>
          <p className="mt-3 text-base md:text-lg font-medium text-soft-ivory/50 leading-relaxed max-w-xl mx-auto italic font-headline">
            The intersection of high-resolution digital art and premium luxury aesthetics.
          </p>
        </div>
        
        <div className="flex justify-center pt-2">
          <Link href="/wallpapers">
            <LuxuryButton size="lg" className="group rounded-full bg-white text-black hover:bg-white/90">
              Explore Collection
              <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" />
            </LuxuryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
