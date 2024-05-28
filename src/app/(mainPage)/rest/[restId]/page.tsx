import Link from 'next/link';

import {
  RiMap2Line,
  PiBowlFood,
  BiGasPump,
  FaCartFlatbed,
} from '@/constants/Icons';
import CategoryCard from '../_components/CategoryCard';

export default function RestDetailPage({
  params,
}: {
  params: { restId: string };
}) {
  return (
    <>
      <main className="pb-10 px-10 bg-primary text-white">
        <h1 className="text-2xl font-bold">경주(부산방향)휴게소</h1>
        <span className="flex items-center gap-1 my-4">
          <h2>본부명 :</h2>
          <h2>대구경북본부</h2>
        </span>
        <div className="grid grid-cols-2 gap-3">
          <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
            <p>휘발유: 1,633원</p>
          </span>
          <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
            <p>경유: 1,467원</p>
          </span>
          <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
            <p>LPG: 1,251원</p>
          </span>
        </div>
      </main>
      <div className="h-full px-3 py-12 bg-text100">
        <section className="grid grid-cols-2 gap-4 w-full place-items-center">
          <CategoryCard restId={params.restId} title="고객 만족도" grade={2} />
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
            url="oil"
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
        <footer className="absolute bottom-32 w-full flex flex-col place-content-center text-[#2A629A]">
          <Link href="/home">
            <section className="flex flex-col items-center justify-center">
              <RiMap2Line size={35} />
              <p className="font-semibold text-lg">홈</p>
            </section>
          </Link>
        </footer>
      </div>
    </>
  );
}
