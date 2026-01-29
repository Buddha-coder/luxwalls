export default function Footer() {
  return (
    <footer className="bg-[#0E0E11] text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">LuxWalls</h2>
          <p className="mt-3 text-sm">
            Premium luxury wallpapers crafted for high-resolution and AMOLED displays.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/wallpapers" className="hover:text-white">Wallpapers</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-medium mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-medium mb-3">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">GitHub</a></li>
            <li><a href="#" className="hover:text-white">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} LuxWalls. All rights reserved.
      </div>
    </footer>
  );
}
