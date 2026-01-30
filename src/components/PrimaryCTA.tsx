import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PrimaryCTA() {
  return (
    <section className="w-full px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-semibold font-headline sm:text-4xl text-primary">
          Your New Wallpaper Awaits
        </h2>
        <p className="mb-8 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
          The entire collection is free to download. Find the perfect background that reflects your style and elevates your everyday.
        </p>
        <Link
          href="/wallpapers"
          className="group inline-flex items-center justify-center rounded-xl border-2 border-primary bg-transparent px-8 py-4 text-base font-medium text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(201,162,77,0.5)]"
        >
          Start Exploring
          <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
