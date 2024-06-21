'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { postLike } from '@/lib/user/postLike';
import { deleteLike } from '@/lib/user/deleteLike';
import { toast } from 'react-toastify';

interface ILikeButtonProps {
  restId: string;
  isLiked: boolean;
}

export default function LikeButton({ restId, isLiked }: ILikeButtonProps) {
  const currentUser = useSession().data?.user;
  const emailForm = { email: currentUser?.email };

  const postLikeData = { emailForm, restId };

  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: postLike,
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['rest', 'detail'],
      });
      toast.success('나의 휴게소에 추가됐어요.');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteLike,
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['rest', 'detail'],
      });
      toast.success('나의 휴게소를 취소했어요.');
    },
  });

  const likeHandler = () => {
    if (!currentUser) {
      redirect('/login');
    }
    if (isLiked) {
      // TODO: 즐겨찾기 삭제 핸들러
      deleteMutation.mutate(postLikeData);
    }

    if (!isLiked) {
      // TODO: 즐겨찾기 등록 핸들러
      likeMutation.mutate(postLikeData);
    }
  };

  if (isLiked) {
    return <FaStar size={30} onClick={likeHandler} />;
  }
  return <CiStar size={30} onClick={likeHandler} />;
}
