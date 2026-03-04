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

// Using remote high-res placeholders to ensure previews show up immediately
// Hostname "picsum.photos" is configured in next.config.ts
export const wallpapers: Wallpaper[] = [
  {
    id: 0,
    title: "Amoled Deep Void",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled0/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "dark", "mobile", "minimal"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "2.4 MB"
  },
  {
    id: 1,
    title: "Neon Petals",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled1/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "dark", "flowers", "lockscreen"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "3.1 MB"
  },
  {
    id: 2,
    title: "Ethereal Bloom",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled2/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "dark", "flowers", "mobile"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "2.8 MB"
  },
  {
    id: 3,
    title: "Midnight Peak",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled3/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "rocks", "dark", "mobile"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "3.5 MB"
  },
  {
    id: 401,
    title: "Carbon Stealth",
    category: "cars",
    src: "https://picsum.photos/seed/car401/1080/1920",
    orientation: "portrait",
    tags: ["cars", "lockscreen", "sports car"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "4.2 MB"
  },
  {
    id: 402,
    title: "Urban Racer",
    category: "cars",
    src: "https://picsum.photos/seed/car402/1080/1920",
    orientation: "portrait",
    tags: ["cars", "lockscreen", "sports car"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "3.9 MB"
  },
  {
    id: 101,
    title: "Simple Horizon",
    category: "minimal",
    src: "https://picsum.photos/seed/min101/1080/1920",
    orientation: "portrait",
    tags: ["minimal", "birds", "nature", "colorful"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "1.2 MB"
  },
  {
    id: 102,
    title: "Quiet Morning",
    category: "minimal",
    src: "https://picsum.photos/seed/min102/1080/1920",
    orientation: "portrait",
    tags: ["minimal", "nature"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "1.5 MB"
  },
  {
    id: 301,
    title: "Verdent Whisper",
    category: "nature",
    src: "https://picsum.photos/seed/nat301/1080/1920",
    orientation: "portrait",
    tags: ["nature", "leaf", "woods"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "2.9 MB"
  },
  {
    id: 302,
    title: "Coastal Calm",
    category: "nature",
    src: "https://picsum.photos/seed/nat302/1080/1920",
    orientation: "portrait",
    tags: ["nature", "sea", "stones"],
    createdAt: "2025-01-28",
    resolution: "4K UHD",
    fileSize: "3.2 MB"
  },
  {
    id: 10001,
    title: "Starlight Guardian",
    category: "anime",
    src: "https://picsum.photos/seed/anime10001/1080/1920",
    orientation: "portrait",
    tags: ["anime", "girl", "character", "high-res"],
    createdAt: "2025-02-27",
    resolution: "4K UHD",
    fileSize: "4.1 MB"
  }
];
