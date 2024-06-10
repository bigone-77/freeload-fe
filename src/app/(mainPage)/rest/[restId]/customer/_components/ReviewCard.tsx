import { motion } from 'framer-motion';

interface IReviewCardProps {
  email: string;
  imgUrl: string;
  date: string;
  storeNm: string;
  price: string;
  way: 'receipt' | 'credit';
  contents: string;
}

export default function ReviewCard({
  email,
  imgUrl,
  date,
  storeNm,
  price,
  way,
  contents,
}: IReviewCardProps) {
  return (
    <motion.div
      key={email}
      className="p-6 border border-gray-300 rounded-lg w-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={imgUrl} alt="Profile" className="w-12 h-12 rounded-full" />
          <p className="font-semibold">{email.split('@')[0]}</p>
        </div>
        <p className="text-primary font-semibold">
          {way === 'receipt' ? '영수증' : '결제내역'} 인증
        </p>
      </div>
      <div className="mt-2 mb-10 flex flex-col gap-1 text-sm text-text500">
        <p>{storeNm}</p>
        <p>
          {date} 방문함, {price}원 결제
        </p>
      </div>
      <p className="text-lg text-gray-600">{contents}</p>
    </motion.div>
  );
}
