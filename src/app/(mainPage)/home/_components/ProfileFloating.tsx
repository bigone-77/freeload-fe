'use client';

import { User } from 'next-auth';
import { signOut } from 'next-auth/react';

interface IProfileFloatingProps {
  currentUser: User | undefined;
}

export default function ProfileFloating({
  currentUser,
}: IProfileFloatingProps) {
  const handleLogOut = async () => {
    await signOut({ callbackUrl: '/' });
  };
  if (currentUser) {
    return (
      <div className="absolute top-11 right-2 z-10" onClick={handleLogOut}>
        <img
          src={currentUser.image as string}
          alt="profile"
          className="w-10 h-10 rounded-full "
        />
      </div>
    );
  }
}
