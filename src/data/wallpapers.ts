export type Orientation = "portrait" | "landscape";

export interface Wallpaper {
  id: number;
  title: string;
  category: string;
  src: string;
  resolution?: string;
  orientation?: Orientation;
  tags?: string[];
  createdAt?: string;
  // Extended Metadata for Premium View
  downloads?: number;
  views?: number;
  format?: string;
  fileSize?: string;
  colors?: string[]; // Hex codes
  bestFor?: string[]; // e.g., ["Lock Screen", "Minimalist Setup"]
  description?: string;
}

export const wallpapers: Wallpaper[] = [
  {
    id: 0,
    title: "Deep Space AMOLED Minimalist Wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-0.jpg",
    orientation: "portrait",
    tags: ["amoled", "dark", "mobile", "minimal", "space"],
    createdAt: "2025-01-28",
    downloads: 1240,
    views: 5400,
    format: "JPG",
    fileSize: "2.4 MB",
    resolution: "4K UHD",
    colors: ["#000000", "#1A1A1A", "#C9A24D"],
    bestFor: ["AMOLED Screens", "Lock Screen", "Minimal Setups"],
    description: "Experience true black levels with this deep space inspired AMOLED wallpaper. Perfect for saving battery while maintaining a premium, high-contrast aesthetic on your mobile device."
  },
  {
    id: 1,
    title: "Blue Flora AMOLED Digital Art",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-1.jpg",
    orientation: "portrait",
    tags: ["amoled", "dark", "flowers", "lockscreen", "nature"],
    createdAt: "2025-01-28",
    downloads: 850,
    views: 3200,
    format: "JPG",
    fileSize: "3.1 MB",
    resolution: "4K",
    colors: ["#000000", "#1E3A8A", "#60A5FA"],
    bestFor: ["OLED Displays", "Home Screen"],
    description: "A stunning blue flower rendered against a perfect black background. Designed specifically for high-density OLED displays to make colors pop with vibrant clarity."
  },
  {
    id: 401,
    title: "Midnight Dodge Charger Pursuit",
    category: "cars",
    src: "/wallpapers/cars/cars-401.jpg",
    orientation: "portrait",
    tags: ["cars", "dodge", "midnight", "muscle car"],
    createdAt: "2025-01-28",
    downloads: 2100,
    views: 8900,
    format: "JPG",
    fileSize: "4.2 MB",
    resolution: "8K Ultra",
    colors: ["#0F172A", "#334155", "#FACC15"],
    bestFor: ["Car Enthusiasts", "High-Resolution Displays"],
    description: "Capture the raw power of the Midnight Dodge Charger. This high-resolution asset features dramatic lighting and sharp details, making it the ultimate background for automotive fans."
  },
  {
    id: 402,
    title: "Urban Legend Nissan GTR",
    category: "cars",
    src: "/wallpapers/cars/cars-402.jpg",
    orientation: "portrait",
    tags: ["cars", "nissan", "gtr", "jdm", "urban"],
    createdAt: "2025-01-28",
    downloads: 3400,
    views: 12000,
    format: "JPG",
    fileSize: "3.8 MB",
    resolution: "4K",
    colors: ["#111827", "#4B5563", "#EF4444"],
    bestFor: ["JDM Fans", "Desktop Background"],
    description: "The Godzilla of the streets. This Nissan GTR wallpaper brings the urban racing spirit to your device with professional-grade photography and cinematic tones."
  },
  // Adding more items with basic info for fallback
  { id: 2, title: "Amoled white flower", category: "amoled", src: "/wallpapers/amoled/amoled-2.jpg" },
  { id: 3, title: "Rocky amoled mountain", category: "amoled", src: "/wallpapers/amoled/amoled-3.jpg" },
  { id: 4, title: "Amoled bunny", category: "amoled", src:"/wallpapers/amoled/amoled-4.jpg" },
  { id: 5, title: "Amoled leaf", category: "amoled", src: "/wallpapers/amoled/amoled-5.jpg" },
  { id: 6, title: "Amoled textured", category: "amoled", src: "/wallpapers/amoled/amoled-6.jpg" },
  { id: 7, title: "Amoled balls", category: "amoled", src: "/wallpapers/amoled/amoled-7.jpg" },
  { id: 8, title: "Amoled astronaut", category: "amoled", src: "/wallpapers/amoled/amoled-8.jpg" },
  { id: 9, title: "AMOLED spiderman", category: "amoled", src: "/wallpapers/amoled/amoled-9.jpg" },
  { id: 10, title: "Amoled cloud", category: "amoled", src: "/wallpapers/amoled/amoled-10.jpg" },
  { id: 11, title: "Amoled car", category: "amoled", src: "/wallpapers/amoled/amoled-11.jpg" },
  { id: 12, title: "Amoled wallpaper", category: "amoled", src: "/wallpapers/amoled/amoled-12.jpg" },
  { id: 403, title: "Range Rover defender", category: "cars", src: "/wallpapers/cars/cars-403.jpg" },
  { id: 404, title: "BMW M2", category: "cars", src: "/wallpapers/cars/cars-404.jpg" },
  { id: 405, title: "Porsche racing", category: "cars", src: "/wallpapers/cars/cars-405.jpg" },
  { id: 406, title: "Porsche minimal", category: "cars", src: "/wallpapers/cars/cars-406.jpg" },
  { id: 407, title: "BMW M5", category: "cars", src: "/wallpapers/cars/cars-407.jpg" },
  { id: 408, title: "Porsche nature", category: "cars", src: "/wallpapers/cars/cars-408.jpg" },
  { id: 409, title: "Porsche sports", category: "cars", src: "/wallpapers/cars/cars-409.jpg" },
  { id: 410, title: "Nissan skyline", category: "cars", src: "/wallpapers/cars/cars-410.jpg" },
  { id: 501, title: "Bears illustration", category: "illustration", src: "/wallpapers/illustration/illustration-501.jpg" },
  { id: 502, title: "Anime illustration", category: "illustration", src: "/wallpapers/illustration/illustration-502.jpg" },
  { id: 503, title: "Naruto illustration", category: "illustration", src: "/wallpapers/illustration/illustration-503.jpg" },
  { id: 101, title: "Angry birds", category: "minimal", src: "/wallpapers/minimal/minimal-101.jpg" },
  { id: 102, title: "Minimal nature", category: "minimal", src: "/wallpapers/minimal/minimal-102.jpg" },
  { id: 103, title: "Minimal leaf", category: "minimal", src: "/wallpapers/minimal/minimal-103.jpg" },
  { id: 104, title: "Minimal fluid", category: "minimal", src: "/wallpapers/minimal/minimal-104.jpg" },
  { id: 105, title: "Minimal abstract", category: "minimal", src: "/wallpapers/minimal/minimal-105.jpg" },
  { id: 106, title: "Minimal texture", category: "minimal", src: "/wallpapers/minimal/minimal-106.jpg" },
  { id: 107, title: "Minimal sky", category: "minimal", src: "/wallpapers/minimal/minimal-107.jpg" },
  { id: 108, title: "Minimal flowers", category: "minimal", src: "/wallpapers/minimal/minimal-108.jpg" },
  { id: 109, title: "Illustration painting", category: "illustration", src: "/wallpapers/minimal/minimal-109.jpg" },
  { id: 110, title: "Minimal basketball", category: "minimal", src: "/wallpapers/minimal/minimal-110.jpg" },
  { id: 111, title: "Pikachu illustration", category: "illustration", src: "/wallpapers/minimal/minimal-111.jpg" },
  { id: 112, title: "Goku illustration", category: "illustration", src: "/wallpapers/minimal/minimal-112.jpg" },
  { id: 113, title: "Goku peeking", category: "illustration", src: "/wallpapers/minimal/minimal-113.jpg" },
  { id: 114, title: "Shinchan illustration", category: "illustration", src: "/wallpapers/minimal/minimal-114.jpg" },
  { id: 115, title: "Doraemon illustration", category: "illustration", src: "/wallpapers/minimal/minimal-115.jpg" },
  { id: 301, title: "Leaf nature", category: "nature", src: "/wallpapers/nature/nature-301.jpg" },
  { id: 302, title: "Sea stones", category: "nature", src: "/wallpapers/nature/nature-302.jpg" },
  { id: 303, title: "Greeny Mountain", category: "nature", src: "/wallpapers/nature/nature-303.jpg" },
  { id: 304, title: "Rocky Mountain", category: "nature", src: "/wallpapers/nature/nature-304.jpg" },
  { id: 305, title: "Sea boat", category: "nature", src: "/wallpapers/nature/nature-305.jpg" },
  { id: 306, title: "Yatch mountains", category: "nature", src: "/wallpapers/nature/nature-306.jpg" },
  { id: 307, title: "Ocean nature", category: "nature", src: "/wallpapers/nature/nature-307.jpg" },
  { id: 308, title: "Scenery nature", category: "nature", src: "/wallpapers/nature/nature-308.jpg" },
  { id: 601, title: "Hinata hyuga", category: "anime", src: "/wallpapers/anime/anime-601.jpg" },
  { id: 602, title: "Hinata hyuga moody", category: "anime", src: "/wallpapers/anime/anime-602.jpg" },
  { id: 603, title: "Sakura haruno", category: "anime", src: "/wallpapers/anime/anime-603.jpg" },
  { id: 604, title: "Hinata htuga candle", category: "anime", src: "/wallpapers/anime/anime-604.jpg" },
  { id: 605, title: "Sakura standing", category: "anime", src: "/wallpapers/anime/anime-605.jpg" },
  { id: 606, title: "Minimal Sakura haruno", category: "anime", src: "/wallpapers/anime/anime-606.jpg" },
  { id: 10001, title: "Beautiful Hinata Hyuga", category: "anime", src: "/wallpapers/anime/anime-10001.webp" },
  { id: 10002, title: "Warrior Hinata Hyuga", category: "anime", src: "/wallpapers/anime/anime-10002.webp" },
  { id: 10003, title: "Vibrant Anime Girl Portrait", category: "anime", src: "/wallpapers/anime/anime-10003.webp" },
  { id: 10004, title: "Soft Romantic Anime", category: "anime", src: "/wallpapers/anime/anime-10004.webp" },
  { id: 10005, title: "Nature-Toned Anime", category: "anime", src: "/wallpapers/anime/anime-10005.webp" },
  { id: 10006, title: "Romantic Anime Portrait", category: "anime", src: "/wallpapers/anime/anime-10006.webp" },
  { id: 10007, title: "Elegant Anime Character", category: "anime", src: "/wallpapers/anime/anime-10007.webp" },
  { id: 10008, title: "Aesthetic Anime Portrait", category: "anime", src: "/wallpapers/anime/anime-10008.webp" },
  { id: 10009, title: "Dark-Themed Anime", category: "anime", src: "/wallpapers/anime/anime-10009.webp" },
  { id: 10010, title: "Vibrant Romantic Anime Girl", category: "anime", src: "/wallpapers/anime/anime-10010.webp" },
  { id: 10011, title: "Soft Aesthetic Anime Portrait", category: "anime", src: "/wallpapers/anime/anime-10011.webp" },
  { id: 10012, title: "Romantic Anime Art", category: "anime", src: "/wallpapers/anime/anime-10012.webp" },
  { id: 10013, title: "Dark Aesthetic Anime", category: "anime", src: "/wallpapers/anime/anime-10013.webp" },
  { id: 10014, title: "Balanced-Tone Anime", category: "anime", src: "/wallpapers/anime/anime-10014.webp" },
  { id: 10015, title: "Vibrant Anime Portrait", category: "anime", src: "/wallpapers/anime/anime-10015.webp" },
  { id: 10016, title: "Aesthetic Anime Character", category: "anime", src: "/wallpapers/anime/anime-10016.webp" },
  { id: 10017, title: "Dark Romantic Anime", category: "anime", src: "/wallpapers/anime/anime-10017.webp" },
  { id: 10018, title: "Nature-Infused Anime", category: "anime", src: "/wallpapers/anime/anime-10018.webp" },
];
