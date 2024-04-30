interface ILabelInputProps {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export default function LabelInput({
  name,
  label,
  value,
  onChange,
  placeholder,
}: ILabelInputProps) {
  if (value !== '') {
    const ps = new kakao.maps.services.Places();

    const placeSearchCB = (data: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);
      }
    };
    ps.keywordSearch(value, placeSearchCB);
  }
  return (
    <div className="flex items-center justify-center gap-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="focus:border-b border-b-black outline-none"
        type="text"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
