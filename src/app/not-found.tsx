import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '520px' }}>
      <h1 className="font-display text-2xl" style={{ color: 'var(--indigo)', marginBottom: '8px' }}>
        Page not found
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.6 }}>
        This address does not exist. The page may have moved, or the link may be out of date.
      </p>
      <Link href="/" style={{ display: 'inline-block', padding: '10px 18px', background: 'var(--marigold)', color: 'var(--ink)', textDecoration: 'none', fontWeight: 600 }}>
        Back to home
      </Link>
    </main>
  );
}
