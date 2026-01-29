"use client";

export default function OfflinePage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        {/* Brand */}
        <div className="mb-6">
          <span
            className="text-6xl font-semibold text-white tracking-widest"
            style={{ textShadow: "0 0 30px rgba(212,175,55,0.25)" }}
          >
            LW
          </span>
          <p className="mt-2 text-sm text-gray-400">LuxWalls</p>
        </div>

        {/* Message */}
        <h1 className="text-xl font-medium text-white mb-2">You’re offline</h1>
        <p className="text-sm text-gray-400 mb-6">
          No internet connection detected. Please reconnect to continue
          exploring wallpapers.
        </p>

        {/* Retry */}
        <button
          onClick={() => window.location.reload()}
          className="rounded-md border border-white/10 bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white transition"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
