'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import {
  RiMap2Line,
  PiBowlFood,
  BiGasPump,
  FaCartFlatbed,
} from '@/constants/Icons';
import { getRestData } from '@/lib/getRestData';
import { getOilData } from '@/lib/getOilData';
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
  const { data: Rest } = useQuery<RestResponse>({
    queryKey: ['rest', params.restId],
    queryFn: () => getRestData(Number(params.restId)),
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
      />
      <div className="h-screen pt-6 px-3 bg-text100">
        <section className="grid grid-cols-2 gap-4 w-full place-items-center">
          <CategoryCard
            restId={params.restId}
            title="고객 만족도"
            grade={Rest?.data[0].satisfaction}
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
            title="주유소정보"
            url={`oil?direction=${directionParams.get('direction')}`}
            subTitle="주유소 상세정보"
            icon={BiGasPump}
          />
          <CategoryCard
            restId={params.restId}
            title="편의시설"
            subTitle="휴게소 편의시설 정보"
            url="etc"
            icon={FaCartFlatbed}
          />
        </section>

        <section className="flex flex-col items-center justify-center text-[#2A629A] pt-10">
          <Link href="/home">
            <RiMap2Line size={35} />
            <p className="font-semibold text-lg text-center">홈</p>
          </Link>
        </section>
      </div>
    </>
  );
}
