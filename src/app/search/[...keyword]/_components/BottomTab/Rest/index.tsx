import { useQuery } from '@tanstack/react-query';

import { Rest } from '@/models/Rest';
import { getRoadRestData } from '@/lib/getRoadRestData';
// import RestCard from './RestCard';

interface ShowRestProps {
  roadName: string;
  direction: string;
  // gotoDetailHandler: (id: string) => void;
  showAllRestHandler: (data: Rest[]) => void;
}

export default function ShowRest({
  roadName,
  direction,
  // gotoDetailHandler,
  showAllRestHandler,
}: ShowRestProps) {
  const { data: RestData } = useQuery<Rest[]>({
    queryKey: ['rest', roadName, direction],
    queryFn: getRoadRestData,
  });

  return (
    <section>
      <div className="flex justify-between">
        <p className="font-bold text-xl mb-4">휴게소</p>
        <p
          className="underline decoration-1 text-sm hover:opacity-80 transition-all"
          onClick={() => showAllRestHandler(RestData!)}
        >
          더보기
        </p>
      </div>
      <div className="flex overflow-x-auto gap-4">
        {/* {RestData ? (
          RestData.map((rest) => (
            <RestCard
              gotoDetailHandler={gotoDetailHandler}
              key={rest.restId}
              id={rest.restId}
              name={rest.restName}
              addr={rest.restAddr}
              grade={rest.restGrade}
              wifi={rest.wifi}
              repair={rest.repair}
              electronic={rest.electronic}
              shelter={rest.shelter}
              nurse={rest.nurse}
              pharmacy={rest.pharmacy}
              pet={rest.pet}
              disabled={rest.disabled}
            />
          ))
        ) : (
          <p>이용 가능한 휴게소가 없습니다.</p>
        )} */}
      </div>
    </section>
  );
}
