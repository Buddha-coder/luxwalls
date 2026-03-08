'use client';

import { FirebaseClientProvider } from '@/firebase/client-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <FirebaseClientProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </FirebaseClientProvider>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
