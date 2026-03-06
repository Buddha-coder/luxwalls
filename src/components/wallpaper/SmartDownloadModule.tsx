"use client";

import { useState, useEffect } from "react";
import { Download, CheckCircle2, ChevronDown, Monitor, Smartphone, Tablet } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { downloadImage } from "@/lib/download-image";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface SmartDownloadModuleProps {
  src: string;
  id: number;
}

export default function SmartDownloadModule({ src, id }: SmartDownloadModuleProps) {
  const [mounted, setMounted] = useState(false);
  const [resolution, setResolution] = useState("Mobile Portrait (Native)");
  const [fileSize, setFileSize] = useState("2.8 MB");

  // Defer rendering of interactive parts to prevent hydration mismatches with dynamic IDs
  useEffect(() => {
    setMounted(true);
  }, []);

  const resolutions = [
    { label: "Mobile Portrait (Native)", size: "2.8 MB", value: "mobile", icon: <Smartphone className="w-4 h-4" /> },
    { label: "Ultra HD Desktop 4K", size: "4.2 MB", value: "4k", icon: <Monitor className="w-4 h-4" /> },
    { label: "iPad & Tablet Pro", size: "1.9 MB", value: "tablet", icon: <Tablet className="w-4 h-4" /> },
  ];

  return (
    <div className="glass rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 border border-white/10 space-y-5 md:space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[9px] md:text-[10px] text-primary font-black uppercase tracking-[0.2em]">Smart Recognition</p>
          <div className="flex items-center gap-2">
            <h3 className="text-lg md:text-xl font-bold text-white">{resolution}</h3>
          </div>
          <p className="text-[10px] md:text-xs text-white/50 flex items-center">
            <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" /> Verified Safe • {fileSize}
          </p>
        </div>

        {mounted ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center gap-2 px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Resolution <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/95 border-white/10 backdrop-blur-2xl z-50 p-2 rounded-2xl min-w-[220px]">
              {resolutions.map((res) => (
                <DropdownMenuItem 
                  key={res.value} 
                  className="text-white focus:bg-primary/20 cursor-pointer py-3 px-4 rounded-xl flex items-center justify-between"
                  onClick={() => {
                    setResolution(res.label);
                    setFileSize(res.size);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-primary">{res.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{res.label}</span>
                      <span className="text-[10px] text-white/40">{res.size}</span>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="h-10 w-32 animate-pulse rounded-xl bg-white/5" />
        )}
      </div>

      <LuxuryButton 
        className="w-full h-14 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center justify-center text-sm md:text-base font-bold uppercase tracking-[0.1em]"
        onClick={() => downloadImage(src, `luxwalls-${id}.jpg`)}
      >
        <Download className="w-5 h-5 mr-3" />
        Download Free Asset
      </LuxuryButton>
    </div>
  );
}
