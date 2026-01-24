"use client";

import LuxuryButton from "@/components/ui/LuxuryButton";

export default function HeroSection() {
  return (
      <section className="relative flex min-h-[90vh] w-full items-center justify-center bg-background px-4">
            <div className="mx-auto max-w-2xl text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                              Premium Luxury Wallpapers
                                        <span className="block text-muted-foreground">
                                                    Crafted for Mobile. Perfect Everywhere.
                                                              </span>
                                                                      </h1>

                                                                              <p className="mb-10 text-sm text-muted-foreground sm:text-base">
                                                                                        Download ultra-high-quality wallpapers for free. Designed to look
                                                                                                  stunning, load fast, and feel premium on every device.
                                                                                                          </p>

                                                                                                                  <LuxuryButton text="Browse Wallpapers" />
                                                                                                                                          </div>
                                                                                                                                              </section>
                                                                                                                                                );
                                                                                                                                                }
