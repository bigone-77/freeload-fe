'use client';

import { User } from 'next-auth';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import { RxAvatar } from '@/constants/Icons';
import { ProfileResponse } from '@/models/Profile';
import { getUserProfileData } from '@/lib/user/getUserProfileData';
import { useRouter } from 'next/navigation';

interface ISideContentsProps {
  user: User | undefined;
}

const profileVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function SideProfile({ user }: ISideContentsProps) {
  const router = useRouter();
  const { data: UserProfileResponse } = useQuery<ProfileResponse>({
    queryKey: [user?.email],
    queryFn: () => getUserProfileData(user?.email!),
  });

  const imageUrl = user?.image?.replace('http:', 'https:');
  return (
    <motion.div
      className={`${!user && 'flex-col'} flex items-center gap-2 mt-10`}
      variants={profileVariants}
    >
      {user ? (
        <>
          <motion.img
            src={imageUrl}
            alt="profile"
            className="w-12 h-12 rounded-full"
            variants={profileVariants}
          />
          <motion.div variants={profileVariants}>
            <p className="font-semibold text-xl">{user.name}</p>
            <p className="text-text500 text-sm font-light mt-[2px]">
              +81 {UserProfileResponse?.data[0].phoneNum}
            </p>
          </motion.div>
        </>
      ) : (
        <motion.div
          className="hover:opacity-90 transition-all flex flex-col gap-2 items-center justify-center"
          onClick={() => router.push('/login')}
        >
          <RxAvatar size={36} />
          <motion.p className="font-semibold" variants={profileVariants}>
            로그인해주세요.
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}
