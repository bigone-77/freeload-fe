'use client';

import { useSearchParams } from 'next/navigation';

import FirstJoin from './_components/FirstJoin';
import SecondJoin from './_components/SecondJoin';
import ThirdJoin from './_components/ThirdJoin';

export default function JoinPage() {
  const params = useSearchParams();

  if (params.get('step') === '1') {
    return <FirstJoin />;
  }

  if (params.get('step') === '2') {
    return <SecondJoin />;
  }

  if (params.get('step') === '3') {
    return <ThirdJoin />;
  }

  return <p>정상적인 경로가 아닙니다</p>;
}
