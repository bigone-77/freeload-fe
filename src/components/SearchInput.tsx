import { IconType } from 'react-icons';
import { AiFillCloseCircle } from 'react-icons/ai';

interface ISearchInputProps {
  iconName: IconType;
  iconSize: number;
  iconColor?: string;
  iconClick?: () => void;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSelect?: () => void;
  deleteHandler?: () => void;
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
  deleteHandler,
}: ISearchInputProps) {
  return (
    <div className="w-full flex items-center justify-center relative">
      <Icon size={iconSize} color={iconColor} onClick={iconClick} />
      <input
        className="border-2 rounded-xl w-full py-2 px-4 outline-none text-xl shadow-lg"
        placeholder={placeholder}
        onSelect={onSelect}
        value={value}
        onChange={onChange}
      />
      <AiFillCloseCircle
        color="gray"
        size={30}
        className="right-2 absolute"
        onClick={deleteHandler}
      />
    </div>
  );
}
