interface IPrimaryButtonProps {
  children: string;
  classProps?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({
  children,
  classProps,
  onClick,
}: IPrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full px-4 py-2 border rounded-lg bg-primary text-text50 font-semibold ${classProps}`}
    >
      {children}
    </button>
  );
}
