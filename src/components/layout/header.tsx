import Link from 'next/link';
import { Container } from './container';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/70 to-transparent">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-headline text-3xl font-bold text-champagne-gold transition-opacity hover:opacity-80">
            LuxWalls
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-soft-ivory/80">
            <Link href="/wallpapers" className="py-3 transition-all hover:text-white hover:-translate-y-px">Wallpapers</Link>
            <Link href="/about" className="py-3 transition-all hover:text-white hover:-translate-y-px">About</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
