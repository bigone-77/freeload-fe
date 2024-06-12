'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { ReviewResponse } from '@/models/Review';
import { getRestReviewData } from '@/lib/getRestReviewData';
import Loader from '@/Common/Loader';
import { boxVariants } from '@/constants/Framer';
import { AnimatePresence, motion } from 'framer-motion';
import ReviewCard from './ReviewCard';

interface IReviewSliderProps {
  restId: string;
}

export default function ReviewSlider({ restId }: IReviewSliderProps) {
  const { data: ReviewData, isLoading } = useQuery<ReviewResponse>({
    queryKey: ['rest', 'review', restId],
    queryFn: () => getRestReviewData(Number(restId)),
  });

  const [visibleNumber, setVisibleNumber] = useState(0);
  const [back, setBack] = useState(false);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (ReviewData?.data && ReviewData.data.length > 0) {
    const nextPlease = () => {
      setBack(false);
      setVisibleNumber((prev) => (prev + 1) % ReviewData.data.length);
    };

    const prevPlease = () => {
      setBack(true);
      setVisibleNumber(
        (prev) => (prev - 1 + ReviewData.data.length) % ReviewData.data.length,
      );
    };

    content = (
      <div className="flex justify-center items-center relative w-full mt-4">
        <Image
          className="absolute top-1/2 transform -translate-y-1/2 -left-6 cursor-pointer"
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1717582576/prev-button.svg"
          alt="prev-button"
          width={56}
          height={56}
          priority
          onClick={prevPlease}
        />
        <div className="flex justify-center items-center w-full">
          <AnimatePresence custom={back}>
            <motion.div
              className="flex justify-center items-center w-full h-full"
              custom={back}
              variants={boxVariants}
              initial="entry"
              animate="center"
              exit="exit"
              key={visibleNumber}
            >
              <ReviewCard
                email={ReviewData.data[visibleNumber].email}
                imgUrl={ReviewData.data[visibleNumber].profile_image.replace(
                  'http',
                  'https',
                )}
                date={ReviewData.data[visibleNumber].visitedDate}
                storeNm={ReviewData.data[visibleNumber].storeName}
                price={ReviewData.data[visibleNumber].price}
                way={ReviewData.data[visibleNumber].way}
                contents={ReviewData.data[visibleNumber].content}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <Image
          className="absolute top-1/2 transform -translate-y-1/2 -right-6 cursor-pointer"
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1717582576/next-button.svg"
          alt="next-button"
          width={56}
          height={56}
          priority
          onClick={nextPlease}
        />
      </div>
    );
  } else {
    content = <p>리뷰가 없어요</p>;
  }

  return (
    <div>
      <p className="font-semibold text-xl">리뷰 {ReviewData?.data.length}개</p>
      {content}
    </div>
  );
}
