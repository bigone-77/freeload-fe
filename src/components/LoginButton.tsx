'use client';

import Image from 'next/image';

type LoginButtonTheme = 'naver' | 'kakao' | 'origin';

interface ILoginButtonProps {
  theme: LoginButtonTheme;
  label: string;
  social?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const naver = 'bg-naver text-text50';
const kakao = 'bg-kakao text-text900';
const origin = 'bg-primary text-text50';

const color: Record<LoginButtonTheme, string> = {
  naver,
  kakao,
  origin,
};

export default function LoginButton({
  theme,
  label,
  social = '',
  onClick,
}: ILoginButtonProps) {
  return (
    <button
      type="button"
      className={`
        relative
        h-[46px] 
        rounded-lg
        transition-all
        hover:opacity-80
        w-60
        ${color[theme]}
      `}
      onClick={onClick}
    >
      {social && (
        <Image
          src={`https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714092989/${social}-logo.png`}
          alt={`${social}-logo`}
          width={18}
          height={18}
          className="absolute top-[14px] left-[14px]"
        />
      )}
      <p className={`${!social && 'text-center'}`}>{label}</p>
    </button>
  );
}
