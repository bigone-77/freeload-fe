'use client';

import { useParams } from 'next/navigation';

import { FirstJoin, SecondJoin, ThirdJoin } from '@/processes/join';

export default function JoinPage() {
  const params = useParams();

  if (params.step === '1') {
    return <FirstJoin />;
  }

  if (params.step === '2') {
    return <SecondJoin />;
  }

  if (params.step === '3') {
    return <ThirdJoin />;
  }

  return <p>정상적인 경로가 아닙니다</p>;
}
