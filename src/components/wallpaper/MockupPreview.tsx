"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Smartphone, Tablet, Battery as BatteryIcon, Wifi, Signal, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MockupPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

type DeviceType = "mobile" | "tablet";

export default function MockupPreview({ isOpen, onClose, src }: MockupPreviewProps) {
  const [time, setTime] = useState("");
  const [device, setDevice] = useState<DeviceType>("mobile");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const deviceConfigs = {
    mobile: {
      aspect: "aspect-[9/19]",
      width: "max-w-[300px] md:max-w-[340px]",
      radius: "rounded-[3.5rem]",
      border: "border-[12px]",
      notch: true,
    },
    tablet: {
      aspect: "aspect-[3/4]",
      width: "max-w-[500px] md:max-w-[650px]",
      radius: "rounded-[2rem]",
      border: "border-[16px]",
      notch: false,
    },
  };

  const config = deviceConfigs[device];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-8 overflow-hidden"
        >
          {/* Controls Overlay */}
          <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-[110]">
            <div className="flex gap-4 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <button
                onClick={() => setDevice("mobile")}
                className={cn(
                  "p-3 rounded-xl transition-all duration-300 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest",
                  device === "mobile" ? "bg-primary text-primary-foreground shadow-lg" : "text-white/40 hover:text-white"
                )}
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden sm:inline">Phone</span>
              </button>
              <button
                onClick={() => setDevice("tablet")}
                className={cn(
                  "p-3 rounded-xl transition-all duration-300 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest",
                  device === "tablet" ? "bg-primary text-primary-foreground shadow-lg" : "text-white/40 hover:text-white"
                )}
              >
                <Tablet className="w-4 h-4" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
            </div>

            <button 
              onClick={onClose}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors shadow-2xl"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Immersive Background Reflection */}
          <div className="absolute inset-0 z-0 opacity-20 blur-[150px] scale-150 pointer-events-none">
            <Image src={src} alt="" fill className="object-cover" />
          </div>

          {/* The Device Frame */}
          <motion.div
            layout
            initial={{ scale: 0.8, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 60, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 28, 
              stiffness: 180,
              layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }}
            className={cn(
              "relative w-full z-10 bg-[#080808] shadow-[0_0_120px_rgba(0,0,0,1),0_0_0_2px_#222] overflow-hidden",
              config.aspect,
              config.width,
              config.radius,
              config.border,
              "border-[#1a1a1a]"
            )}
          >
            {/* The Notch (Phone Only) */}
            {config.notch && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-[#1a1a1a] rounded-b-[2rem] z-50 flex items-center justify-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#222]" />
                <div className="w-14 h-1.5 rounded-full bg-[#222]" />
              </div>
            )}

            {/* Status Bar */}
            <div className="absolute top-0 inset-x-0 h-12 flex items-center justify-between px-10 z-40 text-white/90 font-bold text-[11px] tracking-tight">
              <span>{time}</span>
              <div className="flex items-center gap-2">
                <Signal className="w-3.5 h-3.5" />
                <Wifi className="w-3.5 h-3.5" />
                <div className="w-6 h-3 border border-white/30 rounded-sm relative px-0.5 py-0.5">
                    <div className="h-full bg-white/80 w-3/4 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Wallpaper Content */}
            <motion.div 
              key={src} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt="Atmosphere Preview"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* UI Overlay (Lock Screen Simulation) */}
            <div className="absolute inset-0 flex flex-col items-center justify-between py-24 z-10">
              <div className="text-center space-y-3 mt-12">
                 <motion.h2 
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className={cn(
                     "font-light text-white tracking-tighter",
                     device === "mobile" ? "text-7xl" : "text-9xl"
                   )}
                 >
                   {time}
                 </motion.h2>
                 <motion.p 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="text-xs font-black uppercase tracking-[0.4em] text-white/60"
                 >
                   {new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                 </motion.p>
              </div>

              {/* Bottom Quick Actions */}
              <div className="flex w-full justify-between px-10">
                <div className="h-14 w-14 rounded-full bg-black/30 backdrop-blur-2xl border border-white/10 flex items-center justify-center transition-transform hover:scale-110">
                  <div className="w-6 h-6 bg-white/90 rounded-full" />
                </div>
                <div className="h-14 w-14 rounded-full bg-black/30 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white transition-transform hover:scale-110">
                   <BatteryIcon className="w-6 h-6 fill-white" />
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white/20 rounded-full z-50" />
          </motion.div>
          
          {/* Footer Label */}
          <div className="absolute bottom-12 text-center space-y-3 pointer-events-none opacity-50">
             <div className="flex items-center justify-center gap-3">
               <RotateCcw className="w-3 h-3 text-primary animate-spin-slow" />
               <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white">Interactive Environment</p>
             </div>
             <p className="text-xs text-white/30 italic font-headline">Visualizing luxury on {device === "mobile" ? "premium hardware" : "the tablet canvas"}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
