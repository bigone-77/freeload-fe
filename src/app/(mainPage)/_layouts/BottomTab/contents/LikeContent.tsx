'use client';

import { requestPermission } from '@/hooks/push/requestPermission';
import { useSendPush } from '@/hooks/push/useSendPush';

export default function LikeContent() {
  const sendPush = useSendPush();

  const pushHandler = async () => {
    // TODO: 일단 로컬스토리지에 fcmToken이 있는지 확인하고,
    const isToken = localStorage.getItem('fcmToken');
    // TODO: 만약에 토큰이 없다면 권한 재요청하기
    if (!isToken) {
      console.log('토큰이 없어요');
      requestPermission();
    } else {
      // TODO: 토큰이 있다면 sendPush
      sendPush({
        token: isToken,
        data: {
          title: '테스트',
          body: '테스트용 바디입니다',
          click_action: '/',
        },
      });
    }
  };

  return (
    <div>
      찜컨텐츠
      <button type="button" onClick={pushHandler}>
        푸시 알림 테스트 버튼
      </button>
    </div>
  );
}
