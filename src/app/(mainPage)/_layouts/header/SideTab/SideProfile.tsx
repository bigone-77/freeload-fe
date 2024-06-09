import { RxAvatar } from '@/constants/Icons';

import { User } from 'next-auth';

interface ISideContentsProps {
  user: User | undefined;
}

export default function SideProfile({ user }: ISideContentsProps) {
  return (
    <div className={`${!user && 'flex-col'} flex items-center gap-2 mt-10`}>
      {user ? (
        <>
          <img
            src={user.image as string}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-xl">{user.name}</p>
            <p className="text-text500 text-sm font-light mt-[2px]">
              +81 01077388684
            </p>
          </div>
        </>
      ) : (
        <>
          <RxAvatar size={36} />
          <p className="font-semibold">로그인해주세요.</p>
        </>
      )}
    </div>
  );
}
