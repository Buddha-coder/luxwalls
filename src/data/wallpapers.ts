export interface Wallpaper {
    id: number;
    title: string;
    category: string;
    src: string;
  }
  
  export const wallpapers: Wallpaper[] = [
    {
      id: 1,
      title: "Dark AMOLED Waves",
      category: "amoled",
      src: "/wallpapers/amoled/amoled-1.jpg",
    },
    {
      id: 2,
      title: "Pure Black Minimal",
      category: "amoled",
      src: "/wallpapers/amoled/amoled-2.jpg",
    },
    {
      id: 3,
      title: "Green Nature Calm",
      category: "nature",
      src: "/wallpapers/nature/nature-1.jpg",
    },
    {
      id: 4,
      title: "Super beautiful wallpaper",
      category: "minimal",
      src: "/wallpapers/minimal/minimal-1.jpg",
    }
  ];
