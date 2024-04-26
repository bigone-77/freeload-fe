'use client';

import LoginButton from '@/components/LoginButton';

export default function LoginPage() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714091587/login_bg.png")',
      }}
    >
      <div className="flex flex-col pt-36 w-full">
        <div className="font-bold text-3xl px-[10%]">
          <h1>여행길의 안식처,</h1>
          <h2>고속도로 휴게소 정보의 모든 것</h2>
        </div>
        <div className="flex items-center justify-center flex-col gap-5 mt-20">
          <LoginButton
            label="네이버 로그인"
            onClick={() => {}}
            theme="naver"
            social="naver"
          />
          <LoginButton
            label="카카오 로그인"
            onClick={() => {}}
            theme="kakao"
            social="kakao"
          />
          <LoginButton
            label="로그인 없이 할래요"
            onClick={() => {}}
            theme="origin"
          />
        </div>
      </div>
    </div>
  );
}
