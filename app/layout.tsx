import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import AppRegistry from '@/app';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const viewport = {
  themeColor: '#158EFF',
};

export const metadata: Metadata = {
  title: '자유도',
  description: '전국 휴게소에 대한 정보를 한 번에',
  manifest: '/manifest.json',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    { rel: 'icon', url: '/assets/icon-192x192.png', sizes: '192x192' },
    {
      rel: 'apple-touch-icon',
      url: '/assets/icon-192x192.png',
      sizes: '192x192',
    },
    { rel: 'icon', url: '/assets/icon-192x192.png', sizes: '192x192' },
    { rel: 'icon', url: '/assets/icon-256x256.png', sizes: '256x256' },
    { rel: 'icon', url: '/assets/icon-384x384.png', sizes: '384x384' },
    { rel: 'icon', url: '/assets/icon-512x512.png', sizes: '512x512' },
    {
      url: '/splashscreens/iphone_splash.png',
      media:
        '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
    },
  ],
  themeColor: '#158EFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <AppRegistry>{children}</AppRegistry>
      </body>
    </html>
  );
}
