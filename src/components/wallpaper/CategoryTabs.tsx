"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const categories = ["all", "amoled", "minimal", "nature", "cars", "illustration"]

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="mb-10 flex gap-3 overflow-x-auto no-scrollbar">
      {categories.map((cat) => {
        const href = cat === "all" ? "/wallpapers" : `/wallpapers/${cat}`;

        const isActive =
          pathname === href || (cat === "all" && pathname === "/wallpapers");

        return (
          <Link
            key={cat}
            href={href}
            className={clsx(
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm capitalize transition-colors duration-200",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
