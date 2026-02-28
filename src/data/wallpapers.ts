export type Orientation = "portrait" | "landscape";

export interface Wallpaper {
  id: number;
  title: string;
  category: string;

  // file
  src: string;

  // metadata (new)
  resolution?: string;        // e.g. "1080x2400", "4K"
  orientation?: Orientation;  // portrait / landscape
  tags?: string[];            // e.g. ["dark", "amoled", "minimal"]
  createdAt?: string;         // e.g. "2025-01-12"
}
// TODO (Phase 2):
// Add per-wallpaper pages (/wallpaper/[id]) with individual SEO,
// preview, and download analytics.

export const wallpapers: Wallpaper[] = [
  {
    id: 0,
    title: "Amoled wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-0.jpg",
    orientation: "portrait",
    tags: ["amoled", "dark", "mobile", "minimal"],
   createdAt: "2025-01-28"
  },
  {
    id: 1,
    title: "Amoled blue flower wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-1.jpg",
    orientation: "portrait",
    tags: ["amoled", "dark", "flowers", "lockscreen"],
    createdAt: "2025-01-28"
  },
  {
    id: 2,
    title: "Amoled white flower wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-2.jpg",
    orientation: "portrait",
    tags: ["amoled", "dark", "flowers", "mobile"],
    createdAt: "2025-01-28"
  },
  {
    id: 3,
    title: "Rocky amoled mountain wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-3.jpg",
    orientation: "portrait",
    tags: ["amoled", "rocks", "dark", "mobile"],
    createdAt: "2025-01-28"
  },
  {
    id: 4,
    title: "Amoled bunny wallpaper",
    category: "amoled",
    src:"/wallpapers/amoled/amoled-4.jpg",
    orientation: "portrait",
    tags: ["amoled", "dark", "animals", "minimal"],
    createdAt: "2025-01-28"
  },
  {
    id: 5,
    title: "Amoled leaf wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-5.jpg",
    orientation: "portrait",
    tags: ["amoled", "nature", "dark"],
    createdAt: "2025-01-28"
  },
  {
    id: 6,
    title: "Amoled textured wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-6.jpg",
    orientation: "portrait",
    tags: ["amoled", "texture", "wood"],
    createdAt: "2025-01-28"
  },
  {
    id: 7,
    title: "Amoled balls wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-7.jpg",
    orientation: "portrait",
    tags: ["amoled", "mobile","nature"],
    createdAt: "2025-01-28"
  },
  {
    id: 8,
    title: "Amoled astronaut wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-8.jpg",
    orientation: "portrait",
    tags: ["dark", "amoled", "minimal", "space"],
    createdAt: "2025-01-28"
  },
  {
    id: 9,
    title: "AMOLED spiderman wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-9.jpg",
    orientation: "portrait",
    tags: ["dark", "amoled", "superhero"],
    createdAt: "2025-01-28"
  },
  {
    id: 10,
    title: "Amoled cloud wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-10.jpg",
    orientation: "portrait",
    tags: ["dark", "amoled", "cloud", "minimal", "lockscreen"],
    createdAt: "2025-01-28"
  },
  {
    id: 11,
    title: "Amoled car wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-11.jpg",
    orientation: "portrait",
    tags: ["dark", "amoled", "cars", "lockscreen"],
    createdAt: "2025-01-28"
  },
  {
    id: 12,
    title: "Amoled wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-12.jpg",
    orientation: "portrait",
    tags: ["amoled", "superhero", "mobile"],
    createdAt: "2025-01-28"
  },
  {
    id: 401,
    title: "Dodge wallpaper",
    category: "cars",
    src: "/wallpapers/cars/cars-401.jpg",
    orientation: "portrait",
    tags: ["cars", "lockscreen", "sports car"],
    createdAt: "2025-01-28"
  },
  {
    id: 402,
    title: "Nissan GTR wallpaper",
    category: "cars",
    src: "/wallpapers/cars/cars-402.jpg",
    orientation: "portrait",
    tags: ["cars", "lockscreen", "sports car"],
    createdAt: "2025-01-28"
  },
  {
    id: 403,
    title: "Range Rover defender wallpaper",
    category: "cars",
    src: "/wallpapers/cars/cars-403.jpg",
    orientation: "portrait",
    tags: ["cars", "nature", "SUV", "mobile"],
    createdAt: "2025-01-28"
  },
  {
  id: 404,
  title: "BMW M2 wallpaper",
  category: "cars",
  src: "/wallpapers/cars/cars-404.jpg",
  orientation: "portrait",
  tags: ["cars", "lockscreen", "sports car"],
  createdAt: "2025-01-28"
},
{
  id: 405,
  title: "Porsche wallpaper",
  category: "cars",
  src: "/wallpapers/cars/cars-405.jpg",
  orientation: "portrait",
  tags: ["cars", "mobile", "racing car", "minimal"],
  createdAt: "2025-01-28"
},
{
  id: 406,
  title: "Porsche wallpaper",
  category: "cars",
  src: "/wallpapers/cars/cars-406.jpg",
  orientation: "portrait",
  tags: ["cars", "mobile", "minimal", "racing car"],
  createdAt: "2025-01-28"
  
},
{
  id: 407,
  title: "BMW M5 wallpaper",
  category: "cars",
  src: "/wallpapers/cars/cars-407.jpg",
  orientation: "portrait",
  tags: ["cars", "lockscreen", "sports car"],
  createdAt: "2025-01-28"
},
{
  id: 408,
  title: "Porsche wallpaper",
  category: "cars",
  src: "/wallpapers/cars/cars-408.jpg",
  orientation: "portrait",
  tags: ["cars", "nature", "mobile", "racing car"],
  createdAt: "2025-01-28"
},
{
  id: 409,
  title: "Porsche wallpaper",
  category: "cars",
  src: "/wallpapers/cars/cars-409.jpg",
  orientation: "portrait",
  tags: ["cars", "minimal", "mobile", "sports car"],
  createdAt: "2025-01-28"
},
{
  id: 410,
  title: "Nissan skyline wallpaper",
  category: "cars",
  src: "/wallpapers/cars/cars-410.jpg",
  orientation: "portrait",
  tags: ["cars", "minimal", "mobile", "sports car"],
  createdAt: "2025-01-28"
},
{
  id: 501,
  title: "Bears illustration wallpaper",
  category: "illustration",
  src: "/wallpapers/illustration/illustration-501.jpg",
  orientation: "portrait",
  tags: ["minimal", "illustration", "character", "animals"],
  createdAt: "2025-01-28"
},
{
  id: 502,
  title: "Anime illustration wallpaper",
  category: "illustration",
  src: "/wallpapers/illustration/illustration-502.jpg",
  orientation: "portrait",
  tags: ["minimal", "illustration", "character", "mobile"],
  createdAt: "2025-01-28"
},
{
  id: 503,
  title: "Naruto illustration wallpaper",
  category: "illustration",
  src: "/wallpapers/illustration/illustration-503.jpg",
  orientation: "portrait",
  tags: ["minimal", "illustration", "character", "anime"],
  createdAt: "2025-01-28"
},
{
  id: 101,
  title: "Angry birds wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-101.jpg",
  orientation: "portrait",
  tags: ["minimal", "birds", "nature", "colorful"],
  createdAt: "2025-01-28"
},
{
  id: 102,
  title: "Minimal wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-102.jpg",
  orientation: "portrait",
  tags: ["minimal", "nature"],
  createdAt: "2025-01-28"
},
{
  id: 103,
  title: "Minimal leaf wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-103.jpg",
  orientation: "portrait",
  tags: ["minimal", "nature", "mobile"],
  createdAt: "2025-01-28"
},
{
  id: 104,
  title: "Minimal fluid wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-104.jpg",
  orientation: "portrait",
  tags: ["minimal", "abstract", "mobile", "amoled"],
  createdAt: "2025-01-28"
},
{
  id: 105,
  title: "Minimal abstract wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-105.jpg",
  orientation: "portrait",
  tags: ["minimal", "abstract", "mobile", "colorful"],
  createdAt: "2025-01-28"
},
{
  id: 106,
  title: "Minimal texture wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-106.jpg",
  orientation: "portrait",
  tags: ["minimal", "abstract", "mobile", "texture"],
  createdAt: "2025-01-28"
},
{
  id: 107,
  title: "Minimal sky wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-107.jpg",
  orientation: "portrait",
  tags: ["minimal", "nature", "sky", "tree"],
  createdAt: "2025-01-28"

},
{
  id: 108,
  title: "Minimal flowers wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-108.jpg",
  orientation: "portrait",
  tags: ["minimal", "flower", "sky", "colourful"],
  createdAt: "2025-01-28"
},
{
  id: 109,
  title: "Illustration painting wallpaper",
  category: "illustration",
  src: "/wallpapers/minimal/minimal-109.jpg",
  orientation: "portrait",
  tags: ["illustration", "colourful", "flowers"],
  createdAt: "2025-01-28"
},
{
  id: 110,
  title: "Minimal basketball wallpaper",
  category: "minimal",
  src: "/wallpapers/minimal/minimal-110.jpg",
  orientation: "portrait",
  tags: ["minimal", "nature", "sports", "mobile"],
  createdAt: "2025-01-28"
},
{
  id: 111,
  title: "Pikachu wallpaper",
  category: "illustration",
  src: "/wallpapers/minimal/minimal-111.jpg",
  orientation: "portrait",
  tags: ["illustration", "pokemon", "mobile"],
  createdAt: "2025-01-28"
},
{
  id: 112,
  title: "Goku wallpaper",
  category: "illustration",
  src: "/wallpapers/minimal/minimal-112.jpg",
  orientation: "portrait",
  tags: ["illustration", "character", "mobile"],
  createdAt: "2025-01-28"
},
{
  id: 113,
  title: "Goku peeking wallpaper",
  category: "illustration",
  src: "/wallpapers/minimal/minimal-113.jpg",
  orientation: "portrait",
  tags: ["illustration", "character", "mobile"],
  createdAt: "2025-01-28"
},
{
  id:114,
  title: "Shinchan wallpaper",
  category: "illustration",
  src: "/wallpapers/minimal/minimal-114.jpg",
  orientation: "portrait",
  tags: ["illustration", "character"],
  createdAt: "2025-01-28"
},
{
  id: 115,
  title: "Doraemon wallpaper",
  category: "illustration",
  src: "/wallpapers/minimal/minimal-115.jpg",
  orientation: "portrait",
  tags: ["illustration", "character", "mobile"],
  createdAt: "2025-01-28"
},
{
  id: 301,
  title: "Leaf wallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-301.jpg",
  orientation: "portrait",
  tags: ["nature", "leaf", "woods"],
  createdAt: "2025-01-28"
},
{
  id: 302,
  title: "Sea stones wallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-302.jpg",
  orientation: "portrait",
  tags: ["nature", "sea", "stones"],
  createdAt: "2025-01-28"
},
{
  id: 303,
  title: "Greeny Mountain wallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-303.jpg",
  orientation: "portrait",
  tags: ["nature", "mountain", "sky"],
  createdAt: "2025-01-28"
},
{
  id: 304,
  title: "Rocky Mountainwallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-304.jpg",
  orientation: "portrait",
  tags: ["nature","rocks", "mountain", "sky"],
  createdAt: "2025-01-28"
},
{
  id: 305,
  title: "Sea boat wallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-305.jpg",
  orientation: "portrait",
  tags: ["nature", "ocean", "minimal"],
  createdAt: "2025-01-28"
},
{
  id: 306,
  title: "Yatch between mountains wallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-306.jpg",
  orientation: "portrait",
  tags: ["nature", "mountain", "rocks"],
  createdAt: "2025-01-28"
},
{
  id: 307,
  title: "NATURE wallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-307.jpg",
  orientation: "portrait",
  tags: ["nature", "ocean", "animals", "amoled"],
  createdAt: "2025-01-28"
},
{
  id: 308,
  title: "NATURE wallpaper",
  category: "nature",
  src: "/wallpapers/nature/nature-308.jpg",
  orientation: "portrait",
  tags: ["nature", "animals", "scenery"],
  createdAt: "2025-01-28"
},
{
  id: 601,
  title: "Hinata hyuga wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-601.jpg",
  orientation: "portrait",
  tags: ["anime", "nature", "girl", "character", "moody"],
  createdAt: "2025-01-28"
},
{
  id: 602,
  title: "Hinata hyuga moody wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-602.jpg",
  orientation: "portrait",
  tags: ["anime", "girl", "moody", "character"],
  createdAt: "2025-01-28"
},
{
  id: 603,
  title: "Sakura haruno wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-603.jpg",
  orientation: "portrait",
  tags: ["anime", "girl", "moody", "character"],
  createdAt: "2025-01-28"
},
{
  id: 604,
  title: " Hinata htuga with candle wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-604.jpg",
  orientation: "portrait",
  tags: ["anime", "girl", "character", "mobile"],
  createdAt: "2025-01-28"
},
{
  id: 605,
  title: "Sakura  standing wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-605.jpg",
  orientation: "portrait",
  tags: ["anime", "girl", "natute", "moody"],
  createdAt: "2025-01-26"
},
{
  id: 606,
  title: "Minimal Sakura haruno wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-606.jpg",
  orientation: "portrait",
  tags: ["anime", "girl", "minimal", "character"],
  createdAt: "2025-01-26"
},
{
  id: 10001,
  title: " Beautiful Hinata Hyuga with gorgeous look",
  category: "anime",
  src: "/wallpapers/anime/anime-10001.webp",
  orientation: "portrait",
  tags: ["anime", "girl", "character", "hinata hyuga"],
  createdAt: "2025-02-27"
},
{
  id: 10002,
  title: "Warrior Hinata Hyuga Cold Gaze",
  category: "anime",
  src: "/wallpapers/anime/anime-10002.webp",
  orientation: "portrait",
  tags: ["anime", "character", "girl", "warrior", "hinata hyuga"],
  createdAt: "2025-02-27"
},
  {
  id: 10003,
  title: "Vibrant Anime Girl Portrait with Warm Sunset Glow – 4K Mobile Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10003.webp",
  orientation: "portrait",
  tags: ["anime girl", "vibrant", "romantic tone", "sunset glow", "warm aesthetic", "4k portrait", "mobile wallpaper"],
  createdAt: "2026-02-28",
},
{
  id: 10004,
  title: "Soft Romantic Anime Character in Dreamy Aesthetic Light – Vertical 4K Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10004.webp",
  orientation: "portrait",
  tags: ["anime portrait", "romantic vibe", "aesthetic lighting", "soft colors", "vertical wallpaper", "4k anime"],
  createdAt: "2026-02-28",
},
{
  id: 10005,
  title: "Nature-Toned Anime Character with Calm Earthy Aesthetic – HD Mobile Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10005.webp",
  orientation: "portrait",
  tags: ["anime character", "nature tone", "earth aesthetic", "calm mood", "portrait wallpaper", "vertical anime"],
  createdAt: "2026-02-28",
},
{
  id: 10006,
  title: "Romantic Anime Portrait with Subtle Warm Shadows – 4K Vertical Background",
  category: "anime",
  src: "/wallpapers/anime/anime-10006.webp",
  orientation: "portrait",
  tags: ["anime girl", "romantic aesthetic", "warm shadows", "portrait style", "mobile wallpaper 4k"],
  createdAt: "2026-02-28",
},
{
  id: 10007,
  title: "Elegant Anime Character with Soft Romantic Glow – HD Portrait Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10007.webp",
  orientation: "portrait",
  tags: ["anime portrait", "soft glow", "romantic anime", "vertical 4k", "aesthetic wallpaper"],
  createdAt: "2026-02-28",
},
{
  id: 10008,
  title: "Aesthetic Anime Portrait with Balanced Neutral Tones – 4K Mobile Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10008.webp",
  orientation: "portrait",
  tags: ["anime wallpaper", "aesthetic tone", "neutral colors", "portrait style", "hd vertical"],
  createdAt: "2026-02-28",
},
{
  id: 10009,
  title: "Dark-Themed Anime Character with Intense Mood Lighting – 4K Portrait Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10009.webp",
  orientation: "portrait",
  tags: ["dark anime", "moody lighting", "intense vibe", "portrait wallpaper", "4k vertical anime"],
  createdAt: "2026-02-28",
},
{
  id: 10010,
  title: "Vibrant Romantic Anime Girl with Bright Color Highlights – HD Phone Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10010.webp",
  orientation: "portrait",
  tags: ["anime girl 4k", "vibrant aesthetic", "romantic mood", "bright highlights", "vertical wallpaper"],
  createdAt: "2026-02-28",
},
{
  id: 10011,
  title: "Soft Aesthetic Anime Portrait with Subtle Color Harmony – 4K Background",
  category: "anime",
  src: "/wallpapers/anime/anime-10011.webp",
  orientation: "portrait",
  tags: ["anime portrait hd", "color harmony", "aesthetic vibe", "vertical 4k", "mobile background"],
  createdAt: "2026-02-28",
},
{
  id: 10012,
  title: "Romantic Anime Character with Warm Artistic Lighting – 4K Portrait Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10012.webp",
  orientation: "portrait",
  tags: ["anime art", "romantic tone", "warm lighting", "portrait style", "4k mobile wallpaper"],
  createdAt: "2026-02-28",
},
{
  id: 10013,
  title: "Dark Aesthetic Anime Portrait with Dramatic Mood – HD Vertical Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10013.webp",
  orientation: "portrait",
  tags: ["dark anime wallpaper", "dramatic mood", "portrait 4k", "vertical background", "intense aesthetic"],
  createdAt: "2026-02-28",
},
{
  id: 10014,
  title: "Balanced-Tone Anime Character with Elegant Soft Lighting – 4K Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10014.webp",
  orientation: "portrait",
  tags: ["anime elegance", "soft lighting", "portrait hd", "vertical 4k wallpaper"],
  createdAt: "2026-02-28",
},
{
  id: 10015,
  title: "Vibrant Anime Portrait with Warm Romantic Expression – 4K Phone Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10015.webp",
  orientation: "portrait",
  tags: ["anime girl portrait", "vibrant tone", "romantic vibe", "hd vertical wallpaper"],
  createdAt: "2026-02-28",
},
{
  id: 10016,
  title: "Aesthetic Anime Character with Calm Neutral Mood – 4K Vertical Background",
  category: "anime",
  src: "/wallpapers/anime/anime-10016.webp",
  orientation: "portrait",
  tags: ["anime calm vibe", "neutral tone", "portrait wallpaper 4k", "vertical hd"],
  createdAt: "2026-02-28",
},
{
  id: 10017,
  title: "Dark Romantic Anime Portrait with Intense Color Depth – 4K Mobile Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10017.webp",
  orientation: "portrait",
  tags: ["dark anime aesthetic", "romantic mood", "color depth", "portrait hd wallpaper"],
  createdAt: "2026-02-28",
},
{
  id: 10018,
  title: "Nature-Infused Anime Character with Earthy Aesthetic – HD Vertical Wallpaper",
  category: "anime",
  src: "/wallpapers/anime/anime-10018.webp",
  orientation: "portrait",
  tags: ["anime nature vibe", "earth tone", "calm aesthetic", "4k portrait wallpaper"],
  createdAt: "2026-02-28",
},
];

// ---- COPY FROM HERE ----
/*
{
  id: 0,
  title: "",
  category: "",
  src: "",
},
*/
// ---- COPY TILL HERE ----
