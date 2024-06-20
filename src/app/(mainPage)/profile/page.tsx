'use client';

import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

import Categories from './_components/Categories';
import SubMenu from './_components/SubMenu';

export default function ProfilePage() {
  const currentUser = useSession().data?.user;
  if (!currentUser) {
    redirect('/login');
  }
  const imageUrl = currentUser?.image?.replace('http:', 'https:');

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col items-center gap-1">
        <img
          src={imageUrl}
          alt="profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        <p className="font-semibold text-lg">{currentUser?.name}님</p>
      </header>
      <SubMenu userEmail={currentUser.email!} />
      <Categories />
    </div>
  );
}
