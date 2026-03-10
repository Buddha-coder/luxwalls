import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";

const moods = [
  { 
    name: "Midnight AMOLED", 
    href: "/wallpapers/amoled", 
    src: "/wallpapers/amoled/amoled-0.jpg",
    description: "Infinite depth, perfect contrast." 
  },
  { 
    name: "Ethereal Minimal", 
    href: "/wallpapers/minimal", 
    src: "/wallpapers/minimal/minimal-102.jpg",
    description: "The clarity of negative space." 
  },
  { 
    name: "Precision Racing", 
    href: "/wallpapers/cars", 
    src: "/wallpapers/cars/cars-401.jpg",
    description: "Automotive engineering as art." 
  }
];

export default function MoodCategories() {
  return (
    <section className="w-full py-8 md:py-10 bg-black border-t border-white/5 overflow-hidden">
      <Container>
        <div className="text-center mb-6 space-y-1">
          <span className="text-[7px] font-black uppercase tracking-[0.4em] text-primary">Discover By Atmosphere</span>
          <h2 className="text-xl md:text-2xl font-headline font-bold text-white tracking-tighter">Choose Your Vibe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {moods.map((mood) => (
            <Link 
              key={mood.name} 
              href={mood.href}
              className="group relative h-[200px] md:h-[260px] rounded-[1.5rem] overflow-hidden border border-white/5 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[0.98]"
            >
              <Image
                src={mood.src}
                alt={mood.name}
                fill
                className="object-cover brightness-[0.4] group-hover:brightness-[0.5] transition-all duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center space-y-1.5 z-10">
                <h3 className="text-base md:text-lg font-headline font-bold text-white leading-tight">
                  {mood.name}
                </h3>
                <p className="text-[7px] text-white/40 uppercase tracking-[0.2em] font-black group-hover:text-primary transition-colors duration-700">
                  {mood.description}
                </p>
                <div className="h-px w-0 bg-primary group-hover:w-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              </div>

              <div className="absolute inset-0 border border-white/10 rounded-[inherit] pointer-events-none z-20 group-hover:border-primary/20 transition-colors duration-700" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
