"use client";

import { useIosInstallHint } from "@/hooks/useIosInstallHint";

export default function IosInstallHint() {
  const { visible, dismiss } = useIosInstallHint();

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-4 left-1/2 z-40
        w-[92%] max-w-md -translate-x-1/2
        rounded-xl border border-white/10
        bg-black/70 backdrop-blur-xl
        shadow-[0_0_20px_rgba(212,175,55,0.15)]
        md:hidden
      "
    >
      <div className="px-4 py-3 text-sm text-gray-300">
        <p className="font-medium text-white mb-1">
          Install LuxWalls
        </p>
        <p className="text-xs text-gray-400">
          Tap <span className="text-white">Share</span> →{" "}
          <span className="text-white">Add to Home Screen</span>
        </p>

        <button
          onClick={dismiss}
          className="mt-2 rounded-sm text-xs text-gray-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black/70"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
