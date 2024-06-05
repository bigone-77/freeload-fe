'use client';

import { useState } from 'react';

import { IoReceiptOutline, CiCreditCard1 } from '@/constants/Icons';
import ReviewSlider from './_components/ReviewSlider';
import ReceiptAlertModal from './_components/ReceiptAlertModal';

export default function Page({ params }: { params: { restId: string } }) {
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  return (
    <main className="bg-white h-full mt-6 rounded-t-xl px-10">
      <p className="text-xl pt-16 font-semibold">
        고객님의 휴게소 이용에 대한 리뷰를 남겨주세요
      </p>
      <section className="flex items-center justify-center gap-10 mt-10">
        <div
          className="relative w-40 h-24 flex flex-col items-center justify-center border rounded-xl shadow-lg"
          onClick={() => setShowReceiptModal(true)}
        >
          <p className="absolute -top-2 right-2 rounded-lg bg-primary text-white text-sm px-1 py-[2px]">
            인증
          </p>
          <IoReceiptOutline size={40} />
          영수증
        </div>
        <div className="relative w-40 h-24 flex flex-col items-center justify-center border rounded-xl shadow-lg">
          <p className="absolute -top-2 right-2 rounded-lg bg-primary text-white text-sm px-1 py-[2px]">
            인증
          </p>
          <CiCreditCard1 size={40} />
          결제내역
        </div>
      </section>
      <section className="mt-20">
        <ReviewSlider />
      </section>
      {showReceiptModal && (
        <ReceiptAlertModal
          id={params.restId}
          modalOpen={showReceiptModal}
          setModalOpen={setShowReceiptModal}
        />
      )}
    </main>
  );
}
