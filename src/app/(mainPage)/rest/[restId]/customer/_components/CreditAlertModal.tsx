'use client';

import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';

import { receiptAlertModalStyles } from '@/constants/Modal/Receipt';
import { CgClose } from '@/constants/Icons';
import ButtonGroup from './ButtonGroup';

interface IReceiptAlertModalProps {
  id: string;
  restNm: string | null;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CreditAlertModal({
  id,
  restNm,
  modalOpen,
  setModalOpen,
}: IReceiptAlertModalProps) {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={receiptAlertModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <div className="flex flex-col text-start py-2 relative">
        <CgClose
          onClick={() => setModalOpen(false)}
          className="absolute right-1"
          size={25}
        />
        <h1 className="font-semibold text-xl">결제내역 인증 가능 대상</h1>
        <section className="my-6 flex flex-col gap-6 text-sm">
          <h2>
            1. 영수증 출력 기기(POS 기기)로 알맞게 출력되고 아래 영수증 정보가
            확인되는 종이 영수증
          </h2>
          <h2>2. 아래 영수증 정보가 확인되는 전자영수증</h2>
          <h2>
            3. 방문 장소와 날짜를 확인할 수 있는 티켓 (영수증 겸용 티켓 포함)
          </h2>
        </section>
        <p className="text-sm text-naver mb-10">
          * 영수증 정보: 사업자 정보(업체명, 업체 주소, 업체 전화번호 또는
          사업자번호) + 결제 정보(결제 일시, 결제 승인 번호, 결제 금액)
        </p>
        <ButtonGroup id={id} restNm={restNm} way="credit" />
      </div>
    </Modal>
  );
}
