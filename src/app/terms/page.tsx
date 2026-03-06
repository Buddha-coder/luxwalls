import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the LuxWalls terms and conditions. Understand the content usage rights, platform guidelines, and our commitment to a fair user experience.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-28 md:py-44">
        <div className="glass-container !rounded-[2rem] md:!rounded-[2.5rem]">
          <div className="glass-filter" />
          <div className="glass-overlay" />
          <div className="glass-specular" />
          
          <div className="glass-content p-6 sm:p-10 md:p-16 space-y-10 md:space-y-12">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-5xl font-headline text-white leading-tight">
                Terms & Conditions
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-prose">
                By accessing or using LuxWalls, you agree to the following terms and
                conditions. Please read them carefully.
              </p>
            </div>

            <section className="space-y-4 pt-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Use of Content
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                Wallpapers provided on LuxWalls are for personal, non-commercial
                use only. Redistribution, resale, or commercial use without
                explicit permission is prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Intellectual Property
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                All content, branding, and design elements on LuxWalls are owned
                by or licensed to the platform unless stated otherwise. All rights
                are reserved.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Disclaimer of Warranties
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                The service is provided on an “as is” and “as available” basis.
                LuxWalls makes no warranty that the service will be uninterrupted,
                timely, secure, or error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Changes to Terms
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                These terms may be updated at any time. Continued use of LuxWalls
                constitutes acceptance of the revised terms.
              </p>
            </section>

            <div className="border-t border-white/10 pt-8 mt-12 md:mt-16">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
