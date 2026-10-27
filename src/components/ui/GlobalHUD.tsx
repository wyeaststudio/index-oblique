'use client';

import { useEffect, useState } from 'react';
import styles from './GlobalHUD.module.css';

export function GlobalHUD() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById('preloader-container');

    if (!preloader) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setPreloaderVisible(entry.isIntersecting && entry.intersectionRatio > 0);
    });

    observer.observe(preloader);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="global-hud"
      className={styles.hud}
      role="region"
      aria-label="Global HUD"
      inert={preloaderVisible}
    >
      <div className={styles.perimeter} aria-hidden="true" />
      <div className={styles.registrationMarks} aria-hidden="true" />
      <div
        className={styles.densityWedge}
        role="img"
        aria-label="CMYK density step wedge"
      >
        <span className={styles.cyan} />
        <span className={styles.magenta} />
        <span className={styles.yellow} />
        <span className={styles.key} />
      </div>

      <div className={styles.layout}>
        <div
          id="hud-brand-slot"
          className={`${styles.slot} ${styles.brandSlot}`}
        >
          <span className={styles.brandCrosshair} aria-hidden="true" />
          <span>LOC: 00°00&apos;N</span>
        </div>

        <div
          id="hud-catalog-slot"
          className={`${styles.slot} ${styles.catalogSlot}`}
        >
          <p className={styles.recordLine}>
            <span className={styles.recordDot} aria-label="Recording status" />
            <span>[ IDX-00 // REC ]</span>
          </p>
          <button className={styles.pullButton} type="button">
            [ CATALOG / PULL ↓ ]
          </button>
        </div>

        <div
          id="hud-oblique-slot"
          className={`${styles.slot} ${styles.obliqueSlot}`}
        >
          <p className={styles.strategy}>
            [ &quot;Honor thy error as a hidden intention&quot; ]
          </p>
          <button className={styles.strategyButton} type="button">
            [+] PULL STRATEGY // RE-SEED
          </button>
        </div>

        <div
          id="hud-progress-slot"
          className={`${styles.slot} ${styles.progressSlot}`}
        >
          <div id="muybridge-container" className={styles.horseFrame}>
            <svg
              viewBox="0 0 96 64"
              role="img"
              aria-label="Outline of a running horse, frame 00"
            >
              <path
                d="M22 20c4-7 12-10 22-9l13 4 11-2 7-8 9 2 3 10-7 8-10 3-9 9-12 2-7-4-7 5-4 14h-5l1-17-7 16h-5l4-22-7-6-5 5-5-2 5-8 9-2 7 2Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
              <path
                d="m40 39-2 12m15-14 8 12m-3-31 6 7m-39-5-7-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
              <circle cx="78" cy="13" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <div className={styles.progressTelemetry}>
            <span>
              [<span aria-hidden="true">🐎</span> 00/16]
            </span>
            <span>[SCROLL]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
