import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const VAPID_KEY = process.env.NEXT_PUBLIC_VAPID_KEY;
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const getTokenHandler = async () => {
  const messaging = getMessaging(app);
  return (
    getToken(messaging, {
      vapidKey: VAPID_KEY,
    })
      // eslint-disable-next-line consistent-return
      .then(async (currentToken) => {
        if (!currentToken) {
          // 토큰 생성 불가시 처리할 내용, 주로 브라우저 푸시 허용이 안된 경우에 해당한다.
          console.error('토큰 생성 불가');
        } else {
          // 토큰을 받았다면 여기서 supabase 테이블의 저장하면 됩니다.
          console.log('currentToken', currentToken);
          return currentToken;
        }
      })
      .catch((error) => {
        console.error('token error', error);
      })
  );
};