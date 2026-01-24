import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-start px-4">
        <Link
          href="/"
          className="font-headline text-3xl font-bold animate-shine bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-champagne-gold via-executive-black to-champagne-gold"
        >
          LuxWalls
        </Link>
      </div>
    </header>
  );
}
