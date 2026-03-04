"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "./container";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Prevent hydration mismatch by setting the date after mount
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative mt-24">
      {/* Animated Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[linear-gradient(270deg,#D4AF37,#ffffff,#D4AF37)] bg-[length:400%_400%] animate-[gradientBorder_10s_ease_infinite]" />
      
      <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 pt-16 pb-8">
        {/* LW Watermark Background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] overflow-hidden">
          <span className="text-[200px] md:text-[400px] font-headline font-bold text-primary select-none leading-none">
            LW
          </span>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-400">
            {/* Brand Block */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white tracking-wider font-headline">
                LuxWalls
              </h2>
              <p className="text-sm leading-relaxed max-w-xs">
                Premium luxury wallpapers curated for high-resolution displays and elite visual aesthetics.
              </p>
            </div>

            {/* Navigation Sections */}
            <div>
              <h3 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Explore</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/wallpapers" className="hover:text-primary transition-colors">Collection</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">The Vision</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Legal</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Connect</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/twitter" className="hover:text-primary transition-colors">X (Twitter)</Link></li>
                <li><Link href="/github" className="hover:text-primary transition-colors">GitHub</Link></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs tracking-widest text-gray-600">
            <div className="space-y-2">
              <p>© {year || '2025'} LUXWALLS. ALL RIGHTS RESERVED.</p>
              <p className="text-[10px] text-gray-500 font-headline uppercase tracking-widest">Created by Buddha Ratna Gautam</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
