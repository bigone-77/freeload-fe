'use client';

import { useSession } from 'next-auth/react';

import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { redirect } from 'next/navigation';

interface ILikeButtonProps {
  isLike: boolean;
}

export default function LikeButton({ isLike }: ILikeButtonProps) {
  const currentUser = useSession().data?.user;

  const likeHandler = () => {
    if (!currentUser) {
      redirect('/login');
    }
    if (isLike) {
      // TODO: 즐겨찾기 삭제 핸들러
    }

    if (!isLike) {
      // TODO: 즐겨찾기 등록 핸들러
    }
  };

  if (isLike) {
    return <FaStar size={30} onClick={likeHandler} />;
  }
  return <CiStar size={30} onClick={likeHandler} />;
}
