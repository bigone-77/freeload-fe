'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { Fade } from 'react-awesome-reveal';

import { ReviewResponse } from '@/models/Review';
import { getUserReviewData } from '@/lib/user/getUserReviewData';
import Loader from '@/Common/Loader';
import Header from './_components/Header';
import PieChart from './_components/PieChart';
import CreditCard from './_components/CreditCard';

export default function AccountPage() {
  const userEmail = useSession().data?.user?.email;
  const { data: ReviewData, isLoading } = useQuery<ReviewResponse>({
    queryKey: [userEmail, 'review'],
    queryFn: () => getUserReviewData(userEmail as string),
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (ReviewData && ReviewData.data) {
    content = (
      <>
        <Fade duration={3000}>
          <p className="font-bold text-xl text-primary">
            지금까지 {ReviewData.data.length}번 방문,
          </p>
        </Fade>
        <Fade duration={5000}>
          <p className="pt-4 font-bold text-xl text-primary">
            총{' '}
            {ReviewData.data
              .map((review) => Number(review.price))
              .reduce((a, b) => a + b, 0)}
            원 쓰셨군요!
          </p>
        </Fade>

        <section className="my-10">
          <PieChart data={ReviewData.data} />
        </section>

        <section className="flex flex-col h-full p-4 border rounded-md gap-4">
          <div className="overflow-auto h-full">
            {ReviewData.data.map((d, index) => (
              <CreditCard
                key={index}
                restNm={d.svarCd}
                price={d.price}
                date={d.visitedDate}
                way={d.way}
              />
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="py-10 px-2">{content}</main>
    </>
  );
}
