"use client";

import { LuxuryButton } from "@/components/ui/LuxuryButton";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex w-full items-center justify-center bg-background px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Premium Luxury Wallpapers
          <span className="block text-muted-foreground">
            Crafted for every screen, every device 
          </span>
        </h1>

        <p className="mb-10 text-sm text-muted-foreground sm:text-base">
          Download ultra-high-quality wallpapers for free. Designed to look
          stunning, load fast, and feel premium on every device.
        </p>
        <Link href="/wallpapers">
          <LuxuryButton size="lg">Browse Wallpapers</LuxuryButton>
        </Link>
      </div>
    </section>
  );
}
