'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { Rest } from '@/models/Rest';
import { IoChevronBack } from '@/constants/Icons';
import { getFilteredRest } from '@/utils/getFilterData';
import FacilityIcons from './FacilityIcons';
import Facilities from './Facilities';

interface IAllRestProps {
  roadName: string;
  closeHandler: () => void;
}

export default function AllRest({ roadName, closeHandler }: IAllRestProps) {
  const RestData = useSelector((state: RootState) => state.rest);
  const [filteredData, setFilteredData] = useState<Rest[]>(RestData);
  const [sorted, setSorted] = useState('');

  useEffect(() => {
    setFilteredData(getFilteredRest(sorted, RestData));
  }, [sorted, RestData]);

  return (
    <article>
      <div className="flex items-center gap-4">
        <IoChevronBack size={35} onClick={closeHandler} />
        <h1 className="font-semibold text-2xl w-full">{roadName} 휴게소</h1>
      </div>
      <div className="px-4 mt-6">
        <FacilityIcons sorted={sorted} setSorted={setSorted} />
        <div className="flex flex-col gap-4 mt-16">
          {filteredData ? (
            filteredData.map((rest, index) => (
              <section
                className="flex items-center justify-between"
                key={index}
              >
                <p className="w-full">{rest.restName}</p>
                <Facilities
                  size={20}
                  wifi={rest.wifi === 'True'}
                  electronic={rest.electric_car === 'True'}
                  nurse={rest.nursing_room === 'True'}
                  pharmacy={rest.pharmacy === 'True'}
                  pet={rest.pet === 'True'}
                  disabled={rest.braile_block === 'True'}
                />
              </section>
            ))
          ) : (
            <p>찾으시는 휴게소 정보가 없습니다.</p>
          )}
        </div>
      </div>
    </article>
  );
}
