interface IFunctionCardProps {
  title: string;
  description: string;
}

export default function FunctionCard({
  title,
  description,
}: IFunctionCardProps) {
  return (
    <div className="w-4/5 h-24 rounded-xl border-2 shadow-lg p-3">
      <h3 className="font-semibold text-xl">{title}</h3>
      <h4 className="font-regular mt-2">{description}</h4>
    </div>
  );
}
