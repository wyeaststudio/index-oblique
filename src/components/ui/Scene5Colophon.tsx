import { siteConfig } from '@/lib/site-config';
import styles from './Scene5Colophon.module.css';

type PlateChannel = 'cyan' | 'magenta' | 'yellow' | 'key';

const PLATES: { channel: PlateChannel; screenAngle: number }[] = [
  { channel: 'cyan', screenAngle: 15 },
  { channel: 'magenta', screenAngle: 75 },
  { channel: 'yellow', screenAngle: 0 },
  { channel: 'key', screenAngle: 45 },
];

const PRODUCTION_RUN = [
  ['PRESS', 'IDX-00 // ED. 2026'],
  ['STOCK', 'SWISS COFFEE 300GSM'],
  ['PROCESS', 'CMYK + SPOT MAGENTA'],
];

const SYSTEMS_STACK = [
  ['FRAMEWORK', 'NEXT.JS // APP ROUTER'],
  ['LANGUAGE', 'TYPESCRIPT // STRICT'],
  ['MOTION', 'GSAP // SCROLLTRIGGER + FLIP'],
  ['RENDER', 'WEBGL2 // GLSL SHADERS'],
  ['STYLING', 'TAILWIND + CSS MODULES'],
  ['DEPTH', 'CSS 3D // PRESERVE-3D'],
];

const PEDIGREE = [
  ['ROLE', 'CREATIVE ENGINEER // INTERACTIVE'],
  ['LEAD', 'TECHNICAL LEAD // AGENCY BUILDS'],
  ['FOCUS', 'KINETIC TYPE + REALTIME GRAPHICS'],
  ['PRACTICE', 'DESIGN SYSTEMS // PROTOTYPING'],
];

const DISPATCHES = [
  { label: 'GITHUB', href: process.env.NEXT_PUBLIC_GITHUB_URL },
  { label: 'LINKEDIN', href: siteConfig.social.linkedin },
  {
    label: 'EMAIL',
    href: siteConfig.contact.email
      ? `mailto:${siteConfig.contact.email}`
      : undefined,
  },
];

// Screen angle rotates the dot grid, not the portrait, as on a real litho plate.
function HalftonePortrait({
  channel,
  screenAngle,
}: {
  channel: PlateChannel;
  screenAngle: number;
}) {
  const patternId = `halftone-screen-${channel}`;
  const toneId = `halftone-tone-${channel}`;
  const maskId = `halftone-mask-${channel}`;

  return (
    <svg
      className={styles.portrait}
      viewBox="0 0 320 400"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id={patternId}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${screenAngle})`}
        >
          <circle cx="3.5" cy="3.5" r="2.4" fill="currentColor" />
        </pattern>
        <radialGradient id={toneId} cx="0.42" cy="0.36" r="0.7">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </radialGradient>
        <mask id={maskId}>
          <g fill={`url(#${toneId})`}>
            {/* Sitter: head + shoulders */}
            <ellipse cx="160" cy="150" rx="56" ry="68" />
            <path d="M60 340C66 270 108 238 160 238S254 270 260 340Z" />
            {/* Cat, left */}
            <path d="M44 300L52 252L70 274Q86 268 102 274L120 252L128 300Q128 336 86 336Q44 336 44 300Z" />
            {/* Cat, right */}
            <path d="M200 312L206 272L222 290Q236 285 250 290L266 272L272 312Q272 340 236 340Q200 340 200 312Z" />
          </g>
        </mask>
      </defs>

      <rect
        x="20"
        y="20"
        width="280"
        height="330"
        fill={`url(#${patternId})`}
        mask={`url(#${maskId})`}
      />
      <rect
        x="20"
        y="20"
        width="280"
        height="330"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <text
        x="160"
        y="378"
        textAnchor="middle"
        fill="currentColor"
        className={styles.portraitLabel}
      >
        KELLY &amp; CATS // SPECIMEN 00
      </text>
    </svg>
  );
}

function LedgerColumn({
  index,
  title,
  rows,
}: {
  index: string;
  title: string;
  rows: string[][];
}) {
  return (
    <section className={styles.column} aria-labelledby={`ledger-${index}`}>
      <h3 id={`ledger-${index}`} className={styles.columnTitle}>
        <span>{index}</span>
        <span>{title}</span>
      </h3>
      <dl className={styles.rows}>
        {rows.map(([term, value]) => (
          <div key={term} className={styles.row}>
            <dt>{term}:</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Scene5Colophon() {
  return (
    <section
      id="scene-5"
      className={`${styles.scene} paper-texture`}
      aria-labelledby="colophon-title"
    >
      <header className={styles.meta}>
        <h2 id="colophon-title" className={styles.metaTitle}>
          {'[COLOPHON // PRODUCTION RUN]'}
        </h2>
        <span>{'SHEET 05 / 05'}</span>
      </header>

      <figure className={styles.specimen}>
        <div id="cmyk-specimen-frame" className={styles.frame}>
          <span className={`${styles.reg} ${styles.regTL}`} aria-hidden="true">
            [+]
          </span>
          <span className={`${styles.reg} ${styles.regTR}`} aria-hidden="true">
            [+]
          </span>
          <span className={`${styles.reg} ${styles.regBL}`} aria-hidden="true">
            [+]
          </span>
          <span className={`${styles.reg} ${styles.regBR}`} aria-hidden="true">
            [+]
          </span>

          {PLATES.map(({ channel, screenAngle }) => (
            <div
              key={channel}
              className={`cmyk-plate plate-${channel} ${styles.plate} ${styles[`plate-${channel}`]}`}
            >
              <HalftonePortrait channel={channel} screenAngle={screenAngle} />
            </div>
          ))}
        </div>
        <figcaption className={styles.caption}>
          {'4-PLATE SEPARATION // C 15° · M 75° · Y 0° · K 45°'}
        </figcaption>
      </figure>

      <div id="colophon-resume-grid" className={styles.grid}>
        <LedgerColumn index="01" title="PRODUCTION RUN" rows={PRODUCTION_RUN} />
        <LedgerColumn index="02" title="SYSTEMS & STACK" rows={SYSTEMS_STACK} />
        <LedgerColumn index="03" title="PEDIGREE & EXPERIENCE" rows={PEDIGREE} />

        <section className={styles.column} aria-labelledby="ledger-04">
          <h3 id="ledger-04" className={styles.columnTitle}>
            <span>04</span>
            <span>DISPATCHES & LINKS</span>
          </h3>
          <ul className={styles.links}>
            {DISPATCHES.map(({ label, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    className={styles.link}
                    href={href}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {`[${label} ↗]`}
                  </a>
                ) : (
                  <span className={styles.link} aria-disabled="true">
                    {`[${label} ↗]`}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles.cta}>
        <button id="re-crank-button" type="button" className={styles.button}>
          {'[ RE-CRANK PRESS // IDX-00 ↑ ]'}
        </button>
      </div>
    </section>
  );
}
