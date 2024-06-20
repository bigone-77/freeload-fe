import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';
import 'react-tooltip/dist/react-tooltip.css';
import './globals.css';
import { MSWComponent } from '@/Common/MSWComponent';
import RQProvider from '@/Common/RQProvider';
import AuthSession from '@/Common/AuthSession';
import ReduxProvider from '@/Common/ReduxProvider';
import { getRestData } from '@/lib/rest/all/getRestData';
import LocationProvider from '@/Common/LocationProvider';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '휴게소를 찾아서 | 자유도',
  description: '전국 휴게소 정보를 한 번에',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo-favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const AllRestData = await getRestData();

  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <MSWComponent />
        <AuthSession>
          <RQProvider>
            <ReduxProvider>
              <LocationProvider restData={AllRestData.data}>
                {children}
                {modal}
              </LocationProvider>
            </ReduxProvider>
          </RQProvider>
        </AuthSession>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
