import { Toaster } from "@/components/ui/toaster";
import type { Metadata, Viewport } from "next";
import { PT_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import IosInstallHint from "@/components/IosInstallHint";
import InstallSuccess from "@/components/InstallSuccess";
import PostInstallWelcome from "@/components/PostInstallWelcome";
import PwaInstallPrompt from "@/components/PwaInstallPrompt";
import RegisterSW from "@/components/RegisterSW";
import "./globals.css";
import { Providers } from "./providers";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";

const ptSans = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-sans",
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "LuxWalls | Premium Luxury Wallpapers",
    template: "%s | LuxWalls"
  },
  description: "Exclusive luxury wallpapers for mobile and desktop. High-resolution, AMOLED-optimized, premium aesthetic backgrounds. 100% free download.",
  applicationName: "LuxWalls",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "LuxWalls",
    title: "LuxWalls",
    description: "Discover exclusive luxury wallpapers for high-end displays. 4K, 8K, and AMOLED curated backgrounds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxWalls",
    description: "Premium luxury wallpapers for elite setups.",
  }
};

export const viewport: Viewport = {
  themeColor: "#C9A24D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LuxWalls",
    "alternateName": "LuxWalls Premium Wallpapers",
    "url": baseUrl,
  };

  return (
    <html
      lang="en"
      className={`${ptSans.variable} ${playfairDisplay.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        
        {/* SVG FILTER DEFINITION FOR ADVANCED GLASS DISTORTION */}
        <svg style={{ display: 'none' }}>
          <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>

        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
          
          <Toaster />
          <PwaInstallPrompt />
          <IosInstallHint />
          <RegisterSW />
          <InstallSuccess />
          <PostInstallWelcome />
        </Providers>
      </body>
    </html>
  );
}
