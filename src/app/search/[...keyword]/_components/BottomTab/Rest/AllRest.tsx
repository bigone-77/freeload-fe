'use client';

import { useQuery } from '@tanstack/react-query';

import { IoChevronBack } from '@/constants/Icons';

import { Rest } from '@/models/Rest';
import { getCertainRestData } from '../../../_lib/getCertainRestData';
import FacilityIcons from './FacilityIcons';
import Facilities from './Facilities';

interface IAllRestProps {
  roadName: string;
  direction: string;
  closeHandler: () => void;
}

export default function AllRest({
  roadName,
  direction,
  closeHandler,
}: IAllRestProps) {
  const { data: RestData } = useQuery<Rest[]>({
    queryKey: ['rest', roadName, direction],
    queryFn: getCertainRestData,
  });

  return (
    <article>
      <div className="flex items-center gap-4">
        <IoChevronBack size={35} onClick={closeHandler} />
        <h1 className="font-semibold text-2xl">{roadName} 휴게소</h1>
      </div>
      <div className="px-8 mt-6">
        <FacilityIcons />
        <div className="flex flex-col gap-4 mt-16">
          {RestData ? (
            RestData.map((rest, index) => (
              <section
                className="flex items-center justify-between"
                key={index}
              >
                <p>{rest.restName}</p>
                <Facilities
                  wifi={rest.wifi}
                  repair={rest.repair}
                  electronic={rest.electronic}
                  shelter={rest.shelter}
                  nurse={rest.nurse}
                  pharmacy={rest.pharmacy}
                  pet={rest.pet}
                  disabled={rest.disabled}
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
