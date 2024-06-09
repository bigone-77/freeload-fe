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
  destAddr: string;
}

export default function ShareModal({
  modalOpen,
  setModalOpen,
  url,
  destAddr,
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
        <ShareButton url={url} social dest={destAddr} />
        <FavoriteButton />
      </section>
    </Modal>
  );
}
