import { Dispatch, SetStateAction } from 'react';

interface IShowHighwayNamesProps {
  names: string[];
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export default function ShowHighwayNames({
  names,
  value,
  setValue,
}: IShowHighwayNamesProps) {
  return (
    <section>
      <p className="font-bold text-xl mb-4">이용 예정 고속도로</p>
      <div className="flex overflow-x-auto gap-4">
        {names.map((name, index) => (
          <p
            className={`whitespace-nowrap text-sm rounded-xl border p-2 ${value === index + 1 ? 'text-text50 bg-primary' : 'text-text600 bg-text50'} `}
            key={index}
            onClick={() => setValue(index + 1)}
          >
            {name}
          </p>
        ))}
      </div>
    </section>
  );
}
