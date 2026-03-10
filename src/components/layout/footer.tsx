"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./container";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const pathname = usePathname();
  
  const isDetailPage = pathname?.includes("/wallpapers/") && pathname?.split("/").length > 3;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (isDetailPage) {
    return (
      <footer className="relative mt-6 pb-10 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6 text-[8px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="/about" className="hover:text-primary transition-colors">Vision</Link>
            </div>
            <p className="text-center md:text-right">
              © {year || '2025'} LUXWALLS • DESIGNED BY BUDDHA RATNA GAUTAM
            </p>
          </div>
        </Container>
      </footer>
    );
  }

  return (
    <footer className="relative mt-16">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(270deg,transparent,#C9A24D,transparent)] opacity-20" />
      
      <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 pt-16 pb-10">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.015] overflow-hidden">
          <span className="text-[150px] md:text-[350px] font-headline font-bold text-primary select-none leading-none">
            LW
          </span>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-500">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-bold text-white tracking-tighter font-headline italic">
                  LuxWalls
                </h2>
              </Link>
              <p className="text-[11px] leading-relaxed text-muted-foreground/70 max-w-xs font-medium uppercase tracking-wider">
                The definitive collection of digital atmosphere. Curated for excellence.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 uppercase text-[9px] tracking-[0.3em]">Curation</h3>
              <ul className="space-y-4 text-[9px] font-bold tracking-widest uppercase">
                <li><Link href="/wallpapers" className="text-muted-foreground hover:text-primary transition-colors">All Assets</Link></li>
                <li><Link href="/wallpapers/amoled" className="text-muted-foreground hover:text-primary transition-colors">AMOLED</Link></li>
                <li><Link href="/wallpapers/minimal" className="text-muted-foreground hover:text-primary transition-colors">Minimal</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 uppercase text-[9px] tracking-[0.3em]">Platform</h3>
              <ul className="space-y-4 text-[9px] font-bold tracking-widest uppercase">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">The Vision</Link></li>
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 uppercase text-[9px] tracking-[0.3em]">Connect</h3>
              <ul className="space-y-4 text-[9px] font-bold tracking-widest uppercase">
                <li><Link href="/twitter" className="text-muted-foreground hover:text-primary transition-colors">X / Twitter</Link></li>
                <li><Link href="/github" className="text-muted-foreground hover:text-primary transition-colors">GitHub</Link></li>
                <li><a href="https://www.instagram.com/the_buddha_369/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-3">
            <div className="h-0.5 w-8 bg-primary/20 rounded-full" />
            <div className="text-center space-y-1.5">
              <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">
                © {year || '2025'} LUXWALLS GLOBAL • ALL RIGHTS RESERVED
              </p>
              <p className="text-[9px] text-primary/40 font-headline italic tracking-widest">
                Articulated by Buddha Ratna Gautam
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
