'use client';

import type { CSSProperties, PointerEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SHOWCASE_PROJECTS } from '@/lib/showcase-projects';
import type { ShowcaseProject } from '@/lib/showcase-projects';
import styles from './Scene4SpecimenBay.module.css';

function movePlate(event: PointerEvent<HTMLElement>) {
  if (
    event.pointerType === 'touch' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) return;

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty('--tilt-x', `${y * -3}deg`);
  event.currentTarget.style.setProperty('--tilt-y', `${x * 3}deg`);
}

function resetPlate(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg');
  event.currentTarget.style.setProperty('--tilt-y', '0deg');
}

function ProjectPlate({
  project,
  onOpen,
}: {
  project: ShowcaseProject;
  onOpen: () => void;
}) {
  const [previewReady, setPreviewReady] = useState(false);
  const [previewUnavailable, setPreviewUnavailable] = useState(false);
  const placement = {
    '--scatter-top': project.scatter.top,
    '--scatter-left': project.scatter.left,
    '--scatter-rotate': `${project.scatter.rotate}deg`,
    '--scatter-z': project.scatter.zIndex,
    '--plate-accent': project.accentColor,
    '--etching-url': `url("${project.etchingSvgUrl}")`,
  } as CSSProperties;

  return (
    <li
      className={styles.specimen}
      style={placement}
      onPointerMove={movePlate}
      onPointerLeave={resetPlate}
    >
      <article className={styles.plate}>
        <button
          className={styles.plateButton}
          type="button"
          aria-haspopup="dialog"
          aria-label={`Open technical dossier: ${project.title}`}
          onClick={onOpen}
        >
          <span className={styles.plateHeader}>
            <span>{`[${project.id}]`}</span>
            <span aria-hidden="true">· · ·</span>
            <span>{`[${project.figure}]`}</span>
          </span>
          <span className={styles.engraving}>
            <Image
              src={project.etchingSvgUrl}
              alt=""
              width={360}
              height={240}
              unoptimized
            />
            <span className={styles.engravingOrb} aria-hidden="true" />
          </span>
          <span className={styles.title}>
            <span>{project.plateNumber}:</span> {project.title}
          </span>
          <span className={styles.inscription}>
            {`~ ${project.discipline} ~`}
          </span>
          <span className={styles.plateFooter}>
            <span>{`[TAXONOMY: ${project.taxonomy.replace(/^\[\s*|\s*\]$/g, '')}]`}</span>
            <span>{`[${project.year}]`}</span>
          </span>
          <span className={styles.frontAction}>INSPECT SPECIMEN ↗</span>

          <span className={styles.solarization} aria-hidden="true">
            <span className={styles.solarHeader}>
              <span>{`[${project.id}]`}</span>
              <span>{project.figure}</span>
            </span>
            <span className={styles.solarArt}>
              <span className={styles.etchingTint} />
              <video
                className={`${styles.previewVideo} ${previewReady ? styles.previewReady : ''}`}
                src={project.previewVideoUrl}
                poster={project.etchingSvgUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                onCanPlay={() => {
                  setPreviewReady(true);
                  setPreviewUnavailable(false);
                }}
                onError={() => {
                  setPreviewReady(false);
                  setPreviewUnavailable(true);
                }}
              />
              {previewUnavailable && (
                <span className={styles.motionStatus}>LIVE LOOP OFFLINE</span>
              )}
            </span>
            <span className={styles.solarDetails}>
              <span>{project.discipline}</span>
              <span>{project.architectureNotes[0]}</span>
              <span className={styles.solarAction}>
                CLICK TO EXPAND DOSSIER [↗]
              </span>
            </span>
          </span>
        </button>
      </article>
    </li>
  );
}

function ProjectDossier({
  project,
  onClose,
}: {
  project: ShowcaseProject;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dossierDialog}
      aria-labelledby={`dossier-title-${project.id}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={styles.dossier}
        style={{ '--plate-accent': project.accentColor } as CSSProperties}
      >
        <header className={styles.dossierTop}>
          <div>
            <p className={styles.dossierEyebrow}>
              {`${project.figure} // ARCHIVAL TECHNICAL DOSSIER`}
            </p>
            <h2 id={`dossier-title-${project.id}`}>{project.title}</h2>
            <p className={styles.dossierInscription}>
              {`~ ${project.discipline} ~`}
            </p>
          </div>
          <button
            className={styles.closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close technical dossier"
            autoFocus
          >
            CLOSE [×]
          </button>
        </header>

        <div className={styles.dossierGrid}>
          <div className={styles.mediaColumn}>
            <section className={styles.mediaSection} aria-labelledby="motion-study-title">
              <div className={styles.sectionHeading}>
                <h3 id="motion-study-title">Motion study</h3>
                <span>LOOP // 60 FPS</span>
              </div>
              <video
                className={styles.dossierVideo}
                src={project.previewVideoUrl}
                poster={project.etchingSvgUrl}
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoUnavailable(true)}
              />
              {videoUnavailable && (
                <p className={styles.mediaFallback}>
                  Motion file unavailable. The archival engraving remains above.
                </p>
              )}
            </section>

            {project.liveDemoUrl && (
              <section className={styles.demoSection} aria-labelledby="live-specimen-title">
                <div className={styles.sectionHeading}>
                  <h3 id="live-specimen-title">Live specimen // sandbox</h3>
                  <a
                    className={styles.routeLink}
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OPEN EXTERNAL ROUTE ↗
                  </a>
                </div>
                <iframe
                  className={styles.demoFrame}
                  src={project.liveDemoUrl}
                  title={`${project.title} live demo`}
                  sandbox="allow-scripts allow-forms allow-popups"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <p className={styles.embedNote}>
                  External specimens may restrict embedded viewing; open the
                  external route if the sandbox is unavailable.
                </p>
              </section>
            )}
          </div>

          <div className={styles.notesColumn}>
            <section aria-labelledby="architecture-title">
              <div className={styles.sectionHeading}>
                <h3 id="architecture-title">Architecture notes</h3>
                <span>{project.discipline}</span>
              </div>
              <ol className={styles.architectureNotes}>
                {project.architectureNotes.map((note, index) => (
                  <li key={note}>
                    <span>{`0${index + 1}`}</span>
                    <p>{note}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.stackSection} aria-labelledby="stack-title">
              <div className={styles.sectionHeading}>
                <h3 id="stack-title">Instruments & materials</h3>
                <span>{project.taxonomy}</span>
              </div>
              <ul className={styles.stackTokens}>
                {project.stackTokens.map((token) => (
                  <li key={token}>{token}</li>
                ))}
              </ul>
            </section>

            <dl className={styles.catalogueData}>
              <div>
                <dt>CATALOGUE ID</dt>
                <dd>{project.id}</dd>
              </div>
              <div>
                <dt>PLATE</dt>
                <dd>{project.plateNumber}</dd>
              </div>
              <div>
                <dt>YEAR</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function Scene4SpecimenBay() {
  const [selectedProject, setSelectedProject] =
    useState<ShowcaseProject | null>(null);

  return (
    <section
      id="scene-4"
      className={styles.scene}
      aria-labelledby="specimen-bay-title"
    >
      <header className={styles.heading}>
        <h2 id="specimen-bay-title" className={styles.visuallyHidden}>
          The Showcase: Archival Catalog
        </h2>
      </header>

      <div className={styles.boardFrame}>
        <span className={`${styles.registrationMark} ${styles.markTopLeft}`} aria-hidden="true">+</span>
        <span className={`${styles.registrationMark} ${styles.markTopRight}`} aria-hidden="true">+</span>
        <span className={`${styles.registrationMark} ${styles.markBottomLeft}`} aria-hidden="true">+</span>
        <span className={`${styles.registrationMark} ${styles.markBottomRight}`} aria-hidden="true">+</span>
        <ul className={styles.registry} aria-label="Archival project plates">
          {SHOWCASE_PROJECTS.map((project) => (
            <ProjectPlate
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </ul>
      </div>
      <p className={styles.boardFootnote}>
        HOVER TO REVEAL THE DARKROOM // SELECT A PLATE TO OPEN ITS DOSSIER
      </p>

      {selectedProject && (
        <ProjectDossier
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
