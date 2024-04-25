'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { FirstStep, SecondStep, ThirdStep } from '@/processes/join/ui';

export function JoinPage() {
  const step = useSelectedLayoutSegment();

  if (step === '1') {
    return <FirstStep />;
  }

  if (step === '2') {
    return <SecondStep />;
  }

  if (step === '3') {
    return <ThirdStep />;
  }

  return <p>정상적인 경로가 아닙니다</p>;
}
