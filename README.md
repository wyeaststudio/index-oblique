# Wyeast Sanity Template

A Next.js + Sanity starter built to be clone-ready for client projects with strong defaults for:

- SEO (search indexing and metadata)
- AEO (answer-engine discoverability)
- GEO (AI/LLM surface discoverability)

## What is included

- File-based metadata routes: `robots.ts`, `sitemap.ts`, social image generators, and `llms.txt`.
- Reusable metadata helpers in `src/lib/site-config.ts`.
- JSON-LD helpers for Organization, WebSite, WebPage, and FAQ in `src/lib/seo/json-ld.ts`.
- Sanity schema starter with global settings, pages, and page-level SEO fields.
- Secure baseline headers in `next.config.ts`.

## Clone and run

1. Install dependencies

```bash
npm install
```

2. Copy environment template

```bash
cp env.example env.local
```

3. Fill required env values in `env.local`

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_TITLE`
- `NEXT_PUBLIC_SITE_DESCRIPTION`

4. Start app and studio

```bash
npm run dev
```

Open:

- App: http://localhost:3000
- Studio: http://localhost:3000/studio

## Sanity setup notes

- Schemas live in `src/sanity/schemas`.
- Queries live in `src/sanity/queries.ts`.
- Client and env helpers are in `src/sanity/client.ts` and `src/sanity/env.ts`.
- If no Sanity project ID is set in development, the app keeps running with placeholder behavior for easier cloning.

## SEO, AEO, GEO endpoints

- `robots.txt`: `/robots.txt`
- Sitemap: `/sitemap.xml`
- LLM policy summary: `/llms.txt`
- OpenGraph image: `/opengraph-image`
- Twitter image: `/twitter-image`

## Recommended launch checklist

1. Replace all placeholder env values.
2. Add a real logo URL (`NEXT_PUBLIC_SITE_LOGO`).
3. Populate Site Settings in Sanity.
4. Verify canonical URL and robots rules in production.
5. Validate JSON-LD with Google's Rich Results Test.
6. Confirm sitemap includes published pages.

## Scripts

- `npm run dev` - Run Next.js app.
- `npm run lint` - Run ESLint.
- `npm run typecheck` - Run TypeScript checks.
- `npm run sanity:dev` - Run standalone Sanity Studio.
- `npm run sanity:deploy` - Deploy Sanity Studio.
