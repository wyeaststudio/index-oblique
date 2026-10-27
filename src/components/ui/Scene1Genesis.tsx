'use client';

import { useEffect, useRef } from 'react';
import styles from './Scene1Genesis.module.css';

const halftoneDots = Array.from({ length: 441 }, (_, index) => {
  const column = index % 21;
  const row = Math.floor(index / 21);
  const offsetX = (column - 10) * 11;
  const offsetY = (row - 10) * 11;
  const distance = Math.hypot(offsetX, offsetY);

  return {
    cx: 360 + offsetX,
    cy: 225 + offsetY,
    r: 0.8 + (distance / 155) * 1.4,
    visible: distance <= 122,
  };
}).filter((dot) => dot.visible);

const rasterLines = Array.from({ length: 25 }, (_, index) => 158 + index * 6);

export function Scene1Genesis() {
  const sceneRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const viewport = viewportRef.current;
    const title = titleRef.current;
    const hudBrandSlot = document.getElementById('hud-brand-slot');
    const brandPlaceholder = hudBrandSlot?.querySelector<HTMLElement>(
      '[data-brand-placeholder]',
    );

    if (!scene || !viewport || !title || !hudBrandSlot || !brandPlaceholder) {
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const dissolvingCharacters =
      title.querySelectorAll<HTMLElement>('.dissolve-char');
    let dissolveWidths = Array.from(dissolvingCharacters, (character) => {
      character.style.removeProperty('--dissolve-visible-width');
      return character.offsetWidth;
    });
    let frame = 0;
    let collapseStart: DOMRect | null = null;

    const update = () => {
      frame = 0;
      const scrollDistance = Math.max(
        1,
        scene.offsetHeight - viewport.offsetHeight,
      );
      const sceneTop = scene.getBoundingClientRect().top + window.scrollY;
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - sceneTop) / scrollDistance),
      );
      const collapseProgress = Math.min(1, progress / 0.4);
      const visibleCollapseProgress = reducedMotion.matches
        ? Number(progress >= 0.4)
        : collapseProgress;
      title.classList.toggle(styles.docked, progress >= 0.5);
      title.style.setProperty(
        '--collapse-progress',
        String(visibleCollapseProgress),
      );
      title.style.setProperty(
        '--dissolve-blur',
        `${visibleCollapseProgress * 8}px`,
      );
      title.style.setProperty(
        '--left-bracket-shift',
        `${visibleCollapseProgress * 0.24}em`,
      );
      title.style.setProperty(
        '--right-bracket-shift',
        `${visibleCollapseProgress * -0.24}em`,
      );
      dissolvingCharacters.forEach((character, index) => {
        character.style.setProperty(
          '--dissolve-visible-width',
          `${dissolveWidths[index] * (1 - visibleCollapseProgress)}px`,
        );
      });

      if (progress < 0.4) {
        collapseStart = null;
        title.classList.remove(styles.docking);
        title.classList.remove('collapsed');
        delete hudBrandSlot.dataset.logoDocked;
        title.style.left = '';
        title.style.top = '';
        title.style.transform = '';
        scene.style.removeProperty('--title-placeholder-height');
        return;
      }

      if (!collapseStart) {
        collapseStart = title.getBoundingClientRect();
        scene.style.setProperty(
          '--title-placeholder-height',
          `${collapseStart.height}px`,
        );
      }
      title.classList.add('collapsed');

      const dockProgress = Math.min(1, Math.max(0, (progress - 0.4) / 0.1));
      const target = brandPlaceholder.getBoundingClientRect();
      const startLeft = collapseStart.left;
      const startTop = collapseStart.top;
      const motionProgress = reducedMotion.matches
        ? Number(progress >= 0.5)
        : dockProgress;
      const fontSize = Number.parseFloat(
        window.getComputedStyle(title).fontSize,
      );
      const targetFontSize = Number.parseFloat(
        window.getComputedStyle(brandPlaceholder).fontSize,
      );

      title.classList.add(styles.docking);
      title.style.left = `${startLeft + (target.left - startLeft) * motionProgress}px`;
      title.style.top = `${startTop + (target.top - startTop) * motionProgress}px`;
      title.style.transform = `scale(${1 + (targetFontSize / fontSize - 1) * motionProgress})`;

      if (progress >= 0.5) {
        hudBrandSlot.dataset.logoDocked = 'true';
      } else {
        delete hudBrandSlot.dataset.logoDocked;
      }
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    const measureAndScheduleUpdate = () => {
      dissolvingCharacters.forEach((character) => {
        character.style.removeProperty('--dissolve-visible-width');
      });
      dissolveWidths = Array.from(
        dissolvingCharacters,
        (character) => character.offsetWidth,
      );
      scheduleUpdate();
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', measureAndScheduleUpdate);
    document.fonts.addEventListener('loadingdone', measureAndScheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', measureAndScheduleUpdate);
      document.fonts.removeEventListener('loadingdone', measureAndScheduleUpdate);
      window.cancelAnimationFrame(frame);
      delete hudBrandSlot.dataset.logoDocked;
    };
  }, []);

  return (
    <section
      id="scene-1"
      ref={sceneRef}
      className={`${styles.scene} paper-texture`}
    >
      <div ref={viewportRef} className={styles.viewport}>
        <header className={styles.ledgerTop}>
          <p>[IDX-00 // MACHINE GENESIS]</p>
          <p>REV: 2026.01</p>
        </header>

        <div className={styles.stage}>
          <div id="brand-title-banner" className={styles.titleBanner}>
            <h1
              id="brand-title"
              ref={titleRef}
              className={`${styles.logo} font-logo tracking-tight antialiased`}
              aria-label="[index/oblique>"
            >
              <span id="bracket-l" className={styles.bracketLeft}>
                [
              </span>
              <span id="char-i">I</span>
              <span className={`dissolve-char ${styles.dissolveChar}`}>ndex</span>
              <span>/</span>
              <span id="char-o">O</span>
              <span className={`dissolve-char ${styles.dissolveChar}`}>
                blique
              </span>
              <span id="bracket-r" className={styles.bracketRight}>
                &gt;
              </span>
            </h1>
          </div>

          <div id="eye-video-container" className={styles.mediaFrame}>
            <div className={styles.cornerMarks} aria-hidden="true" />
            <p className={`${styles.mediaMetadata} ${styles.feed}`}>
              [FEED: 01 // MACRO-HALFTONE]
            </p>
            <p className={`${styles.mediaMetadata} ${styles.frame}`}>
              FRAME: 0001 // 60 FPS
            </p>

            <div id="eye-video-placeholder" className={styles.mediaLayer}>
              <svg
                className={styles.eyeGraphic}
                viewBox="0 0 720 450"
                role="img"
                aria-labelledby="genesis-eye-title genesis-eye-description"
              >
                <title id="genesis-eye-title">Macro halftone eye</title>
                <desc id="genesis-eye-description">
                  A geometric eye with a radial halftone iris, solid black pupil,
                  and horizontal raster lines.
                </desc>

                <defs>
                  <clipPath id="genesis-eye-window">
                    <path d="M74 225c74-108 168-162 286-162s212 54 286 162c-74 108-168 162-286 162S148 333 74 225Z" />
                  </clipPath>
                </defs>

                <g clipPath="url(#genesis-eye-window)" fill="#111111">
                  {rasterLines.map((y) => (
                    <rect key={y} x="70" y={y} width="580" height="1" />
                  ))}
                </g>

                <path
                  d="M74 225c74-108 168-162 286-162s212 54 286 162c-74 108-168 162-286 162S148 333 74 225Z"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="3"
                />
                <path
                  d="M112 225c65-79 147-119 248-119s183 40 248 119c-65 79-147 119-248 119s-183-40-248-119Z"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1"
                />

                <g fill="#111111">
                  {halftoneDots.map((dot) => (
                    <circle
                      key={`${dot.cx}-${dot.cy}`}
                      cx={dot.cx}
                      cy={dot.cy}
                      r={dot.r}
                    />
                  ))}
                </g>

                <circle
                  cx="360"
                  cy="225"
                  r="122"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1"
                />
                <circle cx="360" cy="225" r="58" fill="#111111" />
                <circle cx="378" cy="204" r="10" fill="#f3efe6" />
              </svg>
            </div>
          </div>
        </div>

        <footer className={styles.ledgerBottom}>
          <p>MACRO-OPTICAL SCANNER // CALIBRATED TO VIEWPORT VELOCITY</p>
        </footer>
      </div>
    </section>
  );
}
