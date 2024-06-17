import { IoReceiptOutline, CiCreditCard1 } from '@/constants/Icons';
import { fromNow } from '@/utils/getTime';

interface ICreditCardProps {
  restNm: string;
  storeNm: string;
  price: string;
  date: string;
  way: 'credit' | 'receipt';
}

export default function CreditCard({
  restNm,
  storeNm,
  price,
  date,
  way,
}: ICreditCardProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <div className="flex flex-col gap-1 items-center">
          <section className="flex items-center justify-center border rounded-full bg-blue-300 p-3">
            {way === 'receipt' ? (
              <IoReceiptOutline size={28} color="white" />
            ) : (
              <CiCreditCard1 size={28} color="white" />
            )}
          </section>
          <p>{fromNow(date)}</p>
        </div>
        <div className="flex flex-col gap-3 items-start justify-start">
          <p className="text-lg font-semibold">{restNm}</p>
          <p className="text-text200">{storeNm}</p>
        </div>
      </div>
      <p className="text-base font-semibold">-{price}원</p>
    </div>
  );
}
