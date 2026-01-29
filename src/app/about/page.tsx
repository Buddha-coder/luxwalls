export const metadata = {
    title: "About LuxWalls",
    description:
      "LuxWalls is a premium wallpaper platform focused on minimal design, high-resolution visuals, and a refined mobile-first experience.",
  };
  
  export default function AboutPage() {
    return (
      <main className="relative min-h-screen bg-[#0E0E11] text-gray-300 overflow-hidden">
  
        {/* Subtle background glow */}
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
  
        <div className="relative max-w-4xl mx-auto px-6 py-24">
  
          {/* Glass container */}
          <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] p-8 md:p-12">
  
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8">
              About LuxWalls
            </h1>
  
            {/* Intro */}
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              LuxWalls is a premium wallpaper platform created for individuals who
              appreciate refined aesthetics, clarity, and visual balance. Our
              collection is carefully curated to deliver high-resolution visuals
              that complement modern mobile displays, including AMOLED and
              high-density screens.
            </p>
  
            {/* Vision */}
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">
                Our Vision
              </h2>
              <p className="leading-relaxed text-gray-400">
                We believe a screen is not merely a utility, but a personal visual
                environment experienced throughout the day. LuxWalls exists to
                elevate that experience through wallpapers that are minimal,
                elegant, and intentional.
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                Our focus is on calm, consistency, and visual quality — without
                distraction.
              </p>
            </section>
  
            {/* Differentiation */}
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">
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
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">
                Designed With Purpose
              </h2>
              <p className="leading-relaxed text-gray-400">
                LuxWalls is intentionally lightweight and fast. From discovery to
                download, the experience is designed to be seamless, intuitive,
                and free of unnecessary steps.
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                There are no accounts, no intrusive monetization, and no friction
                between users and content.
              </p>
            </section>
  
            {/* Respect */}
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">
                Respect for Users
              </h2>
              <p className="leading-relaxed text-gray-400">
                LuxWalls prioritizes user privacy and attention. We avoid
                aggressive tracking, forced registrations, and manipulative
                design practices.
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                The platform is transparent by design — focused solely on
                delivering value through content.
              </p>
            </section>
  
            {/* Future */}
            <section className="mb-14">
              <h2 className="text-2xl font-medium text-white mb-4">
                Looking Ahead
              </h2>
              <p className="leading-relaxed text-gray-400">
                LuxWalls continues to evolve with thoughtful improvements,
                refined curation, and performance enhancements. Our objective is
                to become a trusted destination for premium wallpapers.
              </p>
            </section>
  
            {/* Closing */}
            <div className="border-t border-white/10 pt-8">
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