import { wallpapers } from '@/data/wallpapers';

function generateSitemap(pages: string[], categories: string[]) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://luxwalls.vercel.app';
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
        xml += `
        <url>
            <loc>${baseUrl}${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>`;
    });

    categories.forEach(category => {
        xml += `
        <url>
            <loc>${baseUrl}/wallpapers/${category}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.9</priority>
        </url>`;
    });

    xml += `</urlset>`;
    return xml;
}

export async function GET() {
    const staticRoutes = [
        '',
        '/wallpapers',
        '/about',
        '/privacy-policy',
        '/terms',
    ];

    const categories = [...new Set(wallpapers.map((w) => w.category))];

    const body = generateSitemap(staticRoutes, categories);

    return new Response(body, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
