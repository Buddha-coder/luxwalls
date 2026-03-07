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
    icon: <Smartphone className="w-4 h-4" /> 
  });
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Simulate smart detection based on window size
    const timer = setTimeout(() => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSelectedRes({ label: "Ultra HD Desktop", size: "4.2 MB", value: "4k", icon: <Monitor className="w-4 h-4" /> });
      } else if (width >= 768) {
        setSelectedRes({ label: "iPad & Tablet Pro", size: "1.9 MB", value: "tablet", icon: <Tablet className="w-4 h-4" /> });
      } else {
        setSelectedRes({ label: "Mobile Portrait", size: "2.8 MB", value: "mobile", icon: <Smartphone className="w-4 h-4" /> });
      }
      setIsDetecting(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const resolutions = [
    { label: "Mobile Portrait", size: "2.8 MB", value: "mobile", icon: <Smartphone className="w-4 h-4" /> },
    { label: "Ultra HD Desktop", size: "4.2 MB", value: "4k", icon: <Monitor className="w-4 h-4" /> },
    { label: "iPad & Tablet Pro", size: "1.9 MB", value: "tablet", icon: <Tablet className="w-4 h-4" /> },
    { label: "Original RAW Asset", size: "12.4 MB", value: "raw", icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <div className="relative glass-container !rounded-[3rem] p-8 md:p-10 border border-white/10 overflow-hidden group">
      {/* Background Ambience */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-[2s]" />
      
      <div className="flex flex-col gap-8 relative z-10">
        
        {/* Detection & Resolution Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className={cn(
                "flex h-1.5 w-1.5 rounded-full",
                isDetecting ? "bg-primary animate-pulse" : "bg-green-500"
              )} />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] bg-gold-gradient bg-clip-text text-transparent">
                {isDetecting ? "Analyzing Hardware..." : "Intelligent Recommendation"}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className={cn(
                "p-3 rounded-full bg-white/[0.04] border border-white/10 text-primary transition-all duration-700",
                isDetecting ? "animate-pulse scale-90" : "scale-100"
              )}>
                {selectedRes.icon}
              </div>
              <div className="space-y-0.5">
                <h3 className={cn(
                  "text-xl md:text-2xl font-bold text-white tracking-tight leading-none transition-all duration-700",
                  isDetecting ? "opacity-30 blur-sm" : "opacity-100 blur-0"
                )}>
                  {selectedRes.label}
                </h3>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">
                  {selectedRes.size} • Verified High Definition
                </p>
              </div>
            </div>
          </div>

          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group/trigger flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/40 transition-all text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white">
                  All Formats <ChevronDown className="w-4 h-4 transition-transform group-hover/trigger:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black/90 border-white/10 backdrop-blur-3xl z-50 p-2 rounded-[2.5rem] min-w-[280px] shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
                <div className="px-6 py-5 mb-2 border-b border-white/5">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">Select Architecture</p>
                </div>
                {resolutions.map((res) => (
                  <DropdownMenuItem 
                    key={res.value} 
                    className="text-white focus:bg-white/[0.05] cursor-pointer py-4 px-6 rounded-full flex items-center justify-between transition-all group/item mb-1"
                    onClick={() => {
                      setSelectedRes(res);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/[0.04] rounded-full text-primary/40 group-hover/item:text-primary transition-colors">
                        {res.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold tracking-tight group-hover/item:translate-x-1 transition-transform">{res.label}</span>
                        <span className="text-[9px] text-white/20 uppercase tracking-widest font-black">{res.size}</span>
                      </div>
                    </div>
                    {selectedRes.value === res.value && (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Action Button */}
        <LuxuryButton 
          className="group/btn w-full h-20 md:h-24 rounded-full flex items-center justify-center text-sm md:text-base font-black uppercase tracking-[0.3em] relative overflow-hidden"
          onClick={() => downloadImage(src, `luxwalls-${id}.jpg`)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1.2s] ease-in-out" />
          <Download className="w-6 h-6 mr-4 transition-all duration-500 group-hover/btn:-translate-y-1 group-hover/btn:scale-110" />
          Download Luxury Asset
        </LuxuryButton>

        {/* Security Trust Bar */}
        <div className="pt-2 flex items-center justify-center gap-6 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest">
             <ShieldCheck className="w-3.5 h-3.5" /> Secure SSL 256-bit
           </div>
           <div className="h-1 w-1 rounded-full bg-white/40" />
           <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest">
             No Registration Required
           </div>
        </div>
      </div>
    </div>
  );
}
