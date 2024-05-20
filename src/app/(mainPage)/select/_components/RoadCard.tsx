import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { RootState } from '@/store';
import { getRoadName } from '@/store/slices/getUserSelectSlice';

interface IRoadCardProps {
  name: string;
}

export default function RoadCard({ name }: IRoadCardProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedRoad = useSelector((state: RootState) => state.select.roadName);

  const goSelectDirectionHandler = () => {
    dispatch(
      getRoadName({
        roadName: name,
      }),
    );
    router.push('/select/direction');
  };

  const selected = selectedRoad === name;

  return (
    <section
      className={`w-full border rounded-lg shadow-lg h-16 p-4 ${selected ? 'text-text50 bg-primary' : 'text-text600 bg-text50'}`}
      onClick={goSelectDirectionHandler}
    >
      <h2 className="text-lg">{name}</h2>
    </section>
  );
}
