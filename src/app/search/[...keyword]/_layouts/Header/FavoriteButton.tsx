import { FaRegStar } from 'react-icons/fa6';

export default function FavoriteButton() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2">
      <FaRegStar size={25} />
      <p>경로 저장</p>
    </div>
  );
}
