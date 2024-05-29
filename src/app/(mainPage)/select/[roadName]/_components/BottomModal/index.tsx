'use client';

import { useQuery } from '@tanstack/react-query';
import Modal from 'react-modal';

import { getRestAndOilData } from '@/app/(mainPage)/select/_lib/getRestAndOilData';
import Loader from '@/Common/Loader';
import { RestAndOil } from '@/models/RestAndOil';
import { certainRestModalStyles } from '@/constants/Modal/CertainRest';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store';
import { getDifferDistance } from '@/utils/getDifferDistance';
import DetailRestInfo from './DetailRestInfo';

interface IBottomModalProps {
  id: string;
  coords: {
    lat: number | undefined;
    lng: number | undefined;
  };
  showModal: boolean;
  onRequestClose: () => void;
}

export default function BottomModal({
  id,
  coords,
  showModal,
  onRequestClose,
}: IBottomModalProps) {
  const { data, isLoading } = useQuery<RestAndOil>({
    queryKey: ['rest', id],
    queryFn: () => getRestAndOilData(id),
  });

  const currentCoords = useSelector(
    (state: RootState) => state.currentLocation,
  );

  let differDist: string;

  if (coords.lat && coords.lng) {
    differDist = getDifferDistance(
      currentCoords.latitude!,
      currentCoords.longitude!,
      coords.lat,
      coords.lng,
    );
  } else {
    differDist = '';
  }

  let content;
  if (isLoading) {
    content = (
      <div className="absolute -top-72 left-[43%]">
        <Loader />
      </div>
    );
  } else if (data) {
    content = <DetailRestInfo data={data} dist={differDist} coords={coords} />;
  }
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onRequestClose}
      style={certainRestModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <div className="flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1716253077/mobile-top-bar.svg"
          alt="top-bar"
          width={58}
          height={6}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      {content}
    </Modal>
  );
}
