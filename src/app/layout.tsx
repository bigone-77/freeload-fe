import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';
import 'react-tooltip/dist/react-tooltip.css';
import './globals.css';
import ReduxProvider from '@/store/provider';
import { MSWComponent } from '@/Common/MSWComponent';
import RQProvider from '@/Common/RQProvider';
import AuthSession from '@/Common/AuthSession';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '자유도',
  description: '전국 휴게소에 대한 정보를 한 번에',
  manifest: '/manifest.json',
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
};

// viewport 설정을 별도로 내보냄
export const viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  shrinkToFit: 'no',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <MSWComponent />
        <AuthSession>
          <RQProvider>
            <ReduxProvider>
              {children}
              {modal}
            </ReduxProvider>
          </RQProvider>
        </AuthSession>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
