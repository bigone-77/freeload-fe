'use client';

import { useRouter } from 'next/navigation';

import { IoChevronBack } from '@/constants/Icons';

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex items-center gap-2" onClick={() => router.back()}>
      <IoChevronBack size={35} />
      <h1 className="font-semibold text-2xl">돌아가기</h1>
    </header>
  );
}
