import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { buildWebPageJsonLd } from '@/lib/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

const checklist = [
  'Accessible semantics and keyboard-friendly navigation',
  'Configurable metadata for search engines and AI assistants',
  'Structured data defaults (Organization, WebSite, WebPage)',
  'Sanity schema starter with page-level SEO fields',
  'Crawler policy via robots, sitemap, and llms.txt endpoints',
];

export default function HomePage() {
  const webPageJsonLd = buildWebPageJsonLd({
    path: '/',
    title: siteConfig.title,
    description: siteConfig.description,
  });

  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-foreground"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <div className="w-full max-w-3xl space-y-6 text-center">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Launch-ready template
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Accessibility and discoverability are built in.
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            This starter now includes configurable metadata, social cards, and
            SEO defaults so new projects can be tuned before launch.
          </p>
        </div>

        <Card className="border-border bg-card text-left">
          <CardHeader>
            <CardTitle>What is ready for your next project</CardTitle>
            <CardDescription>
              The template is prepared for accessible content structure and
              search-friendly launch settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul
              className="list-disc space-y-2 pl-6 text-sm text-muted-foreground"
              aria-label="Template readiness checklist"
            >
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/studio"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: 'default' })}
              >
                Open Sanity Studio
              </Link>

              <Link
                href="/sitemap.xml"
                className={buttonVariants({ variant: 'outline' })}
              >
                Preview sitemap
              </Link>

              <Link
                href="/llms.txt"
                className={buttonVariants({ variant: 'outline' })}
              >
                View llms.txt
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
