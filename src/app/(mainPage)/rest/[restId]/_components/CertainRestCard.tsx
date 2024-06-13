import { getHdqrName } from '@/constants/Hd';
import LikeButton from './LikeButton';

interface ICertainRestCardProps {
  hq: string;
  name: string;
  gas: number;
  di: number;
  lpg?: number;
  isLiked: boolean;
  restId: string;
}

export default function CertainRestCard({
  hq,
  name,
  gas,
  di,
  lpg,
  isLiked,
  restId,
}: ICertainRestCardProps) {
  return (
    <main className="py-5 px-10 bg-primary text-white relative">
      <h1 className="text-2xl font-bold">{name}</h1>
      <span className="flex items-center gap-1 my-4">
        <h2>본부명 :</h2>
        <h2>{getHdqrName(hq)}</h2>
      </span>
      <div className="grid grid-cols-2 gap-3">
        <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
          <p>휘발유: {gas}원</p>
        </span>
        <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
          <p>경유: {di}원</p>
        </span>
        <span className="text-sm rounded-xl border px-2 py-1 bg-transparent text-center">
          <p>LPG: {lpg || 0}원</p>
        </span>
      </div>
      <div className="absolute top-5 right-10 border rounded-full p-2">
        <LikeButton isLiked={isLiked} restId={restId} />
      </div>
    </main>
  );
}
