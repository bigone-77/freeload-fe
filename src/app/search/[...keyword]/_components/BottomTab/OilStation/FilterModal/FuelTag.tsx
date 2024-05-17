import { Dispatch, SetStateAction } from 'react';

interface IFuelTagProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export default function FuelTag({ value, onChange }: IFuelTagProps) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">기름 종류</h2>
      <div className="flex items-center gap-4">
        <label htmlFor="gasoline" className="inline-flex items-center">
          <input
            id="gasoline"
            type="radio"
            name="fuel"
            value="gasoline"
            checked={value === 'gasoline'}
            onChange={(e) => onChange(e.target.value)}
            className="h-5 w-5 text-primary"
          />
          <span className="ml-2 text-gray-700">휘발유</span>
        </label>
        <label htmlFor="diesel" className="inline-flex items-center">
          <input
            type="radio"
            name="fuel"
            id="diesel"
            value="diesel"
            checked={value === 'diesel'}
            onChange={(e) => onChange(e.target.value)}
            className="h-5 w-5 text-primary"
          />
          <span className="ml-2 text-gray-700">경유</span>
        </label>
        <label htmlFor="lpg" className="inline-flex items-center">
          <input
            id="lpg"
            type="radio"
            name="fuel"
            value="lpg"
            checked={value === 'lpg'}
            onChange={(e) => onChange(e.target.value)}
            className="h-5 w-5 text-primary"
          />
          <span className="ml-2 text-gray-700">LPG</span>
        </label>
      </div>
    </>
  );
}
