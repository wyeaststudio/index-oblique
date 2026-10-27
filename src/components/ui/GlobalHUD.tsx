'use client';

import { useEffect, useState } from 'react';
import styles from './GlobalHUD.module.css';

const scenes = [
  { id: 'scene-1', label: '01 / Genesis', color: styles.cyan },
  { id: 'scene-2', label: '02 / Monoculture', color: styles.magenta },
  { id: 'scene-3', label: '03 / Awakening', color: styles.yellow },
  { id: 'scene-4', label: '04 / Specimen Bay', color: styles.violet },
  { id: 'scene-5', label: '05 / Colophon', color: styles.emerald },
];

export function GlobalHUD() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [activeScene, setActiveScene] = useState<string | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const observeScenes = () => {
      observer?.disconnect();
      // Pixel margins keep the center band tied to height, not viewport width.
      const inset = Math.max(0, window.innerHeight / 2 - 1);
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveScene(entry.target.id);
            }
          }
        },
        { rootMargin: `-${inset}px 0px -${inset}px 0px` },
      );

      for (const scene of scenes) {
        const section = document.getElementById(scene.id);
        if (section) {
          observer.observe(section);
        }
      }
    };

    observeScenes();
    window.addEventListener('resize', observeScenes);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', observeScenes);
    };
  }, []);

  useEffect(() => {
    const preloader = document.getElementById('preloader-container');

    if (!preloader) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const visible = entry.isIntersecting && entry.intersectionRatio > 0;

          if (entry.target.id === 'preloader-container') {
            setPreloaderVisible(visible);
          }
        }
      },
      // Fractional scroll positions must not leave navigation inert at scene 1.
      { rootMargin: '-1px 0px' },
    );

    if (preloader) {
      observer.observe(preloader);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hud = document.getElementById('global-hud');
    const darkScene = document.getElementById('scene-2');
    if (!hud || !darkScene) return;

    const surfaces = hud.querySelectorAll<HTMLElement>('[data-hud-surface]');
    let frame = 0;
    const updateInk = () => {
      frame = 0;
      const bounds = darkScene.getBoundingClientRect();
      for (const surface of surfaces) {
        const slot = surface.getBoundingClientRect();
        const center = slot.top + slot.height / 2;
        surface.dataset.dark = String(center >= bounds.top && center < bounds.bottom);
      }
      hud.style.setProperty('--dark-top', `${Math.max(0, bounds.top)}px`);
      hud.style.setProperty(
        '--dark-bottom',
        `${Math.max(0, window.innerHeight - bounds.bottom)}px`,
      );
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateInk);
    };
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(hud);
    observer.observe(darkScene);
    updateInk();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <div
      id="global-hud"
      className={`${styles.hud} font-hud`}
      role="region"
      aria-label="Global HUD"
      inert={preloaderVisible}
    >
      <div className={styles.lightFrame} aria-hidden="true">
        <div className={styles.perimeter} />
        <div className={styles.registrationMarks} />
      </div>
      <div className={styles.darkFrame} aria-hidden="true">
        <div className={styles.perimeter} />
        <div className={styles.registrationMarks} />
      </div>
      <nav
        className={styles.densityWedge}
        aria-label="Scene navigation"
      >
        {scenes.map((scene) => (
          <a
            key={scene.id}
            data-hud-surface
            className={`${styles.sceneLink} ${scene.color}`}
            href={`#${scene.id}`}
            aria-label={`Scene ${scene.label}`}
            aria-current={activeScene === scene.id ? 'location' : undefined}
            onClick={(event) => {
              if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              ) {
                return;
              }

              const section = document.getElementById(scene.id);
              if (section) {
                event.preventDefault();
                section.scrollIntoView({
                  behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
                    .matches
                    ? 'instant'
                    : 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            <span className={styles.sceneLabel} aria-hidden="true">
              {scene.label}
            </span>
            <span
              className={styles.sceneMarker}
              aria-hidden="true"
            />
          </a>
        ))}
      </nav>

      <div className={styles.layout}>
        <div
          id="hud-brand-slot"
          data-hud-surface
          className={`${styles.slot} ${styles.brandSlot}`}
        >
          <span className={styles.brandCrosshair} aria-hidden="true" />
          <a
            className={styles.brandPlaceholder}
            data-brand-placeholder
            href="#scene-1"
            aria-label="Index Oblique — back to Genesis"
          >
            [i/o&gt;
          </a>
        </div>

        <div
          id="hud-catalog-slot"
          data-hud-surface
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
          data-hud-surface
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
          data-hud-surface
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
