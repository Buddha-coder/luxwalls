// app/sitemap.xml/route.ts
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://luxwalls.vercel.app';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${baseUrl}/pages-sitemap.xml</loc>
      </sitemap>
      <sitemap>
        <loc>${baseUrl}/image-sitemap.xml</loc>
      </sitemap>
    </sitemapindex>`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
