'use client';

import { OilStation } from '@/models/OilStation';
import { useQuery } from '@tanstack/react-query';
import { getCertainOilData } from '../../../_lib/getCertainOilData';
import OilCard from './OilCard';

interface IShowOilStationProps {
  roadName: string;
  direction: string;
  showAllOilHandler: () => void;
}

export default function ShowOilStation({
  roadName,
  direction,
  showAllOilHandler,
}: IShowOilStationProps) {
  const { data: OilData } = useQuery<OilStation[]>({
    queryKey: ['oil', roadName, direction],
    queryFn: getCertainOilData,
  });

  return (
    <section>
      <div className="flex justify-between">
        <p className="font-bold text-xl mb-4">주유소</p>
        <p
          className="underline decoration-1 text-sm hover:opacity-80 transition-all"
          onClick={showAllOilHandler}
        >
          더보기
        </p>
      </div>
      <div className="flex overflow-x-auto gap-4">
        {OilData ? (
          OilData.map((oil, index) => (
            <OilCard
              key={index}
              name={oil.oilName}
              company={oil.oilCompany}
              disel={oil.diselPrice}
              gasoline={oil.gasolinePrice}
              lpg={oil.lpgPrice}
              electric={oil.electric}
              hydrogen={oil.hydrogen}
            />
          ))
        ) : (
          <p>이용 가능한 주유소가 없습니다.</p>
        )}
      </div>
    </section>
  );
}
