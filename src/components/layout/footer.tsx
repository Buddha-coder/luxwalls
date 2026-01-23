import { Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} LuxWalls. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
