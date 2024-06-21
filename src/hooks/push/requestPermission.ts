import { getTokenHandler } from '@/shared/firebase/config';

export const requestPermission = async () => {
  // Notification 객체가 존재하는지 확인
  if (!('Notification' in window)) {
    console.error('This browser does not support desktop notification');
    localStorage.setItem('notificationPermission', 'false');
    return null;
  }

  try {
    const permission = await Notification.requestPermission();

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
  } catch (error) {
    console.error(
      'An error occurred while requesting notification permission or generating token: ',
      error,
    );
    return null;
  }
};
