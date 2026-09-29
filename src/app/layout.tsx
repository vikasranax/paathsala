import type { Metadata } from 'next';
import Header from '@/components/Header';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Space_Grotesk, Khand, Work_Sans } from 'next/font/google';
import TranslationNotice from '@/components/TranslationNotice';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/lib/ThemeContext';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const khand = Khand({
  subsets: ['devanagari', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-khand',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paathsala.vercel.app'),
  title: {
    default: 'Paathsala — One School. Every Exam. Your Language.',
    template: '%s | Paathsala',
  },
  description:
    'Free, multilingual exam preparation for SSC CGL, UPSC, NEET, JEE, Banking, Railway and more. Daily quizzes, flashcards, notes, mock tests, and a student community — in Hindi, English, and regional languages.',
  keywords: [
    'SSC CGL preparation', 'UPSC preparation', 'NEET preparation', 'JEE preparation',
    'free exam preparation India', 'competitive exam quiz', 'multilingual exam prep',
    'IBPS PO preparation', 'RRB NTPC preparation', 'exam mock test free',
  ],
  authors: [{ name: 'VRX' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://paathsala.vercel.app',
    siteName: 'Paathsala',
    title: 'Paathsala — One School. Every Exam. Your Language.',
    description:
      'Free, multilingual exam preparation for SSC CGL, UPSC, NEET, JEE, Banking, Railway and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paathsala — One School. Every Exam. Your Language.',
    description: 'Free, multilingual exam preparation for competitive exams across India.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${khand.variable} ${workSans.variable}`}>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Paathsala',
        description: 'Free, multilingual exam preparation platform for competitive exams in India.',
        url: 'https://paathsala.vercel.app',
      }),
    }}
  />
<ThemeProvider>
  <LanguageProvider>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <TranslationNotice />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  </LanguageProvider>
</ThemeProvider>  
      </body>
    </html>
  );
}
