import { Gem, Smartphone, Zap } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="w-full bg-muted px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <Gem className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-4 text-lg font-semibold">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">
              Ultra-high-resolution wallpapers curated for a luxury feel.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-4 text-lg font-semibold">Mobile-First Design</h3>
            <p className="text-sm text-muted-foreground">
              Built for everyone, even the smallest of devices.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-4 text-lg font-semibold">Fast &amp; Free</h3>
            <p className="text-sm text-muted-foreground">
              Zero cost. Zero lag. Just smooth, instant downloads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
