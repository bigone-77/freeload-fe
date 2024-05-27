'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const kakaoLogin = async () => {
    await signIn('kakao', {
      redirect: true,
      callbackUrl: '/home',
    });
  };

  const naverLogin = async () => {
    await signIn('naver', {
      redirect: true,
      callbackUrl: '/home',
    });
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
