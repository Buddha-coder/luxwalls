import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "LuxWalls – Premium Luxury Wallpapers",
    template: "%s | LuxWalls",
  },
  description:
    "Download premium luxury wallpapers for free. ultra-high quality, and optimized for every device",

  metadataBase: new URL("https://luxwalls.vercel.app"),

  verification: {
    google: "AHk0YKwgah_gHUL3WxFSIsZvvylxrNrr6MV2d-v9Va8",
  },

  openGraph: {
    title: "LuxWalls – Premium Luxury Wallpapers",
    description:
      "Free premium luxury wallpapers, designed for mobile and desktop.",
    type: "website",
    siteName: "LuxWalls",
  },

  twitter: {
    card: "summary_large_image",
    title: "LuxWalls – Premium Luxury Wallpapers",
    description:
      "Download premium luxury wallpapers for free.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-body antialiased bg-background">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
