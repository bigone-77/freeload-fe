'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { DUMMY_REVIEW } from '@/constants/Review';
import Image from 'next/image';
import ReviewCard from './ReviewCard';

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === DUMMY_REVIEW.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? DUMMY_REVIEW.length - 1 : prev - 1));
  };

  return (
    <div className="flex justify-center items-center relative">
      <Image
        className="absolute top-[40%] left-0"
        src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1717582576/prev-button.svg"
        alt="prev-button"
        width={56}
        height={56}
        priority
        onClick={handlePrev}
      />
      <div className="flex overflow-hidden">
        <AnimatePresence>
          <ReviewCard
            key={DUMMY_REVIEW[index].email}
            email={DUMMY_REVIEW[index].email}
            imgUrl={DUMMY_REVIEW[index].imgUrl}
            contents={DUMMY_REVIEW[index].contents}
          />
        </AnimatePresence>
      </div>
      <Image
        className="absolute top-[40%] right-0"
        src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1717582576/next-button.svg"
        alt="next-button"
        width={56}
        height={56}
        priority
        onClick={handleNext}
      />
    </div>
  );
}
