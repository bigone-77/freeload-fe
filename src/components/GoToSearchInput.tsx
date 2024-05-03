interface IGoToSearchInputProps {
  name: string;
  label: string;
  value?: string;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  placeholder: string;
}

export default function GoToSearchInput({
  name,
  label,
  value,
  onFocus,
  placeholder,
}: IGoToSearchInputProps) {
  return (
    <div className="flex items-center justify-center gap-3 w-full relative">
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          className="focus:border-b border-b-black outline-none w-44"
          type="text"
          id={name}
          value={value}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly
        />
      </div>
    </div>
  );
}
