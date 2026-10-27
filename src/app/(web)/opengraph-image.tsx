import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Agency Template';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#0f172a',
        color: 'white',
        padding: 64,
        fontSize: 56,
        fontWeight: 700,
      }}
    >
      <div style={{ fontSize: 24, marginBottom: 16, opacity: 0.8 }}>
        Launch-ready template
      </div>
      <div>Accessible, SEO, GEO, and AEO-ready</div>
    </div>,
    size,
  );
}
