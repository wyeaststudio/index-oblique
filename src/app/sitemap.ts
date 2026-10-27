import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

const staticRoutes = [''];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: route ? `${siteConfig.url}/${route}` : siteConfig.url,
    changeFrequency: 'weekly',
    priority: route ? 0.7 : 1,
  }));
}
