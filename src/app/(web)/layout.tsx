import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { StructuredData } from '@/components/seo/structured-data';
import { createMetadata, siteConfig } from '@/lib/site-config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = createMetadata({
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  alternates: {
    canonical: '/',
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
