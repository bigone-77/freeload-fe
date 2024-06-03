'use client';

import { useSelector } from 'react-redux';

import { RootState } from '@/shared/store';
import { AiFillCloseCircle } from '@/constants/Icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Receipt() {
  const router = useRouter();
  const receiptData = useSelector((state: RootState) => state.receipt);

  return (
    <div className="absolute inset-0 bg-black/50 w-full h-screen z-20 flex flex-col items-center justify-center">
      {receiptData && (
        <div className="relative px-4 bg-slate-100">
          <img
            src={receiptData.receiptImage}
            alt="Receipt"
            className="w-full h-[500px] rounded-2xl"
          />
          <AiFillCloseCircle
            style={{ position: 'absolute', top: '30px', right: '30px' }}
            size={40}
            onClick={() => router.back()}
          />
          <Link href="/review/post">
            <p>리뷰 남기러 가기</p>
          </Link>
        </div>
      )}
    </div>
  );
}
