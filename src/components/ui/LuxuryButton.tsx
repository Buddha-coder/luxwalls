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
        "rounded-xl bg-primary font-medium text-primary-foreground transition-opacity hover:opacity-90",
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
