
"use client";

import { useState, useEffect } from "react";
import { Download, CheckCircle2, ChevronDown, Monitor, Smartphone, Tablet, Zap } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { downloadImage } from "@/lib/download-image";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface SmartDownloadModuleProps {
  src: string;
  id: number;
}

export default function SmartDownloadModule({ src, id }: SmartDownloadModuleProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedRes, setSelectedRes] = useState({ 
    label: "Mobile Portrait (Native)", 
    size: "2.8 MB", 
    value: "mobile", 
    icon: <Smartphone className="w-4 h-4" /> 
  });
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Simulate smart detection based on window size
    const timer = setTimeout(() => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSelectedRes({ label: "Ultra HD Desktop 4K", size: "4.2 MB", value: "4k", icon: <Monitor className="w-4 h-4" /> });
      } else if (width >= 768) {
        setSelectedRes({ label: "iPad & Tablet Pro", size: "1.9 MB", value: "tablet", icon: <Tablet className="w-4 h-4" /> });
      } else {
        setSelectedRes({ label: "Mobile Portrait (Native)", size: "2.8 MB", value: "mobile", icon: <Smartphone className="w-4 h-4" /> });
      }
      setIsDetecting(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const resolutions = [
    { label: "Mobile Portrait (Native)", size: "2.8 MB", value: "mobile", icon: <Smartphone className="w-4 h-4" /> },
    { label: "Ultra HD Desktop 4K", size: "4.2 MB", value: "4k", icon: <Monitor className="w-4 h-4" /> },
    { label: "iPad & Tablet Pro", size: "1.9 MB", value: "tablet", icon: <Tablet className="w-4 h-4" /> },
    { label: "Original Metadata (Raw)", size: "12.4 MB", value: "raw", icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <div className="glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/10 space-y-6 md:space-y-8 relative overflow-hidden group">
      {/* Dynamic Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] bg-gold-gradient bg-clip-text text-transparent">
              {isDetecting ? "Detecting Device..." : "Smart Selection"}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2.5 rounded-xl bg-white/5 border border-white/10 text-primary transition-all duration-500",
              isDetecting ? "animate-pulse scale-95" : "scale-100"
            )}>
              {selectedRes.icon}
            </div>
            <h3 className={cn(
              "text-xl md:text-2xl font-bold text-white leading-none transition-all duration-500",
              isDetecting ? "opacity-40 blur-sm" : "opacity-100 blur-0"
            )}>
              {selectedRes.label}
            </h3>
          </div>

          <p className="text-[10px] md:text-xs text-white/40 flex items-center font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-primary/80" /> 
            Verified Safe Assets • {selectedRes.size}
          </p>
        </div>

        {mounted ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group/trigger flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all text-[11px] font-black uppercase tracking-[0.15em] text-white/70 hover:text-white">
                All Sizes <ChevronDown className="w-4 h-4 transition-transform group-hover/trigger:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/95 border-white/10 backdrop-blur-3xl z-50 p-2 rounded-[1.5rem] min-w-[240px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="px-3 py-2 mb-1 border-b border-white/5">
                <p className="text-[9px] font-black uppercase tracking-widest text-primary/60">Available Resolutions</p>
              </div>
              {resolutions.map((res) => (
                <DropdownMenuItem 
                  key={res.value} 
                  className="text-white focus:bg-primary/10 cursor-pointer py-3.5 px-4 rounded-xl flex items-center justify-between transition-colors group/item"
                  onClick={() => {
                    setSelectedRes(res);
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white/5 rounded-xl text-primary/60 group-hover/item:text-primary transition-colors">
                      {res.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold tracking-tight">{res.label}</span>
                      <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">{res.size}</span>
                    </div>
                  </div>
                  {selectedRes.value === res.value && (
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="h-12 w-32 animate-pulse rounded-2xl bg-white/5" />
        )}
      </div>

      <LuxuryButton 
        className="group/btn w-full h-16 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-sm md:text-base font-black uppercase tracking-[0.2em] relative overflow-hidden"
        onClick={() => downloadImage(src, `luxwalls-${id}.jpg`)}
      >
        {/* Button Glass Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1.5s] ease-in-out" />
        
        <Download className="w-5 h-5 mr-3 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:scale-110" />
        Download Asset Free
      </LuxuryButton>
    </div>
  );
}
