'use client';

interface IEnteredInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function EnteredInput({
  type,
  placeholder,
  value,
  onChange,
}: IEnteredInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border rounded-enteredInput border-primary px-3 py-4 w-full font-regular text-lg focus:bg-blue-100 focus:bg-opacity-25 transition-all outline-none"
    />
  );
}
