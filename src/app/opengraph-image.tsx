import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Paathsala';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#14231F',
          fontSize: 96,
          fontWeight: 700,
          color: '#E5A13B',
        }}
      >
        PAATHSALA
      </div>
    ),
    { ...size }
  );
}
