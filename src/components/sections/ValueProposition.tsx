import { Gem, Smartphone, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";

export default function ValueProposition() {
  return (
    <section className="w-full bg-black px-4 py-20 md:py-32 border-t border-white/5">
      <Container>
        <div className="grid gap-10 md:gap-16 text-center sm:grid-cols-3">
          <ValueCard 
            icon={<Gem className="h-5 w-5 text-primary" />}
            title="Curated Quality"
            desc="Handpicked assets ensuring flawless detail and perfect clarity."
            delay="200ms"
          />
          <ValueCard 
            icon={<Smartphone className="h-5 w-5 text-primary" />}
            title="Hardware Native"
            desc="Optimized for AMOLED and high-density retina screens."
            delay="400ms"
          />
          <ValueCard 
            icon={<Zap className="h-5 w-5 text-primary" />}
            title="Infinite Access"
            desc="Zero accounts. Zero friction. Seamless archive to download."
            delay="600ms"
          />
        </div>
      </Container>
    </section>
  );
}

function ValueCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) {
  return (
    <div className="flex flex-col items-center animate-fade-in space-y-4" style={{ animationDelay: delay }}>
      <div className="relative h-16 w-16 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center shadow-xl group transition-all duration-500 hover:border-primary/40">
        <div className="absolute inset-0 bg-primary/5 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-headline font-bold text-white tracking-tight">{title}</h3>
        <p className="text-[9px] md:text-[10px] text-white/30 leading-relaxed max-w-[200px] mx-auto uppercase tracking-[0.2em] font-bold">
          {desc}
        </p>
      </div>
    </div>
  );
}
