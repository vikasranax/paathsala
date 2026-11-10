'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  async function requestCode() {
    setError('');
    setSending(true);
    const { error: otpError } = await supabase.auth.signInWithOtp({ email });
    setSending(false);
    if (otpError) {
      setError(otpError.message);
      return false;
    }
    setCooldown(30);
    return true;
  }

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    if (await requestCode()) setStep('code');
  }

  async function verifyCode(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const { data, error: verifyError } = await supabase.auth.verifyOtp({ email, token: code, type: 'email' });
    if (verifyError) return setError(verifyError.message);
    if (!data.user) return setError('Something went wrong. Please try again.');

    const { data: existing } = await supabase.from('profiles').select('id').eq('id', data.user.id).single();

    if (!existing) {
      const fallbackName = name.trim() || email.split('@')[0] || 'Student';
      const { error: insertError } = await supabase.from('profiles').insert({
        id: data.user.id,
        display_name: fallbackName,
      });
      if (insertError) {
        console.error('profile insert error:', insertError);
        setError('Signed in, but your profile could not be created. Please refresh your profile page in a moment.');
      }
    }

    router.push('/profile');
  }

  const inputStyle = {
    padding: '10px',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    color: 'var(--ink)',
  };

  return (
    <main style={{ padding: 'clamp(20px, 5vw, 48px)', maxWidth: '400px' }}>
      <h1 className="font-display text-2xl mb-6" style={{ color: 'var(--indigo)' }}>
        {step === 'email' ? 'Log in or sign up' : 'Enter your code'}
      </h1>

      {step === 'email' ? (
        <form onSubmit={sendCode} className="flex flex-col gap-3">
          <input placeholder="Your name (for new accounts)" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
          {error && <p style={{ color: 'var(--kumkum)', fontSize: '13px' }}>{error}</p>}
          <button type="submit" disabled={sending} style={{ padding: '10px', background: 'var(--marigold)', color: 'var(--ink)', border: 'none' }}>
            {sending ? 'Sending...' : 'Send code'}
          </button>
        </form>
      ) : (
        <form onSubmit={verifyCode} className="flex flex-col gap-3">
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            We sent a 6-digit code to {email}. It can take a minute, and it may land in your spam folder.
          </p>
          <input
            placeholder="123456"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            maxLength={6}
            inputMode="numeric"
            style={{ ...inputStyle, letterSpacing: '4px', fontSize: '18px' }}
          />
          {error && <p style={{ color: 'var(--kumkum)', fontSize: '13px' }}>{error}</p>}
          <button type="submit" style={{ padding: '10px', background: 'var(--marigold)', color: 'var(--ink)', border: 'none' }}>
            Verify and continue
          </button>
          <button
            type="button"
            onClick={requestCode}
            disabled={cooldown > 0 || sending}
            style={{ fontSize: '13px', color: 'var(--indigo)', textDecoration: 'underline', background: 'none', border: 'none', cursor: cooldown > 0 ? 'default' : 'pointer' }}
          >
            {cooldown > 0 ? `Resend code in ${cooldown}s` : 'Resend code'}
          </button>
          <button
            type="button"
            onClick={() => setStep('email')}
            style={{ fontSize: '13px', color: 'var(--indigo)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Use a different email
          </button>
        </form>
      )}
    </main>
  );
}
