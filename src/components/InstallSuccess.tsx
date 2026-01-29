"use client";

import { useEffect, useState } from "react";

export default function InstallSuccess() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const success = localStorage.getItem("luxwalls_install_success");
    if (success) {
      setShow(true);
      localStorage.removeItem("luxwalls_install_success");

      setTimeout(() => setShow(false), 1200);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="text-center animate-success-in">

        {/* LW mark */}
        <div
          className="text-6xl font-semibold text-white tracking-widest"
          style={{ textShadow: "0 0 35px rgba(212,175,55,0.35)" }}
        >
          LW
        </div>

        {/* Message */}
        <p className="mt-3 text-sm text-gray-300">
          LuxWalls is ready
        </p>
      </div>
    </div>
  );
}