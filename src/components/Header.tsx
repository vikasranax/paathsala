'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Menu, Moon, Sun, X } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';
import { localeNames, Locale } from '@/lib/i18n';
import GuardedLink from 'next/link';

const linkStyle: CSSProperties = { fontSize: '14px', color: 'var(--indigo)', textDecoration: 'none' };

const mobileLinkStyle: CSSProperties = {
  padding: '12px 4px',
  fontSize: '15px',
  color: 'var(--indigo)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--border)',
};

const controlButtonStyle: CSSProperties = {
  border: '1px solid var(--indigo)',
  color: 'var(--indigo)',
  background: 'none',
  padding: '5px 8px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

export default function Header() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserId(session?.user.id ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user.id ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/login');
  }

  const links = [
    { href: '/', label: t('home') },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/arena', label: 'Arena' },
    userId ? { href: '/profile', label: t('profile') } : { href: '/login', label: t('login') },
  ];

  return (
    <header style={{ background: 'var(--paper)', borderBottom: '1px solid var(--border)' }}>
      <div className="header-bar">
        <GuardedLink
          href="/"
          style={{ fontFamily: 'var(--font-khand), sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--marigold)', textDecoration: 'none' }}
        >
          पाठशाला
        </GuardedLink>

        <div className="header-right">
          <nav className="nav-desktop">
            {links.map((l) => (
              <GuardedLink key={l.href} href={l.href} style={linkStyle}>
                {l.label}
              </GuardedLink>
            ))}
            {userId && (
              <button onClick={handleLogout} title={t('logout')} style={{ ...controlButtonStyle, border: 'none', padding: 0 }}>
                <LogOut size={15} />
              </button>
            )}
          </nav>

          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            style={{ fontSize: '13px', border: '1px solid var(--indigo)', color: 'var(--indigo)', background: 'var(--paper)', padding: '5px 6px' }}
          >
            {Object.entries(localeNames).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>

          <button onClick={toggleTheme} style={controlButtonStyle} title="Toggle theme">
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            style={controlButtonStyle}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {links.map((l) => (
            <GuardedLink key={l.href} href={l.href} style={mobileLinkStyle}>
              {l.label}
            </GuardedLink>
          ))}
          {userId && (
            <button
              onClick={handleLogout}
              style={{ ...mobileLinkStyle, display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              <LogOut size={16} /> {t('logout')}
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
