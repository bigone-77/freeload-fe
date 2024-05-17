import { Dispatch, SetStateAction } from 'react';

interface ITypeTageProps {
  type: string;
  value: string;
  onClick: Dispatch<SetStateAction<string>>;
}

export default function TypeTag({ type, value, onClick }: ITypeTageProps) {
  const selected = type === value;
  return (
    <p
      className={`px-7 py-2 border rounded-2xl ${selected ? 'text-text50 bg-primary' : 'text-text600 bg-text50'}`}
      onClick={() => onClick(type)}
    >
      {type}
    </p>
  );
}
