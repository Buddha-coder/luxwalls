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
        <h1 className="text-lg md:text-xl font-medium text-white mb-2 leading-tight">You’re offline</h1>
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          No internet connection detected. Please reconnect to continue
          exploring wallpapers.
        </p>

        {/* Retry */}
        <button
          onClick={() => window.location.reload()}
          className="h-11 rounded-md border border-white/10 bg-white/90 px-4 text-sm font-medium text-black transition-all duration-200 hover:bg-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
