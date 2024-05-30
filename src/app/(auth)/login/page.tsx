'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const kakaoLogin = async () => {
    await signIn('kakao', {
      redirect: false,
    });
    router.replace('/home');
  };

  const naverLogin = async () => {
    await signIn('naver', {
      redirect: false,
    });
    router.replace('/home');
  };
  return (
    <>
      <button type="button" className="border-2 p-2" onClick={kakaoLogin}>
        카카오 로그인
      </button>
      <button type="button" className="border-2 p-2" onClick={naverLogin}>
        네이버 로그인
      </button>
    </>
  );
}
