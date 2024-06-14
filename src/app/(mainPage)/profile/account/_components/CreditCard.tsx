import { IoReceiptOutline, CiCreditCard1 } from '@/constants/Icons';

interface ICreditCardProps {
  restNm: string;
  price: string;
  date: string;
  way: string;
}

export default function CreditCard({
  restNm,
  price,
  date,
  way,
}: ICreditCardProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center gap-2">
        <section className="flex items-center justify-center border rounded-full bg-blue-300 p-3">
          {way === 'receipt' ? (
            <IoReceiptOutline size={28} color="white" />
          ) : (
            <CiCreditCard1 size={28} color="white" />
          )}
        </section>
        <div className="flex flex-col gap-1">
          <p>{restNm}</p>
          <p>{date}</p>
        </div>
      </div>
      <p>{price}원</p>
    </div>
  );
}
