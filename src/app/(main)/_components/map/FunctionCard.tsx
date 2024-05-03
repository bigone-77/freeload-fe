'use client';

interface IFunctionCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export default function FunctionCard({
  title,
  description,
  onClick,
}: IFunctionCardProps) {
  return (
    <div className="w-4/5 rounded-xl border-2 shadow-lg p-6" onClick={onClick}>
      <h3 className="font-semibold text-xl">{title}</h3>
      <h4 className="font-regular mt-2">{description}</h4>
    </div>
  );
}
