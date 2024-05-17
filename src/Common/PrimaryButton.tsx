interface IPrimaryButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryButton({
  children,
  onClick,
}: IPrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full px-4 py-2 border rounded-lg bg-primary text-text50 font-semibold"
    >
      {children}
    </button>
  );
}
