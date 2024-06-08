interface IItemCardProps {
  name: string;
  count: string;
  price: string;
  onPriceChange: (newPrice: string) => void;
}

export default function ItemCard({
  name,
  count,
  price,
  onPriceChange,
}: IItemCardProps) {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPriceChange(e.target.value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p>{name}</p>
        <p className="text-slate-400">{count.split('개')[0]}</p>
      </div>
      <div className="flex items-center gap-1">
        <input
          value={price || ''}
          className="w-20 outline-none pl-3 border rounded-md"
          onChange={handlePriceChange}
        />
        <p>원</p>
      </div>
    </div>
  );
}
