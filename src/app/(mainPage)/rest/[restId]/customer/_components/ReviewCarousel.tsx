'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';

import { ReviewResponse } from '@/models/Review';
import { getRestReviewData } from '@/lib/rest/getRestReviewData';
import Loader from '@/Common/Loader';
import { changeDomain } from '@/utils/changeDomain';
import ReviewCard from './ReviewCard';

interface IReviewCarouselProps {
  restId: string;
}

export default function ReviewCarousel({ restId }: IReviewCarouselProps) {
  const { data: ReviewData, isLoading } = useQuery<ReviewResponse>({
    queryKey: ['rest', 'review', restId],
    queryFn: () => getRestReviewData(Number(restId)),
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  }

  if (ReviewData && ReviewData.data) {
    content = (
      <Swiper navigation modules={[Navigation]} speed={1000} spaceBetween={2}>
        {ReviewData.data.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center w-full h-full">
              <ReviewCard
                email={review.email}
                imgUrl={changeDomain(review.profile_image)}
                date={review.visitedDate}
                storeNm={review.storeName}
                price={review.price}
                way={review.way}
                contents={review.content}
                reviewImage={changeDomain(review.filePath)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  if (ReviewData?.data.length === 0) {
    content = <p>작성된 리뷰글이 없습니다.</p>;
  }

  return (
    <div>
      <p className="font-semibold text-xl mb-6">
        리뷰 {ReviewData?.data.length}개
      </p>
      {content}
    </div>
  );
}
