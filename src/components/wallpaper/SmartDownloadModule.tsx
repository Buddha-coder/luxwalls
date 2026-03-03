"use client";

import { useState } from "react";
import { Download, CheckCircle2, ChevronDown } from "lucide-react";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { downloadImage } from "@/lib/download-image";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface SmartDownloadModuleProps {
  src: string;
  id: number;
}

export default function SmartDownloadModule({ src, id }: SmartDownloadModuleProps) {
  const [resolution, setResolution] = useState("Mobile Portrait (Optimized)");
  const [fileSize, setFileSize] = useState("2.8 MB");

  const resolutions = [
    { label: "Mobile Portrait (Optimized)", size: "2.8 MB", value: "mobile" },
    { label: "Desktop 4K UHD", size: "4.2 MB", value: "4k" },
    { label: "Tablet / iPad", size: "1.9 MB", value: "tablet" },
  ];

  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-1 text-center md:text-left">
        <p className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">Recommended For You</p>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <p className="text-lg md:text-xl font-semibold">{resolution}</p>
        </div>
        <p className="text-xs text-primary flex items-center justify-center md:justify-start">
          <CheckCircle2 className="w-3 h-3 mr-1" /> Verified Safe Download • {fileSize}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-xs md:text-sm font-medium">
              Resolutions <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black/95 border-white/10 backdrop-blur-xl z-50">
            {resolutions.map((res) => (
              <DropdownMenuItem 
                key={res.value} 
                className="text-white focus:bg-primary/20 cursor-pointer py-2 px-4"
                onClick={() => {
                  setResolution(res.label);
                  setFileSize(res.size);
                }}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{res.label}</span>
                  <span className="text-[10px] text-muted-foreground">{res.size}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <LuxuryButton 
          className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 flex items-center justify-center"
          onClick={() => downloadImage(src, `luxwalls-${id}.jpg`)}
        >
          <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Download Free
        </LuxuryButton>
      </div>
    </div>
  );
}
