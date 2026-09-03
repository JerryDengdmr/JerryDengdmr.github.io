import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jerrydengdmr.github.io'),
  title: 'Jerry Deng — Software Engineer',
  description:
    'Software engineer building reliable backend systems, AI agents, and applied machine learning products.',
  openGraph: {
    title: 'Jerry Deng — Software Engineer',
    description:
      'Backend systems, AI agents, and applied machine learning built for the real world.',
    url: 'https://jerrydengdmr.github.io',
    siteName: 'Jerry Deng',
    type: 'website',
    images: [{ url: '/og.png', width: 1792, height: 1024, alt: 'Jerry Deng — Backend, AI Agents, Applied ML' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerry Deng — Software Engineer',
    description: 'Backend systems, AI agents, and applied machine learning built for the real world.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
