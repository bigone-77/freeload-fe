import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Modal from 'react-modal';

import { pathAlertModalStyles } from '@/constants/Modal/PathAlert';
import { RootState } from '@/shared/store';
import PrimaryButton from '@/Common/PrimaryButton';

interface IPathAlertModalProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  direction: string;
}

export default function PathAlertModal({
  modalOpen,
  setModalOpen,
  direction,
}: IPathAlertModalProps) {
  const router = useRouter();
  const selectedRoad = useSelector((state: RootState) => state.select.roadName);
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={pathAlertModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
    >
      <div className="flex flex-col text-start text-xl py-4 gap-4">
        <span className="flex items-center">
          입력하신
          <p className="text-primary ml-2">
            {selectedRoad.replace('선', '고속도로')}
          </p>
          ,
        </span>
        <span className="flex items-center">
          <p className="text-primary mr-2">
            {direction === 'up' ? '상행' : '하행'}
          </p>
          방향으로
        </span>
        경로를 검색합니다.
        <div className="flex flex-col items-center gap-4 mx-12 mt-10">
          <PrimaryButton onClick={() => router.push(`/select/${selectedRoad}`)}>
            확인
          </PrimaryButton>
          <PrimaryButton
            classProps="bg-transparent text-text500"
            onClick={() => router.replace('/select/road')}
          >
            도로 다시 검색
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
}
