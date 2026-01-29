"use client";

import { useEffect, useState } from "react";

export default function PostInstallWelcome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const installed = localStorage.getItem("luxwalls_installed");
    const seen = localStorage.getItem("luxwalls_welcome_seen");

    if (installed && !seen) {
      setShow(true);
      localStorage.setItem("luxwalls_welcome_seen", "true");

      setTimeout(() => setShow(false), 1800);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center animate-welcome-in">

        {/* Brand */}
        <div
          className="text-6xl font-semibold text-white tracking-widest"
          style={{ textShadow: "0 0 40px rgba(212,175,55,0.35)" }}
        >
          LW
        </div>

        {/* Message */}
        <p className="mt-4 text-sm text-gray-400">
          Welcome to LuxWalls
        </p>
      </div>
    </div>
  );
}
