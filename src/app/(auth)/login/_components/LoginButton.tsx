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
    <button type="button" onClick={() => handleLogin(origin)}>
      <img
        src={`https://res.cloudinary.com/dbcvqhjmf/image/upload/v1717977113/social-${origin}-button.svg`}
        alt="loginBtn"
        width={300}
        height={45}
      />
    </button>
  );
}
