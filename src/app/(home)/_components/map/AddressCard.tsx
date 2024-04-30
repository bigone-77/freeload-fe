import { IoLocation } from 'react-icons/io5';

interface IAddressCardProps {
  location: string;
}

export default function AddressCard({ location }: IAddressCardProps) {
  return (
    <div className="border-2 rounded-xl p-2 flex items-center gap-1">
      <IoLocation size={12} color="skyblue" />
      <p className="font-bold text-sm">{location}</p>
    </div>
  );
}
