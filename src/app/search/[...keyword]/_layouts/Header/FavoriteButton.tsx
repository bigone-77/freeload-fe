'use client';

import { postFavorite } from '@/lib/user/postFavorite';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FaRegStar } from 'react-icons/fa6';
import { toast } from 'react-toastify';

interface IFavoriteButtonProps {
  startAddr: string;
  startLatLng: string;
  endAddr: string;
  endLatLng: string;
}

export default function FavoriteButton({
  startAddr,
  startLatLng,
  endAddr,
  endLatLng,
}: IFavoriteButtonProps) {
  const currentUser = useSession().data;

  const formData = {
    email: currentUser?.user?.email,
    startAddr,
    startLatLng,
    endAddr,
    endLatLng,
  };

  const mutation = useMutation({
    mutationFn: postFavorite,
    onSuccess() {
      toast.success('나의 경로에 추가됐어요.');
    },
  });

  const favoriteHandler = () => {
    if (!currentUser) {
      redirect('/login');
    }
    mutation.mutate(formData);
  };

  return (
    <div
      className="flex flex-col items-center justify-center text-center gap-2"
      onClick={favoriteHandler}
    >
      <FaRegStar size={25} />
      <p>경로 저장</p>
    </div>
  );
}
