import type { MetadataRoute } from 'next';
import { ALWAYS_BLOCKED_PATHS, AI_AND_SEARCH_CRAWLERS } from '@/lib/crawlers';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
).replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [...AI_AND_SEARCH_CRAWLERS],
        allow: '/',
        disallow: [...ALWAYS_BLOCKED_PATHS],
      },
      {
        userAgent: '*',
        disallow: [...ALWAYS_BLOCKED_PATHS],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
