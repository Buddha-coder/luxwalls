import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LuxWalls",
  description:
    "Discover the vision behind LuxWalls. We're dedicated to providing a curated collection of premium, luxury wallpapers to elevate your digital experience.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-gray-300 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 sm:py-32">
        {/* Glass container */}
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] p-5 md:p-6">
          {/* Page Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-headline text-white">
              About LuxWalls
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              LuxWalls is a premium wallpaper platform created for individuals who
              appreciate refined aesthetics, clarity, and visual balance. Our
              collection is carefully curated to deliver high-resolution visuals
              that complement modern mobile displays, including AMOLED and
              high-density screens.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {/* Vision */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">
                Our Vision
              </h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  We believe a screen is not merely a utility, but a personal visual
                  environment experienced throughout the day. LuxWalls exists to
                  elevate that experience through{" "}
                  <Link href="/wallpapers" className="text-primary hover:underline">
                    wallpapers that are minimal, elegant, and intentional.
                  </Link>
                </p>
                <p className="leading-relaxed">
                  Our focus is on calm, consistency, and visual quality — without
                  distraction.
                </p>
              </div>
            </section>

            {/* Differentiation */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">
                What Defines LuxWalls
              </h2>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>Curated premium wallpapers with a focus on quality</li>
                <li>Mobile-first experience optimized for modern devices</li>
                <li>High-resolution assets with precise detail and clarity</li>
                <li>A minimal, luxury-oriented visual language</li>
              </ul>
            </section>

            {/* Purpose */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">
                Designed With Purpose
              </h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  LuxWalls is intentionally lightweight and fast. From discovery to
                  download, the experience is designed to be seamless, intuitive,
                  and free of unnecessary steps.
                </p>
                <p className="leading-relaxed">
                  There are no accounts, no intrusive monetization, and no friction
                  between users and content.
                </p>
              </div>
            </section>

            {/* Respect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">
                Respect for Users
              </h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed">
                  LuxWalls prioritizes user privacy and attention. We avoid
                  aggressive tracking, forced registrations, and manipulative
                  design practices.
                </p>
                <p className="leading-relaxed">
                  The platform is transparent by design — focused solely on
                  delivering value through content.
                </p>
              </div>
            </section>

            {/* Future */}
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">
                Looking Ahead
              </h2>
              <p className="leading-relaxed text-gray-400">
                LuxWalls continues to evolve with thoughtful improvements,
                refined curation, and performance enhancements. Our objective is
                to become a trusted destination for premium wallpapers.
              </p>
            </section>
          </div>

          {/* Closing */}
          <div className="border-t border-white/10 pt-8 mt-14">
            <p className="text-lg text-white font-medium">
              LuxWalls represents the intersection of minimal design and
              luxury-grade visuals.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
