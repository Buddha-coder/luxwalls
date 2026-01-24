import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function WallpaperShowcase() {
  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-2xl font-semibold sm:text-3xl">
          Handpicked. High-Resolution. Luxury.
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {PlaceHolderImages.slice(1, 7).map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[9/16] overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
