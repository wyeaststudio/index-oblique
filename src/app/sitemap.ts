import type { MetadataRoute } from 'next';
import { allPageSlugsQuery } from '@/sanity/queries';
import { client } from '@/sanity/client';
import { isSanityConfigured } from '@/sanity/env';

type PageSlugRow = {
  slug: string;
  _updatedAt: string;
};

const staticRoutes = [''];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  ).replace(/\/$/, '');

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route ? `${baseUrl}/${route}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route ? 0.7 : 1,
  }));

  if (!isSanityConfigured) {
    return staticEntries;
  }

  try {
    const pages = await client.fetch<PageSlugRow[]>(allPageSlugsQuery);
    const dynamicEntries: MetadataRoute.Sitemap = pages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: page._updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [...staticEntries, ...dynamicEntries];
  } catch {
    return staticEntries;
  }
}
