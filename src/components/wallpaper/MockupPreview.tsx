"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Smartphone, Clock, battery as BatteryIcon, Wifi, Signal } from "lucide-react";
import { useEffect, useState } from "react";

interface MockupPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

export default function MockupPreview({ isOpen, onClose, src }: MockupPreviewProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 md:p-8"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.8, y: 40, rotateX: 15 }}
            animate={{ scale: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.8, y: 40, rotateX: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[320px] aspect-[9/19] rounded-[3.5rem] border-[12px] border-[#1a1a1a] shadow-[0_0_80px_rgba(0,0,0,1),0_0_0_4px_#333] overflow-hidden bg-black"
          >
            {/* The Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-3xl z-50 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#222]" />
              <div className="w-12 h-1 rounded-full bg-[#222]" />
            </div>

            {/* Status Bar */}
            <div className="absolute top-0 inset-x-0 h-12 flex items-center justify-between px-8 z-40 text-white font-bold text-[10px]">
              <span>{time}</span>
              <div className="flex items-center gap-1.5">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <div className="w-5 h-2.5 border border-white/40 rounded-sm relative px-0.5 py-0.5">
                    <div className="h-full bg-white w-3/4 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Wallpaper Content */}
            <Image
              src={src}
              alt="Preview"
              fill
              className="object-cover animate-in fade-in duration-1000"
              priority
            />

            {/* UI Overlay (Lock Screen Simulation) */}
            <div className="absolute inset-0 flex flex-col items-center justify-between py-24 z-10">
              <div className="text-center space-y-2">
                 <motion.h2 
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className="text-7xl font-light text-white tracking-tighter"
                 >
                   {time}
                 </motion.h2>
                 <motion.p 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                   className="text-sm font-medium text-white/80"
                 >
                   {new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                 </motion.p>
              </div>

              <div className="flex w-full justify-between px-10">
                <div className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                  <div className="w-5 h-5 bg-white/80 rounded-full" />
                </div>
                <div className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                   <BatteryIcon className="w-5 h-5 fill-white" />
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50" />
          </motion.div>
          
          <div className="absolute bottom-12 text-center space-y-2 pointer-events-none">
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Live iPhone Experience</p>
             <p className="text-xs text-white/20 italic">Visualizing luxury on hardware</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
