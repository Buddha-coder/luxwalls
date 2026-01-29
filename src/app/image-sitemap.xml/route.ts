import { wallpapers } from "@/data/wallpapers";
import type { Wallpaper } from "@/data/wallpapers";

function generateImageSitemap(wallpapers: Wallpaper[]) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://luxwalls.vercel.app";
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  wallpapers.forEach((wallpaper) => {
    xml += `
        <url>
            <loc>${baseUrl}/wallpapers/${wallpaper.category}</loc>
            <image:image>
                <image:loc>${baseUrl}${wallpaper.src}</image:loc>
                <image:title>${`${wallpaper.title} - LuxWalls`}</image:title>
                <image:caption>${`Download the '${wallpaper.title}' wallpaper from the ${wallpaper.category} collection. High-resolution luxury wallpaper for your device.`}</image:caption>
            </image:image>
        </url>`;
  });

  xml += `</urlset>`;
  return xml;
}

export async function GET() {
  const body = generateImageSitemap(wallpapers);

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
