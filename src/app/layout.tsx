import type { Metadata } from "next";
import { PT_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const ptSans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt-sans",
  weight: ["400", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  style: ["normal", "italic"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "LuxWalls: Discover Exclusive Luxury Wallpapers for Your Screen",
    template: "%s | LuxWalls",
  },
  description:
    "Elevate your device with LuxWalls. A curated collection of stunning, high-resolution luxury wallpapers designed for mobile and desktop. Free to download.",
  themeColor: "#C9A24D",
  verification: {
    google: "AHk0YKwgah_gHUL3WxFSIsZvvylxrNrr6MV2d-v9Va8",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
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
    title: "LuxWalls: Discover Exclusive Luxury Wallpapers",
    description:
      "Elevate your device with stunning, high-resolution luxury wallpapers. Free to download.",
    url: baseUrl,
    type: "website",
    siteName: "LuxWalls",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LuxWalls - Exclusive Luxury Wallpapers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxWalls: Discover Exclusive Luxury Wallpapers",
    description:
      "Elevate your device with stunning, high-resolution luxury wallpapers. Free to download.",
    images: [`${baseUrl}/og-image.png`],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LuxWalls",
    url: baseUrl,
  };

  return (
    <html
      lang="en"
      className={`${ptSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-body antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          key="website-jsonld"
        />
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
