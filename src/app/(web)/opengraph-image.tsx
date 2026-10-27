import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'nodejs';
export const alt = 'Index/Oblique - Creative Development & Interactive Design';
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
        Creative development lab & portfolio
      </div>
      <div>{siteConfig.name}</div>
      <div style={{ fontSize: 28, marginTop: 24 }}>
        Creative coding. Kinetic typography. Interactive experiences.
      </div>
    </div>,
    size,
  );
}
