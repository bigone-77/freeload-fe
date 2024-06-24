/* eslint-disable @typescript-eslint/indent */

'use client';

import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { RootState } from '@/shared/store';
import { formatTime } from '@/utils/getTime';
import { postReview } from '@/lib/user/postReview';
import PrimaryButton from '@/Common/PrimaryButton';
import { toast } from 'react-toastify';
import ItemCard from './ItemCard';

interface IRcCheckCardProps {
  restId: string;
  way: string;
}

export default function RcCheckCard({ restId, way }: IRcCheckCardProps) {
  const currentUser = useSession();
  const params = useSearchParams();
  const restNm = params.get('restNm');
  const receiptData = useSelector((state: RootState) => state.receipt);
  const [date, setDate] = useState('');
  const [prices, setPrices] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [reviewFile, setReviewFile] = useState<File | null>(null);
  const [reviewImage, setReviewImage] = useState<string | ArrayBuffer | null>(
    '',
  );

  const router = useRouter();

  const calculateTotalPrice = (pricesArray: string[]) =>
    pricesArray.map((p) => Number(p)).reduce((a, b) => a + b, 0);

  const createFormData = () => {
    const formData = new FormData();
    const dto = {
      email: currentUser.data?.user?.email,
      profile_image: currentUser.data?.user?.image,
      svarCd: restId,
      storeName: receiptData.storeName,
      visitedDate:
        receiptData.creditDate.length < 3 ||
        receiptData.creditDate.split('/')[0].length !== 4
          ? formatTime(date, 'YYYY년 M월 D일')
          : formatTime(receiptData.creditDate, 'YYYY년 M월 D일'),
      price: calculateTotalPrice(prices), // 가격 합계
      content,
      way,
    };

    formData.append('dto', JSON.stringify(dto));
    formData.append('file', reviewFile || new Blob());

    return formData;
  };

  const mutation = useMutation({
    mutationFn: (data: any) => postReview(data),
    onSuccess: () => {
      toast.success('리뷰가 등록되었습니다.');
      router.push(`/rest/${restId}/customer?restNm=${restNm}`);
    },
    onError: (error) => {
      console.error('Mutation failed', error);
    },
  });

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

  const selectedImageHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setReviewFile(file);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      setReviewImage(base64Image);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-28">
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
          <span className="inline-block">
            {receiptData.creditDate.length < 3 ||
            receiptData.creditDate.split('/')[0].length !== 4 ? (
              <input
                className="p-2 border-2 rounded-lg shadow-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200 ease-in-out hover:shadow-md"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="방문날짜 선택"
              />
            ) : (
              <h2 className="text-xl font-semibold mb-2">
                {formatTime(receiptData.creditDate, 'YYYY년 M월 D일')}
              </h2>
            )}
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
            price={prices[index] ? prices[index] : ''}
            onPriceChange={(newPrice) => handlePriceChange(index, newPrice)}
          />
        ))}
        <hr className="w-full my-4" />
        <div className="flex items-center justify-between">
          <h3>총금액</h3>
          <h3>{calculateTotalPrice(prices)}원</h3>
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-3 w-full">
        <span className="inline-block">
          <p className="text-lg font-semibold mb-2">
            {restNm}, {receiptData.storeName}
          </p>
          <p>은 어떠셨나요?</p>
        </span>
        <label htmlFor="file" style={{ cursor: 'pointer' }}>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={selectedImageHandler}
            style={{ display: 'none' }}
          />
          <img
            src={
              typeof reviewImage === 'string' && reviewImage
                ? reviewImage
                : 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718635387/vmheihali7knbqxb1xxh.png'
            }
            alt="upload"
            className="w-20 h-20 rounded-md"
          />
        </label>
        <textarea
          className="p-4 rounded-md outline-none"
          placeholder="여기에 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </section>

      <PrimaryButton
        onClick={() => mutation.mutate(createFormData())}
        classProps="mt-6"
        short
      >
        리뷰 남기기
      </PrimaryButton>
    </div>
  );
}
