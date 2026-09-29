import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Paathsala — One school. Every exam. Your language.';
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
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#14231F',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 70,
            right: 110,
            width: 130,
            height: 150,
            display: 'flex',
          }}
        >
          <svg width="130" height="150" viewBox="0 0 100 115">
            <polygon points="50,3 90,25 90,75 50,97 10,75 10,25" fill="#E5A13B" />
            <text x="50" y="66" fontSize="46" fontWeight="700" fill="#14231F" textAnchor="middle" fontFamily="Georgia, serif">
              P
            </text>
          </svg>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 700,
            color: '#E5A13B',
            letterSpacing: '-2px',
            marginBottom: 20,
          }}
        >
          PAATHSALA
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 34,
            color: '#F6F1E3',
            marginBottom: 44,
          }}
        >
          One school. Every exam. Your language.
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['SSC CGL', 'UPSC', 'NEET', 'JEE', 'Banking'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                fontSize: 22,
                color: '#7FA3D6',
                border: '2px solid #2E383D',
                borderRadius: 6,
                padding: '10px 20px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
