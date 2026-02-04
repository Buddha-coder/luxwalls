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

      <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] p-5 md:p-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-headline text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
              LuxWalls respects your privacy and is committed to protecting it.
              This policy outlines how information is handled when you use our
              platform.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-white font-medium leading-tight">
                Information We Collect
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                LuxWalls does not require account creation and does not collect
                personally identifiable information. Basic, anonymous usage data
                may be collected for performance and improvement purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-white font-medium leading-tight">
                Cookies & Analytics
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                Cookies may be used to improve user experience and understand
                general traffic patterns. No data is used to identify individual
                users.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-white font-medium leading-tight">
                Third-Party Services
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                LuxWalls may use third-party services for hosting and analytics.
                These services operate under their own privacy policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl text-white font-medium leading-tight">
                Policy Updates
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">
                This privacy policy may be updated periodically. Continued use of
                LuxWalls indicates acceptance of any changes.
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
