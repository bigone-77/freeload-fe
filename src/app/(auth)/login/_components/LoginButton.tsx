'use client';

import { signIn } from 'next-auth/react';

interface ILoginButtonProps {
  origin: 'kakao' | 'google';
}

export default function LoginButton({ origin }: ILoginButtonProps) {
  const handleLogin = async (provider: 'kakao' | 'google') => {
    await signIn(provider, {
      redirect: false,
    });
  };
  return (
    <button
      type="button"
      className="border-2 p-2"
      onClick={() => handleLogin(origin)}
    >
      {origin === 'kakao' ? '카카오' : '구글'} 로그인
    </button>
  );
}
