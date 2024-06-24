import { truncate } from '@/utils/getTruncate';

interface IReviewCardProps {
  email: string;
  imgUrl: string;
  date: string;
  storeNm: string;
  price: string;
  way: 'receipt' | 'credit';
  contents: string;
  reviewImage?: string;
}

export default function ReviewCard({
  email,
  imgUrl,
  date,
  storeNm,
  price,
  way,
  contents,
  reviewImage,
}: IReviewCardProps) {
  return (
    <div
      key={email}
      className="p-6 border border-gray-300 rounded-lg w-full h-60"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={imgUrl} alt="Profile" className="w-12 h-12 rounded-full" />
          <p className="font-semibold">{truncate(email.split('@')[0], 11)}</p>
        </div>
        <p className="text-primary font-semibold">
          {way === 'receipt' ? '영수증' : '결제내역'} 인증
        </p>
      </div>
      <div className="mt-2 mb-4 flex flex-col gap-1 text-sm text-text500">
        <p>{storeNm}</p>
        <p>
          {date} 방문함, {price}원 결제
        </p>
      </div>
      {reviewImage !== 'null' && (
        <img
          src={reviewImage}
          alt="review"
          className="object-cover w-12 h-12 rounded-md"
        />
      )}
      <p className="text-lg text-gray-600">{truncate(contents, 30)}</p>
    </div>
  );
}
