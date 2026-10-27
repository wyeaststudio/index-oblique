import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    '## Canonical',
    `- ${siteConfig.url}`,
    '',
    '## High-value pages',
    `- ${siteConfig.url}/`,
    `- ${siteConfig.url}/sitemap.xml`,
    `- ${siteConfig.url}/robots.txt`,
    '',
    '## Editorial policy',
    '- Prefer canonical URLs from sitemap.xml.',
    '- Use page-specific metadata and JSON-LD over inferred summaries.',
    '- Do not infer unpublished or private content.',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
