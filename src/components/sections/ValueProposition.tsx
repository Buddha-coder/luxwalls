import { Gem, Smartphone, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";

export default function ValueProposition() {
  return (
    <section className="w-full bg-black px-4 py-24 md:py-40 border-t border-white/5">
      <Container>
        <div className="grid gap-12 md:gap-24 text-center sm:grid-cols-3">
          <ValueCard 
            icon={<Gem className="h-6 w-6 text-primary" />}
            title="Curated Quality"
            desc="Handpicked assets ensuring flawless detail and perfect clarity on flagship displays."
            delay="200ms"
          />
          <ValueCard 
            icon={<Smartphone className="h-6 w-6 text-primary" />}
            title="Hardware Native"
            desc="A mobile-first experience optimized for AMOLED and high-density retina screens."
            delay="400ms"
          />
          <ValueCard 
            icon={<Zap className="h-6 w-6 text-primary" />}
            title="Infinite Access"
            desc="Zero accounts. Zero friction. Just a seamless journey from archive to download."
            delay="600ms"
          />
        </div>
      </Container>
    </section>
  );
}

function ValueCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) {
  return (
    <div className="flex flex-col items-center animate-fade-in space-y-6" style={{ animationDelay: delay }}>
      <div className="relative h-20 w-20 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-2xl group transition-all duration-500 hover:border-primary/40">
        <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-headline font-bold text-white tracking-tight">{title}</h3>
        <p className="text-xs md:text-sm text-white/40 leading-relaxed max-w-[240px] mx-auto uppercase tracking-widest font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}
