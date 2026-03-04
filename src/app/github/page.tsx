import { Github, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "GitHub | LuxWalls",
  description: "Connect with the developer on GitHub.",
};

export default function GitHubPage() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-md">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors mb-8 uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>

          <div className="glass rounded-[2.5rem] p-10 md:p-12 border border-white/5 shadow-2xl text-center space-y-8">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(201,162,77,0.2)]">
                <Github className="w-10 h-10" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-headline font-bold text-white leading-tight">
                GitHub
              </h1>
              <div className="h-px w-12 bg-primary/30 mx-auto" />
              <p className="text-lg font-medium text-primary/80 italic">
                Link will be adding soon
              </p>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-2">Developed By</p>
              <p className="text-base font-headline font-semibold text-white">
                Buddha Ratna Gautam
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
