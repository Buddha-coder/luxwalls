import Image from "next/image";
import { PlaceHolderImages } from "@/lib/hero-images";
import { Container } from "@/components/layout/container";

export default function WallpaperShowcase() {
  return (
    <section className="w-full bg-executive-black py-24 sm:py-32">
      <Container>
        <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold font-headline sm:text-4xl">
              Featured Collections
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
                A glimpse into our curated world of premium wallpapers. Discover designs that transform your device.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {PlaceHolderImages.slice(1, 7).map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.imageUrl}
                alt={`${image.description} - LuxWalls Wallpaper Sample`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                data-ai-hint={image.imageHint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
