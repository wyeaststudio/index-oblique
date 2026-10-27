export interface ShowcaseProject {
  id: string;
  figure: string;
  plateNumber: string;
  title: string;
  discipline: string;
  taxonomy: string;
  year: string;
  accentColor: string;
  scatter: { top: string; left: string; rotate: number; zIndex: number };
  etchingSvgUrl: string;
  previewVideoUrl: string;
  liveDemoUrl?: string;
  architectureNotes: string[];
  stackTokens: string[];
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'IDX-01',
    figure: 'FIG. 01',
    plateNumber: 'PLATE NO. 01',
    title: 'SPECULATIVE NIKE DROP',
    discipline: 'Campaign / Micro-Interactions',
    taxonomy: '[ 3D WEBGL // GLSL SHADER // R3F ]',
    year: '2026',
    accentColor: '#EC008C',
    scatter: { top: '12%', left: '8%', rotate: -3.5, zIndex: 1 },
    etchingSvgUrl: '/svg/etching-nike.svg',
    previewVideoUrl: '/video/nike-drop-loop.webm',
    liveDemoUrl: 'https://kelly.gibbens.me',
    architectureNotes: [
      'Custom vertex displacement shader simulating fabric tension under load.',
      'Optimized 60 FPS mobile rendering pipeline using instanced buffer geometries.',
      'Reactive micro-interactions tied to device gyro and pointer velocity.',
    ],
    stackTokens: ['Three.js', 'React Three Fiber', 'GLSL', 'GSAP ScrollTrigger'],
  },
  {
    id: 'IDX-02',
    figure: 'FIG. 02',
    plateNumber: 'PLATE NO. 02',
    title: 'SPATIAL CANVAS & PRODUCT R3F',
    discipline: '3D / WebGL / Post-Processing',
    taxonomy: '[ POST-PROCESSING // BUFFER GEOM ]',
    year: '2026',
    accentColor: '#FFEB00',
    scatter: { top: '18%', left: '32%', rotate: 2.5, zIndex: 3 },
    etchingSvgUrl: '/svg/etching-astrolabe.svg',
    previewVideoUrl: '/video/r3f-spatial-loop.webm',
    architectureNotes: [
      'Multi-pass bloom and custom halftone rasterization filter pipeline.',
      'Zero-latency canvas syncing with global DOM scroll velocity.',
      'Dynamic procedural lighting rigs modulated by cursor proximity.',
    ],
    stackTokens: ['WebGL', 'R3F', 'Custom Post-Processing', 'Tailwind'],
  },
  {
    id: 'IDX-03',
    figure: 'FIG. 03',
    plateNumber: 'PLATE NO. 03',
    title: 'GLSL SHADER LAB',
    discipline: 'Math / Procedural Mesh',
    taxonomy: '[ MATH // PROCEDURAL MESH ]',
    year: '2026',
    accentColor: '#EC008C',
    scatter: { top: '10%', left: '58%', rotate: -1.5, zIndex: 2 },
    etchingSvgUrl: '/svg/etching-harmonics.svg',
    previewVideoUrl: '/video/shader-lab-loop.webm',
    architectureNotes: [
      'Fractal Brownian motion (fBm) noise simulations in pure fragment shaders.',
      'GPU-accelerated vector fields reacting to audio stem frequency bands.',
      'Interactive math playground with hot-reloading GLSL buffers.',
    ],
    stackTokens: ['GLSL', 'Raw WebGL 2.0', 'Canvas API', 'MathJax'],
  },
  {
    id: 'IDX-04',
    figure: 'FIG. 04',
    plateNumber: 'PLATE NO. 04',
    title: 'SYSTEMS & SPEC BRIDGE',
    discipline: 'Multi-Repo Storybook / Tokens',
    taxonomy: '[ DESIGN SYSTEMS // TOKENS // AST ]',
    year: '2026',
    accentColor: '#FFEB00',
    scatter: { top: '42%', left: '40%', rotate: 4, zIndex: 4 },
    etchingSvgUrl: '/svg/etching-crystal.svg',
    previewVideoUrl: '/video/design-system-loop.webm',
    architectureNotes: [
      'Universal design token compiler piping Figma variables to CSS custom properties.',
      'Automated visual regression testing harnessing headless Chromium pipelines.',
      'Cross-repository Storybook architecture serving 40+ engineering teams.',
    ],
    stackTokens: ['Storybook', 'TypeScript', 'Node AST', 'Design Tokens'],
  },
];
