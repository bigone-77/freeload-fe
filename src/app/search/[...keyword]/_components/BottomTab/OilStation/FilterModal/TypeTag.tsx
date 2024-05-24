import { Dispatch, SetStateAction } from 'react';

interface ITypeTageProps {
  type: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
}

export default function TypeTag({
  type,
  selected,
  setSelected,
}: ITypeTageProps) {
  return (
    <p
      className={`px-7 py-2 border rounded-2xl ${selected ? 'text-text50 bg-primary' : 'text-text600 bg-text50'}`}
      onClick={() => setSelected(!selected)}
    >
      {type}
    </p>
  );
}
