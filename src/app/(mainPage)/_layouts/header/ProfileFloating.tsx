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
      <div onClick={handleLogOut}>
        <img
          src={currentUser.image as string}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    );
  }
}
