'use client';

import type { PointerEvent } from 'react';
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
  {
    label: 'EMAIL',
    detail: 'hello@kellygibbens.me',
    href: siteConfig.contact.email
      ? `mailto:${siteConfig.contact.email}`
      : 'mailto:hello@kellygibbens.me',
  },
  {
    label: 'GITHUB',
    detail: '@kgibbens',
    href: process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/kgibbens',
  },
  {
    label: 'LINKEDIN',
    detail: '/in/kgibbens',
    href: siteConfig.social.linkedin ?? 'https://www.linkedin.com/in/kgibbens/',
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
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
    const cyanX = `${x * 6}px`;
    const cyanY = `${y * 6}px`;

    event.currentTarget.style.setProperty('--cyan-shift-x', cyanX);
    event.currentTarget.style.setProperty('--cyan-shift-y', cyanY);
    event.currentTarget.style.setProperty('--magenta-shift-x', `${-x * 6}px`);
    event.currentTarget.style.setProperty('--magenta-shift-y', `${-y * 6}px`);
  }

  function handlePointerLeave(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--cyan-shift-x', '0px');
    event.currentTarget.style.setProperty('--cyan-shift-y', '0px');
    event.currentTarget.style.setProperty('--magenta-shift-x', '0px');
    event.currentTarget.style.setProperty('--magenta-shift-y', '0px');
  }

  return (
    <section
      id="scene-5"
      className={`${styles.scene} paper-texture`}
      aria-labelledby="colophon-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.cropMarks} aria-hidden="true">
        <span className={styles.cropTopLeft} />
        <span className={styles.cropTopRight} />
        <span className={styles.cropBottomLeft} />
        <span className={styles.cropBottomRight} />
      </div>

      <header className={styles.meta}>
        <span className={styles.metaTitle}>
          {'[COLOPHON // PRODUCTION RUN]'}
        </span>
        <span>LOC: 45.5229°N / 122.9898°W</span>
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
          <span>{'[ PROOF // CMYK PROCESS SEPARATION ]'}</span>
          <span aria-hidden="true">·</span>
          <span>{'[ STATUS: READY TO SHIP ]'}</span>
        </figcaption>
      </figure>

      <div className={styles.closing}>
        <h2 id="colophon-title" className={styles.headline}>
          {'LET’S BREAK THE GRID.'}
        </h2>

        <nav className={styles.docket} aria-label="Contact and outbound links">
          <span className={styles.docketHeading}>DISPATCH MANIFEST // 04</span>
          <ol className={styles.dispatches}>
            {DISPATCHES.map(({ label, detail, href }, index) => (
              <li key={label}>
                <a
                  className={styles.dispatch}
                  href={href}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {`[ 0${index + 1} // ${label}: ${detail} ↗ ]`}
                </a>
              </li>
            ))}
            <li>
              <a className={styles.dispatch} href="#main-content">
                {'[ 04 // BACK TO TOP: [I/O> ⌃ ]'}
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <div id="colophon-resume-grid" className={styles.grid}>
        <LedgerColumn index="01" title="PRODUCTION RUN" rows={PRODUCTION_RUN} />
        <LedgerColumn index="02" title="SYSTEMS & STACK" rows={SYSTEMS_STACK} />
        <LedgerColumn index="03" title="PEDIGREE & EXPERIENCE" rows={PEDIGREE} />
      </div>
    </section>
  );
}
