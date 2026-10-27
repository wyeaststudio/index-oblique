import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Major_Mono_Display,
} from 'next/font/google';
import { StructuredData } from '@/components/seo/structured-data';
import { createMetadata, siteConfig } from '@/lib/site-config';
import '../tailwind.generated.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const majorMonoDisplay = Major_Mono_Display({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: '400',
  display: 'block',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
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
      className={`${geistSans.variable} ${geistMono.variable} ${majorMonoDisplay.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@400,401,700,701&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/DraftingMono-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/DraftingMono-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-960 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
