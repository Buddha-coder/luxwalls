import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-headline text-3xl font-bold animate-shine bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500"
        >
          LuxWalls
        </Link>
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          <Link
            href="#"
            className="transition-colors hover:opacity-80 animate-shine bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500"
          >
            Collection
          </Link>
          <Link
            href="#"
            className="transition-colors hover:opacity-80 animate-shine bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500"
          >
            About
          </Link>
          <Link
            href="#"
            className="transition-colors hover:opacity-80 animate-shine bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
