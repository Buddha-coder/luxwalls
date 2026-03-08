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
    <section className="w-full py-20 bg-black border-t border-white/5">
      <Container>
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Discover By Atmosphere</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter">Choose Your Vibe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {moods.map((mood) => (
            <Link 
              key={mood.name} 
              href={mood.href}
              className="group relative h-[400px] md:h-[500px] rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 hover:scale-[0.98]"
            >
              <Image
                src={mood.src}
                alt={mood.name}
                fill
                className="object-cover brightness-[0.4] group-hover:brightness-[0.6] transition-all duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4">
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight">
                  {mood.name}
                </h3>
                <p className="text-xs text-white/50 uppercase tracking-widest font-medium group-hover:text-primary transition-colors">
                  {mood.description}
                </p>
                <div className="h-px w-0 bg-primary group-hover:w-12 transition-all duration-700" />
              </div>

              {/* Specular Edge */}
              <div className="absolute inset-0 border border-white/5 rounded-[inherit] pointer-events-none" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
