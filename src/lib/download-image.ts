export async function downloadImage(
      imageUrl: string,
        fileName: string
        ) {
          try {
              const response = await fetch(imageUrl);
                  const blob = await response.blob();

                      const url = window.URL.createObjectURL(blob);
                          const a = document.createElement("a");

                              a.href = url;
                                  a.download = fileName;
                                      document.body.appendChild(a);
                                          a.click();

                                              document.body.removeChild(a);
                                                  window.URL.revokeObjectURL(url);
                                                    } catch (error) {
                                                        console.error("Download failed:", error);
                                                          }
                                                          }
)