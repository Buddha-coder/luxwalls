import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://luxwalls.vercel.app"),

  title: {
    default: "LuxWalls",
    template: "%s | LuxWalls"
  },

  description:
    "Discover exclusive luxury wallpapers for mobile and desktop. High-resolution, premium aesthetic backgrounds. 100% free download.",

  applicationName: "LuxWalls",

  openGraph: {
    type: "website",
    url: "https://luxwalls.vercel.app",
    siteName: "LuxWalls",
    title: "LuxWalls",
    description:
      "Discover exclusive luxury wallpapers for mobile and desktop. High-resolution, premium aesthetic backgrounds. 100% free download.",
  },

  twitter: {
    card: "summary_large_image",
    title: "LuxWalls",
    description:
      "Discover exclusive luxury wallpapers for mobile and desktop. High-resolution, premium aesthetic backgrounds. 100% free download.",
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
    name: "LuxWalls",
    alternateName: "LuxWalls Primium Wallpaers",
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
          <main className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 pb-24 pt-20">
          {children}
          </main>
          <Footer />
        </div>
        <Toaster />
        <PwaInstallPrompt />
        <IosInstallHint />
        <RegisterSW />
        <InstallSuccess />
        <PostInstallWelcome />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
