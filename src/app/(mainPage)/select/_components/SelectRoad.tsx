'use client';

import { useQuery } from '@tanstack/react-query';

import { RoadResponse } from '@/models/Road';
import Loader from '@/Common/Loader';
import { getRoadData } from '@/lib/getRoadData';
import RoadCard from './RoadCard';

export default function SelectRoad() {
  const { data: Response, isLoading } = useQuery<RoadResponse>({
    queryKey: ['road'],
    queryFn: getRoadData,
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (Response) {
    content = (
      <section className="flex flex-col gap-5 mt-10">
        {Response.data.map((d, index) => (
          <RoadCard key={index} name={d.routeNm} />
        ))}
      </section>
    );
  }

  return (
    <>
      <h1 className="font-bold text-2xl pt-10">고속도로 선택</h1>
      {content}
    </>
  );
}
