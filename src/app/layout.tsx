import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MPDEE - Creative, Development & Support Services',
  description:
    'Professional creative, web development, and IT support services. Choose your area of expertise.',
  keywords:
    'web development, creative services, IT support, professional services',
  authors: [{ name: 'MPDEE' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'MPDEE - Creative, Development & Support Services',
    description:
      'Professional creative, web development, and IT support services.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
