interface IPrimaryButtonProps {
  children?: string;
  passed?: boolean;
  classProps?: string;
  short?: boolean;
  middle?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({
  children,
  passed,
  classProps,
  short,
  middle,
  onClick,
}: IPrimaryButtonProps) {
  const isDisabled = passed !== undefined ? !passed : false;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`${short ? 'w-36' : middle ? 'w-52' : 'w-full'} px-4 py-2 border rounded-lg bg-primary text-text50 font-semibold ${isDisabled && 'opacity-50'} ${classProps}`}
    >
      {children}
    </button>
  );
}
