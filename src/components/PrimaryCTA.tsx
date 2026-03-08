import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { LuxuryButton } from '@/components/ui/LuxuryButton';

export default function PrimaryCTA() {
  return (
    <section className="w-full px-4 py-10 md:py-16 border-t border-border">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold font-headline text-primary leading-tight">
            Your New Wallpaper Awaits
          </h2>
          <p className="max-w-prose mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
            The entire collection is free to download. Find the perfect background that reflects your style and elevates your everyday.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/wallpapers">
            <LuxuryButton size="lg" className="group">
              Start Exploring
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </LuxuryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
