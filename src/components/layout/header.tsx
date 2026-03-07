'use client';

import Link from 'next/link';
import { Container } from './container';
import { CommandPalette } from '../ui/CommandPalette';
import { Button } from '../ui/button';
import { Command as CommandIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/70 to-transparent">
      <Container>
        <div className="flex h-20 items-center justify-between gap-12 md:gap-20">
          <Link
            href="/"
            className="font-headline text-3xl font-bold text-champagne-gold transition-opacity hover:opacity-80 shrink-0"
          >
            LuxWalls
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-sm font-medium text-soft-ivory/80">
              <Link href="/wallpapers" className="py-3 transition-all hover:text-white hover:-translate-y-px">Wallpapers</Link>
              <Link href="/about" className="py-3 transition-all hover:text-white hover:-translate-y-px">About</Link>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)}
              className="text-soft-ivory/80 hover:text-white"
            >
              <CommandIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
      <CommandPalette open={open} onOpenChange={setOpen} />
    </header>
  );
}
