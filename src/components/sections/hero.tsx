import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero');

  if (!heroImage) return null;

  return (
    <section className="relative h-screen w-full">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div
          className="animate-fade-in px-4"
          style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          <h1 className="font-headline text-5xl text-foreground md:text-7xl lg:text-8xl">Experience True Luxury</h1>
        </div>
        <div
          className="animate-fade-in px-4"
          style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
        >
          <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
            Discover our exclusive collection of handcrafted wallpapers that transform any space into a work of art.
          </p>
        </div>
        <div
          className="animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
        >
          <Button size="lg" className="mt-8 bg-primary text-primary-foreground transition-transform duration-300 hover:scale-105 hover:bg-primary/90">
            Explore Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
