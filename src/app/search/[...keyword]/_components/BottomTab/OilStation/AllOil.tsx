'use client';

import { useQuery } from '@tanstack/react-query';

import { OilStation } from '@/models/OilStation';
import { IoChevronBack } from '@/constants/Icons';
import { getCertainOilData } from '../../../_lib/getCertainOilData';
import OilTable from './OilTable';
import OilFilterBox from './OilFilterBox';

interface IAllOilProps {
  roadName: string;
  direction: string;
  closeHandler: () => void;
}

export default function AllOil({
  roadName,
  direction,
  closeHandler,
}: IAllOilProps) {
  const { data: OilData } = useQuery<OilStation[]>({
    queryKey: ['oil', roadName, direction],
    queryFn: getCertainOilData,
  });

  return (
    <article className="h-full overflow-y-auto pb-6">
      <div className="flex items-center gap-4 mb-6">
        <IoChevronBack size={35} onClick={closeHandler} />
        <h1 className="font-semibold text-2xl">{roadName} 주유소</h1>
      </div>
      <OilFilterBox />
      <div className="px-4 mt-6 h-full">
        <div className="flex flex-col gap-8">
          {OilData ? (
            OilData.map((oil, index) => (
              <OilTable
                key={index}
                name={oil.oilName}
                company={oil.oilCompany}
                gasoline={oil.gasolinePrice}
                disel={oil.diselPrice}
                lpg={oil.lpgPrice}
                electric={oil.electric}
                hydrogen={oil.hydrogen}
              />
            ))
          ) : (
            <p>찾으시는 주유소 정보가 없습니다.</p>
          )}
        </div>
      </div>
    </article>
  );
}
