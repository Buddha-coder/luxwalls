import { MetadataRoute } from 'next';
import { wallpapers } from '@/data/wallpapers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://luxwalls.vercel.app';

  const staticRoutes = [
    '',
    '/wallpapers',
    '/about',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route ? 0.8 : 1.0,
  }));

  const categories = [...new Set(wallpapers.map((w) => w.category))];
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/wallpapers/${category}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
