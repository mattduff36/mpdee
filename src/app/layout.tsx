import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mpdee.co.uk'),
  title: 'MPDEE - Creative, Development & Support Services',
  description:
    'Professional audio production, web development, and IT support services. Expert solutions for creative projects, custom applications, and technical support across the UK.',
  keywords: [
    'audio production',
    'web development',
    'IT support',
    'creative services',
    'professional services',
    'UK',
    'radio commercials',
    'custom applications',
    'remote support',
    'MPDEE',
  ],
  authors: [{ name: 'MPDEE', url: 'https://mpdee.co.uk' }],
  creator: 'MPDEE',
  publisher: 'MPDEE',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mpdee.co.uk',
    title: 'MPDEE - Creative, Development & Support Services',
    description:
      'Professional audio production, web development, and IT support services across the UK.',
    siteName: 'MPDEE',
    images: [
      {
        url: '/images/logo-trans.png',
        width: 1200,
        height: 630,
        alt: 'MPDEE Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MPDEE - Creative, Development & Support Services',
    description:
      'Professional audio production, web development, and IT support services across the UK.',
    images: ['/images/logo-trans.png'],
  },
  alternates: {
    canonical: 'https://mpdee.co.uk',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        {/* Google Ads Tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FNQX2LJQQE"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FNQX2LJQQE');
          `}
        </Script>

        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-FNQX2LJQQE" />
      </body>
    </html>
  );
}
