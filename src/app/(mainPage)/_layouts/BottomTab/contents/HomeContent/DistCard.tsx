import { Dispatch, SetStateAction } from 'react';

interface ISelectedDistProps {
  distUnit: number;
  setDist: Dispatch<SetStateAction<number>>;
  selected: boolean;
}

export default function DistCard({
  distUnit,
  setDist,
  selected,
}: ISelectedDistProps) {
  return (
    <p
      className={`py-2 px-4 rounded-xl border ${selected ? 'text-text50 bg-primary' : 'text-text600 bg-text50'}`}
      onClick={() => setDist(distUnit * 1000)}
    >
      {distUnit}km
    </p>
  );
}
