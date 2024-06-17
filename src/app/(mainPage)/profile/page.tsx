'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import Categories from './_components/Categories';
import SubMenu from './_components/SubMenu';

export default function ProfilePage() {
  const currentUser = useSession().data?.user;

  return (
    <div className="flex flex-col gap-8">
      {currentUser ? (
        <>
          <header className="flex flex-col items-center gap-1">
            <img
              src={currentUser.image!}
              alt="profile"
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="font-semibold text-lg">{currentUser?.name}님</p>
          </header>
          <SubMenu />
          <Categories />
        </>
      ) : (
        <Link href="/login">로그인하러 가기</Link>
      )}
    </div>
  );
}
