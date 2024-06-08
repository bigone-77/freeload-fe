'use client';

import { useSession } from 'next-auth/react';

export default function Header() {
  const currentUser = useSession().data?.user;
  return (
    <header className="flex flex-col items-center gap-1">
      <img
        src={currentUser?.image as string}
        alt="profile"
        className="w-20 h-20 rounded-full mb-4"
      />
      <p className="font-semibold text-lg">{currentUser?.name}님</p>
    </header>
  );
}
