'use client';

/* eslint-disable no-alert */
import { useEffect } from 'react';
import copy from 'copy-to-clipboard';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaCopy } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface IShareButtonProps {
  url: string;
  social?: boolean;
  dest?: string;
}

export default function ShareButton({ url, social, dest }: IShareButtonProps) {
  const currentUserName = useSession().data?.user?.name;

  useEffect(() => {
    // 클라이언트에서만 실행되도록
    if (typeof window !== 'undefined' && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY); // 여기에 카카오 SDK 키를 입력하세요
    }
  }, []);

  const CopyHandler = () => {
    copy(url);
    alert('클립보드에 URL이 저장되었습니다.');
  };

  const ShareKakaoHandler = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'location',
        address: dest,
        content: {
          title: `${currentUserName}님이 보내신 장소입니다!`,
          description: '여기로 와주세요🚗',
          imageUrl:
            'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1717924716/here.jpg',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  if (social) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center gap-2"
        onClick={ShareKakaoHandler}
      >
        <RiKakaoTalkFill size={25} />
        <p>카카오톡 공유</p>
      </div>
    );
  }
  return (
    <div
      className="flex flex-col items-center justify-center text-center gap-2"
      onClick={CopyHandler}
    >
      <FaCopy size={25} />
      <p className="w-full">URL 복사</p>
    </div>
  );
}
