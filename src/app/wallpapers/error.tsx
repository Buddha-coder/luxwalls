"use client";

export default function WallpapersError({
  error,
    reset,
    }: {
      error: Error;
        reset: () => void;
        }) {
          return (
              <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
                    <h2 className="mb-4 text-2xl font-semibold">
                            Something went wrong
                                  </h2>

                                        <p className="mb-8 text-muted-foreground">
                                                We couldn’t load the wallpapers. Please try again.
                                                      </p>

                                                            <button
                                                                    onClick={reset}
                                                                            className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
                                                                                  >
                                                                                          Try again
                                                                                                </button>
                                                                                                    </main>
                                                                                                      );
                                                                                                      }