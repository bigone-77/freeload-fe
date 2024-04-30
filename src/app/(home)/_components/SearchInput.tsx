import { IconType } from 'react-icons';

interface ISearchInputProps {
  iconName: IconType;
  iconSize: number;
  iconColor?: string;
  iconClick?: () => void;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSelect?: () => void;
}

export default function SearchInput({
  iconName: Icon,
  iconSize,
  iconColor,
  iconClick,
  placeholder,
  value,
  onChange,
  onSelect,
}: ISearchInputProps) {
  return (
    <div className="w-full flex gap-4 items-center justify-center">
      <Icon size={iconSize} color={iconColor} onClick={iconClick} />
      <input
        className="border-2 rounded-xl w-full p-2 outline-none font-bold text-xl shadow-lg"
        placeholder={placeholder}
        onSelect={onSelect}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
