"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { wallpapers } from "@/data/wallpapers";

// Dynamically generate categories from the wallpapers data
const allCategories = wallpapers.map((w) => w.category);
const uniqueCategories = [...new Set(allCategories)];
const categories = ["all", ...uniqueCategories.sort()];

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0">
      {categories.map((cat) => {
        const href = cat === "all" ? "/wallpapers" : `/wallpapers/${cat}`;

        const isActive =
          pathname === href || (cat === "all" && pathname === "/wallpapers");

        return (
          <Link
            key={cat}
            href={href}
            className={cn(
              "whitespace-nowrap rounded-full border px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300",
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_rgba(201,162,77,0.3)]"
                : "border-white/5 bg-white/[0.03] text-muted-foreground hover:text-white hover:bg-white/[0.08] hover:border-white/10"
            )}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
