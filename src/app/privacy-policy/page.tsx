export const metadata = {
    title: "Privacy Policy | LuxWalls",
    description:
      "Read LuxWalls privacy policy to understand how we handle data, user privacy, and platform security.",
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <main className="relative min-h-screen bg-[#0E0E11] text-gray-300 overflow-hidden">
  
        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
  
        <div className="relative max-w-4xl mx-auto px-6 py-24">
          <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] p-8 md:p-12">
  
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8">
              Privacy Policy
            </h1>
  
            <p className="text-gray-400 leading-relaxed mb-10">
              LuxWalls respects your privacy and is committed to protecting it.
              This policy outlines how information is handled when you use our
              platform.
            </p>
  
            <section className="mb-8">
              <h2 className="text-2xl text-white font-medium mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-400 leading-relaxed">
                LuxWalls does not require account creation and does not collect
                personally identifiable information. Basic, anonymous usage data
                may be collected for performance and improvement purposes.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl text-white font-medium mb-4">
                Cookies & Analytics
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Cookies may be used to improve user experience and understand
                general traffic patterns. No data is used to identify individual
                users.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl text-white font-medium mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-400 leading-relaxed">
                LuxWalls may use third-party services for hosting and analytics.
                These services operate under their own privacy policies.
              </p>
            </section>
  
            <section className="mb-12">
              <h2 className="text-2xl text-white font-medium mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-400 leading-relaxed">
                This privacy policy may be updated periodically. Continued use of
                LuxWalls indicates acceptance of any changes.
              </p>
            </section>
  
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().getFullYear()}
              </p>
            </div>
  
          </div>
        </div>
      </main>
    );
  }