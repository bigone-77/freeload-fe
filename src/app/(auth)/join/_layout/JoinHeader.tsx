'use client';

import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';

interface IJoinHeaderProps {
  label: string;
  children: React.ReactNode;
}

export default function JoinHeader({ label, children }: IJoinHeaderProps) {
  const router = useRouter();

  return (
    <>
      <nav className="w-full flex items-center gap-4 px-10 pt-20">
        <IoMdArrowRoundBack size={25} onClick={() => router.back()} />
        <p className="font-semibold text-xl">{label}</p>
      </nav>
      {children}
    </>
  );
}
