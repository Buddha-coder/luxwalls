import Image from 'next/image';
import Link from 'next/link';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white px-4">
      {heroImage ? (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover -z-10 brightness-[.4]"
          data-ai-hint={heroImage.imageHint}
        />
      ) : (
        <div className="absolute inset-0 bg-executive-black -z-10" />
      )}
      <div className="relative max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl md:text-6xl">
          Experience Luxury on Your Screen
        </h1>
        <p className="mt-6 text-lg leading-8 text-soft-ivory/90">
          Discover a curated collection of premium, high-resolution wallpapers designed to bring sophistication and elegance to your devices.
        </p>
        <div className="mt-10">
          <Link href="/wallpapers">
            <LuxuryButton size="lg">Browse Wallpapers</LuxuryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
