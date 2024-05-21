'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Fade, Slide } from 'react-awesome-reveal';

import { IoChevronBack } from '@/constants/Icons';
import { RootState } from '@/store';
import { getDirection } from '@/store/slices/getUserSelectSlice';
import PathAlertModal from './PathAlertModal';

export default function SelectDirection() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedDirection = useSelector(
    (state: RootState) => state.select.direction,
  );
  const [showCheckModal, setShowCheckModal] = useState(false);

  const showPathHandler = (way: string) => {
    dispatch(
      getDirection({
        direction: way,
      }),
    );
    setShowCheckModal(true);
  };

  return (
    <div className="h-screen relative">
      <Slide direction="left">
        <IoChevronBack
          size={35}
          className="absolute top-[38px] -left-8"
          onClick={() => router.back()}
        />
        <h1 className="font-bold text-2xl pt-10">방향 선택</h1>
      </Slide>
      <Fade duration={5000}>
        <section className="flex items-center justify-center gap-16 mt-32 font-semibold text-lg">
          <p
            className={`px-10 py-6 border-4 border-primary rounded-2xl ${selectedDirection === '상행' ? 'bg-primary text-text50' : 'bg-transparent text-text500'}`}
            onClick={() => showPathHandler('상행')}
          >
            상행
          </p>
          <p
            className={`px-10 py-6 border-4 border-secondary rounded-2xl ${selectedDirection === '하행' ? 'bg-secondary text-text50' : 'bg-transparent text-text500'}`}
            onClick={() => showPathHandler('하행')}
          >
            하행
          </p>
        </section>
      </Fade>
      {showCheckModal && (
        <PathAlertModal
          modalOpen={showCheckModal}
          setModalOpen={setShowCheckModal}
          direction={selectedDirection}
        />
      )}
    </div>
  );
}
