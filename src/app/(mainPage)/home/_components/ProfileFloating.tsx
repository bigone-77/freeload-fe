'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

interface IProfileFloatingProps {
  currentUser: Session | null;
}

export default function ProfileFloating({
  currentUser,
}: IProfileFloatingProps) {
  const handleLogOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/login' });
  };
  if (currentUser?.user) {
    return (
      <div
        className="w-20 h-20 rounded-full absolute top-4 right-4 bg-rose-300 z-10"
        onClick={handleLogOut}
      >
        <img src={currentUser.user?.image as string} alt="profile" />
        <p>{currentUser.user?.name}</p>
      </div>
    );
  }
}
