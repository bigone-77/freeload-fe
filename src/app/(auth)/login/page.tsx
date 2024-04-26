'use client';

import LoginButton from '@/components/LoginButton';
import {
  KAKAO_API_KEY,
  KAKAO_REDIRECT_URI,
  NAVER_CLIENT_ID,
  NAVER_REDIRECT_URI,
  STATE,
} from '@/constants/SocialConst';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const naverLoginHandler = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;
  };

  const kakaoLoginHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  };

  const goHomeHandler = () => {
    router.replace('/');
  };

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
            onClick={naverLoginHandler}
            theme="naver"
            social="naver"
          />
          <LoginButton
            label="카카오 로그인"
            onClick={kakaoLoginHandler}
            theme="kakao"
            social="kakao"
          />
          <LoginButton
            label="로그인 없이 할래요"
            onClick={goHomeHandler}
            theme="origin"
          />
        </div>
      </div>
    </div>
  );
}
