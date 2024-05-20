import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';

import { customModalStyles } from '@/constants/Modal/OilFilter';
import { Roadview } from 'react-kakao-maps-sdk';

interface IPanoramaModalProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  latitude: number;
  longitude: number;
}

export default function PanoramaModal({
  modalOpen,
  setModalOpen,
  latitude,
  longitude,
}: IPanoramaModalProps) {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <Roadview
        position={{
          lat: latitude,
          lng: longitude,
          radius: 50,
        }}
        className="w-full h-full"
      />
    </Modal>
  );
}
