import type { Metadata } from "next";
import { PT_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const ptSans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt-sans",
  weight: ['400', '700'],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  style: ["normal", "italic"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "LuxWalls – Premium 4K & HD Luxury Wallpapers for Mobile & Desktop",
    template: "%s | LuxWalls",
  },
  description:
    "Download free premium luxury wallpapers in 4K and HD. LuxWalls offers a curated collection of high-quality, minimal, and AMOLED-friendly wallpapers for your mobile and desktop screens.",
  verification: {
    google: "AHk0YKwgah_gHUL3WxFSIsZvvylxrNrr6MV2d-v9Va8",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "LuxWalls – Premium Luxury Wallpapers",
    description:
      "Free premium luxury wallpapers, designed for mobile and desktop.",
    url: baseUrl,
    type: "website",
    siteName: "LuxWalls",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LuxWalls - Premium Luxury Wallpapers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxWalls – Premium Luxury Wallpapers",
    description:
      "Download premium luxury wallpapers for free. High-quality, minimal, and AMOLED-friendly.",
    images: [`${baseUrl}/og-image.png`],
  },
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ptSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-body antialiased bg-background text-foreground">
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
