'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { useSession } from 'next-auth/react';

import Loader from '@/Common/Loader';
import { certainRestModalStyles } from '@/constants/Modal/CertainRest';
import { RootState } from '@/shared/store';
import { getDifferDistance } from '@/utils/getDifferDistance';
import { RestResponse } from '@/models/Rest';
import DetailRestInfo from './DetailRestInfo';
import { getRestData } from '../../../../../../lib/rest/getRestData';

interface IBottomModalProps {
  id: number;
  lat: number;
  lng: number;
  showModal: boolean;
  onRequestClose: () => void;
}

export default function BottomModal({
  id,
  lat,
  lng,
  showModal,
  onRequestClose,
}: IBottomModalProps) {
  const userEmail = useSession().data?.user?.email;
  // 특정 휴게소 정보 불러오기 (하나임)
  const { data: Response, isLoading } = useQuery<RestResponse>({
    queryKey: ['rest', id],
    queryFn: () => getRestData(id, userEmail),
  });

  const selectedDirection = useSelector(
    (state: RootState) => state.select.direction,
  );
  const currentCoords = useSelector(
    (state: RootState) => state.currentLocation,
  );

  let differDist: string;

  if (lat && lng) {
    differDist = getDifferDistance(
      currentCoords.latitude!,
      currentCoords.longitude!,
      lat,
      lng,
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
  } else if (Response) {
    content = (
      <DetailRestInfo
        data={Response.data[0]}
        dist={differDist}
        coords={{ lat, lng }}
        direction={selectedDirection}
      />
    );
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
