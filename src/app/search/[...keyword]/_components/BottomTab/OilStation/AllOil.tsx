'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { OilStation } from '@/models/OilStation';
import { IoChevronBack, MdOutlineFilterAlt } from '@/constants/Icons';
import { getCertainOilData } from '../../../_lib/getCertainOilData';
import OilTable from './OilTable';
import FilterModal from './FilterModal';

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

  const [showFilter, setShowFilter] = useState(false);

  return (
    <article className="h-full overflow-y-auto pb-6">
      <div className="flex items-center gap-4 mb-6">
        <IoChevronBack size={35} onClick={closeHandler} />
        <h1 className="font-semibold text-2xl">{roadName} 주유소</h1>
      </div>
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
      <span className="absolute bottom-16 right-6 bg-primary rounded-full p-4">
        <MdOutlineFilterAlt
          size={40}
          color="white"
          onClick={() => setShowFilter(true)}
        />
      </span>
      {showFilter && (
        <FilterModal modalOpen={showFilter} setModalOpen={setShowFilter} />
      )}
    </article>
  );
}
