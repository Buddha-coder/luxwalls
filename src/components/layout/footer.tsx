export default function Footer() {
    return (
      <footer className="relative mt-24 shadow-[0_-10px_40px_rgba(212,175,55,0.08)]">
        {/* Glass background */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border-t border-white/10" />
  
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-300">
  
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-white tracking-wide">
              LuxWalls
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Premium luxury wallpapers crafted for high-resolution and AMOLED displays.
            </p>
          </div>
  
          {/* Navigation */}
          <div>
            <h3 className="text-white font-medium mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/wallpapers" className="hover:text-white transition">Wallpapers</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
            </ul>
          </div>
  
          {/* Legal */}
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>
  
          {/* Social */}
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="relative text-center py-5 text-sm text-gray-500 border-t border-white/10">
          © {new Date().getFullYear()} LuxWalls. All rights reserved.
        </div>
      </footer>
    );
  }