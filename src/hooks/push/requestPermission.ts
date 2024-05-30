import { getTokenHandler } from '@/shared/firebase/config';

export const requestPermission = () => {
  // 권한 받아내기 api
  Notification.requestPermission().then(async (permission) => {
    if (permission !== 'granted') {
      // 푸시 거부 시
      localStorage.setItem('notificationPermission', 'false');
      return null;
    }
    const token = await getTokenHandler();
    if (token) {
      localStorage.setItem('fcmToken', token); // 로컬 스토리지에 저장도 하고
      return token; // 토큰에 내뱉고
    }
    console.log('토큰 발급 생성에 실패했습니다.');
    return null;
  });
};
