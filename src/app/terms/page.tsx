export const metadata = {
    title: "Terms & Conditions | LuxWalls",
    description:
      "Review LuxWalls terms and conditions for usage, content rights, and platform guidelines.",
  };
  
  export default function TermsPage() {
    return (
      <main className="relative min-h-screen bg-[#0E0E11] text-gray-300 overflow-hidden">
  
        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
  
        <div className="relative max-w-4xl mx-auto px-6 py-24">
          <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] p-8 md:p-12">
  
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8">
              Terms & Conditions
            </h1>
  
            <p className="text-gray-400 leading-relaxed mb-10">
              By accessing or using LuxWalls, you agree to the following terms and
              conditions. Please read them carefully.
            </p>
  
            <section className="mb-8">
              <h2 className="text-2xl text-white font-medium mb-4">
                Use of Content
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Wallpapers provided on LuxWalls are for personal use only.
                Redistribution, resale, or commercial use without permission is
                prohibited.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl text-white font-medium mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-400 leading-relaxed">
                All content, branding, and design elements on LuxWalls are owned
                by or licensed to the platform unless stated otherwise.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="text-2xl text-white font-medium mb-4">
                Platform Availability
              </h2>
              <p className="text-gray-400 leading-relaxed">
                LuxWalls is provided on an “as is” basis. We do not guarantee
                uninterrupted access or error-free operation.
              </p>
            </section>
  
            <section className="mb-12">
              <h2 className="text-2xl text-white font-medium mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-400 leading-relaxed">
                These terms may be updated at any time. Continued use of LuxWalls
                constitutes acceptance of the revised terms.
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