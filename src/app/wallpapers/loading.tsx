export default function WallpapersLoading() {
      return (
          <main className="w-full px-4 py-20">
                <div className="mx-auto max-w-7xl">
                        <h1 className="mb-6 text-3xl font-semibold sm:text-4xl">
                                  Premium Wallpapers
                                          </h1>

                                                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                                            {Array.from({ length: 8 }).map((_, index) => (
                                                                        <div
                                                                                      key={index}
                                                                                                    className="aspect-[9/16] animate-pulse rounded-2xl bg-muted"
                                                                                                                />
                                                                                                                          ))}
                                                                                                                                  </div>
                                                                                                                                        </div>
                                                                                                                                            </main>
                                                                                                                                              );
                                                                                                                                              }
}