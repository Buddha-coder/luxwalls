import Link from 'next/link';

export default function PrimaryCTA() {
  return (
    <section className="w-full px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-semibold font-headline sm:text-4xl text-primary">
          Your New Wallpaper Awaits
        </h2>
        <p className="mb-8 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
          The entire collection is free to download. Find the perfect background that reflects your style and elevates your everyday.
        </p>
        <Link
          href="/wallpapers"
          className="text-primary font-semibold hover:underline"
        >
          Start Exploring &rarr;
        </Link>
      </div>
    </section>
  );
}
