import { LuxuryButton } from "@/components/ui/LuxuryButton";
import Link from "next/link";

export default function PrimaryCTA() {
  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-semibold font-headline sm:text-4xl">
          Upgrade Your Screen Today
        </h2>
        <p className="mb-8 text-base text-muted-foreground sm:text-lg">
          Start downloading premium wallpapers for free.
        </p>

        <Link href="/wallpapers">
          <LuxuryButton size="lg">Explore Wallpapers</LuxuryButton>
        </Link>
      </div>
    </section>
  );
}
