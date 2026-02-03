import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the LuxWalls terms and conditions. Understand the content usage rights, platform guidelines, and our commitment to a fair user experience.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-background text-gray-300 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] p-8 md:p-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-headline text-white">
              Terms & Conditions
            </h1>
            <p className="text-gray-400 leading-relaxed">
              By accessing or using LuxWalls, you agree to the following terms and
              conditions. Please read them carefully.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl text-white font-medium">
                Use of Content
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Wallpapers provided on LuxWalls are for personal, non-commercial
                use only. Redistribution, resale, or commercial use without
                explicit permission is prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-white font-medium">
                Intellectual Property
              </h2>
              <p className="text-gray-400 leading-relaxed">
                All content, branding, and design elements on LuxWalls are owned
                by or licensed to the platform unless stated otherwise. All rights
                are reserved.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-white font-medium">
                Disclaimer of Warranties
              </h2>
              <p className="text-gray-400 leading-relaxed">
                The service is provided on an “as is” and “as available” basis.
                LuxWalls makes no warranty that the service will be uninterrupted,
                timely, secure, or error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl text-white font-medium">
                Changes to Terms
              </h2>
              <p className="text-gray-400 leading-relaxed">
                These terms may be updated at any time. Continued use of LuxWalls
                constitutes acceptance of the revised terms.
              </p>
            </section>
          </div>

          <div className="border-t border-white/10 pt-6 mt-12">
            <p className="text-sm text-gray-500">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
