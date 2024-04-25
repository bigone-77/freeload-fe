// 추후 RootLayout으로 쓰여질 놈으로 전역 설정할땐 여기다가 같이 children 감싸줍시다

import { AppLayout } from './layouts';

function AppRegistry({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}

export default AppRegistry;
