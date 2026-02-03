"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "./container";

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
      <footer className="relative mt-24 shadow-[0_-10px_40px_rgba(212,175,55,0.08)]">
        
        {/* Animated Gradient Border */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px]
          bg-[linear-gradient(270deg,#D4AF37,#ffffff,#D4AF37)]
           bg-[length:400%_400%]
           animate-[gradientBorder_10s_ease_infinite]" 
         >
          {/* Glass Layer */}
          <div className="h-full w-full bg-black/60 backdrop-blur-xl border-t border-white/10">
            
            {/* LW Watermark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center translate-y-6">
              <span
                className="
                  text-[120px] md:text-[220px]
                  font-serif
                  font-semibold
                  text-primary/5
                  blur-[2px]
                  select-none
                "
                style={{
                  textShadow: "0 0 60px rgba(201,162,77,0.35)",
                }}
              >
                LW
              </span>
            </div>
            <Container>
              <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-300">
                
                {/* Brand */}
                <div>
                  <h2 className="text-2xl font-semibold text-white tracking-wide font-headline">
                    LuxWalls
                  </h2>
                  <p className="mt-4 text-sm text-gray-400">
                    Premium luxury wallpapers crafted for high-resolution and AMOLED displays.
                  </p>
                </div>
    
                {/* Explore */}
                <div>
                  <h3 className="text-white font-medium mb-4">Explore</h3>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                    <li><Link href="/wallpapers" className="hover:text-white transition">Wallpapers</Link></li>
                    <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                  </ul>
                </div>
    
                {/* Legal */}
                <div>
                  <h3 className="text-white font-medium mb-4">Legal</h3>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
                  </ul>
                </div>
    
                {/* Social */}
                <div>
                  <h3 className="text-white font-medium mb-4">Connect</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="#" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                    <li><a href="#" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  </ul>
                </div>
    
              </div>
            </Container>
  
            {/* Bottom bar */}
            <div className="text-center py-5 text-sm text-gray-500 border-t border-white/10">
              © {year} LuxWalls. All rights reserved.
            </div>
  
          </div>
        </div>
  
      </footer>
    );
  }
