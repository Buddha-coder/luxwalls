export type Orientation = "portrait" | "landscape";

export interface Wallpaper {
  id: number;
  title: string;
  category: string;

  // file
  src: string;

  // metadata
  description?: string;
  resolution?: string;
  orientation?: Orientation;
  tags?: string[];
  createdAt?: string;
  fileSize?: string;
  views?: number;
  downloads?: number;
  colors?: string[];
  bestFor?: string[];
}

export const wallpapers: Wallpaper[] = [
  {
    id: 0,
    title: "Amoled Abyss",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled0/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "dark", "mobile", "minimal"],
    createdAt: "2025-01-28",
    colors: ["#000000", "#1A1A1A", "#333333"],
  },
  {
    id: 1,
    title: "Azure Bloom",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled1/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "dark", "flowers", "lockscreen"],
    createdAt: "2025-01-28",
    colors: ["#000000", "#1E3A8A", "#60A5FA"],
  },
  {
    id: 2,
    title: "Ivory Petals",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled2/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "dark", "flowers", "mobile"],
    createdAt: "2025-01-28",
    colors: ["#000000", "#F3F4F6", "#D1D5DB"],
  },
  {
    id: 3,
    title: "Stone Peak",
    category: "amoled",
    src: "https://picsum.photos/seed/amoled3/1080/1920",
    orientation: "portrait",
    tags: ["amoled", "rocks", "dark", "mobile"],
    createdAt: "2025-01-28",
    colors: ["#000000", "#4B5563", "#9CA3AF"],
  },
  {
    id: 101,
    title: "Crimson Peak",
    category: "minimal",
    src: "https://picsum.photos/seed/min101/1080/1920",
    orientation: "portrait",
    tags: ["minimal", "birds", "nature", "colorful"],
    createdAt: "2025-01-28",
    colors: ["#EF4444", "#000000", "#FFFFFF"],
  },
  {
    id: 102,
    title: "Serene Sky",
    category: "minimal",
    src: "https://picsum.photos/seed/min102/1080/1920",
    orientation: "portrait",
    tags: ["minimal", "nature"],
    createdAt: "2025-01-28",
    colors: ["#BAE6FD", "#FFFFFF", "#F0F9FF"],
  },
  {
    id: 301,
    title: "Emerald Canopy",
    category: "nature",
    src: "https://picsum.photos/seed/nat301/1080/1920",
    orientation: "portrait",
    tags: ["nature", "leaf", "woods"],
    createdAt: "2025-01-28",
    colors: ["#064E3B", "#065F46", "#34D399"],
  },
  {
    id: 401,
    title: "Phantom Speed",
    category: "cars",
    src: "https://picsum.photos/seed/car401/1080/1920",
    orientation: "portrait",
    tags: ["cars", "lockscreen", "sports car"],
    createdAt: "2025-01-28",
    colors: ["#000000", "#C9A24D", "#333333"],
  },
  {
    id: 601,
    title: "Midnight Gaze",
    category: "anime",
    src: "https://picsum.photos/seed/ani601/1080/1920",
    orientation: "portrait",
    tags: ["anime", "nature", "girl", "character", "moody"],
    createdAt: "2025-01-28",
    colors: ["#1E1B4B", "#312E81", "#C9A24D"],
  },
];
