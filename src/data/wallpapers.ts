export type Orientation = "portrait" | "landscape";

export interface Wallpaper {
  id: number;
  title: string;
  category: string;

  // file
  src: string;

  // metadata
  description?: string;
  resolution?: string; // e.g. "1080x2400", "4K"
  orientation?: Orientation; // portrait / landscape
  tags?: string[]; // e.g. ["dark", "amoled", "minimal"]
  createdAt?: string; // e.g. "2025-01-12"
  fileSize?: string;
  views?: number;
  downloads?: number;
  colors?: string[];
  bestFor?: string[];
}

export const wallpapers: Wallpaper[] = [
  {
    id: 1,
    title: "Deep Midnight Flow",
    category: "amoled",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080",
    orientation: "portrait",
    tags: ["amoled", "dark", "minimal"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "2.4 MB",
    views: 1240,
    downloads: 850
  },
  {
    id: 2,
    title: "Neon Petals",
    category: "amoled",
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1080",
    orientation: "portrait",
    tags: ["amoled", "dark", "neon"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "3.1 MB",
    views: 980,
    downloads: 620
  },
  {
    id: 3,
    title: "Classic Silver Speed",
    category: "cars",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1080",
    orientation: "portrait",
    tags: ["cars", "porsche", "silver"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "4.2 MB",
    views: 2100,
    downloads: 1400
  },
  {
    id: 4,
    title: "Urban Racer",
    category: "cars",
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1080",
    orientation: "portrait",
    tags: ["cars", "ferrari", "red"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "3.9 MB",
    views: 1850,
    downloads: 1100
  },
  {
    id: 5,
    title: "Silent Horizon",
    category: "minimal",
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1080",
    orientation: "portrait",
    tags: ["minimal", "nature", "calm"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "1.2 MB",
    views: 3200,
    downloads: 2400
  },
  {
    id: 6,
    title: "Abstract Zenith",
    category: "minimal",
    src: "https://images.unsplash.com/photo-1550684847-75bdda21ce95?q=80&w=1080",
    orientation: "portrait",
    tags: ["minimal", "abstract", "white"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "1.5 MB",
    views: 1100,
    downloads: 750
  },
  {
    id: 7,
    title: "Verdant Whisper",
    category: "nature",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1080",
    orientation: "portrait",
    tags: ["nature", "mountains", "fog"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "2.9 MB",
    views: 4500,
    downloads: 3100
  },
  {
    id: 8,
    title: "Coastal Calm",
    category: "nature",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080",
    orientation: "portrait",
    tags: ["nature", "ocean", "beach"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "3.2 MB",
    views: 2800,
    downloads: 1900
  },
  {
    id: 9,
    title: "Ethereal Spirit",
    category: "anime",
    src: "https://images.unsplash.com/photo-1578632738988-4888d946147d?q=80&w=1080",
    orientation: "portrait",
    tags: ["anime", "fantasy", "art"],
    createdAt: "2025-02-27",
    resolution: "4K UHD",
    fileSize: "4.1 MB",
    views: 1500,
    downloads: 950
  }
];
