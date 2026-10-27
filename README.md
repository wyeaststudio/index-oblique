# Index Oblique

A creative development lab and portfolio built to get noticed by agencies. Index
Oblique demonstrates art direction, interaction design, and the engineering
needed to make expressive work run well on real devices.

The work is the pitch: kinetic typography, tactile transitions, interactive
specimens, and deliberate motion, delivered with equal care from mobile through
desktop. This is a bespoke portfolio.

## Creative Direction

An industrial print shop meets an interactive lab: paper substrates, carbon ink,
process-magenta accents, halftone imagery, mechanical movement, and phosphor-lit
specimen projections.

The planned experience moves through Preloader, Genesis, Monoculture, Awakening,
Specimen Bay, and Colophon, connected by a persistent HUD and authored
transitions. Design and interaction references:

- [Architecture and tokens](.specs/global/00-architecture-and-tokens.md)
- [Scene specifications](.specs/scenes)
- [Transition specifications](.specs/transitions)

These specs describe the intended experience, not a list of completed features.
Implementation currently starts from a Next.js foundation; the scene system and
GSAP animation stack are not yet implemented.

## Performance First

**Target 120 fps on capable devices and 120 Hz displays.** That leaves roughly
8.33 ms per frame for the browser's rendering work. This is a development
target, not a measured result or a promise for every device.

- Keep animation work off React's render cycle. Prefer compositor-friendly
  transforms and opacity; profile typography, filters, and other costly effects.
- Avoid layout thrashing, unnecessary allocation, and long main-thread tasks in
  scroll and pointer handlers.
- Load media deliberately: size assets for their viewport, defer offscreen work,
  and release resources when scenes no longer need them.
- Scale effect complexity to device capability. Lower refresh rates and slower
  hardware should receive a stable experience, not the full effect stack at the
  expense of responsiveness.
- Measure production builds on real mobile and desktop hardware. Record frame
  times, dropped frames, input responsiveness, and loading behavior rather than
  relying on an average FPS counter alone.

## Mobile Through Desktop

Responsive behavior is part of each scene's design, not a final layout pass.

- Compose for small touchscreens, tablets, laptops, and large desktop displays,
  including portrait and landscape layouts.
- Give hover interactions meaningful touch and keyboard equivalents. Projects
  and navigation must remain available without a precise pointer.
- Keep text legible, touch targets usable, and the HUD clear of primary content.
- Respect reduced-motion preferences with alternatives to pinned sequences,
  velocity effects, flashes, and other intensive motion.
- Preserve readable content and navigation when an effect is reduced or
  disabled.

## Development

Current foundation: Node.js 26.12.1 (Current), Next.js 16.4.3 (App Router),
React 19, TypeScript, and Tailwind CSS 4. Next.js 16.4.3 was verified as the
latest stable release on October 26, 2026. The specs propose GSAP Core,
ScrollTrigger, and Flip for motion. There is no CMS dependency.

Tailwind runs through `@tailwindcss/cli`; the project PostCSS config and
`@tailwindcss/postcss` dependency have been removed. Next.js may still include
PostCSS internally, but the project's Tailwind compilation does not use it.

Edit [src/app/(web)/globals.css](src/app/%28web%29/globals.css). The CLI writes
`src/app/tailwind.generated.css`, which the app imports. This generated output
is ignored by Git and should not be edited manually.

`npm run dev` compiles CSS once, then runs the Tailwind watcher and Next.js
together through `concurrently`. `npm run build` compiles minified CSS before
creating the Next.js production build. Neither workflow needs a separate manual
CSS command. Restart any existing dev server after switching to this setup.

Use the Node.js version pinned in [.nvmrc](.nvmrc):

```bash
nvm install
nvm use
npm ci
```

Site identity can be configured through `NEXT_PUBLIC_SITE_URL`,
`NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_SITE_TITLE`, and
`NEXT_PUBLIC_SITE_DESCRIPTION` in your local environment. These are optional for
local development.

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

| Command             | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Compile CSS, then watch CSS and run Next.js. |
| `npm run build`     | Compile CSS and create a production build.   |
| `npm run css:build` | Compile minified CSS once.                   |
| `npm run css:watch` | Watch and recompile CSS independently.       |
| `npm start`         | Serve the production build locally.          |
| `npm run lint`      | Run ESLint.                                  |
| `npm run typecheck` | Check TypeScript types.                      |

Before shipping a scene, check its entry, interaction, and exit on touch and
pointer devices, test keyboard access and reduced motion, and profile the
production build against the performance target.

## Supporting Infrastructure

Metadata, structured data, social images, robots rules, a sitemap, and
`llms.txt` are retained as a discoverability baseline. SEO, AEO, and GEO support
the work; they do not drive the creative direction or take priority over
performance, usability, and the quality of the portfolio.

The canonical site is **https://indexoblique.studio**, branded
**Index/Oblique**. Shared metadata, structured data, social cards, robots rules,
and the sitemap use this identity. Remove stale `NEXT_PUBLIC_SITE_*` overrides
in hosting settings before deploying. Only set contact, logo, and social-profile
variables to real, public details; no placeholder contact information is
published by default.

For search-engine verification, optionally set `GOOGLE_SITE_VERIFICATION` and
`BING_SITE_VERIFICATION` to the verification codes provided by those services,
then rebuild. After deployment, verify the domain in Google Search Console and
Bing Webmaster Tools and submit `https://indexoblique.studio/sitemap.xml`.

Metadata does not guarantee rankings, and Google does not use meta keywords as a
ranking signal. Publish crawlable project case studies with original work, clear
roles, technical decisions, and measured results. Relevant agency credits and
editorial links matter more than keyword repetition. Add real project URLs to
the sitemap as those pages ship; avoid empty pages made solely for search.
