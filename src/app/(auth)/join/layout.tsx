'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

import JoinHeader from '@/widgets/join/header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const step = useSelectedLayoutSegments();

  if (step[0] === '1') {
    return <JoinHeader label="핸드폰 번호 입력">{children}</JoinHeader>;
  }

  if (step[0] === '2') {
    return <JoinHeader label="OTP 코드">{children}</JoinHeader>;
  }

  if (step[0] === '3') {
    return <JoinHeader label="추가 정보 입력">{children}</JoinHeader>;
  }
}
