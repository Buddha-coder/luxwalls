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
        "inline-flex items-center justify-center rounded-full bg-gold-gradient font-medium text-primary-foreground transition-all duration-500 hover:shadow-[0_0_20px_rgba(201,162,77,0.3)] active:scale-95 select-none",
        size === "sm" && "px-3 py-1.5 text-[10px]",
        size === "md" && "px-5 py-2.5 text-xs",
        size === "lg" && "px-7 py-3.5 text-sm",
        className
      )}
    >
      {children}
    </button>
  );
}
