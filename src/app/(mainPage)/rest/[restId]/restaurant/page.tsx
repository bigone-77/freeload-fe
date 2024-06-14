'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { FoodResponse, FoodTag } from '@/models/Food';
import { RestResponse } from '@/models/Rest';
import Loader from '@/Common/Loader';
import { useScroll } from '@/hooks/useScroll';
import { getFoodData } from '@/lib/rest/getFoodData';
import Menubar from './_components/Menubar';
import FoodCard from './_components/FoodCard';

export default function Page({ params }: { params: { restId: string } }) {
  const queryClient = useQueryClient();
  const restCachedData = queryClient.getQueryData<RestResponse>([
    'rest',
    'detail',
    params.restId,
  ]);

  const sorted = useSearchParams().get('sort');

  const { data: FoodData, isLoading } = useQuery<FoodResponse>({
    queryKey: ['rest', 'food', params.restId, sorted],
    queryFn: getFoodData,
  });

  const [foodTag, setFoodTag] = useState<FoodTag>('ALL');

  const { y: scrollHeight } = useScroll();
  const fixStandard = scrollHeight > 300;

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (FoodData && FoodData.data && FoodData?.data.length > 0) {
    content = (
      <>
        {FoodData.data.map((food, index) => (
          <FoodCard
            key={index}
            name={food.foodNm}
            cost={food.foodCost.toLocaleString()}
          />
        ))}
      </>
    );
  } else {
    content = <p>현재 판매되고 있는 음식이 없습니다.</p>;
  }

  return (
    <div className="bg-text100 h-full overscroll-y-auto">
      <header className="mx-4 bg-primary flex flex-col items-center text-white py-6 border rounded-b-xl">
        <h1 className="text-2xl">{restCachedData?.data[0].restName}</h1>
        <h2 className="text-sm mt-6">{restCachedData?.data[0].restAddr}</h2>
      </header>
      <main className="bg-white h-full mt-6">
        <Menubar fix={fixStandard} value={foodTag} setValue={setFoodTag} />
        <div
          className={`grid ${FoodData && FoodData.data && FoodData?.data.length > 0 ? 'grid-cols-2' : 'grid-cols-1'} place-items-center p-4 gap-3`}
        >
          {content}
        </div>
      </main>
    </div>
  );
}

// TODO: 처음에 6개씩 -> 상태변수에 저장 -> 만약 저장 후 보니까 길이가 6 미만이라면 curosr값 변화 X
// TODO: 저장했는데 6개라면 cursor값 1증가
