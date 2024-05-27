'use client';

import { useSearchParams } from 'next/navigation';
import JoinHeader from './_layout/JoinHeader';

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useSearchParams();

  if (params.get('step') === '1') {
    return <JoinHeader label="핸드폰 번호 입력">{children}</JoinHeader>;
  }

  if (params.get('step') === '2') {
    return <JoinHeader label="OTP 코드">{children}</JoinHeader>;
  }

  if (params.get('step') === '3') {
    return <JoinHeader label="추가 정보 입력">{children}</JoinHeader>;
  }
}
