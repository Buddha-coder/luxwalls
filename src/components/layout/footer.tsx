"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const pathname = usePathname();
  
  // Logic: Identify if we are on a detail page
  const isDetailPage = pathname?.includes("/wallpapers/") && pathname?.split("/").length > 3;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // MINIMAL FOOTER for Detail Pages
  if (isDetailPage) {
    return (
      <footer className="relative mt-20 pb-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
            <div className="flex gap-8">
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

  // FULL FOOTER for Main Pages
  return (
    <footer className="relative mt-24">
      {/* Animated Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(270deg,transparent,#C9A24D,transparent)] opacity-30" />
      
      <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 pt-20 pb-12">
        {/* LW Watermark Background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.02] overflow-hidden">
          <span className="text-[200px] md:text-[450px] font-headline font-bold text-primary select-none leading-none">
            LW
          </span>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-gray-400">
            {/* Brand Block */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <h2 className="text-3xl font-bold text-white tracking-tighter font-headline italic">
                  LuxWalls
                </h2>
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground/80 max-w-xs font-medium">
                The definitive collection of high-resolution digital atmosphere. Curated for the elite visual experience.
              </p>
            </div>

            {/* Navigation Sections */}
            <div>
              <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Curation</h3>
              <ul className="space-y-5 text-xs font-bold tracking-widest uppercase">
                <li><Link href="/wallpapers" className="text-muted-foreground hover:text-primary transition-colors">All Assets</Link></li>
                <li><Link href="/wallpapers/amoled" className="text-muted-foreground hover:text-primary transition-colors">AMOLED</Link></li>
                <li><Link href="/wallpapers/minimal" className="text-muted-foreground hover:text-primary transition-colors">Minimal</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Platform</h3>
              <ul className="space-y-5 text-xs font-bold tracking-widest uppercase">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">The Vision</Link></li>
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Connect</h3>
              <ul className="space-y-5 text-xs font-bold tracking-widest uppercase">
                <li><Link href="/twitter" className="text-muted-foreground hover:text-primary transition-colors">X / Twitter</Link></li>
                <li><Link href="/github" className="text-muted-foreground hover:text-primary transition-colors">GitHub</Link></li>
                <li><a href="https://www.instagram.com/the_buddha_369/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
            <div className="h-1 w-12 bg-primary/20 rounded-full" />
            <div className="text-center space-y-2">
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">
                © {year || '2025'} LUXWALLS GLOBAL • ALL RIGHTS RESERVED
              </p>
              <p className="text-[10px] text-primary/60 font-headline italic tracking-widest">
                Articulated by Buddha Ratna Gautam
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
