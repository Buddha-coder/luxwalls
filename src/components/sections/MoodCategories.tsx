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
    <section className="w-full py-16 md:py-20 bg-black border-t border-white/5 overflow-hidden">
      <Container>
        <div className="text-center mb-12 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Discover By Atmosphere</span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-white tracking-tighter">Choose Your Vibe</h2>
          <p className="max-w-md mx-auto text-[9px] text-white/30 uppercase tracking-[0.2em] font-black">
            Filtered collections tailored for your digital environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {moods.map((mood) => (
            <Link 
              key={mood.name} 
              href={mood.href}
              className="group relative h-[380px] md:h-[480px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 hover:scale-[0.98]"
            >
              <Image
                src={mood.src}
                alt={mood.name}
                fill
                className="object-cover brightness-[0.4] group-hover:brightness-[0.6] transition-all duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-4 z-10">
                <h3 className="text-xl md:text-2xl font-headline font-bold text-white leading-tight">
                  {mood.name}
                </h3>
                <p className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-black group-hover:text-primary transition-colors">
                  {mood.description}
                </p>
                <div className="h-px w-0 bg-primary group-hover:w-16 transition-all duration-700" />
              </div>

              {/* Edge Specular Light */}
              <div className="absolute inset-0 border border-white/10 rounded-[inherit] pointer-events-none z-20 group-hover:border-primary/20 transition-colors" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
