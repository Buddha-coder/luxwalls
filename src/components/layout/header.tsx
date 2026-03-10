'use client';

import Link from 'next/link';
import { Container } from './container';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/70 to-transparent">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-headline text-2xl font-bold text-champagne-gold transition-opacity hover:opacity-80 shrink-0"
          >
            LuxWalls
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-[11px] font-bold uppercase tracking-widest text-soft-ivory/70">
            <Link href="/wallpapers" className="py-2 transition-all hover:text-white hover:-translate-y-px">
              Wallpapers
            </Link>
            <Link href="/about" className="py-2 transition-all hover:text-white hover:-translate-y-px">
              About
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
