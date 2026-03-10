"use client";

import { useState, useEffect } from "react";
import { Download, CheckCircle2, ChevronDown, Monitor, Smartphone, Tablet, Zap, ShieldCheck } from "lucide-react";
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
    label: "Mobile Portrait", 
    size: "2.8 MB", 
    value: "mobile", 
    icon: <Smartphone className="w-3.5 h-3.5" /> 
  });
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSelectedRes({ label: "Ultra HD Desktop", size: "4.2 MB", value: "4k", icon: <Monitor className="w-3.5 h-3.5" /> });
      } else if (width >= 768) {
        setSelectedRes({ label: "iPad & Tablet Pro", size: "1.9 MB", value: "tablet", icon: <Tablet className="w-3.5 h-3.5" /> });
      } else {
        setSelectedRes({ label: "Mobile Portrait", size: "2.8 MB", value: "mobile", icon: <Smartphone className="w-3.5 h-3.5" /> });
      }
      setIsDetecting(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const resolutions = [
    { label: "Mobile Portrait", size: "2.8 MB", value: "mobile", icon: <Smartphone className="w-3.5 h-3.5" /> },
    { label: "Ultra HD Desktop", size: "4.2 MB", value: "4k", icon: <Monitor className="w-3.5 h-3.5" /> },
    { label: "iPad & Tablet Pro", size: "1.9 MB", value: "tablet", icon: <Tablet className="w-3.5 h-3.5" /> },
    { label: "Original RAW Asset", size: "12.4 MB", value: "raw", icon: <Zap className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="relative glass-container !rounded-[2.5rem] p-6 md:p-8 border border-white/10 overflow-hidden group select-none">
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/5 blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-all duration-[2s]" />
      
      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={cn(
                "flex h-1 w-1 rounded-full",
                isDetecting ? "bg-primary animate-pulse" : "bg-green-500"
              )} />
              <p className="text-[8px] font-black uppercase tracking-[0.4em] bg-gold-gradient bg-clip-text text-transparent">
                {isDetecting ? "Analyzing Hardware..." : "Hardware Recommendation"}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2.5 rounded-full bg-white/[0.03] border border-white/5 text-primary transition-all duration-700",
                isDetecting ? "animate-pulse scale-90" : "scale-100"
              )}>
                {selectedRes.icon}
              </div>
              <div className="space-y-0">
                <h3 className={cn(
                  "text-lg md:text-xl font-bold text-white tracking-tight leading-none transition-all duration-700",
                  isDetecting ? "opacity-30 blur-sm" : "opacity-100 blur-0"
                )}>
                  {selectedRes.label}
                </h3>
                <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-black">
                  {selectedRes.size} • Verified HD
                </p>
              </div>
            </div>
          </div>

          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group/trigger flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all text-[9px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white active:scale-95">
                  Formats <ChevronDown className="w-3 h-3 transition-transform group-hover/trigger:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black/95 border-white/10 backdrop-blur-3xl z-50 p-1.5 rounded-[2rem] min-w-[240px] shadow-2xl">
                <div className="px-5 py-4 mb-1.5 border-b border-white/5">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/60">Select Architecture</p>
                </div>
                {resolutions.map((res) => (
                  <DropdownMenuItem 
                    key={res.value} 
                    className="text-white focus:bg-white/[0.04] cursor-pointer py-3 px-5 rounded-full flex items-center justify-between transition-all group/item mb-1"
                    onClick={() => setSelectedRes(res)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/[0.03] rounded-full text-primary/40 group-hover/item:text-primary transition-colors">
                        {res.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold tracking-tight">{res.label}</span>
                        <span className="text-[8px] text-white/20 uppercase tracking-widest font-black">{res.size}</span>
                      </div>
                    </div>
                    {selectedRes.value === res.value && <CheckCircle2 className="w-3.5 h-3.5 text-primary" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        <LuxuryButton 
          className="group/btn w-full h-16 md:h-20 rounded-full flex items-center justify-center text-[11px] font-black uppercase tracking-[0.3em] relative overflow-hidden active:scale-[0.98]"
          onClick={() => downloadImage(src, `luxwalls-${id}.jpg`)}
        >
          <Download className="w-5 h-5 mr-3 transition-all duration-500 group-hover/btn:-translate-y-1" />
          Download Asset
        </LuxuryButton>

        <div className="pt-1 flex items-center justify-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
           <div className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest">
             <ShieldCheck className="w-3 h-3" /> SSL Secured
           </div>
           <div className="h-0.5 w-0.5 rounded-full bg-white/40" />
           <div className="text-[8px] font-black uppercase tracking-widest">
             Direct Access
           </div>
        </div>
      </div>
    </div>
  );
}
