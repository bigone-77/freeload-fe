'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import {
  PiBowlFood,
  BiGasPump,
  RiCustomerService2Line,
} from '@/constants/Icons';
import { getRestData } from '@/lib/rest/getRestData';
import { getOilData } from '@/lib/rest/getOilData';
import { RestResponse } from '@/models/Rest';
import { OilResponse } from '@/models/OilStation';
import CategoryCard from '../_components/CategoryCard';
import CertainRestCard from './_components/CertainRestCard';

export default function RestDetailPage({
  params,
}: {
  params: { restId: string };
}) {
  const directionParams = useSearchParams();

  const userEmail = useSession().data?.user?.email;

  const { data: Rest } = useQuery<RestResponse>({
    queryKey: ['rest', 'detail', params.restId],
    queryFn: () => getRestData(Number(params.restId), userEmail),
  });

  const { data: Oil } = useQuery<OilResponse>({
    queryKey: ['rest', 'oil', params.restId, directionParams.get('direction')],
    queryFn: getOilData,
  });

  return (
    <>
      <CertainRestCard
        hq={Rest?.data[0].hdqrCd!}
        name={Rest?.data[0].restName!}
        gas={Oil?.data[0].gasolinePrice!}
        di={Oil?.data[0].diselPrice!}
        lpg={Oil?.data[0].lpgPrice}
        isLiked={Rest?.data[0].isLiked!}
        restId={params.restId}
      />
      <div className="h-screen pt-6 px-3 bg-text100">
        <section className="grid grid-cols-2 gap-4 w-full place-items-center">
          <CategoryCard
            restId={params.restId}
            title="고객 만족도"
            grade={Rest?.data[0].satisfaction ? Rest.data[0].satisfaction : '0'}
          />
          <CategoryCard
            restId={params.restId}
            title="메뉴정보"
            url="restaurant"
            subTitle="휴게소 음식정보"
            icon={PiBowlFood}
          />
          <CategoryCard
            restId={params.restId}
            title="고객평가"
            subTitle="휴게소 이용 고객 리뷰"
            url={`customer?restNm=${Rest?.data[0].restName}`}
            icon={RiCustomerService2Line}
          />
          <CategoryCard
            restId={params.restId}
            title="주유소정보"
            url={`oil?direction=${directionParams.get('direction')}`}
            subTitle="주유소 상세정보"
            icon={BiGasPump}
          />
        </section>
      </div>
    </>
  );
}
