'use client';

import { Dispatch, SetStateAction } from 'react';
import { useQuery } from '@tanstack/react-query';
import Modal from 'react-modal';

import { getRestAndOilData } from '@/app/(mainPage)/select/_lib/getRestAndOilData';
import Loader from '@/Common/Loader';
import { RestAndOil } from '@/models/RestAndOil';
import { customModalStyles } from '@/constants/Modal/OilFilter';

interface IBottomModalProps {
  id: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function BottomModal({
  id,
  showModal,
  setShowModal,
}: IBottomModalProps) {
  const { data, isLoading } = useQuery<RestAndOil>({
    queryKey: ['rest', id],
    queryFn: () => getRestAndOilData(id),
  });

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (data) {
    content = <p>데이터가 왔어용</p>;
  }
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <p>나는 모달입니다.</p>
      {content}
    </Modal>
  );
}
