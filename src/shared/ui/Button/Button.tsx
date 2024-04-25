interface IButtonProps {
  onClick?: () => {};
  bgColor?: string;
  label: string;
}

export default function Button({ bgColor, onClick, label }: IButtonProps) {
  return (
    <button
      type="button"
      className={`${bgColor ? 'bg-bgColor' : 'bg-primary'} border w-full h-12 rounded-primary-button text-text50`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
