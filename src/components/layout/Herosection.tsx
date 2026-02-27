import { AnimateIn } from "@/components/ui/animate-in";

export function Herosection() {
  return (
    <div className="bg-gradient-to-br from-[#EAD6EE] to-[#A0F1EA] dark:from-neutral-900 dark:to-neutral-800 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white">Welcome to My App</h1>
          <p className="mt-4 text-lg md:text-xl text-center text-gray-700 dark:text-gray-300">This is a hero section with a gradient background.</p>
        </AnimateIn>
      </div>
    </div>
  );
}
