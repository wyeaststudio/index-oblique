import type { MetadataRoute } from 'next';
import { ALWAYS_BLOCKED_PATHS, AI_AND_SEARCH_CRAWLERS } from '@/lib/crawlers';
import { siteConfig } from '@/lib/site-config';

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
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
