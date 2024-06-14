import { useQuery } from '@tanstack/react-query';

import { Rest, RestResponse } from '@/models/Rest';
import { getRoadRestData } from '@/lib/road/getRoadRestData';
import Loader from '@/Common/Loader';
import RestCard from './RestCard';

interface ShowRestProps {
  roadName: string;
  direction: string;
  gotoDetailHandler: (id: number) => void;
  showAllRestHandler: (data: Rest[]) => void;
}

export default function ShowRest({
  roadName,
  direction,
  gotoDetailHandler,
  showAllRestHandler,
}: ShowRestProps) {
  const { data: RestData, isLoading } = useQuery<RestResponse>({
    queryKey: ['rest', roadName.replace('고속도로', '선'), direction],
    queryFn: getRoadRestData,
  });

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (RestData && RestData.data && RestData.data.length > 0) {
    content = (
      <div className="flex overflow-x-auto gap-4">
        {RestData.data.map((rest) => (
          <RestCard
            gotoDetailHandler={gotoDetailHandler}
            key={rest.restId}
            id={rest.restId}
            name={rest.restName}
            addr={rest.restAddr}
            grade={rest.satisfaction}
            wifi={rest.wifi === 'True'}
            electronic={rest.electric_car === 'True'}
            nurse={rest.nursing_room === 'True'}
            pharmacy={rest.pharmacy === 'True'}
            pet={rest.pet === 'True'}
            disabled={rest.braile_block === 'True'}
          />
        ))}
      </div>
    );
  } else {
    content = <p>이용 가능한 휴게소가 없습니다.</p>;
  }

  return (
    <section>
      <div className="flex justify-between">
        <p className="font-bold text-xl mb-4">휴게소</p>
        <p
          className="underline decoration-1 text-sm hover:opacity-80 transition-all"
          onClick={() => showAllRestHandler(RestData?.data!)}
        >
          더보기
        </p>
      </div>
      {content}
    </section>
  );
}
