'use client';

import { User } from 'next-auth';
import { signOut } from 'next-auth/react';

interface IProfileFloatingProps {
  currentUser: User | undefined;
}

export default function ProfileFloating({
  currentUser,
}: IProfileFloatingProps) {
  console.log(currentUser);

  const handleLogOut = async () => {
    await signOut({ callbackUrl: '/' });
  };
  if (currentUser) {
    return (
      <div
        className="w-20 h-20 rounded-full absolute top-4 right-4 bg-rose-300 z-10"
        onClick={handleLogOut}
      >
        <img src={currentUser.image as string} alt="profile" />
        <p>{currentUser.name}</p>
      </div>
    );
  }
}
