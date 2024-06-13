'use client';

import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';

import { shareButtonModalStyles } from '@/constants/Modal/ShareButton';

import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

interface IReceiptAlertModalProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  url: string;
  startAddr: string;
  startLatLng: string;
  endAddr: string;
  endLatLng: string;
}

export default function ShareModal({
  modalOpen,
  setModalOpen,
  url,
  startAddr,
  startLatLng,
  endAddr,
  endLatLng,
}: IReceiptAlertModalProps) {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={shareButtonModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <section className="flex items-center justify-center gap-3 text-sm">
        <ShareButton url={url} />
        <ShareButton url={url} social dest={endAddr} />
        <FavoriteButton
          startAddr={startAddr}
          startLatLng={startLatLng}
          endAddr={endAddr}
          endLatLng={endLatLng}
        />
      </section>
    </Modal>
  );
}
