'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { RootState } from '@/shared/store';
import { formatTime } from '@/utils/getTime';
import PrimaryButton from '@/Common/PrimaryButton';
import ItemCard from './ItemCard';

export default function RcCheckCard() {
  const currentUser = useSession();
  const params = useSearchParams();
  const restNm = params.get('restNm');
  const receiptData = useSelector((state: RootState) => state.receipt);
  const [prices, setPrices] = useState<string[]>([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (receiptData.items && receiptData.items.length > 0) {
      const updatedPrices = receiptData.items.map((item) => item.price || '0');
      setPrices(updatedPrices);
    }
  }, [receiptData.items]);

  const handlePriceChange = (index: number, newPrice: string) => {
    const updatedPrices = [...prices];
    updatedPrices[index] = newPrice;
    setPrices(updatedPrices);
  };

  const submitHandler = () => {
    const formData = {
      profile_image: currentUser.data?.user?.image,
      storeName: receiptData.storeName,
      visitedDate: formatTime(receiptData.creditDate, 'YYYY년 M월 D일'),
      price: prices?.map((p) => Number(p))?.reduce((a, b) => a + b),
      content,
    };

    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex items-start gap-4 my-4 ">
        <Image
          src={receiptData.receiptImage!}
          alt="receipt"
          width={70}
          height={80}
          priority
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">
            {restNm}, {receiptData.storeName}
          </h2>
          <span className="flex items-center gap-[2px]">
            <h2 className="text-xl font-semibold">
              {formatTime(receiptData.creditDate, 'YYYY년 M월 D일')}
            </h2>
            <h2>에 방문하셨군요!</h2>
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-2 border rounded-md bg-white shadow-lg p-4 w-full mt-6">
        {receiptData.items.map((item, index) => (
          <ItemCard
            key={index}
            name={item.name}
            count={item.count}
            price={prices[index]}
            onPriceChange={(newPrice) => handlePriceChange(index, newPrice)}
          />
        ))}
        <hr className="w-full my-4" />
        <div className="flex items-center justify-between">
          <h3>총금액</h3>
          <h3>{prices?.map((p) => Number(p))?.reduce((a, b) => a + b, 0)}원</h3>
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-3 w-full">
        <span className="flex items-center gap-1">
          <p className="text-lg font-semibold">
            {restNm}, {receiptData.storeName}
          </p>
          <p>은 어떠셨나요?</p>
        </span>
        <textarea
          className="p-4 rounded-md outline-none"
          placeholder="여기에 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </section>

      <PrimaryButton onClick={submitHandler} classProps="mt-6" short>
        리뷰 남기기
      </PrimaryButton>
    </div>
  );
}
