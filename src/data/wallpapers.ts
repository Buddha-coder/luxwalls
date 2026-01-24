export interface Wallpaper {
  id: number;
  title: string;
  category: string;
  src: string;
}

export const wallpapers: Wallpaper[] = [
  {
    id: 0,
    title: "AMOLED wallpaper",
    category: "amoled",
    src: "/wallpapers/amoled/amoled-1.jpg",
  },
  {
    id: 101,
    title: "MINIMAL wallpaper",
    category: "minimal",
    src: "/wallpapers/minimal/minimal-1.jpg",
  },
  {
    id: 301,
    title: "ABSTRACT wallpaper",
    category: "abstract",
    src: "/wallpapers/abstract/abstract-1.jpg",
  },
  {
    id: 401,
    title: "NATURE wallpaper",
    category: "nature",
    src: "/wallpapers/nature/nature-1.jpg",
  }
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
