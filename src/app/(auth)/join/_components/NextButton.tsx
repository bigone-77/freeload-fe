interface INextButtonProps {
  passed: boolean;
  onClick: () => void;
}

export default function NextButton({ passed, onClick }: INextButtonProps) {
  return (
    <button
      type="button"
      className={`h-[57px] rounded-lg transition-all hover:opacity-80 bg-primary w-full ${!passed && 'opacity-50'}`}
      disabled={!passed}
      onClick={onClick}
    >
      <p className="text-white text-lg font-semibold">다음</p>
    </button>
  );
}
