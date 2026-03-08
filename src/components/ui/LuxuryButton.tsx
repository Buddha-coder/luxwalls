"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export function LuxuryButton({
  size = "md",
  className,
  children,
  ...props
}: LuxuryButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gold-gradient bg-[length:200%_auto] font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,77,0.5)] animate-shine",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        className
      )}
    >
      {children}
    </button>
  );
}
