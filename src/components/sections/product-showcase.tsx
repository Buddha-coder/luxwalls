import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 'product-1',
    name: 'Gilded Marble',
    category: 'Abstract',
    description: 'An elegant swirl of gold on a marble-like texture.',
  },
  {
    id: 'product-2',
    name: 'Emerald Damask',
    category: 'Classic',
    description: 'A timeless damask pattern in a rich emerald green.',
  },
  {
    id: 'product-3',
    name: 'Onyx Bloom',
    category: 'Floral',
    description: 'Dramatic floral patterns on a deep onyx background.',
  },
  {
    id: 'product-4',
    name: 'Art Deco Arch',
    category: 'Geometric',
    description: 'Sophisticated geometric arches reminiscent of the Art Deco era.',
  },
  {
    id: 'product-5',
    name: 'Silk Weave',
    category: 'Textured',
    description: 'A subtle, textured wallpaper that mimics the look and feel of raw silk.',
  },
  {
    id: 'product-6',
    name: 'Celestial Map',
    category: 'Whimsical',
    description: 'A whimsical map of the stars in gold and midnight blue.',
  },
];

export function ProductShowcase() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl text-primary md:text-5xl">Our Collection</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Each design is meticulously crafted to bring unparalleled elegance and style to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const productImage = PlaceHolderImages.find((p) => p.id === product.id);
            return (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: 'backwards' }}
                data-hover
              >
                <Card className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="overflow-hidden">
                    {productImage && (
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={productImage.imageUrl}
                          alt={productImage.description}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={productImage.imageHint}
                        />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {product.category}
                    </Badge>
                    <h3 className="mt-4 font-headline text-2xl text-foreground">{product.name}</h3>
                    <p className="mt-2 text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
