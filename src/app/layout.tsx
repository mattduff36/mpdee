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
  title: 'MPDEE - Find Your Perfect Service | Creative • Development • Support',
  description:
    'Choose from three specialized MPDEE services: Professional audio production, custom web development, or expert IT support. Find the right solution for your needs across the UK.',
  keywords: [
    'MPDEE services',
    'professional services UK',
    'creative development support services',
    'service discovery',
    'audio production',
    'web development',
    'IT support',
    'choose right service',
    'specialized services',
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
    title:
      'MPDEE - Find Your Perfect Service | Creative • Development • Support',
    description:
      'Choose from three specialized MPDEE services: Find the right solution for your creative, development, or support needs across the UK.',
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
    title:
      'MPDEE - Find Your Perfect Service | Creative • Development • Support',
    description:
      'Choose from three specialized MPDEE services: Find the right solution for your creative, development, or support needs across the UK.',
    images: ['/images/logo-trans.png'],
  },
  alternates: {
    canonical: 'https://mpdee.co.uk',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
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
            gtag('config', 'G-FNQX2LJQQE', {
              linker: {
                domains: ['mpdee.co.uk', 'creative.mpdee.co.uk', 'development.mpdee.co.uk', 'support.mpdee.co.uk']
              },
              custom_map: {
                'custom_parameter_1': 'service_referral'
              }
            });
            
            // Track service referrals
            function trackServiceReferral(service) {
              gtag('event', 'service_referral', {
                'service_type': service,
                'source_page': 'hub'
              });
            }
            
            // Make function globally available
            window.trackServiceReferral = trackServiceReferral;
          `}
        </Script>

        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-FNQX2LJQQE" />
      </body>
    </html>
  );
}
