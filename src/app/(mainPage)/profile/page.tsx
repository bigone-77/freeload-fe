'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import Categories from './_components/Categories';
import Header from './_components/Header';
import SubMenu from './_components/SubMenu';

export default function ProfilePage() {
  const currentUser = useSession().data?.user;

  return (
    <div className="flex flex-col gap-8">
      {currentUser ? (
        <>
          <Header />
          <SubMenu />
          <Categories />
        </>
      ) : (
        <Link href="/login">로그인하러 가기</Link>
      )}
    </div>
  );
}
