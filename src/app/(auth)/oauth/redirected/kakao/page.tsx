'use client';

import Loader from '@/components/Loader';
import { useSearchParams } from 'next/navigation';

export default function KakaoRedirectPage() {
  const searchParams = useSearchParams();
  console.log(searchParams.get('code'));

  return <Loader />;
}
