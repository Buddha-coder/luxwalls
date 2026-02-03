"use client";

import { usePwaInstall } from "@/hooks/usePwaInstall";

export default function PwaInstallPrompt() {
  const { visible, install, dismiss } = usePwaInstall();

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
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-medium text-white">
            Install LuxWalls
          </p>
          <p className="text-xs text-gray-400">
            Get a faster, app-like experience
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={dismiss}
            className="rounded-sm text-xs text-gray-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background"
          >
            Not now
          </button>
          <button
            onClick={install}
            className="rounded-md bg-white px-3 py-1 text-xs font-medium text-black transition hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
