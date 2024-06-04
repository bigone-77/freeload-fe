'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import { FoodResponse, FoodTag } from '@/models/Food';
import Loader from '@/Common/Loader';
import { useScroll } from '@/hooks/useScroll';
import { getFoodData } from '@/lib/getFoodData';
import Menubar from './_components/Menubar';
import FoodCard from './_components/FoodCard';

export default function Page({ params }: { params: { restId: string } }) {
  const [cursor, setCursor] = useState(0);
  const sorted = useSearchParams().get('sort');

  const { data: FoodData, isLoading } = useQuery<FoodResponse>({
    queryKey: ['rest', 'food', params.restId, sorted, 0],
    queryFn: getFoodData,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });
  console.log(inView);

  useEffect(() => {
    if (inView) {
      setCursor(cursor + 1);
    }
  }, [inView, cursor]);

  const [foodTag, setFoodTag] = useState<FoodTag>('ALL');

  const { y: scrollHeight } = useScroll();
  const fixStandard = scrollHeight > 300;

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (FoodData) {
    content = (
      <>
        <header className="mx-4 bg-primary flex flex-col items-center text-white py-6 border rounded-b-xl">
          <h1 className="text-2xl">{FoodData.data[0].stdRestNm}</h1>
          <h2 className="text-sm mt-6">{FoodData.data[0].svarAddr}</h2>
        </header>
        <main className="bg-white h-full mt-6">
          <Menubar fix={fixStandard} value={foodTag} setValue={setFoodTag} />
          <div className="grid grid-cols-2 place-items-center p-4 gap-3">
            {FoodData.data ? (
              FoodData.data.map((food, index) => (
                <FoodCard
                  key={index}
                  name={food.foodNm}
                  cost={food.foodCost.toLocaleString()}
                />
              ))
            ) : (
              <p>현재 판매되고 있는 음식이 없습니다.</p>
            )}
          </div>
          <div ref={ref} className="w-full h-[2px]" />
        </main>
      </>
    );
  }

  return <div className="bg-text100 h-full overscroll-y-auto">{content}</div>;
}
