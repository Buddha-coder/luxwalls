import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your privacy is important to us. Read the LuxWalls privacy policy to understand how we handle data, respect user privacy, and ensure platform security.",
};

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-prose">
                LuxWalls respects your privacy and is committed to protecting it.
                This policy outlines how information is handled when you use our
                platform.
              </p>
            </div>

            <section className="space-y-4 pt-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Information We Collect
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                LuxWalls does not require account creation and does not collect
                personally identifiable information. Basic, anonymous usage data
                may be collected for performance and improvement purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Cookies & Analytics
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                Cookies may be used to improve user experience and understand
                general traffic patterns. No data is used to identify individual
                users.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Third-Party Services
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                LuxWalls may use third-party services for hosting and analytics.
                These services operate under their own privacy policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-3xl text-white font-medium leading-tight font-headline">
                Policy Updates
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                This privacy policy may be updated periodically. Continued use of
                LuxWalls indicates acceptance of any changes.
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
