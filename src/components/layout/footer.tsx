export default function Footer() {
    return (
      <footer className="relative mt-24">
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 p-[1px] rounded-none 
          bg-[linear-gradient(270deg,#D4AF37,#ffffff,#D4AF37)]
          bg-[length:400%_400%]
          animate-[gradientBorder_14s_ease_infinite]"
        >
          {/* Glass Layer */}
          <div className="h-full w-full bg-black/60 backdrop-blur-xl border-t border-white/10">
            
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-300">
              
              {/* Brand */}
              <div>
                <h2 className="text-2xl font-semibold text-white tracking-wide">
                  LuxWalls
                </h2>
                <p className="mt-4 text-sm text-gray-400">
                  Premium luxury wallpapers crafted for high-resolution and AMOLED displays.
                </p>
              </div>
  
              {/* Explore */}
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
            <div className="text-center py-5 text-sm text-gray-500 border-t border-white/10">
              © {new Date().getFullYear()} LuxWalls. All rights reserved.
            </div>
  
          </div>
        </div>
  
      </footer>
    );
  }