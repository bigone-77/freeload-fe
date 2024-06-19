'use client';

import { useQuery } from '@tanstack/react-query';
import { MdRateReview } from 'react-icons/md';
import { AiFillNotification } from 'react-icons/ai';

import { ReviewResponse } from '@/models/Review';
import { getUserReviewData } from '@/lib/user/getUserReviewData';

interface ISubMenuProps {
  userEmail: string;
}

export default function SubMenu({ userEmail }: ISubMenuProps) {
  const { data: ReviewData } = useQuery<ReviewResponse>({
    queryKey: [userEmail, 'review'],
    queryFn: () => getUserReviewData(userEmail as string),
  });
  return (
    <div className="flex items-center justify-center gap-2 w-full px-10">
      <section className="flex items-center justify-center gap-2 border p-2 rounded-md shadow-lg">
        <MdRateReview size={30} />
        <p className="w-full">남긴 리뷰</p>
        <p>({ReviewData?.data.length})</p>
      </section>

      <section className="flex items-center justify-center gap-2 border p-2 rounded-md shadow-lg">
        <AiFillNotification size={30} />
        <p className="w-full">상담 내역</p>
        <p>(0)</p>
      </section>
    </div>
  );
}
