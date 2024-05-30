import { getTokenHandler } from '@/shared/firebase/config';

export const requestPermission = () => {
  // 권한 받아내기 api
  Notification.requestPermission().then(async (permission) => {
    if (permission !== 'granted') {
      // 푸시 거부 시
      localStorage.setItem('notificationPermission', 'false');
    } else {
      const token = await getTokenHandler();
      if (token) {
        console.log(token);
      } else {
        console.log('토큰 발급 생성에 실패했습니다.');
      }
    }
  });
};
