import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-headline text-3xl font-bold text-primary">
          LuxWalls
        </Link>
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          <Link href="#" className="transition-colors hover:text-primary">
            Collection
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" aria-label="Shopping Bag">
          <ShoppingBag className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </header>
  );
}
