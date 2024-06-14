'use client';

import { OilResponse, OilStation } from '@/models/OilStation';
import { useQuery } from '@tanstack/react-query';

import { getRoadOilData } from '@/lib/road/getRoadOilData';
import { getRouteCode } from '@/constants/RouteCode';
import Loader from '@/Common/Loader';
import OilCard from './OilCard';

interface IShowOilStationProps {
  roadName: string;
  direction: string;
  showAllOilHandler: (data: OilStation[]) => void;
}

export default function ShowOilStation({
  roadName,
  direction,
  showAllOilHandler,
}: IShowOilStationProps) {
  const { data: Response, isLoading } = useQuery<OilResponse>({
    queryKey: [
      'oil',
      getRouteCode(roadName.replace('고속도로', '선')),
      direction,
    ],
    queryFn: getRoadOilData,
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (Response && Response.data && Response.data.length > 0) {
    content = (
      <div className="flex overflow-x-auto gap-4">
        {Response.data.map((oil, index) => (
          <OilCard
            key={index}
            name={oil.serviceAreaName}
            company={oil.oilCompany}
            disel={oil.diselPrice}
            gasoline={oil.gasolinePrice}
            lpg={oil.lpgPrice}
            electric={oil.electric === '1'}
            hydrogen={oil.hydrogen === '1'}
          />
        ))}
      </div>
    );
  } else {
    content = <p>이용 가능한 주유소가 없습니다.</p>;
  }

  return (
    <section>
      <div className="flex justify-between">
        <p className="font-bold text-xl mb-4">주유소</p>
        <p
          className="underline decoration-1 text-sm hover:opacity-80 transition-all"
          onClick={() => showAllOilHandler(Response?.data!)}
        >
          더보기
        </p>
      </div>
      {content}
    </section>
  );
}
