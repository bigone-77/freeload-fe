/* eslint-disable @typescript-eslint/indent */

'use client';

import { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import { Food } from '@/models/Food';
import Loader from '@/Common/Loader';
import { FoodTag } from '@/models/FoodTag';
import { useScroll } from '@/hooks/useScroll';
import { getFoodData } from './_lib/getFoodData';
import Menubar from './_components/Menubar';
import FoodCard from './_components/FoodCard';

export default function Page({ params }: { params: { restId: string } }) {
  const sorted = useSearchParams().get('sort');
  const {
    data: FoodData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<Food[], Object, InfiniteData<Food[]>, any, number>({
    queryKey: ['rest', 'food', params.restId, sorted],
    queryFn: getFoodData,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.foodId,
  });
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 1000,
  });

  useEffect(() => {
    if (inView) {
      if (!isFetching && hasNextPage) {
        fetchNextPage();
      }
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  const [foodTag, setFoodTag] = useState<FoodTag>('ALL');

  const { y: scrollHeight } = useScroll();
  const fixStandard = scrollHeight > 300;

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (FoodData) {
    content = (
      <main className="bg-white h-full mt-6">
        <Menubar fix={fixStandard} value={foodTag} setValue={setFoodTag} />
        <div className="grid grid-cols-2 place-items-center p-4 gap-3">
          {FoodData.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((food) => (
                <FoodCard
                  key={food.foodId}
                  name={food.foodName}
                  cost={food.foodCost.toLocaleString()}
                />
              ))}
            </Fragment>
          ))}
        </div>
        <div ref={ref} className="w-full h-2" />
      </main>
    );
  }

  return (
    <div className="bg-text100 h-full overscroll-y-auto">
      <header className="mx-4 bg-primary flex flex-col items-center text-white py-6 border rounded-b-xl">
        <h1 className="text-2xl">구리(일산방향)휴게소</h1>
        <h2 className="text-sm mt-6">주소: 경기 구리시 사노동170-13</h2>
      </header>
      {content}
    </div>
  );
}
