import Link from 'next/link';
import { buildWebPageJsonLd } from '@/lib/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

const checklist = [
  'Creative coding and interactive web development',
  'Kinetic typography and expressive web animation',
  'Performance-first experiences from mobile through desktop',
  'Accessible interaction design for touch, pointer, and keyboard',
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
            Creative development lab & portfolio
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <section
          aria-labelledby="readiness-heading"
          className="space-y-4 rounded-lg border border-border bg-card p-4 text-left text-card-foreground"
        >
          <header className="space-y-1">
            <h2 id="readiness-heading" className="text-base font-medium">
              Creative development for agencies and design studios
            </h2>
            <p className="text-sm text-muted-foreground">
              A lab exploring the intersection of art direction, interaction
              design, and performance-focused frontend engineering.
            </p>
          </header>
          <div className="space-y-4">
            <ul
              className="list-disc space-y-2 pl-6 text-sm text-muted-foreground"
              aria-label="Creative development focus"
            >
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/sitemap.xml"
                className="inline-flex min-h-8 items-center justify-center rounded-lg border border-border bg-background px-2.5 text-sm font-medium hover:bg-muted hover:text-foreground"
              >
                Preview sitemap
              </Link>

              <Link
                href="/llms.txt"
                className="inline-flex min-h-8 items-center justify-center rounded-lg border border-border bg-background px-2.5 text-sm font-medium hover:bg-muted hover:text-foreground"
              >
                View llms.txt
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
