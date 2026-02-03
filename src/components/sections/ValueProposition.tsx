import { Gem, Smartphone, Zap } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="w-full bg-background px-4 py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 text-center sm:grid-cols-3">
          <div className="flex flex-col items-center animate-fade-in [animation-delay:200ms]">
            <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Gem className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-lg md:text-xl font-semibold font-headline">Curated for Quality</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Every wallpaper is handpicked to ensure flawless detail and perfect clarity on high-resolution screens.
            </p>
          </div>
          <div className="flex flex-col items-center animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-lg md:text-xl font-semibold font-headline">Designed for Devices</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              A mobile-first experience that is equally stunning on tablets and desktops. Your screens, elevated.
            </p>
          </div>
          <div className="flex flex-col items-center animate-fade-in [animation-delay:600ms]">
            <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-lg md:text-xl font-semibold font-headline">Effortless & Free</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              No accounts, no ads, no friction. Just a fast, seamless journey from discovery to download.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
