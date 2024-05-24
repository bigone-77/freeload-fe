import { Dispatch, SetStateAction } from 'react';

interface IFuelTagProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export default function FuelTag({ value, onChange }: IFuelTagProps) {
  const handleClick = (selectedValue: string) => {
    if (selectedValue === value) {
      // 이미 선택된 값과 같은 값이 클릭되면 빈 문자열로 변경하여 토글
      onChange('');
    } else {
      // 다른 값이 클릭되면 해당 값으로 변경
      onChange(selectedValue);
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">기름 종류</h2>
      <div className="flex items-center gap-4">
        <label htmlFor="GAS" className="inline-flex items-center">
          <input
            id="GAS"
            type="radio"
            name="fuel"
            value="GAS"
            checked={value === 'GAS'}
            onClick={() => handleClick('GAS')}
            className="h-5 w-5 text-primary"
          />
          <span className="ml-2 text-gray-700">휘발유</span>
        </label>
        <label htmlFor="DI" className="inline-flex items-center">
          <input
            type="radio"
            name="fuel"
            id="DI"
            value="DI"
            checked={value === 'DI'}
            onClick={() => handleClick('DI')}
            className="h-5 w-5 text-primary"
          />
          <span className="ml-2 text-gray-700">경유</span>
        </label>
        <label htmlFor="LPG" className="inline-flex items-center">
          <input
            id="LPG"
            type="radio"
            name="fuel"
            value="LPG"
            checked={value === 'LPG'}
            onClick={() => handleClick('LPG')}
            className="h-5 w-5 text-primary"
          />
          <span className="ml-2 text-gray-700">LPG</span>
        </label>
      </div>
    </>
  );
}
